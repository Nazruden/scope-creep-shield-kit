import Stripe from "stripe";

export function getStripeSecretKey(): string {
  return process.env.STRIPE_SECRET_KEY || "";
}

export function hasStripeSecret(): boolean {
  const k = getStripeSecretKey();
  return Boolean(k && k.startsWith("sk_"));
}

export function getStripe(): Stripe | null {
  const key = getStripeSecretKey();
  if (!key) return null;
  return new Stripe(key, { apiVersion: "2025-02-24.acacia" });
}

export type VerifyResult = {
  ok: boolean;
  reason: "paid" | "invalid_session_id" | "missing_secret" | "not_paid" | "stripe_error";
  session: {
    id: string;
    payment_status?: string | null;
    status?: string | null;
    amount_total?: number | null;
    currency?: string | null;
  } | null;
};

/** Verify a Checkout Session is paid. Never throws secrets. */
export async function verifyCheckoutSession(sessionId: string | undefined | null): Promise<VerifyResult> {
  if (!sessionId || typeof sessionId !== "string" || !sessionId.startsWith("cs_")) {
    return { ok: false, reason: "invalid_session_id", session: null };
  }
  if (!hasStripeSecret()) {
    return { ok: false, reason: "missing_secret", session: null };
  }
  const stripe = getStripe();
  if (!stripe) {
    return { ok: false, reason: "missing_secret", session: null };
  }
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const paid = session.payment_status === "paid" || session.status === "complete";
    if (!paid) {
      return {
        ok: false,
        reason: "not_paid",
        session: { id: session.id, payment_status: session.payment_status },
      };
    }
    return {
      ok: true,
      reason: "paid",
      session: {
        id: session.id,
        payment_status: session.payment_status,
        status: session.status,
        amount_total: session.amount_total,
        currency: session.currency,
      },
    };
  } catch {
    return { ok: false, reason: "stripe_error", session: null };
  }
}

import Link from "next/link";

export const metadata = {
  title: "Legal notice — Scope Creep Shield Kit",
  description: "Legal notice / mentions légales for Glint.",
};

export default function MentionsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <article className="mx-auto max-w-3xl px-4 py-16 text-slate-300">
        <Link href="/" className="text-sm text-amber-400 hover:underline">
          ← Home
        </Link>
        <h1 className="mt-6 text-3xl font-semibold text-white">Legal notice / Mentions légales</h1>

        <h2 className="mt-10 text-xl font-semibold text-white">Publisher</h2>
        <p className="mt-4 leading-relaxed">
          <strong>Glint</strong> — micro-entreprise of <strong>Benjamin De Pourquery</strong>.
          <br />
          Contact: via your Stripe purchase receipt (no public inbox published on this site).
        </p>
        <p className="mt-4 text-sm text-slate-500">
          SIRET / company registration details are not published on this page. For formal requests, use the contact
          channel on your Stripe receipt.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-white">Hosting</h2>
        <p className="mt-4 leading-relaxed">
          Website hosted on infrastructure suitable for a Next.js application (e.g. Vercel or equivalent). Exact host
          details depend on the deployment environment.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-white">Product</h2>
        <p className="mt-4 leading-relaxed">
          Scope Creep Shield Kit — digital templates and tools for freelancers. Informational / operational content only;
          not a substitute for professional legal advice.
        </p>
      </article>
    </main>
  );
}

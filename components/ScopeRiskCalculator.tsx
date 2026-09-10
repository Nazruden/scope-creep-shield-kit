"use client";

import { useMemo, useState } from "react";
import type { Copy } from "@/lib/i18n";
import { KIT_PRICE_EUR } from "@/lib/pack";

export default function ScopeRiskCalculator({ t }: { t: Copy }) {
  const [fee, setFee] = useState(2500);
  const [extraHours, setExtraHours] = useState(6);
  const [rate, setRate] = useState(75);
  const [requests, setRequests] = useState(4);

  const { monthly, yearly, hoursToPayback, fast } = useMemo(() => {
    const monthlyLeak = Math.max(0, extraHours) * Math.max(0, rate);
    const yearlyLeak = monthlyLeak * 12;
    const hoursToPayback = rate > 0 ? KIT_PRICE_EUR / rate : 0;
    const fast = monthlyLeak >= KIT_PRICE_EUR;
    return { monthly: monthlyLeak, yearly: yearlyLeak, hoursToPayback, fast };
  }, [extraHours, rate]);

  const fmt = (n: number) =>
    new Intl.NumberFormat(t.lang === "fr" ? "fr-FR" : "en-US", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(n);

  const field =
    "w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2.5 text-slate-100 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500";

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-4">
        <label className="block text-sm text-slate-300">
          {t.calcFee}
          <input className={`${field} mt-1`} type="number" min={0} value={fee} onChange={(e) => setFee(Number(e.target.value))} />
        </label>
        <label className="block text-sm text-slate-300">
          {t.calcExtraHours}
          <input
            className={`${field} mt-1`}
            type="number"
            min={0}
            step={0.5}
            value={extraHours}
            onChange={(e) => setExtraHours(Number(e.target.value))}
          />
        </label>
        <label className="block text-sm text-slate-300">
          {t.calcRate}
          <input className={`${field} mt-1`} type="number" min={0} value={rate} onChange={(e) => setRate(Number(e.target.value))} />
        </label>
        <label className="block text-sm text-slate-300">
          {t.calcRequests}
          <input
            className={`${field} mt-1`}
            type="number"
            min={0}
            value={requests}
            onChange={(e) => setRequests(Number(e.target.value))}
          />
        </label>
        <p className="text-xs text-slate-500">
          {t.lang === "fr"
            ? `Contexte : honoraires projet ~${fmt(fee)} · ~${requests} demandes/mois`
            : `Context: project fee ~${fmt(fee)} · ~${requests} requests/month`}
        </p>
      </div>

      <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-xl shadow-amber-500/5">
        <p className="text-sm uppercase tracking-wide text-amber-400/90">{t.calcYearly}</p>
        <p className="mt-2 text-4xl font-semibold text-white tabular-nums">{fmt(yearly)}</p>
        <p className="mt-2 text-slate-300">
          {t.calcMonthly}: <span className="font-medium text-white">{fmt(monthly)}</span>
        </p>
        <div className="mt-6 rounded-xl bg-slate-950/70 p-4 border border-slate-800">
          <p className="text-sm font-medium text-amber-400">{t.calcPayback}</p>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            {fast
              ? t.calcPaybackFast
              : t.calcPaybackOk.replace("{hours}", hoursToPayback.toFixed(1))}
          </p>
        </div>
        <p className="mt-4 text-xs text-slate-500">{t.calcNote}</p>
      </div>
    </div>
  );
}

import Link from "next/link";
import { copy, resolveLang, type Lang } from "@/lib/i18n";
import { PACK_FILES, PACK_ZIP } from "@/lib/pack";
import { verifyCheckoutSession } from "@/lib/stripe";

export const metadata = {
  title: "Download — Scope Creep Shield Kit",
  robots: { index: false, follow: false },
};

type Props = {
  searchParams: Promise<{ session_id?: string; lang?: string }>;
};

export default async function SuccessPage({ searchParams }: Props) {
  const params = await searchParams;
  const lang: Lang = resolveLang(params.lang) || "en";
  const t = copy[lang];
  const result = await verifyCheckoutSession(params.session_id);

  if (!result.ok) {
    return (
      <main className="min-h-screen bg-slate-950 text-slate-100">
        <div className="mx-auto max-w-xl px-4 py-20">
          <div className="rounded-2xl border border-red-500/30 bg-slate-900/60 p-8">
            <h1 className="text-2xl font-semibold text-white">{t.successErrorTitle}</h1>
            <p className="mt-4 text-slate-300 leading-relaxed">{t.successErrorLead}</p>
            <Link
              href={`/?lang=${lang}`}
              className="mt-8 inline-flex rounded-xl border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-200 hover:border-amber-500/50"
            >
              {t.successBack}
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-2xl px-4 py-16">
        <div className="rounded-2xl border border-amber-500/30 bg-slate-900/60 p-8 shadow-xl shadow-amber-500/5">
          <p className="text-sm font-medium text-amber-400">Glint · Scope Creep Shield</p>
          <h1 className="mt-2 text-3xl font-semibold text-white">{t.successTitle}</h1>
          <p className="mt-3 text-slate-300">{t.successLead}</p>

          <a
            href={PACK_ZIP}
            className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-amber-500 px-6 py-3 font-semibold text-slate-950 hover:bg-amber-400 transition"
            download
          >
            {t.successZip}
          </a>

          <h2 className="mt-10 text-lg font-semibold text-white">{t.successFiles}</h2>
          <ul className="mt-4 space-y-2">
            {PACK_FILES.map((f) => (
              <li key={f.path}>
                <a
                  href={f.path}
                  download
                  className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/50 px-4 py-3 text-sm text-slate-200 hover:border-amber-500/40 transition"
                >
                  <span>{lang === "fr" ? f.labelFr : f.labelEn}</span>
                  <span className="text-amber-400">↓</span>
                </a>
              </li>
            ))}
          </ul>

          <Link href={`/?lang=${lang}`} className="mt-8 inline-block text-sm text-slate-400 hover:text-amber-400">
            {t.successBack}
          </Link>
        </div>
      </div>
    </main>
  );
}

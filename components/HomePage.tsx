"use client";

import { useCallback, useEffect, useState } from "react";
import { copy, getPaymentLink, resolveLang, type Lang } from "@/lib/i18n";
import LangToggle from "@/components/LangToggle";
import ScopeRiskCalculator from "@/components/ScopeRiskCalculator";
import SiteFooter from "@/components/SiteFooter";

const COOKIE = "scs_lang";

function readCookie(): Lang | null {
  if (typeof document === "undefined") return null;
  const m = document.cookie.match(/(?:^|; )scs_lang=(en|fr)/);
  return m ? resolveLang(m[1]) : null;
}

function writeCookie(lang: Lang) {
  document.cookie = `${COOKIE}=${lang};path=/;max-age=31536000;samesite=lax`;
}

export default function HomePage({ initialLang }: { initialLang: Lang }) {
  const [lang, setLang] = useState<Lang>(initialLang);
  const t = copy[lang];
  const paymentLink = getPaymentLink();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fromQuery = params.get("lang");
    if (fromQuery === "en" || fromQuery === "fr") {
      setLang(fromQuery);
      writeCookie(fromQuery);
      return;
    }
    const fromCookie = readCookie();
    if (fromCookie) setLang(fromCookie);
  }, []);

  const onLang = useCallback((next: Lang) => {
    setLang(next);
    writeCookie(next);
    const url = new URL(window.location.href);
    url.searchParams.set("lang", next);
    window.history.replaceState({}, "", url.toString());
    document.documentElement.lang = next;
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const ctaClass =
    "inline-flex items-center justify-center rounded-xl bg-amber-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-amber-500/20 transition hover:bg-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(245,158,11,0.08),_transparent_55%)]" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between gap-4 py-6">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/15 text-amber-400 font-bold border border-amber-500/30">
              S
            </span>
            <div>
              <p className="font-semibold tracking-tight">{t.brand}</p>
              <p className="text-xs text-slate-400">Glint</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <nav className="hidden md:flex gap-4 text-sm text-slate-400">
              <a href="#included" className="hover:text-white">
                {t.navIncluded}
              </a>
              <a href="#calculator" className="hover:text-white">
                {t.navCalc}
              </a>
              <a href="#pricing" className="hover:text-white">
                {t.navPricing}
              </a>
              <a href="#faq" className="hover:text-white">
                {t.navFaq}
              </a>
            </nav>
            <LangToggle lang={lang} onChange={onLang} />
          </div>
        </header>

        <section className="pb-16 pt-8 sm:pt-14">
          <span className="inline-flex rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs font-medium text-amber-400">
            {t.badge}
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t.heroTitle}
            <span className="block text-amber-400">{t.heroTitle2}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">{t.heroLead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className={ctaClass} href={paymentLink} rel="noopener noreferrer">
              {t.heroCta}
            </a>
            <a
              href="#calculator"
              className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900/50 px-6 py-3 text-base font-medium text-slate-200 hover:border-slate-500 transition"
            >
              {t.heroSecondary}
            </a>
          </div>
        </section>

        <section className="mb-16 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-white">{t.problemTitle}</h2>
          <p className="mt-3 text-slate-300 leading-relaxed">{t.problemBody}</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {t.problemPoints.map((p) => (
              <li
                key={p}
                className="flex gap-3 rounded-xl border border-slate-800 bg-slate-950/50 p-4 text-sm text-slate-300"
              >
                <span className="mt-0.5 text-amber-400">▸</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="included" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl font-semibold text-white">{t.includedTitle}</h2>
          <p className="mt-2 text-slate-400">{t.includedSubtitle}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.included.map((item) => (
              <article
                key={item.t}
                className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 hover:border-amber-500/40 transition"
              >
                <h3 className="font-semibold text-white">{item.t}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{item.d}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-white">{t.howTitle}</h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-3">
            {t.howSteps.map((s) => (
              <li key={s.t} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
                <p className="font-semibold text-amber-400">{s.t}</p>
                <p className="mt-2 text-sm text-slate-300">{s.d}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="calculator" className="mb-16 scroll-mt-20 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-white">{t.calcTitle}</h2>
          <p className="mt-2 text-slate-400">{t.calcSubtitle}</p>
          <div className="mt-8">
            <ScopeRiskCalculator t={t} />
          </div>
        </section>

        <section id="pricing" className="mb-16 scroll-mt-20">
          <div className="rounded-2xl border border-amber-500/40 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-8 sm:p-10 text-center shadow-2xl shadow-amber-500/10">
            <h2 className="text-2xl font-semibold text-white">{t.pricingTitle}</h2>
            <p className="mt-4 text-5xl font-bold text-amber-400 tabular-nums">{t.price}</p>
            <p className="mt-2 text-slate-400">{t.priceSub}</p>
            <ul className="mx-auto mt-6 max-w-md space-y-2 text-left text-sm text-slate-300">
              {t.pricingBullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="text-amber-400">✓</span>
                  {b}
                </li>
              ))}
            </ul>
            <a className={`${ctaClass} mt-8 w-full sm:w-auto`} href={paymentLink} rel="noopener noreferrer">
              {t.pricingCta}
            </a>
            <p className="mt-4 text-xs text-slate-500">{t.pricingNote}</p>
          </div>
        </section>

        <section id="faq" className="mb-8 scroll-mt-20">
          <h2 className="text-2xl font-semibold text-white">{t.faqTitle}</h2>
          <div className="mt-6 space-y-3">
            {t.faq.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-slate-800 bg-slate-900/40 px-5 py-4 open:border-amber-500/30"
              >
                <summary className="cursor-pointer list-none font-medium text-slate-100 marker:content-none flex justify-between gap-4">
                  {item.q}
                  <span className="text-amber-400 group-open:rotate-45 transition">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <div className="fixed inset-x-0 bottom-0 z-20 border-t border-slate-800 bg-slate-950/95 p-3 backdrop-blur md:hidden">
          <a className={`${ctaClass} w-full`} href={paymentLink} rel="noopener noreferrer">
            {t.pricingCta}
          </a>
        </div>

        <SiteFooter t={t} />
      </div>
    </div>
  );
}

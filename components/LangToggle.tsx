"use client";

import type { Lang } from "@/lib/i18n";

type Props = {
  lang: Lang;
  onChange: (lang: Lang) => void;
};

export default function LangToggle({ lang, onChange }: Props) {
  return (
    <div className="inline-flex rounded-full border border-slate-700 bg-slate-900/80 p-1 text-sm font-medium">
      <button
        type="button"
        onClick={() => onChange("fr")}
        className={`rounded-full px-3 py-1 transition ${
          lang === "fr" ? "bg-amber-500 text-slate-950" : "text-slate-300 hover:text-white"
        }`}
        aria-pressed={lang === "fr"}
      >
        FR
      </button>
      <button
        type="button"
        onClick={() => onChange("en")}
        className={`rounded-full px-3 py-1 transition ${
          lang === "en" ? "bg-amber-500 text-slate-950" : "text-slate-300 hover:text-white"
        }`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );
}

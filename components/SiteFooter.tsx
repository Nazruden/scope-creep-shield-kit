import type { Copy } from "@/lib/i18n";

export default function SiteFooter({ t }: { t: Copy }) {
  return (
    <footer className="mt-20 border-t border-slate-800 pt-8 pb-12 text-sm text-slate-400">
      <p className="mb-4">{t.footerTagline}</p>
      <nav className="flex flex-wrap gap-4">
        <a className="hover:text-amber-400 transition" href="/legal/terms">
          {t.footerTerms}
        </a>
        <a className="hover:text-amber-400 transition" href="/legal/privacy">
          {t.footerPrivacy}
        </a>
        <a className="hover:text-amber-400 transition" href="/legal/mentions">
          {t.footerMentions}
        </a>
      </nav>
      <p className="mt-6 text-xs text-slate-500">© {new Date().getFullYear()} Glint · Benjamin De Pourquery</p>
    </footer>
  );
}

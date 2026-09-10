import Link from "next/link";

export const metadata = {
  title: "Privacy — Scope Creep Shield Kit",
  description: "Privacy policy for the Scope Creep Shield Kit.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <article className="mx-auto max-w-3xl px-4 py-16 text-slate-300">
        <Link href="/" className="text-sm text-amber-400 hover:underline">
          ← Home
        </Link>
        <h1 className="mt-6 text-3xl font-semibold text-white">Privacy / Confidentialité</h1>
        <p className="mt-4 text-sm text-slate-500">Last updated: September 2026</p>

        <h2 className="mt-10 text-xl font-semibold text-white">EN</h2>
        <p className="mt-4 leading-relaxed">
          <strong>Glint</strong> (Benjamin De Pourquery) sells this digital kit. Payment data is processed by{" "}
          <strong>Stripe</strong> as payment provider — we do not store card numbers on our servers.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>We may process your email and payment metadata via Stripe to confirm purchase and deliver access.</li>
          <li>The landing page may store a language preference in a first-party cookie or local state.</li>
          <li>Hosting/analytics providers of the website may process technical logs (IP, user agent) as needed to serve the site.</li>
          <li>To exercise access or deletion requests, contact us via your Stripe receipt.</li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold text-white">FR</h2>
        <p className="mt-4 leading-relaxed">
          <strong>Glint</strong> (Benjamin De Pourquery) commercialise ce kit digital. Les données de paiement sont
          traitées par <strong>Stripe</strong> — nous ne stockons pas de numéros de carte sur nos serveurs.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>Nous pouvons traiter votre email et métadonnées de paiement via Stripe pour confirmer l&apos;achat et livrer l&apos;accès.</li>
          <li>La page d&apos;accueil peut enregistrer une préférence de langue (cookie first-party ou état local).</li>
          <li>L&apos;hébergeur / outils techniques du site peuvent traiter des journaux (IP, user-agent) pour assurer le service.</li>
          <li>Pour exercer vos droits d&apos;accès ou de suppression, contactez-nous via votre reçu Stripe.</li>
        </ul>
      </article>
    </main>
  );
}

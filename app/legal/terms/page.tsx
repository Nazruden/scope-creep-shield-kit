import Link from "next/link";

export const metadata = {
  title: "Terms of sale — Scope Creep Shield Kit",
  description: "Terms of sale for the Scope Creep Shield Kit digital product.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <article className="prose-invert mx-auto max-w-3xl px-4 py-16 text-slate-300">
        <Link href="/" className="text-sm text-amber-400 hover:underline">
          ← Home
        </Link>
        <h1 className="mt-6 text-3xl font-semibold text-white">Terms of sale / Conditions générales de vente</h1>
        <p className="mt-4 text-sm text-slate-500">Last updated: September 2026</p>

        <h2 className="mt-10 text-xl font-semibold text-white">EN</h2>
        <p className="mt-4 leading-relaxed">
          These terms apply to the purchase of the digital product <strong>Scope Creep Shield Kit</strong> sold by{" "}
          <strong>Glint</strong> (micro-entreprise of Benjamin De Pourquery). By completing checkout you agree to these
          terms.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>Price: €24 one-time (or the price displayed at checkout), payment processed by Stripe.</li>
          <li>Delivery: digital download unlocked on the success page after payment verification.</li>
          <li>
            Because of the immediate nature of digital goods, purchases are generally final once downloads are unlocked.
            If delivery fails, contact us via your Stripe receipt.
          </li>
          <li>Licence: personal / business use for your freelance practice. Do not resell or redistribute the pack as a product.</li>
          <li>The kit provides practical templates only — not legal, tax, or accounting advice.</li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold text-white">FR</h2>
        <p className="mt-4 leading-relaxed">
          Les présentes conditions s&apos;appliquent à l&apos;achat du produit digital <strong>Scope Creep Shield Kit</strong>{" "}
          vendu par <strong>Glint</strong> (micro-entreprise de Benjamin De Pourquery). Le paiement finalisé vaut acceptation.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>Prix : 24 € en paiement unique (ou le prix affiché au checkout), traité par Stripe.</li>
          <li>Livraison : téléchargement digital débloqué sur la page de succès après vérification du paiement.</li>
          <li>
            Compte tenu de la nature immédiate du bien numérique, les ventes sont en principe définitives une fois les
            téléchargements débloqués. En cas d&apos;échec de livraison, contactez-nous via votre reçu Stripe.
          </li>
          <li>Licence : usage personnel / professionnel pour votre activité. Pas de revente du pack en tant que produit.</li>
          <li>Le kit fournit des modèles pratiques — pas un conseil juridique, fiscal ou comptable.</li>
        </ul>
      </article>
    </main>
  );
}

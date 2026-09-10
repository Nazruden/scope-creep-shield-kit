export type Lang = "en" | "fr";

export function getPaymentLink(): string {
  return process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK || "https://buy.stripe.com/test_28EbJ1cape6TcMVbN60oM01";
}

export const copy = {
  en: {
    lang: "en" as const,
    metaTitle: "Scope Creep Shield Kit — €24 | Protect freelance margins",
    metaDesc:
      "Templates, scripts and a risk calculator to stop unpaid “just one more thing” requests. Built for freelancers in the AI era.",
    brand: "Scope Creep Shield",
    badge: "Digital kit · Freelancers · Instant download",
    navCalc: "Calculator",
    navIncluded: "What's included",
    navPricing: "Pricing",
    navFaq: "FAQ",
    heroTitle: "Stop unpaid scope creep",
    heroTitle2: "before it eats your margins.",
    heroLead:
      "Clients expect faster and cheaper work — and “AI discounts.” Invisible extras (“just one more thing”) quietly destroy freelance profit. The Scope Creep Shield Kit gives you SOW templates, exclusion checklists, change orders, AI-era client scripts, and a tracker so you protect scope without burning relationships.",
    heroCta: "Get the kit — €24",
    heroSecondary: "See the risk calculator",
    problemTitle: "The AI-era scope problem",
    problemBody:
      "Upwork’s Future Workforce Index and industry research point the same way: buyers want speed and lower cost, while freelancers absorb invisible expansions. A polite “can you quickly…” is often unpaid labour. Without written boundaries, every project becomes a margin leak.",
    problemPoints: [
      "“Just one more page / feature / revision” with no change order",
      "Requests for AI discounts on work that still needs your judgment",
      "Revision rounds that never end because limits were never stated",
      "No log of asks — you can’t price what you don’t measure",
    ],
    includedTitle: "What's included",
    includedSubtitle: "Real files you can use on the next proposal — FR & EN.",
    included: [
      { t: "Scope of Work template", d: "Clear deliverables, assumptions, and change-request clause." },
      { t: "Exclusions checklist", d: "Tick what is out of scope — including AI-era defaults." },
      { t: "Change order template", d: "Fee, timeline, and approval in one page." },
      { t: "Client scripts (AI era)", d: "Email & WhatsApp: outside scope, AI discount, change-order offer." },
      { t: "Revision limits policy", d: "Define rounds so “endless polish” has a price." },
      { t: "Usage guide + CSV tracker", d: "10-minute setup and a log for every informal ask." },
    ],
    howTitle: "How it works",
    howSteps: [
      { t: "1. Buy once", d: "Secure checkout via Stripe — €24 one-time." },
      { t: "2. Download instantly", d: "After payment you’re redirected to unlock the pack + ZIP." },
      { t: "3. Protect the next project", d: "Drop templates into your proposal and scripts into your replies." },
    ],
    calcTitle: "Scope Risk Calculator",
    calcSubtitle: "Estimate yearly margin leak from unpaid extras — client-side only, nothing leaves your browser.",
    calcFee: "Typical project fee (€)",
    calcExtraHours: "Unpaid extra hours / month",
    calcRate: "Your hourly rate (€)",
    calcRequests: "“Just one more” requests / month",
    calcYearly: "Estimated yearly margin leak",
    calcMonthly: "Monthly leak",
    calcPayback: "Kit payback vs €24",
    calcPaybackOk: "Pays for itself if you reclaim ~{hours} unpaid hours at your rate — or block a single small change order.",
    calcPaybackFast: "At this leak rate, the €24 kit pays for itself in under a week of protected time.",
    calcNote: "Illustrative estimate. Assumes unpaid extras ≈ hours × rate; request count is for awareness.",
    pricingTitle: "Simple pricing",
    price: "€24",
    priceSub: "one-time · instant digital delivery",
    pricingBullets: [
      "Full FR + EN pack",
      "ZIP + individual files",
      "Lifetime access to your downloads after purchase",
      "No subscription",
    ],
    pricingCta: "Buy Scope Creep Shield — €24",
    pricingNote: "Payment processed by Stripe. You’ll return here to download after checkout.",
    faqTitle: "FAQ",
    faq: [
      {
        q: "How do I receive the files?",
        a: "After checkout you are redirected to /success with a session reference. We verify the payment, then show download links for each file and the ZIP.",
      },
      {
        q: "Is this legal advice?",
        a: "No. Practical templates and scripts only. Adapt them to your contracts and local rules; consult a professional for disputes.",
      },
      {
        q: "Can I use this with clients outside France?",
        a: "Yes. English and French versions are included. Adjust currency, tax mentions, and legal clauses to your jurisdiction.",
      },
      {
        q: "Do you offer refunds?",
        a: "Because this is an instant digital download, sales are generally final once the pack is unlocked. Contact us via your Stripe receipt if something went wrong with delivery.",
      },
      {
        q: "Will this work if I already have a contract?",
        a: "Yes. Use the exclusions checklist and change-order flow alongside your existing terms — many freelancers bolt them onto current proposals.",
      },
    ],
    footerTagline: "A Glint digital product for freelancers who want clear scope.",
    footerTerms: "Terms of sale",
    footerPrivacy: "Privacy",
    footerMentions: "Legal notice",
    successTitle: "Payment confirmed — download your kit",
    successLead: "Thanks for your purchase. Your Scope Creep Shield Kit is ready.",
    successZip: "Download full ZIP",
    successFiles: "Individual files",
    successErrorTitle: "We couldn’t unlock the downloads",
    successErrorLead:
      "We couldn’t verify a completed payment for this page. If you just paid, wait a moment and reopen the link from your receipt, or contact us via your Stripe receipt.",
    successBack: "Back to homepage",
    langToggle: "FR",
  },
  fr: {
    lang: "fr" as const,
    metaTitle: "Scope Creep Shield Kit — 24 € | Protégez vos marges freelance",
    metaDesc:
      "Modèles, scripts et calculateur pour stopper les « juste une petite chose » non payées. Pour freelances à l'ère de l'IA.",
    brand: "Scope Creep Shield",
    badge: "Kit digital · Freelances · Téléchargement immédiat",
    navCalc: "Calculateur",
    navIncluded: "Contenu",
    navPricing: "Tarif",
    navFaq: "FAQ",
    heroTitle: "Stoppez le scope creep",
    heroTitle2: "avant qu'il ne mange vos marges.",
    heroLead:
      "Les clients veulent plus vite et moins cher — et des « remises IA ». Les extras invisibles (« juste une petite chose ») détruisent silencieusement la rentabilité. Le Scope Creep Shield Kit vous donne modèles de SOW, checklists d'exclusions, avenants, scripts client à l'ère de l'IA et un tracker pour protéger le scope sans casser la relation.",
    heroCta: "Obtenir le kit — 24 €",
    heroSecondary: "Voir le calculateur de risque",
    problemTitle: "Le problème du scope à l'ère de l'IA",
    problemBody:
      "L'Upwork Future Workforce Index et les études du secteur convergent : les acheteurs veulent de la vitesse et un coût bas, pendant que les freelances absorbent des élargissements invisibles. Un poli « tu peux vite… » est souvent du travail non payé. Sans frontières écrites, chaque projet fuit de la marge.",
    problemPoints: [
      "« Juste une page / feature / révision de plus » sans avenant",
      "Demandes de remise IA sur un travail qui exige encore votre jugement",
      "Tours de révisions sans fin faute de limites écrites",
      "Aucune trace des demandes — on ne facture pas ce qu'on ne mesure pas",
    ],
    includedTitle: "Ce qui est inclus",
    includedSubtitle: "De vrais fichiers utilisables dès le prochain devis — FR & EN.",
    included: [
      { t: "Modèle de Scope of Work", d: "Livrables, hypothèses et clause de changement clairs." },
      { t: "Checklist d'exclusions", d: "Cochez le hors-scope — y compris les defaults ère IA." },
      { t: "Modèle d'avenant", d: "Tarif, délai et validation sur une page." },
      { t: "Scripts client (ère IA)", d: "Email & WhatsApp : hors scope, remise IA, offre d'avenant." },
      { t: "Politique de révisions", d: "Définissez les tours pour que le polish infini ait un prix." },
      { t: "Guide d'usage + tracker CSV", d: "Setup en 10 minutes et journal de chaque demande." },
    ],
    howTitle: "Comment ça marche",
    howSteps: [
      { t: "1. Achat unique", d: "Paiement sécurisé via Stripe — 24 € une fois." },
      { t: "2. Téléchargement immédiat", d: "Après paiement, redirection pour débloquer le pack + ZIP." },
      { t: "3. Protégez le prochain projet", d: "Insérez les modèles dans vos devis et les scripts dans vos réponses." },
    ],
    calcTitle: "Calculateur de risque scope",
    calcSubtitle: "Estimez la fuite de marge annuelle due aux extras non payés — 100 % côté navigateur.",
    calcFee: "Honoraire typique d'un projet (€)",
    calcExtraHours: "Heures extras non payées / mois",
    calcRate: "Votre taux horaire (€)",
    calcRequests: "Demandes « juste une petite chose » / mois",
    calcYearly: "Fuite de marge annuelle estimée",
    calcMonthly: "Fuite mensuelle",
    calcPayback: "Retour sur investissement vs 24 €",
    calcPaybackOk: "Le kit est rentabilisé si vous récupérez ~{hours} h non payées à votre taux — ou si vous bloquez un seul petit avenant.",
    calcPaybackFast: "À ce rythme de fuite, le kit à 24 € est rentabilisé en moins d'une semaine de temps protégé.",
    calcNote: "Estimation indicative. Hypothèse : extras ≈ heures × taux ; le nombre de demandes sert de signal.",
    pricingTitle: "Tarif simple",
    price: "24 €",
    priceSub: "paiement unique · livraison digitale immédiate",
    pricingBullets: [
      "Pack complet FR + EN",
      "ZIP + fichiers individuels",
      "Accès à vie à vos téléchargements après achat",
      "Sans abonnement",
    ],
    pricingCta: "Acheter Scope Creep Shield — 24 €",
    pricingNote: "Paiement traité par Stripe. Vous revenez ici pour télécharger après le checkout.",
    faqTitle: "FAQ",
    faq: [
      {
        q: "Comment je reçois les fichiers ?",
        a: "Après le paiement vous êtes redirigé vers /success avec une référence de session. Nous vérifions le paiement, puis affichons les liens de téléchargement (fichiers + ZIP).",
      },
      {
        q: "Est-ce un conseil juridique ?",
        a: "Non. Uniquement des modèles et scripts pratiques. Adaptez-les à vos contrats et à votre droit local ; consultez un professionnel en cas de litige.",
      },
      {
        q: "Puis-je l'utiliser hors de France ?",
        a: "Oui. Versions anglaise et française incluses. Adaptez devise, mentions fiscales et clauses à votre juridiction.",
      },
      {
        q: "Y a-t-il des remboursements ?",
        a: "Produit digital à téléchargement immédiat : les ventes sont en principe définitives une fois le pack débloqué. Contactez-nous via votre reçu Stripe en cas de problème de livraison.",
      },
      {
        q: "Ça marche si j'ai déjà un contrat ?",
        a: "Oui. Utilisez la checklist d'exclusions et le flux d'avenant avec vos conditions actuelles — beaucoup de freelances les greffent à leurs devis existants.",
      },
    ],
    footerTagline: "Un produit digital Glint pour freelances qui veulent un scope clair.",
    footerTerms: "CGV",
    footerPrivacy: "Confidentialité",
    footerMentions: "Mentions légales",
    successTitle: "Paiement confirmé — téléchargez votre kit",
    successLead: "Merci pour votre achat. Votre Scope Creep Shield Kit est prêt.",
    successZip: "Télécharger le ZIP complet",
    successFiles: "Fichiers individuels",
    successErrorTitle: "Impossible de débloquer les téléchargements",
    successErrorLead:
      "Nous n'avons pas pu vérifier un paiement finalisé pour cette page. Si vous venez de payer, patientez un instant et rouvrez le lien depuis votre reçu, ou contactez-nous via votre reçu Stripe.",
    successBack: "Retour à l'accueil",
    langToggle: "EN",
  },
} as const;

export type Copy = (typeof copy)["en"] | (typeof copy)["fr"];

export function resolveLang(input?: string | null): Lang {
  if (input === "fr" || input === "en") return input;
  return "en";
}

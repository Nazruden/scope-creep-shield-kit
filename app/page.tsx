import HomePage from "@/components/HomePage";
import { resolveLang, type Lang } from "@/lib/i18n";

type Props = {
  searchParams: Promise<{ lang?: string }>;
};

export default async function Page({ searchParams }: Props) {
  const params = await searchParams;
  const initialLang: Lang = resolveLang(params.lang);
  return <HomePage initialLang={initialLang} />;
}

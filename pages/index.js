import { useRouter } from "next/router";
import { Heading } from "../components/Heading";

export default function IndexPage() {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;

  return (
    <div>
      <Heading />
      <br />
      <p>Current locale: {locale}</p>
      <p>Default locale: {defaultLocale}</p>
      <p>Configured locales: {JSON.stringify(locales)}</p>
    </div>
  );
}

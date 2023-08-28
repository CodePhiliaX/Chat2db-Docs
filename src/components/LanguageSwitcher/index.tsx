import { useRouter } from "next/router";
import { useMemo } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const { locale, asPath, locales, defaultLocale } = router;

  const isEnglish = useMemo(() => locale === "en-US", [locale]);

  const switchLanguage = (newLocale: string) => {
    const newPath = `/${newLocale}${asPath}`;
    router.push(newPath, newPath, { locale: newLocale });
  };

  return (
    <div>
      {isEnglish ? (
        <button onClick={() => switchLanguage("zh-CN")}>中文</button>
      ) : (
        <button onClick={() => switchLanguage("en-US")}>English</button>
      )}
    </div>
  );
}

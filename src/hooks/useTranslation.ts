import { useRouter } from "next/router";

import enUS from "@/i18n/en-US";
import zhCN from "@/i18n/zh-CN";

const translations = {
  "en-US": enUS,
  "zh-CN": zhCN,
};

type ILocale = keyof typeof translations;

export default function useTranslation() {
  const { locale } = useRouter();

  const i18n = (key: keyof typeof zhCN) => {
    if (!locale) return key;
    return translations[locale as ILocale][key] || key;
  };

  return {
    i18n,
    locale,
  };
}

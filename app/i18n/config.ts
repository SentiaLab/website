export const locales = ["en", "pt-BR"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeConfig: Record<
    Locale,
    {
        name: string;
        flag: string;
        htmlLang: string;
    }
> = {
    en: {
        name: "English",
        flag: "🇺🇸",
        htmlLang: "en",
    },
    "pt-BR": {
        name: "Português",
        flag: "🇧🇷",
        htmlLang: "pt-BR",
    },
};

export function isValidLocale(locale: string): locale is Locale {
    return locales.includes(locale as Locale);
}

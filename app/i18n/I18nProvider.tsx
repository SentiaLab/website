"use client";

import * as React from "react";
import { Locale, defaultLocale, isValidLocale } from "./config";

import enTranslations from "./locales/en/common.json";
import ptBRTranslations from "./locales/pt-BR/common.json";

type TranslationValue = string | number | boolean | null | TranslationObject | TranslationValue[];
interface TranslationObject {
    [key: string]: TranslationValue;
}

type Translations = typeof enTranslations;

const translations: Record<Locale, Translations> = {
    en: enTranslations,
    "pt-BR": ptBRTranslations,
};

interface I18nContextValue {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: (key: string, params?: Record<string, string | number>) => string;
    translations: Translations;
}

const I18nContext = React.createContext<I18nContextValue | null>(null);

const LOCALE_STORAGE_KEY = "sentialab-locale";

function getNestedValue(obj: TranslationObject, path: string): TranslationValue {
    const keys = path.split(".");
    let current: TranslationValue = obj;

    for (const key of keys) {
        if (current === null || current === undefined) {
            return path; // Return the key if path not found
        }

        if (Array.isArray(current)) {
            // Handle array index access
            const index = parseInt(key, 10);
            if (!isNaN(index) && index >= 0 && index < current.length) {
                current = current[index];
            } else {
                return path; // Invalid array index
            }
        } else if (typeof current === "object" && key in current) {
            current = (current as TranslationObject)[key];
        } else {
            return path; // Return the key if path not found
        }
    }

    return current;
}

interface I18nProviderProps {
    children: React.ReactNode;
    initialLocale?: Locale;
}

export function I18nProvider({ children, initialLocale }: I18nProviderProps) {
    const [locale, setLocaleState] = React.useState<Locale>(() => {
        // Use initial locale if provided (from URL)
        if (initialLocale && isValidLocale(initialLocale)) {
            return initialLocale;
        }
        return defaultLocale;
    });

    // Sync with localStorage on mount (client-side only)
    React.useEffect(() => {
        if (!initialLocale) {
            const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
            if (stored && isValidLocale(stored)) {
                setLocaleState(stored);
            }
        }
    }, [initialLocale]);

    const setLocale = React.useCallback((newLocale: Locale) => {
        setLocaleState(newLocale);
        localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);

        // Update URL to reflect new locale
        const currentPath = window.location.pathname;
        const pathParts = currentPath.split("/").filter(Boolean);

        // Check if first part is a locale
        if (pathParts.length > 0 && isValidLocale(pathParts[0])) {
            pathParts[0] = newLocale;
        } else {
            pathParts.unshift(newLocale);
        }

        const newPath = "/" + pathParts.join("/") + "/";
        window.history.pushState({}, "", newPath);
    }, []);

    const t = React.useCallback(
        (key: string, params?: Record<string, string | number>): string => {
            const value = getNestedValue(translations[locale] as unknown as TranslationObject, key);

            if (typeof value !== "string") {
                console.warn(`Translation key "${key}" not found or not a string`);
                return key;
            }

            if (params) {
                return value.replace(/\{(\w+)\}/g, (_, paramKey) => {
                    return params[paramKey]?.toString() ?? `{${paramKey}}`;
                });
            }

            return value;
        },
        [locale]
    );

    const value = React.useMemo(
        () => ({
            locale,
            setLocale,
            t,
            translations: translations[locale],
        }),
        [locale, setLocale, t]
    );

    return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useTranslation() {
    const context = React.useContext(I18nContext);

    if (!context) {
        throw new Error("useTranslation must be used within an I18nProvider");
    }

    return context;
}

export function useLocale() {
    const { locale, setLocale } = useTranslation();
    return { locale, setLocale };
}

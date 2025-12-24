import { Locale, defaultLocale, isValidLocale } from "./config";

const LOCALE_STORAGE_KEY = "sentialab-locale";
const GEO_API_URL = "https://ipapi.co/json/";

interface GeoResponse {
    country_code: string;
    country_name: string;
}

/**
 * Detects the preferred locale based on multiple signals.
 * Priority:
 * 1. Saved preference in localStorage (user explicitly chose)
 * 2. URL locale parameter
 * 3. Browser language (navigator.language)
 * 4. IP-based geolocation (async, for Brazil detection)
 */
export function detectLocaleFromStorage(): Locale | null {
    if (typeof window === "undefined") return null;

    const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (stored && isValidLocale(stored)) {
        return stored;
    }

    return null;
}

export function detectLocaleFromBrowser(): Locale {
    if (typeof navigator === "undefined") return defaultLocale;

    const browserLang = navigator.language || (navigator as unknown as { userLanguage?: string }).userLanguage;

    if (browserLang) {
        // Check for Portuguese variants
        if (browserLang.startsWith("pt")) {
            return "pt-BR";
        }
    }

    return defaultLocale;
}

export function detectLocaleFromUrl(): Locale | null {
    if (typeof window === "undefined") return null;

    const pathParts = window.location.pathname.split("/").filter(Boolean);

    if (pathParts.length > 0 && isValidLocale(pathParts[0])) {
        return pathParts[0];
    }

    return null;
}

export async function detectLocaleFromGeo(): Promise<Locale> {
    try {
        const response = await fetch(GEO_API_URL, {
            signal: AbortSignal.timeout(3000), // 3 second timeout
        });

        if (!response.ok) {
            throw new Error("Geo API request failed");
        }

        const data: GeoResponse = await response.json();

        // If user is in Brazil, prefer Portuguese
        if (data.country_code === "BR") {
            return "pt-BR";
        }

        return defaultLocale;
    } catch {
        // Silently fail and use default
        return defaultLocale;
    }
}

/**
 * Get the best locale based on all available signals.
 * Synchronous version (doesn't use geo API).
 */
export function getBestLocaleSync(): Locale {
    // 1. Check URL first
    const urlLocale = detectLocaleFromUrl();
    if (urlLocale) return urlLocale;

    // 2. Check localStorage
    const storedLocale = detectLocaleFromStorage();
    if (storedLocale) return storedLocale;

    // 3. Check browser language
    return detectLocaleFromBrowser();
}

/**
 * Get the best locale including async geo detection.
 * Use this for initial redirect logic.
 */
export async function getBestLocaleAsync(): Promise<Locale> {
    // 1. Check URL first
    const urlLocale = detectLocaleFromUrl();
    if (urlLocale) return urlLocale;

    // 2. Check localStorage
    const storedLocale = detectLocaleFromStorage();
    if (storedLocale) return storedLocale;

    // 3. Check browser language - if it's Portuguese, use it immediately
    const browserLocale = detectLocaleFromBrowser();
    if (browserLocale === "pt-BR") return browserLocale;

    // 4. For non-Portuguese browsers, check geo to see if they're in Brazil
    const geoLocale = await detectLocaleFromGeo();
    return geoLocale;
}

export function saveLocalePreference(locale: Locale): void {
    if (typeof window === "undefined") return;
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
}

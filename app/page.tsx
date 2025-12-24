"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { getBestLocaleAsync, defaultLocale } from "@/i18n";

export default function RootPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        async function detectAndRedirect() {
            try {
                const locale = await getBestLocaleAsync();
                router.replace(`/${locale}/`);
            } catch {
                // Fallback to default locale
                router.replace(`/${defaultLocale}/`);
            } finally {
                setIsLoading(false);
            }
        }

        detectAndRedirect();
    }, [router]);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-sentia-black dark:to-[#1a1c2e]">
                <div className="text-center">
                    <div className="w-12 h-12 border-4 border-sentia-cyan/30 border-t-sentia-cyan rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-gray-600 dark:text-gray-400">Loading...</p>
                </div>
            </div>
        );
    }

    return null;
}

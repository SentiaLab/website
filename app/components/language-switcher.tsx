"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale, localeConfig, Locale } from "@/i18n";
import { HiGlobeAlt, HiChevronDown } from "react-icons/hi2";

interface LanguageSwitcherProps {
    variant?: "default" | "compact";
    className?: string;
}

export function LanguageSwitcher({ variant = "default", className = "" }: LanguageSwitcherProps) {
    const { locale, setLocale } = useLocale();
    const [isOpen, setIsOpen] = React.useState(false);
    const dropdownRef = React.useRef<HTMLDivElement>(null);

    const currentLocaleConfig = localeConfig[locale];
    const otherLocale: Locale = locale === "en" ? "pt-BR" : "en";
    const otherLocaleConfig = localeConfig[otherLocale];

    // Close dropdown when clicking outside
    React.useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLanguageChange = (newLocale: Locale) => {
        setLocale(newLocale);
        setIsOpen(false);
    };

    if (variant === "compact") {
        // Simple toggle button for mobile menu
        return (
            <button
                onClick={() => handleLanguageChange(otherLocale)}
                className={`flex items-center space-x-2 py-2 px-3 rounded-lg transition-colors duration-200 hover:bg-sentia-cyan/10 hover:text-sentia-cyan ${className}`}
            >
                <span className="text-xl">{otherLocaleConfig.flag}</span>
                <span className="font-medium">{otherLocaleConfig.name}</span>
            </button>
        );
    }

    return (
        <div ref={dropdownRef} className={`relative ${className}`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 py-2 px-3 rounded-lg bg-white/50 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 hover:border-sentia-cyan/50 transition-all duration-300 group"
                aria-label="Select language"
            >
                <HiGlobeAlt className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-sentia-cyan transition-colors" />
                <span className="text-xl">{currentLocaleConfig.flag}</span>
                <span className="hidden sm:inline text-sm font-medium text-gray-700 dark:text-gray-300">
                    {currentLocaleConfig.name}
                </span>
                <HiChevronDown
                    className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full right-0 mt-2 py-2 bg-white dark:bg-sentia-black/95 backdrop-blur-md rounded-lg shadow-xl border border-gray-200 dark:border-white/10 min-w-[160px] z-50"
                    >
                        {(["en", "pt-BR"] as Locale[]).map((loc) => {
                            const config = localeConfig[loc];
                            const isActive = loc === locale;

                            return (
                                <button
                                    key={loc}
                                    onClick={() => handleLanguageChange(loc)}
                                    className={`w-full flex items-center space-x-3 px-4 py-2.5 transition-colors duration-200 ${isActive
                                            ? "bg-sentia-cyan/10 text-sentia-cyan"
                                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10"
                                        }`}
                                >
                                    <span className="text-xl">{config.flag}</span>
                                    <span className="font-medium">{config.name}</span>
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeLocale"
                                            className="ml-auto w-2 h-2 rounded-full bg-sentia-cyan"
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

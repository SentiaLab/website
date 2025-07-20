"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HiSun, HiMoon, HiComputerDesktop } from "react-icons/hi2";

const themes = [
    {
        name: "light",
        icon: HiSun,
        label: "Light Mode",
        colors: "from-amber-400 to-orange-500",
    },
    {
        name: "dark",
        icon: HiMoon,
        label: "Dark Mode",
        colors: "from-indigo-500 to-purple-600",
    },
    {
        name: "system",
        icon: HiComputerDesktop,
        label: "System",
        colors: "from-sentia-cyan to-sentia-purple",
    },
];

export function ThemeToggle() {
    const [mounted, setMounted] = React.useState(false);
    const { theme, setTheme } = useTheme();

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <Button variant="ghost" size="icon" className="h-9 w-9 rounded-lg">
                <div className="h-4 w-4 animate-pulse bg-gray-300 rounded" />
            </Button>
        );
    }

    const currentTheme = themes.find((t) => t.name === theme) || themes[0];
    const nextThemeIndex =
        (themes.findIndex((t) => t.name === theme) + 1) % themes.length;
    const nextTheme = themes[nextThemeIndex];

    const handleThemeChange = () => {
        setTheme(nextTheme.name);
    };

    return (
        <div className="relative">
            <Button
                variant="ghost"
                size="icon"
                onClick={handleThemeChange}
                className="h-9 w-9 rounded-lg bg-gray-100/80 hover:bg-gray-200/80 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 border border-gray-300/30 dark:border-slate-600/30 backdrop-blur-sm transition-all duration-300 group"
                aria-label={`Switch to ${nextTheme.label}`}
            >
                <div className="relative overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentTheme.name}
                            initial={{ y: -20, opacity: 0, rotate: -90 }}
                            animate={{ y: 0, opacity: 1, rotate: 0 }}
                            exit={{ y: 20, opacity: 0, rotate: 90 }}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 20,
                            }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <currentTheme.icon
                                className={`h-4 w-4 text-sentia-cyan dark:text-sentia-cyan group-hover:scale-110 transition-transform duration-300`}
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Ripple effect on hover */}
                <motion.div
                    className="absolute inset-0 rounded-lg"
                    whileHover={{
                        background: [
                            "rgba(45, 177, 188, 0)",
                            "rgba(45, 177, 188, 0.1)",
                            "rgba(45, 177, 188, 0)",
                        ],
                    }}
                    transition={{ duration: 0.6 }}
                />
            </Button>

            {/* Tooltip */}
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="bg-gray-900/90 dark:bg-gray-100/90 text-white dark:text-gray-900 text-xs px-2 py-1 rounded-md whitespace-nowrap backdrop-blur-sm">
                    {nextTheme.label}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full border-4 border-transparent border-b-gray-900/90 dark:border-b-gray-100/90"></div>
                </div>
            </div>
        </div>
    );
}

export function ThemeToggleExpanded() {
    const [mounted, setMounted] = React.useState(false);
    const { theme, setTheme } = useTheme();

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="flex items-center space-x-2">
                <div className="h-4 w-16 animate-pulse bg-gray-300 rounded" />
                <div className="h-8 w-20 animate-pulse bg-gray-300 rounded-lg" />
            </div>
        );
    }

    return (
        <div className="flex items-center space-x-3">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Theme
            </span>
            <div className="flex items-center bg-gray-100 dark:bg-slate-800/80 rounded-lg p-1 border border-gray-200 dark:border-slate-600/50">
                {themes.map((themeOption) => {
                    const isActive = theme === themeOption.name;
                    const Icon = themeOption.icon;

                    return (
                        <motion.button
                            key={themeOption.name}
                            onClick={() => setTheme(themeOption.name)}
                            className={`relative px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200 ${
                                isActive
                                    ? "text-white shadow-sm"
                                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                            }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="activeTheme"
                                    className={`absolute inset-0 bg-gradient-to-r ${themeOption.colors} rounded-md`}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 30,
                                    }}
                                />
                            )}
                            <div className="relative flex items-center space-x-1">
                                <Icon className="h-3 w-3" />
                                <span className="hidden sm:inline">
                                    {themeOption.label}
                                </span>
                            </div>
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
}

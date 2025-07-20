"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle, ThemeToggleExpanded } from "@/components/theme-toggle";
import {
    HiSun,
    HiMoon,
    HiSparkles,
    HiEye,
    HiGlobeAlt,
    HiCog,
    HiHeart,
    HiStar,
    HiLightBulb,
    HiRocketLaunch,
} from "react-icons/hi2";

const demoCards = [
    {
        title: "Computer Vision",
        description: "AI-powered visual recognition systems",
        icon: HiEye,
        color: "from-blue-500 to-cyan-500",
        stats: "99.7% Accuracy",
    },
    {
        title: "Robotics Engineering",
        description: "Advanced autonomous systems design",
        icon: HiCog,
        color: "from-purple-500 to-violet-500",
        stats: "15+ Years Experience",
    },
    {
        title: "IoT Solutions",
        description: "Connected devices and smart systems",
        icon: HiGlobeAlt,
        color: "from-green-500 to-emerald-500",
        stats: "100+ Devices Connected",
    },
];

const colorPalette = [
    { name: "Sentia Dark", color: "#363B5D", usage: "Primary Dark" },
    { name: "Sentia Cyan", color: "#2DB1BC", usage: "Primary Accent" },
    { name: "Sentia Yellow", color: "#F2E28C", usage: "Secondary Accent" },
    { name: "Sentia Purple", color: "#8C94C5", usage: "Tertiary" },
    { name: "Sentia Black", color: "#353538", usage: "Deep Dark" },
];

export function ThemeDemo() {
    const [mounted, setMounted] = React.useState(false);
    const { theme, resolvedTheme } = useTheme();

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-pulse text-2xl">
                    Loading theme demo...
                </div>
            </div>
        );
    }

    const isDark = resolvedTheme === "dark";

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-slate-900 to-slate-800 transition-all duration-500">
            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <div className="flex items-center justify-center space-x-4 mb-6">
                        <motion.div
                            animate={isDark ? { rotate: 180 } : { rotate: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {isDark ? (
                                <HiMoon className="w-12 h-12 text-sentia-cyan" />
                            ) : (
                                <HiSun className="w-12 h-12 text-sentia-yellow" />
                            )}
                        </motion.div>
                        <h1 className="text-4xl md:text-6xl font-bold gradient-text">
                            Theme Demo
                        </h1>
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <HiSparkles className="w-8 h-8 text-sentia-purple" />
                        </motion.div>
                    </div>

                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
                        Experience SentiaLab&apos;s adaptive design system with
                        seamless light and dark mode transitions. Every element
                        is crafted to look stunning in both themes.
                    </p>

                    <div className="flex justify-center items-center space-x-6">
                        <ThemeToggle />
                        <div className="hidden sm:block">
                            <ThemeToggleExpanded />
                        </div>
                    </div>
                </motion.div>

                {/* Theme Status */}
                <motion.div layout className="text-center mb-12">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={resolvedTheme}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Badge
                                variant="secondary"
                                className={`text-lg px-6 py-2 ${
                                    isDark
                                        ? "bg-slate-800 text-sentia-cyan border-sentia-cyan/30"
                                        : "bg-sentia-cyan/10 text-sentia-cyan border-sentia-cyan/30"
                                }`}
                            >
                                Current Theme: {resolvedTheme}{" "}
                                {isDark ? "🌙" : "☀️"}
                            </Badge>
                        </motion.div>
                    </AnimatePresence>
                </motion.div>

                {/* Demo Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid md:grid-cols-3 gap-8 mb-16"
                >
                    {demoCards.map((card, index) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.3 + index * 0.1,
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Card className="h-full card-hover dark:bg-slate-800/50 dark:border-slate-700/50 group">
                                <CardContent className="p-6">
                                    <div className="flex items-start space-x-4 mb-4">
                                        <div
                                            className={`w-12 h-12 bg-gradient-to-br ${card.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                                        >
                                            <card.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-sentia-dark dark:text-gray-100 mb-2">
                                                {card.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                                {card.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <Badge
                                            variant="secondary"
                                            className="text-xs dark:bg-slate-700/50 dark:text-gray-300"
                                        >
                                            {card.stats}
                                        </Badge>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="text-sentia-cyan hover:text-sentia-purple"
                                        >
                                            Learn More
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Color Palette Demo */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-center text-sentia-dark dark:text-gray-100 mb-8">
                        SentiaLab Color Palette
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {colorPalette.map((color, index) => (
                            <motion.div
                                key={color.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.5 + index * 0.1,
                                }}
                                whileHover={{ scale: 1.1 }}
                                className="text-center"
                            >
                                <div
                                    className="w-20 h-20 mx-auto rounded-2xl mb-3 shadow-lg hover:shadow-xl transition-shadow duration-300 border-4 border-white dark:border-slate-700"
                                    style={{ backgroundColor: color.color }}
                                />
                                <h4 className="font-semibold text-sm text-sentia-dark dark:text-gray-100">
                                    {color.name}
                                </h4>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    {color.usage}
                                </p>
                                <code className="text-xs bg-gray-100 dark:bg-slate-800 px-2 py-1 rounded mt-1 block">
                                    {color.color}
                                </code>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Interactive Elements */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-center text-sentia-dark dark:text-gray-100 mb-8">
                        Interactive Elements
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="p-6 dark:bg-slate-800/50 dark:border-slate-700/50">
                            <h3 className="text-xl font-semibold text-sentia-dark dark:text-gray-100 mb-4">
                                Buttons & Actions
                            </h3>
                            <div className="space-y-4">
                                <div className="flex flex-wrap gap-3">
                                    <Button className="btn-primary">
                                        <HiRocketLaunch className="mr-2 w-4 h-4" />
                                        Primary Action
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="btn-secondary"
                                    >
                                        Secondary
                                    </Button>
                                    <Button variant="ghost">
                                        <HiHeart className="mr-2 w-4 h-4" />
                                        Ghost
                                    </Button>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <Badge>Default Badge</Badge>
                                    <Badge variant="secondary">Secondary</Badge>
                                    <Badge className="bg-sentia-cyan text-white">
                                        Custom
                                    </Badge>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6 dark:bg-slate-800/50 dark:border-slate-700/50">
                            <h3 className="text-xl font-semibold text-sentia-dark dark:text-gray-100 mb-4">
                                Typography & Content
                            </h3>
                            <div className="space-y-3 prose dark:prose-invert max-w-none">
                                <h4 className="gradient-text">
                                    Gradient Heading
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300">
                                    This is how regular content looks in both
                                    light and dark themes. Notice the smooth
                                    transitions and excellent readability.
                                </p>
                                <div className="flex items-center space-x-2">
                                    <HiStar className="w-5 h-5 text-sentia-yellow" />
                                    <span className="text-sm font-medium">
                                        Premium Quality
                                    </span>
                                </div>
                            </div>
                        </Card>
                    </div>
                </motion.div>

                {/* Footer Demo */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center"
                >
                    <Card className="gradient-bg text-white p-12">
                        <CardContent className="space-y-6">
                            <div className="flex justify-center items-center space-x-3">
                                <HiLightBulb className="w-8 h-8 text-sentia-yellow animate-pulse" />
                                <h2 className="text-3xl font-bold">
                                    Beautiful in Any Light
                                </h2>
                            </div>
                            <p className="text-xl text-white/90 max-w-2xl mx-auto">
                                SentiaLab&apos;s design system adapts seamlessly
                                to user preferences, providing an optimal
                                experience in both light and dark environments.
                            </p>
                            <div className="flex justify-center space-x-4">
                                <Button
                                    size="lg"
                                    className="bg-white text-sentia-dark hover:bg-white/90"
                                >
                                    Explore More
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-white/30 text-white hover:bg-white/10"
                                >
                                    Contact Us
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Debug Info */}
                <div className="mt-8 text-center text-xs text-gray-400 dark:text-gray-500">
                    <p>
                        System Theme: {theme} | Resolved: {resolvedTheme}
                    </p>
                </div>
            </div>
        </div>
    );
}

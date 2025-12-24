"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    HiCpuChip,
    HiEye,
    HiCog,
    HiArrowRight,
    HiPlay,
    HiGlobeAlt,
} from "react-icons/hi2";
import { useTranslation } from "@/i18n";

const technologyIcons = {
    edgeAI: HiCpuChip,
    computerVision: HiEye,
    robotics: HiCog,
    smartAutomation: HiGlobeAlt,
};

export function HeroSection() {
    const { t } = useTranslation();

    const technologies = [
        { key: "edgeAI", name: t("hero.technologies.edgeAI"), icon: technologyIcons.edgeAI },
        { key: "computerVision", name: t("hero.technologies.computerVision"), icon: technologyIcons.computerVision },
        { key: "robotics", name: t("hero.technologies.robotics"), icon: technologyIcons.robotics },
        { key: "smartAutomation", name: t("hero.technologies.smartAutomation"), icon: technologyIcons.smartAutomation },
    ];

    const stats = [
        { number: t("hero.stats.realTime.number"), label: t("hero.stats.realTime.label") },
        { number: t("hero.stats.edge.number"), label: t("hero.stats.edge.label") },
        { number: t("hero.stats.custom.number"), label: t("hero.stats.custom.label") },
        { number: t("hero.stats.operation.number"), label: t("hero.stats.operation.label") },
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-sentia-black dark:to-[#1a1c2e]"></div>

            {/* Animated Background Orbs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-sentia-purple/20 rounded-full blur-[100px] animate-float opacity-70"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-sentia-cyan/10 rounded-full blur-[120px] animate-float-delayed opacity-60"></div>
                <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[140%] h-[600px] bg-gradient-to-r from-sentia-cyan/10 via-purple-500/10 to-sentia-cyan/10 rounded-[100%] blur-[130px] opacity-70"></div>
                <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-sentia-purple/10 rounded-full blur-[150px] transform translate-x-1/3 -translate-y-1/4"></div>
            </div>

            {/* Grid Pattern Overlay with Radial Mask */}
            <div
                className="absolute inset-0 opacity-[0.03] dark:opacity-[0.1]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)
                    `,
                    backgroundSize: "60px 60px",
                    maskImage: "radial-gradient(circle at center, black, transparent 80%)",
                    WebkitMaskImage: "radial-gradient(circle at center, black, transparent 80%)",
                }}
            ></div>

            <div className="relative z-10 container-max section-padding">
                <div className="flex flex-col items-center text-center space-y-8 max-w-5xl mx-auto">
                    {/* Main Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-4"
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-sentia-dark dark:text-white leading-[1.1] pb-2">
                            {t("hero.title.line1")}
                            <span className="block bg-gradient-to-r from-sentia-cyan via-purple-500 to-sentia-purple bg-clip-text text-transparent pb-4 animate-gradient-x">
                                {t("hero.title.line2")}
                            </span>
                        </h1>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed"
                    >
                        {t("hero.description")}
                    </motion.p>

                    {/* Technology Pills */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-3 mt-8"
                    >
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={tech.key}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.3 + index * 0.1,
                                    type: "spring",
                                    stiffness: 100,
                                }}
                                className="flex items-center space-x-2 bg-white/50 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-full px-5 py-2.5 text-sentia-dark dark:text-gray-200 shadow-sm hover:border-sentia-cyan/50 hover:shadow-sentia-cyan/20 transition-all duration-300"
                            >
                                <tech.icon className="w-5 h-5 text-sentia-cyan" />
                                <span className="font-medium">{tech.name}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 mt-12"
                    >
                        <Button
                            size="lg"
                            onClick={() => scrollToSection("#contact")}
                            className="bg-sentia-cyan hover:bg-sentia-cyan/90 text-white font-semibold px-8 py-6 text-lg rounded-full shadow-[0_0_20px_rgba(45,177,188,0.3)] hover:shadow-[0_0_30px_rgba(45,177,188,0.5)] transition-all duration-300 group"
                        >
                            {t("hero.cta.primary")}
                            <HiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            onClick={() => scrollToSection("#services")}
                            className="bg-transparent border-2 border-gray-300 dark:border-white/20 text-sentia-dark dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300"
                        >
                            <HiPlay className="mr-2 w-5 h-5 text-sentia-cyan" />
                            {t("hero.cta.secondary")}
                        </Button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-gray-200 dark:border-white/10"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.5 + index * 0.1,
                                }}
                                className="text-center"
                            >
                                <div className="text-3xl md:text-4xl font-bold text-sentia-dark dark:text-white mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium tracking-wide">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

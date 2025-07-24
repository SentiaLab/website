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

const technologies = [
    { name: "Edge AI", icon: HiCpuChip },
    { name: "Computer Vision", icon: HiEye },
    { name: "Robotics", icon: HiCog },
    { name: "Smart Automation", icon: HiGlobeAlt },
];

const stats = [
    { number: "Real-Time", label: "AI Processing" },
    { number: "Edge", label: "Computing Focus" },
    { number: "Custom", label: "Solutions" },
    { number: "24/7", label: "System Operation" },
];

export function HeroSection() {
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
            <div className="absolute inset-0 gradient-bg opacity-95 dark:hero-bg"></div>

            {/* Animated Background Pattern */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sentia-purple/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sentia-yellow/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-sentia-cyan/15 rounded-full blur-3xl animate-bounce-gentle"></div>
            </div>

            {/* Grid Pattern Overlay */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: "50px 50px",
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
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-normal pb-2">
                            Next-Generation
                            <span className="block bg-gradient-to-r from-sentia-yellow to-sentia-purple dark:from-sentia-cyan dark:to-purple-400 bg-clip-text text-transparent pb-4">
                                Edge AI Solutions
                            </span>
                        </h1>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed"
                    >
                        Pioneering intelligent edge computing solutions that
                        bring AI processing directly to your devices and
                        machinery. We specialize in real-time computer vision,
                        autonomous systems, and intelligent automation for
                        industries ready to embrace the future.
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
                                key={tech.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.3 + index * 0.1,
                                    type: "spring",
                                    stiffness: 100,
                                }}
                                className="flex items-center space-x-2 bg-white/15 dark:bg-sentia-dark/30 backdrop-blur-sm border border-white/20 dark:border-sentia-cyan/30 rounded-full px-4 py-2 text-white"
                            >
                                <tech.icon className="w-5 h-5" />
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
                            className="bg-white dark:bg-sentia-dark text-sentia-dark dark:text-white hover:bg-white/90 dark:hover:bg-sentia-dark/90 font-semibold px-8 py-4 text-lg group transition-all duration-300 hover:shadow-xl"
                        >
                            Start Your Project
                            <HiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            onClick={() => scrollToSection("#services")}
                            className="bg-sentia-yellow border-sentia-yellow text-sentia-dark hover:bg-sentia-yellow/90 hover:text-sentia-dark font-semibold px-8 py-4 text-lg group"
                        >
                            <HiPlay className="mr-2 w-5 h-5" />
                            Explore Services
                        </Button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-white/20 dark:border-sentia-cyan/20"
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
                                <div className="text-2xl md:text-3xl font-bold text-white dark:text-sentia-cyan mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-sm md:text-base text-white/80 dark:text-gray-300 font-medium">
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

"use client";

import * as React from "react";

import Image from "next/image";
import { motion } from "framer-motion";

import { Separator } from "@/components/ui/separator";
import {
    HiEnvelope,
    HiMapPin,
    HiGlobeAlt,
    HiCpuChip,
    HiEye,
    HiCog,
    HiCommandLine,
} from "react-icons/hi2";
import {
    SiLinkedin,
    SiX,
    SiGithub,
    SiYoutube,
    SiInstagram,
} from "react-icons/si";

const footerNavigation = {
    services: [
        { name: "Computer Vision", href: "#services", icon: HiEye },
        { name: "IoT Solutions", href: "#services", icon: HiGlobeAlt },
        { name: "Machine Design", href: "#services", icon: HiCog },
        { name: "Artificial Intelligence", href: "#services", icon: HiCpuChip },
        { name: "Embedded Systems", href: "#services", icon: HiCpuChip },
        { name: "System Integration", href: "#services", icon: HiCommandLine },
    ],
    company: [
        { name: "About Us", href: "#about" },
        { name: "Our Process", href: "#services" },
        { name: "Careers", href: "#contact" },
        { name: "Blog", href: "#contact" },
    ],
    resources: [
        { name: "Documentation", href: "#contact" },
        { name: "API Reference", href: "#contact" },
        { name: "Knowledge Base", href: "#contact" },
        { name: "White Papers", href: "#contact" },
        { name: "Technical Support", href: "#contact" },
        { name: "Training", href: "#contact" },
    ],
};

const socialLinks = [
    {
        name: "LinkedIn",
        href: "#",
        icon: SiLinkedin,
        color: "hover:text-blue-600",
    },
    { name: "X", href: "#", icon: SiX, color: "hover:text-gray-900" },
    { name: "GitHub", href: "#", icon: SiGithub, color: "hover:text-gray-900" },
    {
        name: "YouTube",
        href: "#",
        icon: SiYoutube,
        color: "hover:text-red-600",
    },
    {
        name: "Instagram",
        href: "#",
        icon: SiInstagram,
        color: "hover:text-pink-600",
    },
];

const contactInfo = [
    {
        icon: HiEnvelope,
        label: "Email",
        value: "contact@sentialab.com",
        href: "mailto:contact@sentialab.com",
    },
    {
        icon: HiMapPin,
        label: "Location",
        value: "Brazil • Worldwide",
        href: "#contact",
    },
    {
        icon: HiGlobeAlt,
        label: "Remote Work",
        value: "Available Globally",
        href: "#contact",
    },
];

const industries = [
    "Manufacturing",
    "Healthcare",
    "Agriculture",
    "Automotive",
    "Energy",
    "Defense",
    "Research",
    "Startups",
];

export function Footer() {
    const scrollToSection = (href: string) => {
        if (href.startsWith("#")) {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-sentia-dark dark:footer-bg text-white overflow-hidden relative">
            {/* Background Pattern */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: "30px 30px",
                }}
            ></div>

            {/* Gradient Overlay */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sentia-cyan to-transparent"></div>

            <div className="relative z-10">
                {/* Main Footer Content */}
                <div className="container-max section-padding">
                    <div className="grid lg:grid-cols-5 gap-12 mb-12">
                        {/* Company Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="lg:col-span-2 space-y-6"
                        >
                            <div className="flex items-center space-x-3">
                                <Image
                                    src="/sentialab.png"
                                    alt="SentiaLab"
                                    width={40}
                                    height={40}
                                    className="transition-transform duration-300 hover:scale-110"
                                />
                                <span className="text-2xl font-bold gradient-text">
                                    SentiaLab
                                </span>
                            </div>

                            <p className="text-gray-300 dark:text-gray-400 leading-relaxed max-w-md">
                                Transforming industries through intelligent
                                automation. We specialize in robotics,
                                artificial intelligence, and embedded systems
                                that solve real-world challenges.
                            </p>

                            <div className="space-y-3">
                                {contactInfo.map((item, index) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.4,
                                            delay: index * 0.1,
                                        }}
                                        viewport={{ once: true }}
                                        className="flex items-center space-x-3 text-gray-300 dark:text-gray-400 hover:text-sentia-cyan transition-colors cursor-pointer group"
                                        onClick={() =>
                                            scrollToSection(item.href)
                                        }
                                    >
                                        <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                        <span className="text-sm">
                                            <span className="text-gray-400">
                                                {item.label}:
                                            </span>{" "}
                                            {item.value}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.href}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: index * 0.1,
                                        }}
                                        viewport={{ once: true }}
                                        className={`w-10 h-10 bg-white/10 dark:bg-sentia-cyan/10 rounded-lg flex items-center justify-center text-gray-300 dark:text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/20 dark:hover:bg-sentia-cyan/20`}
                                        aria-label={social.name}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Services */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-lg font-semibold text-white mb-6">
                                Services
                            </h3>
                            <ul className="space-y-3">
                                {footerNavigation.services.map(
                                    (item, index) => (
                                        <motion.li
                                            key={item.name}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{
                                                duration: 0.3,
                                                delay: index * 0.05,
                                            }}
                                            viewport={{ once: true }}
                                        >
                                            <button
                                                onClick={() =>
                                                    scrollToSection(item.href)
                                                }
                                                className="flex items-center space-x-2 text-gray-300 dark:text-gray-400 hover:text-sentia-cyan transition-colors group"
                                            >
                                                <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                                <span className="text-sm">
                                                    {item.name}
                                                </span>
                                            </button>
                                        </motion.li>
                                    ),
                                )}
                            </ul>
                        </motion.div>

                        {/* Company */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-lg font-semibold text-white mb-6">
                                Company
                            </h3>
                            <ul className="space-y-3">
                                {footerNavigation.company.map((item, index) => (
                                    <motion.li
                                        key={item.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: index * 0.05,
                                        }}
                                        viewport={{ once: true }}
                                    >
                                        <button
                                            onClick={() =>
                                                scrollToSection(item.href)
                                            }
                                            className="text-gray-300 dark:text-gray-400 hover:text-sentia-cyan transition-colors text-sm"
                                        >
                                            {item.name}
                                        </button>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Resources */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-lg font-semibold text-white mb-6">
                                Resources
                            </h3>
                            <ul className="space-y-3">
                                {footerNavigation.resources.map(
                                    (item, index) => (
                                        <motion.li
                                            key={item.name}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{
                                                duration: 0.3,
                                                delay: index * 0.05,
                                            }}
                                            viewport={{ once: true }}
                                        >
                                            <button
                                                onClick={() =>
                                                    scrollToSection(item.href)
                                                }
                                                className="text-gray-300 dark:text-gray-400 hover:text-sentia-cyan transition-colors text-sm"
                                            >
                                                {item.name}
                                            </button>
                                        </motion.li>
                                    ),
                                )}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Industries We Serve */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="mb-12 text-center"
                    >
                        <h3 className="text-lg font-semibold text-white mb-6">
                            Industries We Serve
                        </h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {industries.map((industry, index) => (
                                <motion.div
                                    key={industry}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: index * 0.05,
                                    }}
                                    viewport={{ once: true }}
                                    className="px-4 py-2 bg-white/10 dark:bg-slate-800/30 rounded-full text-sm text-gray-300 dark:text-gray-400 hover:bg-sentia-cyan/20 hover:text-sentia-cyan transition-all duration-300 cursor-pointer"
                                >
                                    {industry}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <Separator className="bg-white/10 mb-8" />

                    {/* Bottom Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
                    >
                        <div className="text-center md:text-left">
                            <p className="text-gray-400 dark:text-gray-500 text-sm">
                                © {currentYear} SentiaLab. All rights reserved.
                            </p>
                            <p className="text-gray-500 dark:text-gray-600 text-xs mt-1">
                                Built with passion for innovation and
                                excellence.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400 dark:text-gray-500">
                            <button
                                onClick={() => scrollToSection("#contact")}
                                className="hover:text-sentia-cyan transition-colors"
                            >
                                Privacy Policy
                            </button>
                            <button
                                onClick={() => scrollToSection("#contact")}
                                className="hover:text-sentia-cyan transition-colors"
                            >
                                Terms of Service
                            </button>
                            <button
                                onClick={() => scrollToSection("#contact")}
                                className="hover:text-sentia-cyan transition-colors"
                            >
                                Sitemap
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Accent */}
                <div className="h-1 bg-gradient-to-r from-sentia-cyan via-sentia-purple to-sentia-yellow"></div>
            </div>
        </footer>
    );
}

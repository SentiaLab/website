"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    HiCpuChip,
    HiEye,
    HiGlobeAlt,
    HiAcademicCap,
    HiTruck,
    HiShieldCheck,
} from "react-icons/hi2";

const capabilities = [
    {
        icon: HiEye,
        title: "Healthcare Edge AI",
        description:
            "Advanced computer vision solutions for healthcare applications with real-time processing and edge deployment.",
        highlights: [
            "Real-time action and event detection systems",
            "Optimized neural networks for healthcare environments",
            "Edge computing deployment on specialized hardware",
            "HIPAA-compliant AI processing solutions",
        ],
        industries: ["Healthcare", "Assisted Living", "Medical Devices"],
        color: "from-blue-500 to-cyan-500",
    },
    {
        icon: HiCpuChip,
        title: "Industrial Edge Computing",
        description:
            "Mission-critical embedded AI systems for manufacturing, semiconductor, and precision industries.",
        highlights: [
            "Real-time processing for industrial applications",
            "High-reliability systems with 99.9% uptime",
            "Integration with existing manufacturing systems",
            "Custom hardware-software optimization",
        ],
        industries: ["Manufacturing", "Semiconductor", "Automotive"],
        color: "from-purple-500 to-violet-500",
    },
    {
        icon: HiTruck,
        title: "Autonomous Vehicle Systems",
        description:
            "Intelligent transportation and fleet management solutions with distributed AI processing.",
        highlights: [
            "Multi-sensor fusion for autonomous navigation",
            "Real-time decision making for vehicle systems",
            "Fleet-wide intelligence and coordination",
            "Predictive maintenance and optimization",
        ],
        industries: ["Transportation", "Logistics", "Commercial Vehicles"],
        color: "from-green-500 to-emerald-500",
    },
    {
        icon: HiGlobeAlt,
        title: "Smart Infrastructure",
        description:
            "AI-powered systems for intelligent infrastructure management and automated control.",
        highlights: [
            "Automated classification and monitoring systems",
            "Computer vision for infrastructure analysis",
            "Real-time data processing and decision making",
            "Integration with existing control systems",
        ],
        industries: ["Smart Cities", "Infrastructure", "Security"],
        color: "from-orange-500 to-red-500",
    },
];

const companyStats = [
    {
        metric: "Advanced",
        label: "AI Architecture",
        description: "Sophisticated solutions designed for edge deployment",
    },
    {
        metric: "Real-Time",
        label: "Processing Capability",
        description: "Low-latency inference for critical applications",
    },
    {
        metric: "Multi-Industry",
        label: "Solutions Portfolio",
        description: "Proven deployments across diverse sectors",
    },
    {
        metric: "24/7",
        label: "Autonomous Operation",
        description: "Self-managing systems with minimal intervention",
    },
];

const founderBackground = [
    "Advanced degree in Information Engineering with focus on Deep Learning and Computer Vision",
    "15+ years of embedded systems experience across international markets",
    "Proven track record with leading technology companies in multiple sectors",
    "Published research in computer vision and machine learning applications",
    "Former AI instructor at prestigious engineering institutions",
];

export function ExperienceSection() {
    return (
        <section
            id="experience"
            className="section-padding relative"
        >
            <div className="container-max">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <Badge
                        variant="secondary"
                        className="mb-4 bg-sentia-cyan/10 text-sentia-cyan border-sentia-cyan/20 dark:bg-sentia-cyan/20"
                    >
                        Company Capabilities
                    </Badge>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sentia-dark dark:text-white mb-6">
                        Proven Edge AI Solutions
                        <span className="gradient-text block mt-2">
                            Across Industries
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        SentiaLab delivers cutting-edge AI solutions deployed
                        directly on your devices and systems, enabling real-time
                        intelligence and autonomous operation.
                    </p>
                </motion.div>

                {/* Capabilities Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-8 mb-20"
                >
                    {capabilities.map((capability, index) => (
                        <motion.div
                            key={capability.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                            }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full card-hover glass-effect border-0">
                                <CardContent className="p-8">
                                    <div className="flex items-start space-x-6">
                                        <div
                                            className={`w-14 h-14 bg-gradient-to-br ${capability.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                                        >
                                            <capability.icon className="w-7 h-7 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-sentia-dark dark:text-white mb-3">
                                                {capability.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                                {capability.description}
                                            </p>
                                            <div className="mb-6">
                                                <h4 className="font-semibold text-sentia-dark dark:text-white mb-3 text-sm uppercase tracking-wider">
                                                    Key Features
                                                </h4>
                                                <ul className="space-y-2">
                                                    {capability.highlights.map(
                                                        (highlight, i) => (
                                                            <li key={i} className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                                                                <div className="w-1.5 h-1.5 rounded-full bg-sentia-cyan mr-2" />
                                                                {highlight}
                                                            </li>
                                                        ),
                                                    )}
                                                </ul>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {capability.industries.map(
                                                    (industry) => (
                                                        <Badge
                                                            key={industry}
                                                            variant="secondary"
                                                            className="text-xs bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-200 border-0"
                                                        >
                                                            {industry}
                                                        </Badge>
                                                    ),
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Company Stats & Leadership */}
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Company Performance */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-sentia-dark dark:text-gray-100 mb-6 flex items-center">
                            <HiShieldCheck className="w-6 h-6 text-sentia-cyan mr-3" />
                            Our Performance
                        </h3>
                        <div className="space-y-6">
                            {companyStats.map((stat, index) => (
                                <Card
                                    key={index}
                                    className="glass-effect border-0 card-hover"
                                >
                                    <CardContent className="p-6">
                                        <div className="flex items-center space-x-4">
                                            <div className="text-3xl font-bold gradient-text">
                                                {stat.metric}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-sentia-dark dark:text-white">
                                                    {stat.label}
                                                </h4>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                                    {stat.description}
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </motion.div>

                    {/* Leadership & Background */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-sentia-dark dark:text-gray-100 mb-6 flex items-center">
                            <HiAcademicCap className="w-6 h-6 text-sentia-cyan mr-3" />
                            Leadership & Foundation
                        </h3>

                        <Card className="glass-effect border-0 mb-6">
                            <CardContent className="p-8">
                                <h4 className="text-xl font-bold text-sentia-dark dark:text-white mb-4">
                                    Expert Leadership
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                                    SentiaLab is founded and led by experienced
                                    engineers with deep expertise in embedded
                                    systems and artificial intelligence.
                                </p>
                                <ul className="space-y-3">
                                    {founderBackground.map((item, index) => (
                                        <li key={index} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                                            <HiShieldCheck className="w-5 h-5 text-sentia-cyan mr-2 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="glass-effect border-0">
                            <CardContent className="p-8">
                                <h4 className="text-xl font-bold text-sentia-dark dark:text-white mb-4">
                                    Quality Assurance
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                    Our solutions are built on proven
                                    methodologies with extensive experience in
                                    testing, validation, and quality assurance
                                    across multiple industries including
                                    healthcare, automotive, and manufacturing.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

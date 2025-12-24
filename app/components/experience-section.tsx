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
import { useTranslation } from "@/i18n";

const capabilityIcons = {
    healthcareEdgeAI: HiEye,
    industrialEdgeComputing: HiCpuChip,
    autonomousVehicleSystems: HiTruck,
    smartInfrastructure: HiGlobeAlt,
};

const capabilityColors = {
    healthcareEdgeAI: "from-blue-500 to-cyan-500",
    industrialEdgeComputing: "from-purple-500 to-violet-500",
    autonomousVehicleSystems: "from-green-500 to-emerald-500",
    smartInfrastructure: "from-orange-500 to-red-500",
};

export function ExperienceSection() {
    const { t } = useTranslation();

    const capabilities = [
        {
            key: "healthcareEdgeAI",
            icon: capabilityIcons.healthcareEdgeAI,
            color: capabilityColors.healthcareEdgeAI,
            title: t("experience.capabilities.healthcareEdgeAI.title"),
            description: t("experience.capabilities.healthcareEdgeAI.description"),
            highlights: [
                t("experience.capabilities.healthcareEdgeAI.highlights.0"),
                t("experience.capabilities.healthcareEdgeAI.highlights.1"),
                t("experience.capabilities.healthcareEdgeAI.highlights.2"),
                t("experience.capabilities.healthcareEdgeAI.highlights.3"),
            ],
            industries: [
                t("experience.capabilities.healthcareEdgeAI.industries.0"),
                t("experience.capabilities.healthcareEdgeAI.industries.1"),
                t("experience.capabilities.healthcareEdgeAI.industries.2"),
            ],
        },
        {
            key: "industrialEdgeComputing",
            icon: capabilityIcons.industrialEdgeComputing,
            color: capabilityColors.industrialEdgeComputing,
            title: t("experience.capabilities.industrialEdgeComputing.title"),
            description: t("experience.capabilities.industrialEdgeComputing.description"),
            highlights: [
                t("experience.capabilities.industrialEdgeComputing.highlights.0"),
                t("experience.capabilities.industrialEdgeComputing.highlights.1"),
                t("experience.capabilities.industrialEdgeComputing.highlights.2"),
                t("experience.capabilities.industrialEdgeComputing.highlights.3"),
            ],
            industries: [
                t("experience.capabilities.industrialEdgeComputing.industries.0"),
                t("experience.capabilities.industrialEdgeComputing.industries.1"),
                t("experience.capabilities.industrialEdgeComputing.industries.2"),
            ],
        },
        {
            key: "autonomousVehicleSystems",
            icon: capabilityIcons.autonomousVehicleSystems,
            color: capabilityColors.autonomousVehicleSystems,
            title: t("experience.capabilities.autonomousVehicleSystems.title"),
            description: t("experience.capabilities.autonomousVehicleSystems.description"),
            highlights: [
                t("experience.capabilities.autonomousVehicleSystems.highlights.0"),
                t("experience.capabilities.autonomousVehicleSystems.highlights.1"),
                t("experience.capabilities.autonomousVehicleSystems.highlights.2"),
                t("experience.capabilities.autonomousVehicleSystems.highlights.3"),
            ],
            industries: [
                t("experience.capabilities.autonomousVehicleSystems.industries.0"),
                t("experience.capabilities.autonomousVehicleSystems.industries.1"),
                t("experience.capabilities.autonomousVehicleSystems.industries.2"),
            ],
        },
        {
            key: "smartInfrastructure",
            icon: capabilityIcons.smartInfrastructure,
            color: capabilityColors.smartInfrastructure,
            title: t("experience.capabilities.smartInfrastructure.title"),
            description: t("experience.capabilities.smartInfrastructure.description"),
            highlights: [
                t("experience.capabilities.smartInfrastructure.highlights.0"),
                t("experience.capabilities.smartInfrastructure.highlights.1"),
                t("experience.capabilities.smartInfrastructure.highlights.2"),
                t("experience.capabilities.smartInfrastructure.highlights.3"),
            ],
            industries: [
                t("experience.capabilities.smartInfrastructure.industries.0"),
                t("experience.capabilities.smartInfrastructure.industries.1"),
                t("experience.capabilities.smartInfrastructure.industries.2"),
            ],
        },
    ];

    const companyStats = [
        {
            key: "advanced",
            metric: t("experience.performance.stats.advanced.metric"),
            label: t("experience.performance.stats.advanced.label"),
            description: t("experience.performance.stats.advanced.description"),
        },
        {
            key: "realTime",
            metric: t("experience.performance.stats.realTime.metric"),
            label: t("experience.performance.stats.realTime.label"),
            description: t("experience.performance.stats.realTime.description"),
        },
        {
            key: "multiIndustry",
            metric: t("experience.performance.stats.multiIndustry.metric"),
            label: t("experience.performance.stats.multiIndustry.label"),
            description: t("experience.performance.stats.multiIndustry.description"),
        },
        {
            key: "autonomous",
            metric: t("experience.performance.stats.autonomous.metric"),
            label: t("experience.performance.stats.autonomous.label"),
            description: t("experience.performance.stats.autonomous.description"),
        },
    ];

    const founderBackground = [
        t("experience.leadership.expertLeadership.background.0"),
        t("experience.leadership.expertLeadership.background.1"),
        t("experience.leadership.expertLeadership.background.2"),
        t("experience.leadership.expertLeadership.background.3"),
        t("experience.leadership.expertLeadership.background.4"),
    ];

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
                        {t("experience.badge")}
                    </Badge>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sentia-dark dark:text-white mb-6">
                        {t("experience.title.line1")}
                        <span className="gradient-text block mt-2">
                            {t("experience.title.line2")}
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        {t("experience.description")}
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
                            key={capability.key}
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
                                                    {t("experience.keyFeatures")}
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
                            {t("experience.performance.title")}
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
                            {t("experience.leadership.title")}
                        </h3>

                        <Card className="glass-effect border-0 mb-6">
                            <CardContent className="p-8">
                                <h4 className="text-xl font-bold text-sentia-dark dark:text-white mb-4">
                                    {t("experience.leadership.expertLeadership.title")}
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                                    {t("experience.leadership.expertLeadership.description")}
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
                                    {t("experience.leadership.qualityAssurance.title")}
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                    {t("experience.leadership.qualityAssurance.description")}
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    HiCpuChip,
    HiEye,
    HiCog,
    HiGlobeAlt,
    HiLightBulb,
    HiShieldCheck,
    HiUsers,
    HiTrophy,
    HiAcademicCap,
    HiRocketLaunch,
} from "react-icons/hi2";
import { useTranslation } from "@/i18n";

const valueIcons = {
    edgeFirst: HiLightBulb,
    industrialGrade: HiShieldCheck,
    customSolutions: HiUsers,
    performanceFocus: HiTrophy,
};

const expertiseIcons = {
    edgeAI: HiCpuChip,
    computerVision: HiEye,
    smartAutomation: HiGlobeAlt,
    robotics: HiCog,
};

const achievementIcons = {
    advanced: HiAcademicCap,
    realTime: HiRocketLaunch,
    multi: HiGlobeAlt,
    custom: HiUsers,
};

const expertiseTechnologies: Record<string, string[]> = {
    edgeAI: ["PyTorch", "CUDA", "Jetson", "ARM Cortex", "TensorRT"],
    computerVision: ["OpenCV", "YOLO", "Custom CNNs", "3D Vision", "Real-time Processing"],
    smartAutomation: ["Industrial IoT", "Digital Twins", "Predictive Analytics", "SCADA Integration"],
    robotics: ["ROS", "Motion Control", "Sensor Fusion", "Custom Hardware"],
};

export function AboutSection() {
    const { t } = useTranslation();

    const values = [
        {
            key: "edgeFirst",
            icon: valueIcons.edgeFirst,
            title: t("about.approach.values.edgeFirst.title"),
            description: t("about.approach.values.edgeFirst.description"),
        },
        {
            key: "industrialGrade",
            icon: valueIcons.industrialGrade,
            title: t("about.approach.values.industrialGrade.title"),
            description: t("about.approach.values.industrialGrade.description"),
        },
        {
            key: "customSolutions",
            icon: valueIcons.customSolutions,
            title: t("about.approach.values.customSolutions.title"),
            description: t("about.approach.values.customSolutions.description"),
        },
        {
            key: "performanceFocus",
            icon: valueIcons.performanceFocus,
            title: t("about.approach.values.performanceFocus.title"),
            description: t("about.approach.values.performanceFocus.description"),
        },
    ];

    const expertise = [
        {
            key: "edgeAI",
            icon: expertiseIcons.edgeAI,
            title: t("about.capabilities.items.edgeAI.title"),
            description: t("about.capabilities.items.edgeAI.description"),
            technologies: expertiseTechnologies.edgeAI,
        },
        {
            key: "computerVision",
            icon: expertiseIcons.computerVision,
            title: t("about.capabilities.items.computerVision.title"),
            description: t("about.capabilities.items.computerVision.description"),
            technologies: expertiseTechnologies.computerVision,
        },
        {
            key: "smartAutomation",
            icon: expertiseIcons.smartAutomation,
            title: t("about.capabilities.items.smartAutomation.title"),
            description: t("about.capabilities.items.smartAutomation.description"),
            technologies: expertiseTechnologies.smartAutomation,
        },
        {
            key: "robotics",
            icon: expertiseIcons.robotics,
            title: t("about.capabilities.items.robotics.title"),
            description: t("about.capabilities.items.robotics.description"),
            technologies: expertiseTechnologies.robotics,
        },
    ];

    const achievements = [
        {
            key: "advanced",
            icon: achievementIcons.advanced,
            value: t("about.achievements.advanced.value"),
            label: t("about.achievements.advanced.label"),
        },
        {
            key: "realTime",
            icon: achievementIcons.realTime,
            value: t("about.achievements.realTime.value"),
            label: t("about.achievements.realTime.label"),
        },
        {
            key: "multi",
            icon: achievementIcons.multi,
            value: t("about.achievements.multi.value"),
            label: t("about.achievements.multi.label"),
        },
        {
            key: "custom",
            icon: achievementIcons.custom,
            value: t("about.achievements.custom.value"),
            label: t("about.achievements.custom.label"),
        },
    ];

    // Get vision paragraphs as array
    const visionParagraphs = [
        t("about.vision.paragraphs.0"),
        t("about.vision.paragraphs.1"),
        t("about.vision.paragraphs.2"),
    ];

    return (
        <section
            id="about"
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
                        className="mb-4 bg-sentia-purple/10 text-sentia-purple border-sentia-purple/20 dark:bg-sentia-purple/20 dark:text-indigo-300"
                    >
                        {t("about.badge")}
                    </Badge>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sentia-dark dark:text-white mb-6">
                        {t("about.title.line1")}
                        <span className="gradient-text block mt-2">
                            {t("about.title.line2")}
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        {t("about.description")}
                    </p>
                </motion.div>

                {/* Story Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <h3 className="text-3xl font-bold text-sentia-dark dark:text-white">
                                {t("about.vision.title")}
                            </h3>
                            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                {visionParagraphs.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="grid grid-cols-2 gap-4"
                            >
                                {achievements.map((achievement) => (
                                    <Card
                                        key={achievement.key}
                                        className="card-hover glass-effect border-0"
                                    >
                                        <CardContent className="p-6 text-center">
                                            <achievement.icon className="w-8 h-8 text-sentia-cyan mx-auto mb-3" />
                                            <div className="text-2xl font-bold text-sentia-dark dark:text-white mb-2">
                                                {achievement.value}
                                            </div>
                                            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                                                {achievement.label}
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Expertise Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-sentia-dark dark:text-white mb-4">
                            {t("about.capabilities.title")}
                        </h3>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            {t("about.capabilities.description")}
                        </p>
                    </div>

                    <div className="tech-grid">
                        {expertise.map((item, index) => (
                            <motion.div
                                key={item.key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true }}
                            >
                                <Card className="h-full card-hover glass-effect border-0 border-l-4 border-l-sentia-cyan">
                                    <CardContent className="p-6">
                                        <div className="flex items-start space-x-4">
                                            <div className="flex-shrink-0">
                                                <div className="w-12 h-12 bg-sentia-cyan/10 rounded-lg flex items-center justify-center">
                                                    <item.icon className="w-6 h-6 text-sentia-cyan" />
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-xl font-bold text-sentia-dark dark:text-white mb-2">
                                                    {item.title}
                                                </h4>
                                                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                                                    {item.description}
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {item.technologies.map(
                                                        (tech) => (
                                                            <Badge
                                                                key={tech}
                                                                variant="secondary"
                                                                className="text-xs bg-white/50 dark:bg-white/10 text-gray-700 dark:text-gray-200"
                                                            >
                                                                {tech}
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
                    </div>
                </motion.div>

                {/* Values Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-sentia-dark dark:text-white mb-4">
                            {t("about.approach.title")}
                        </h3>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            {t("about.approach.description")}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.key}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                    type: "spring",
                                    stiffness: 100,
                                }}
                                viewport={{ once: true }}
                            >
                                <Card className="h-full text-center card-hover group glass-effect border-0">
                                    <CardContent className="p-6">
                                        <div className="w-16 h-16 bg-gradient-to-br from-sentia-cyan to-sentia-purple rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                                            <value.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h4 className="text-xl font-bold text-sentia-dark dark:text-white mb-3">
                                            {value.title}
                                        </h4>
                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                            {value.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

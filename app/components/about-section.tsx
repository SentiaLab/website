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

const values = [
    {
        icon: HiLightBulb,
        title: "Edge-First",
        description:
            "Designing AI solutions that work where the action happens - directly on your devices and systems.",
    },
    {
        icon: HiShieldCheck,
        title: "Industrial-Grade",
        description:
            "Building robust, reliable solutions that perform consistently in demanding real-world environments.",
    },
    {
        icon: HiUsers,
        title: "Custom Solutions",
        description:
            "Tailoring AI models and systems to your specific industry needs and operational requirements.",
    },
    {
        icon: HiTrophy,
        title: "Performance Focus",
        description:
            "Optimizing for real-time processing, low latency, and efficient resource utilization.",
    },
];

const expertise = [
    {
        icon: HiCpuChip,
        title: "Edge AI Computing",
        description:
            "Intelligent processing at the source with real-time AI inference on embedded systems and edge devices",
        technologies: ["PyTorch", "CUDA", "Jetson", "ARM Cortex", "TensorRT"],
    },
    {
        icon: HiEye,
        title: "Computer Vision",
        description:
            "Advanced visual intelligence for quality control, autonomous navigation, and predictive maintenance",
        technologies: [
            "OpenCV",
            "YOLO",
            "Custom CNNs",
            "3D Vision",
            "Real-time Processing",
        ],
    },
    {
        icon: HiGlobeAlt,
        title: "Smart Automation",
        description:
            "Intelligent systems that adapt and optimize industrial processes through continuous learning",
        technologies: [
            "Industrial IoT",
            "Digital Twins",
            "Predictive Analytics",
            "SCADA Integration",
        ],
    },
    {
        icon: HiCog,
        title: "Robotics & Machinery",
        description:
            "Custom robotic solutions and intelligent machinery design for specialized industrial applications",
        technologies: [
            "ROS",
            "Motion Control",
            "Sensor Fusion",
            "Custom Hardware",
        ],
    },
];

const achievements = [
    {
        icon: HiAcademicCap,
        value: "Advanced",
        label: "AI Solutions",
    },
    {
        icon: HiRocketLaunch,
        value: "Real-Time",
        label: "Processing",
    },
    { icon: HiGlobeAlt, value: "Multi", label: "Industry Focus" },
    { icon: HiUsers, value: "Custom", label: "Implementation" },
];

export function AboutSection() {
    return (
        <section
            id="about"
            className="section-padding bg-gradient-to-br from-gray-50 to-white dark:from-slate-900/50 dark:to-slate-800/30"
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
                        className="mb-4 dark:bg-sentia-dark/50 dark:text-sentia-cyan dark:border-sentia-cyan/30"
                    >
                        About SentiaLab
                    </Badge>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-sentia-dark dark:text-gray-100 mb-6">
                        Pioneering Edge AI for
                        <span className="gradient-text block md:inline md:ml-3">
                            Intelligent Automation
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        SentiaLab specializes in Edge AI solutions that bring
                        intelligent processing directly to your devices and
                        systems. We combine computer vision, machine learning,
                        and embedded systems to create autonomous solutions for
                        the modern industrial landscape.
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
                        <div className="space-y-6">
                            <h3 className="text-2xl md:text-3xl font-bold text-sentia-dark dark:text-gray-100">
                                Our Vision
                            </h3>
                            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                                <p>
                                    SentiaLab emerged from the recognition that
                                    the future belongs to intelligent edge
                                    computing. While cloud AI has its place, the
                                    real revolution happens when artificial
                                    intelligence operates directly on your
                                    devices, machinery, and systems.
                                </p>
                                <p>
                                    Our mission is to make advanced computer
                                    vision and machine learning accessible to
                                    industries seeking intelligent automation.
                                    We believe that every machine should be
                                    intelligent, every process should be
                                    optimized, and every decision should be
                                    data-driven.
                                </p>
                                <p>
                                    Founded on deep expertise in embedded
                                    systems and artificial intelligence, we
                                    bridge the gap between cutting-edge research
                                    and practical industrial applications. Our
                                    solutions serve healthcare, manufacturing,
                                    and automation sectors across multiple
                                    regions.
                                </p>
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
                                        key={achievement.label}
                                        className="card-hover dark:bg-slate-800/50 dark:border-slate-700/50"
                                    >
                                        <CardContent className="p-6 text-center">
                                            <achievement.icon className="w-8 h-8 text-sentia-cyan mx-auto mb-3" />
                                            <div className="text-2xl font-bold text-sentia-dark dark:text-gray-100 mb-2">
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
                        <h3 className="text-2xl md:text-3xl font-bold text-sentia-dark dark:text-gray-100 mb-4">
                            Core Capabilities
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Comprehensive Edge AI solutions designed to
                            transform how industries operate and make decisions
                        </p>
                    </div>

                    <div className="tech-grid">
                        {expertise.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true }}
                            >
                                <Card className="h-full card-hover border-l-4 border-l-sentia-cyan dark:bg-slate-800/50 dark:border-slate-700/50 dark:border-l-sentia-cyan">
                                    <CardContent className="p-6">
                                        <div className="flex items-start space-x-4">
                                            <div className="flex-shrink-0">
                                                <div className="w-12 h-12 bg-sentia-cyan/10 rounded-lg flex items-center justify-center">
                                                    <item.icon className="w-6 h-6 text-sentia-cyan" />
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-xl font-semibold text-sentia-dark dark:text-gray-100 mb-2">
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
                                                                className="text-xs dark:bg-slate-700/50 dark:text-gray-300 dark:border-slate-600"
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
                        <h3 className="text-2xl md:text-3xl font-bold text-sentia-dark dark:text-gray-100 mb-4">
                            Our Approach
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            The principles that drive our Edge AI solutions
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
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
                                <Card className="h-full text-center card-hover group dark:bg-slate-800/50 dark:border-slate-700/50">
                                    <CardContent className="p-6">
                                        <div className="w-16 h-16 bg-gradient-to-br from-sentia-cyan to-sentia-purple rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                            <value.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h4 className="text-xl font-semibold text-sentia-dark dark:text-gray-100 mb-3">
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

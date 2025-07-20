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
        title: "Innovation",
        description:
            "Pushing boundaries with cutting-edge solutions that solve real-world problems.",
    },
    {
        icon: HiShieldCheck,
        title: "Reliability",
        description:
            "Delivering robust, tested solutions you can trust for mission-critical applications.",
    },
    {
        icon: HiUsers,
        title: "Collaboration",
        description:
            "Working closely with clients to understand their needs and exceed expectations.",
    },
    {
        icon: HiTrophy,
        title: "Excellence",
        description:
            "Maintaining the highest standards in every project we undertake.",
    },
];

const expertise = [
    {
        icon: HiCog,
        title: "Robotics Engineering",
        description:
            "Advanced robotic systems design, from concept to deployment",
        technologies: [
            "ROS",
            "Arduino",
            "Raspberry Pi",
            "Industrial Automation",
        ],
    },
    {
        icon: HiCpuChip,
        title: "Artificial Intelligence",
        description:
            "Machine learning and AI solutions for intelligent automation",
        technologies: ["TensorFlow", "PyTorch", "Computer Vision", "NLP"],
    },
    {
        icon: HiEye,
        title: "Computer Vision",
        description:
            "Visual recognition and processing systems for various industries",
        technologies: [
            "OpenCV",
            "Deep Learning",
            "Image Processing",
            "3D Vision",
        ],
    },
    {
        icon: HiGlobeAlt,
        title: "IoT Solutions",
        description: "Connected devices and smart systems for the modern world",
        technologies: [
            "Sensors",
            "Wireless",
            "Cloud Integration",
            "Edge Computing",
        ],
    },
];

const achievements = [
    {
        icon: HiAcademicCap,
        value: "15+",
        label: "Years of Engineering Excellence",
    },
    {
        icon: HiRocketLaunch,
        value: "100+",
        label: "Successful Projects Delivered",
    },
    { icon: HiGlobeAlt, value: "20+", label: "Countries Served" },
    { icon: HiUsers, value: "50+", label: "Satisfied Clients" },
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
                        Building the Future with
                        <span className="gradient-text block md:inline md:ml-3">
                            Intelligence & Innovation
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Founded on the vision of transforming industries through
                        intelligent automation, SentiaLab combines 15+ years of
                        engineering expertise with cutting-edge technology to
                        deliver solutions that matter.
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
                                Our Journey
                            </h3>
                            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                                <p>
                                    Born from a passion for engineering
                                    excellence, SentiaLab started as a vision to
                                    bridge the gap between complex robotics, AI
                                    technologies, and real-world applications.
                                    Based in Brazil, we&apos;ve grown to serve
                                    clients worldwide.
                                </p>
                                <p>
                                    Our team brings together deep expertise in
                                    robotics, artificial intelligence, and
                                    embedded systems. We don&apos;t just build
                                    technology – we craft intelligent solutions
                                    that solve meaningful problems and drive
                                    innovation forward.
                                </p>
                                <p>
                                    From small startups to large enterprises,
                                    we&apos;ve helped organizations across
                                    various industries harness the power of
                                    automation and intelligence to achieve their
                                    goals and stay ahead of the competition.
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
                            Our Expertise
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Specialized knowledge across multiple domains to
                            deliver comprehensive solutions
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
                            Our Values
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            The principles that guide everything we do
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

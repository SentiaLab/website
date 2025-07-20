"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    HiEye,
    HiGlobeAlt,
    HiCog,
    HiCpuChip,
    HiCommandLine,
    HiArrowRight,
    HiCheckCircle,
    HiBolt,
    HiShieldCheck,
    HiClock,
    HiUsers,
} from "react-icons/hi2";

const services = [
    {
        icon: HiEye,
        title: "Computer Vision",
        description:
            "Advanced visual recognition and processing systems for real-world applications.",
        features: [
            "Object Detection & Tracking",
            "Image Classification",
            "3D Vision Systems",
            "Quality Control Automation",
            "Facial Recognition",
            "Medical Image Analysis",
        ],
        technologies: ["OpenCV", "TensorFlow", "PyTorch", "YOLO", "MediaPipe"],
        color: "from-blue-500 to-cyan-500",
    },
    {
        icon: HiGlobeAlt,
        title: "IoT Solutions",
        description:
            "Connected devices and smart systems that bridge the physical and digital worlds.",
        features: [
            "Sensor Integration",
            "Wireless Communication",
            "Cloud Connectivity",
            "Real-time Monitoring",
            "Predictive Maintenance",
            "Energy Management",
        ],
        technologies: [
            "Arduino",
            "ESP32",
            "LoRaWAN",
            "MQTT",
            "AWS IoT",
            "Azure IoT",
        ],
        color: "from-green-500 to-emerald-500",
    },
    {
        icon: HiCog,
        title: "Machine Design",
        description:
            "Custom mechanical solutions and automation systems tailored to your needs.",
        features: [
            "CAD Design & Modeling",
            "Prototyping",
            "Manufacturing Optimization",
            "Assembly Automation",
            "Testing & Validation",
            "Production Support",
        ],
        technologies: [
            "SolidWorks",
            "AutoCAD",
            "3D Printing",
            "CNC",
            "FEA",
            "CFD",
        ],
        color: "from-purple-500 to-violet-500",
    },
    {
        icon: HiCpuChip,
        title: "Artificial Intelligence",
        description:
            "Intelligent systems that learn, adapt, and make decisions to optimize your operations.",
        features: [
            "Machine Learning Models",
            "Natural Language Processing",
            "Predictive Analytics",
            "Decision Support Systems",
            "Anomaly Detection",
            "Process Optimization",
        ],
        technologies: [
            "Python",
            "TensorFlow",
            "Scikit-learn",
            "Keras",
            "MLflow",
            "Docker",
        ],
        color: "from-orange-500 to-red-500",
    },
    {
        icon: HiCpuChip,
        title: "Embedded Systems",
        description:
            "High-performance embedded solutions for mission-critical applications.",
        features: [
            "Microcontroller Programming",
            "Real-time Systems",
            "Hardware Integration",
            "Firmware Development",
            "Protocol Implementation",
            "Performance Optimization",
        ],
        technologies: [
            "C/C++",
            "ARM Cortex",
            "FreeRTOS",
            "Linux",
            "Zephyr",
            "Rust",
        ],
        color: "from-indigo-500 to-blue-500",
    },
    {
        icon: HiCommandLine,
        title: "System Integration",
        description:
            "Seamlessly connecting different technologies into cohesive, efficient systems.",
        features: [
            "API Development",
            "Database Design",
            "DevOps & Deployment",
            "Testing & Quality Assurance",
            "Documentation",
            "Maintenance & Support",
        ],
        technologies: [
            "REST APIs",
            "GraphQL",
            "PostgreSQL",
            "Docker",
            "Kubernetes",
            "CI/CD",
        ],
        color: "from-teal-500 to-green-500",
    },
];

const processSteps = [
    {
        icon: HiUsers,
        title: "Discovery",
        description: "Understanding your challenges and requirements",
    },
    {
        icon: HiBolt,
        title: "Design",
        description: "Creating innovative solutions tailored to your needs",
    },
    {
        icon: HiCog,
        title: "Development",
        description: "Building robust, scalable systems with best practices",
    },
    {
        icon: HiShieldCheck,
        title: "Deployment",
        description: "Seamless integration and comprehensive testing",
    },
];

const benefits = [
    {
        icon: HiCheckCircle,
        title: "Proven Expertise",
        description:
            "15+ years of engineering excellence across multiple domains",
    },
    {
        icon: HiClock,
        title: "Rapid Delivery",
        description: "Agile development process ensuring quick time-to-market",
    },
    {
        icon: HiShieldCheck,
        title: "Quality Assurance",
        description: "Rigorous testing and validation for reliable solutions",
    },
    {
        icon: HiGlobeAlt,
        title: "Global Support",
        description: "Remote collaboration and support worldwide",
    },
];

export function ServicesSection() {
    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <section id="services" className="section-padding bg-white">
            <div className="container-max">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <Badge variant="secondary" className="mb-4">
                        Our Services
                    </Badge>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-sentia-dark mb-6">
                        Comprehensive Solutions for
                        <span className="gradient-text block md:inline md:ml-3">
                            Modern Challenges
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        From concept to deployment, we deliver end-to-end
                        solutions that combine cutting-edge technology with
                        practical engineering expertise.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid lg:grid-cols-2 gap-8 mb-20">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full card-hover group">
                                <CardContent className="p-8">
                                    <div className="flex items-start space-x-4 mb-6">
                                        <div
                                            className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                                        >
                                            <service.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-sentia-dark mb-2">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="font-semibold text-sentia-dark mb-3">
                                                Key Features:
                                            </h4>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                {service.features.map(
                                                    (feature) => (
                                                        <div
                                                            key={feature}
                                                            className="flex items-center space-x-2"
                                                        >
                                                            <HiCheckCircle className="w-4 h-4 text-sentia-cyan flex-shrink-0" />
                                                            <span className="text-gray-600 text-sm">
                                                                {feature}
                                                            </span>
                                                        </div>
                                                    ),
                                                )}
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-sentia-dark mb-3">
                                                Technologies:
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {service.technologies.map(
                                                    (tech) => (
                                                        <Badge
                                                            key={tech}
                                                            variant="secondary"
                                                            className="text-xs bg-sentia-cyan/10 text-sentia-cyan hover:bg-sentia-cyan/20"
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

                {/* Process Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-sentia-dark mb-4">
                            Our Process
                        </h3>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            A proven methodology that ensures successful project
                            delivery
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <Card className="text-center card-hover">
                                    <CardContent className="p-6">
                                        <div className="w-12 h-12 bg-sentia-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <step.icon className="w-6 h-6 text-sentia-cyan" />
                                        </div>
                                        <div className="absolute -top-3 -left-3 w-8 h-8 bg-sentia-cyan text-white rounded-full flex items-center justify-center text-sm font-bold">
                                            {index + 1}
                                        </div>
                                        <h4 className="text-lg font-semibold text-sentia-dark mb-2">
                                            {step.title}
                                        </h4>
                                        <p className="text-gray-600 text-sm">
                                            {step.description}
                                        </p>
                                    </CardContent>
                                </Card>
                                {index < processSteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-sentia-cyan/30 transform -translate-y-1/2"></div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Benefits Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-sentia-dark mb-4">
                            Why Choose SentiaLab
                        </h3>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            The advantages that set us apart in delivering
                            exceptional results
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true }}
                            >
                                <Card className="text-center card-hover border-t-4 border-t-sentia-cyan">
                                    <CardContent className="p-6">
                                        <benefit.icon className="w-12 h-12 text-sentia-cyan mx-auto mb-4" />
                                        <h4 className="text-lg font-semibold text-sentia-dark mb-2">
                                            {benefit.title}
                                        </h4>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <Card className="gradient-bg text-white">
                        <CardContent className="p-12">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                Ready to Transform Your Ideas into Reality?
                            </h3>
                            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                                Let&apos;s discuss how our expertise can help
                                you achieve your goals. Get in touch for a free
                                consultation.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    size="lg"
                                    onClick={() => scrollToSection("#contact")}
                                    className="bg-white text-sentia-dark hover:bg-white/90 font-semibold px-8 py-4 group"
                                >
                                    Start Your Project
                                    <HiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}

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
        title: "Edge Computer Vision",
        description:
            "Real-time visual intelligence processing directly on your devices and systems for instant decision-making.",
        features: [
            "Real-time Object Detection & Tracking",
            "Quality Control Automation",
            "Autonomous Navigation Systems",
            "Predictive Maintenance Vision",
            "Custom Neural Network Deployment",
            "Multi-Camera Coordination",
        ],
        technologies: ["PyTorch", "OpenCV", "TensorRT", "Jetson", "CUDA"],
        color: "from-blue-500 to-cyan-500",
    },
    {
        icon: HiCpuChip,
        title: "Edge AI Computing",
        description:
            "Intelligent processing at the source with custom AI models optimized for embedded systems and real-time performance.",
        features: [
            "Custom AI Model Development",
            "Neural Network Optimization",
            "Real-time Inference Engines",
            "Edge Computing Architecture",
            "Low-latency Processing",
            "Resource-efficient AI",
        ],
        technologies: [
            "TensorRT",
            "ONNX",
            "ARM NN",
            "Jetson",
            "OpenVINO",
            "Custom Silicon",
        ],
        color: "from-indigo-500 to-blue-500",
    },
    {
        icon: HiGlobeAlt,
        title: "Smart Automation",
        description:
            "Intelligent industrial systems that adapt, learn, and optimize operations through continuous AI-driven insights.",
        features: [
            "Adaptive Control Systems",
            "Predictive Analytics",
            "Digital Twin Integration",
            "Autonomous Process Optimization",
            "Smart Sensor Networks",
            "Industry 4.0 Solutions",
        ],
        technologies: [
            "Industrial IoT",
            "MQTT",
            "OPC-UA",
            "Digital Twins",
            "Time Series DB",
            "Edge Analytics",
        ],
        color: "from-green-500 to-emerald-500",
    },
    {
        icon: HiCog,
        title: "Robotics & Custom Machinery",
        description:
            "Intelligent robotic solutions and specialized machinery design with integrated AI for autonomous operation.",
        features: [
            "Autonomous Mobile Robots",
            "Custom Robotic Systems",
            "Intelligent Machinery Design",
            "Sensor Fusion & Navigation",
            "Collaborative Robot Solutions",
            "Specialized Automation Equipment",
        ],
        technologies: [
            "ROS",
            "Motion Control",
            "Sensor Fusion",
            "LIDAR/Cameras",
            "Custom Electronics",
            "3D Modeling",
        ],
        color: "from-purple-500 to-violet-500",
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
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sentia-dark dark:text-white mb-6">
                        Comprehensive Solutions for
                        <span className="gradient-text block mt-2">
                            Modern Challenges
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
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
                            <Card className="h-full card-hover group glass-effect border-0">
                                <CardContent className="p-8">
                                    <div className="flex items-start space-x-4 mb-6">
                                        <div
                                            className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                                        >
                                            <service.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-sentia-dark dark:text-white mb-2 group-hover:text-sentia-cyan transition-colors">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="font-semibold text-sentia-dark dark:text-white mb-3 flex items-center">
                                                <HiBolt className="w-4 h-4 text-sentia-yellow mr-2" />
                                                Key Features
                                            </h4>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                {service.features.map(
                                                    (feature) => (
                                                        <div
                                                            key={feature}
                                                            className="flex items-center space-x-2"
                                                        >
                                                            <div className="w-1.5 h-1.5 rounded-full bg-sentia-cyan flex-shrink-0" />
                                                            <span className="text-gray-600 dark:text-gray-400 text-sm">
                                                                {feature}
                                                            </span>
                                                        </div>
                                                    ),
                                                )}
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-sentia-dark dark:text-white mb-3">
                                                Technologies
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {service.technologies.map(
                                                    (tech) => (
                                                        <Badge
                                                            key={tech}
                                                            variant="secondary"
                                                            className="text-xs bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-200 border-0 hover:bg-sentia-cyan/20 hover:text-sentia-cyan transition-colors"
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
                        <h3 className="text-3xl font-bold text-sentia-dark dark:text-white mb-4">
                            Our Process
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            A proven methodology that ensures successful project delivery
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
                                <Card className="text-center card-hover glass-effect border-0 h-full">
                                    <CardContent className="p-8">
                                        <div className="w-16 h-16 bg-sentia-cyan/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-sentia-cyan/20 transition-colors">
                                            <step.icon className="w-8 h-8 text-sentia-cyan" />
                                        </div>
                                        <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-sentia-cyan to-sentia-purple text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                                            {index + 1}
                                        </div>
                                        <h4 className="text-xl font-bold text-sentia-dark dark:text-white mb-3">
                                            {step.title}
                                        </h4>
                                        <p className="text-gray-600 dark:text-gray-300">
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
                    className="text-center container-max"
                >
                    <Card className="bg-gradient-to-br from-sentia-dark via-[#4B5282] to-sentia-purple text-white overflow-hidden relative border-0 shadow-2xl">
                        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-sentia-cyan/20 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-sentia-purple/20 rounded-full blur-3xl pointer-events-none" />
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

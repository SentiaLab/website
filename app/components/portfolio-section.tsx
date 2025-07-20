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
    HiArrowUpRight,
    HiPlay,
    HiPhoto,
    HiRocketLaunch,
    HiBeaker,
    HiCube,
    HiLightBulb,
} from "react-icons/hi2";

const categories = [
    { id: "all", name: "All Projects", icon: HiCube },
    { id: "robotics", name: "Robotics", icon: HiCog },
    { id: "ai", name: "Artificial Intelligence", icon: HiCpuChip },
    { id: "vision", name: "Computer Vision", icon: HiEye },
    { id: "iot", name: "IoT Solutions", icon: HiGlobeAlt },
    { id: "embedded", name: "Embedded Systems", icon: HiCpuChip },
];

const projects = [
    {
        id: 1,
        title: "Autonomous Quality Control System",
        description:
            "AI-powered visual inspection system for manufacturing lines with 99.7% accuracy rate, reducing manual inspection time by 85%.",
        category: "vision",
        categories: ["vision", "ai"],
        technologies: [
            "OpenCV",
            "TensorFlow",
            "Python",
            "Industrial Cameras",
            "Real-time Processing",
        ],
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop",
        status: "Deployed",
        year: "2024",
        impact: "85% time reduction",
        featured: true,
    },
    {
        id: 2,
        title: "Smart Agricultural Monitoring",
        description:
            "IoT-based crop monitoring system with environmental sensors, automated irrigation, and predictive analytics for optimal yield.",
        category: "iot",
        categories: ["iot", "ai"],
        technologies: [
            "LoRaWAN",
            "Sensors",
            "Cloud Analytics",
            "Mobile App",
            "Machine Learning",
        ],
        image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop",
        status: "Deployed",
        year: "2024",
        impact: "30% yield increase",
        featured: true,
    },
    {
        id: 3,
        title: "Collaborative Assembly Robot",
        description:
            "Human-robot collaborative system for precision assembly tasks with advanced safety features and adaptive learning capabilities.",
        category: "robotics",
        categories: ["robotics", "ai"],
        technologies: [
            "ROS",
            "6-DOF Manipulator",
            "Force Sensors",
            "Safety Systems",
            "Computer Vision",
        ],
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
        status: "In Development",
        year: "2024",
        impact: "50% efficiency boost",
        featured: true,
    },
    {
        id: 4,
        title: "Medical Image Analysis Platform",
        description:
            "Deep learning platform for medical image analysis, assisting radiologists in early detection of anomalies with high precision.",
        category: "ai",
        categories: ["ai", "vision"],
        technologies: [
            "PyTorch",
            "Medical Imaging",
            "DICOM",
            "Deep Learning",
            "Web Platform",
        ],
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
        status: "Deployed",
        year: "2023",
        impact: "95% accuracy rate",
        featured: false,
    },
    {
        id: 5,
        title: "Industrial IoT Gateway",
        description:
            "Edge computing gateway for industrial automation, enabling real-time data processing and secure cloud connectivity.",
        category: "embedded",
        categories: ["embedded", "iot"],
        technologies: [
            "ARM Cortex",
            "Linux",
            "Edge Computing",
            "Industrial Protocols",
            "Security",
        ],
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
        status: "Deployed",
        year: "2023",
        impact: "Real-time processing",
        featured: false,
    },
    {
        id: 6,
        title: "Drone Fleet Management System",
        description:
            "Comprehensive platform for managing autonomous drone fleets with mission planning, real-time tracking, and data analytics.",
        category: "robotics",
        categories: ["robotics", "iot", "ai"],
        technologies: [
            "Flight Controllers",
            "GPS/RTK",
            "Mission Planning",
            "Data Analytics",
            "Fleet Management",
        ],
        image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=400&fit=crop",
        status: "Deployed",
        year: "2023",
        impact: "Multi-drone coordination",
        featured: false,
    },
    {
        id: 7,
        title: "Smart Energy Management",
        description:
            "AI-driven energy optimization system for commercial buildings, reducing energy consumption through predictive analytics.",
        category: "ai",
        categories: ["ai", "iot"],
        technologies: [
            "Machine Learning",
            "Energy Sensors",
            "Predictive Analytics",
            "Building Automation",
            "Dashboard",
        ],
        image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&h=400&fit=crop",
        status: "Deployed",
        year: "2023",
        impact: "25% energy savings",
        featured: false,
    },
    {
        id: 8,
        title: "Robotic Process Automation",
        description:
            "Custom RPA solution for document processing and data entry, integrating computer vision and natural language processing.",
        category: "ai",
        categories: ["ai", "vision"],
        technologies: [
            "OCR",
            "NLP",
            "Document Processing",
            "Workflow Automation",
            "API Integration",
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        status: "Deployed",
        year: "2022",
        impact: "90% automation rate",
        featured: false,
    },
];

const stats = [
    { icon: HiRocketLaunch, value: "100+", label: "Projects Completed" },
    { icon: HiBeaker, value: "8", label: "Industries Served" },
    { icon: HiLightBulb, value: "15+", label: "Years of Innovation" },
    { icon: HiCube, value: "95%", label: "Client Satisfaction" },
];

export function PortfolioSection() {
    const [activeCategory, setActiveCategory] = React.useState("all");

    const filteredProjects = React.useMemo(() => {
        if (activeCategory === "all") return projects;
        return projects.filter((project) =>
            project.categories.includes(activeCategory),
        );
    }, [activeCategory]);

    const featuredProjects = projects.filter((project) => project.featured);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <section
            id="portfolio"
            className="section-padding bg-gradient-to-br from-gray-50 to-white"
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
                    <Badge variant="secondary" className="mb-4">
                        Our Portfolio
                    </Badge>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-sentia-dark mb-6">
                        Transforming Ideas into
                        <span className="gradient-text block md:inline md:ml-3">
                            Real-World Solutions
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Explore our successful projects that showcase our
                        expertise in robotics, AI, and embedded systems across
                        various industries.
                    </p>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="text-center card-hover">
                                <CardContent className="p-6">
                                    <stat.icon className="w-8 h-8 text-sentia-cyan mx-auto mb-3" />
                                    <div className="text-2xl md:text-3xl font-bold text-sentia-dark mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-600 font-medium">
                                        {stat.label}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Featured Projects */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-sentia-dark mb-4">
                            Featured Projects
                        </h3>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Highlighting our most impactful and innovative
                            solutions
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {featuredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true }}
                            >
                                <Card className="h-full card-hover group overflow-hidden">
                                    <div className="relative overflow-hidden">
                                        <div
                                            className="h-48 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                                            style={{
                                                backgroundImage: `url(${project.image})`,
                                            }}
                                        ></div>
                                        <div className="absolute top-4 right-4">
                                            <Badge
                                                variant="secondary"
                                                className={`${project.status === "Deployed" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}`}
                                            >
                                                {project.status}
                                            </Badge>
                                        </div>
                                        <div className="absolute inset-0 bg-sentia-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <Button
                                                size="sm"
                                                className="bg-white text-sentia-dark hover:bg-white/90"
                                            >
                                                <HiPlay className="w-4 h-4 mr-2" />
                                                View Details
                                            </Button>
                                        </div>
                                    </div>
                                    <CardContent className="p-6">
                                        <div className="flex items-start justify-between mb-3">
                                            <h4 className="text-xl font-bold text-sentia-dark group-hover:text-sentia-cyan transition-colors">
                                                {project.title}
                                            </h4>
                                            <span className="text-sm text-gray-500 ml-2">
                                                {project.year}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 mb-4 leading-relaxed">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.technologies
                                                .slice(0, 3)
                                                .map((tech) => (
                                                    <Badge
                                                        key={tech}
                                                        variant="secondary"
                                                        className="text-xs"
                                                    >
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            {project.technologies.length >
                                                3 && (
                                                <Badge
                                                    variant="secondary"
                                                    className="text-xs"
                                                >
                                                    +
                                                    {project.technologies
                                                        .length - 3}{" "}
                                                    more
                                                </Badge>
                                            )}
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="text-sm">
                                                <span className="text-gray-500">
                                                    Impact:{" "}
                                                </span>
                                                <span className="text-sentia-cyan font-semibold">
                                                    {project.impact}
                                                </span>
                                            </div>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="text-sentia-cyan hover:text-sentia-purple"
                                            >
                                                Learn More
                                                <HiArrowUpRight className="w-4 h-4 ml-1" />
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <Button
                                key={category.id}
                                variant={
                                    activeCategory === category.id
                                        ? "default"
                                        : "outline"
                                }
                                size="sm"
                                onClick={() => setActiveCategory(category.id)}
                                className={`${
                                    activeCategory === category.id
                                        ? "btn-primary"
                                        : "border-sentia-cyan text-sentia-cyan hover:bg-sentia-cyan hover:text-white"
                                } transition-all duration-300`}
                            >
                                <category.icon className="w-4 h-4 mr-2" />
                                {category.name}
                            </Button>
                        ))}
                    </div>
                </motion.div>

                {/* All Projects Grid */}
                <motion.div
                    key={activeCategory} // Force re-render on category change
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                >
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <Card className="h-full card-hover group">
                                <div className="relative overflow-hidden">
                                    <div
                                        className="h-32 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                                        style={{
                                            backgroundImage: `url(${project.image})`,
                                        }}
                                    ></div>
                                    <div className="absolute top-2 right-2">
                                        <Badge
                                            variant="secondary"
                                            className={`text-xs ${project.status === "Deployed" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}`}
                                        >
                                            {project.status}
                                        </Badge>
                                    </div>
                                </div>
                                <CardContent className="p-4">
                                    <div className="flex items-start justify-between mb-2">
                                        <h4 className="text-lg font-semibold text-sentia-dark group-hover:text-sentia-cyan transition-colors">
                                            {project.title}
                                        </h4>
                                        <span className="text-xs text-gray-500">
                                            {project.year}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1 mb-3">
                                        {project.technologies
                                            .slice(0, 2)
                                            .map((tech) => (
                                                <Badge
                                                    key={tech}
                                                    variant="secondary"
                                                    className="text-xs"
                                                >
                                                    {tech}
                                                </Badge>
                                            ))}
                                        {project.technologies.length > 2 && (
                                            <Badge
                                                variant="secondary"
                                                className="text-xs"
                                            >
                                                +
                                                {project.technologies.length -
                                                    2}
                                            </Badge>
                                        )}
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-sentia-cyan font-medium">
                                            {project.impact}
                                        </span>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="p-0 h-auto text-sentia-cyan hover:text-sentia-purple"
                                        >
                                            <HiArrowUpRight className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
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
                                Ready to Create Your Success Story?
                            </h3>
                            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                                Join our satisfied clients and turn your
                                innovative ideas into impactful solutions.
                                Let&apos;s build something amazing together.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    size="lg"
                                    onClick={() => scrollToSection("#contact")}
                                    className="bg-white text-sentia-dark hover:bg-white/90 font-semibold px-8 py-4"
                                >
                                    Discuss Your Project
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="bg-sentia-yellow border-sentia-yellow text-sentia-dark hover:bg-sentia-yellow/90 hover:text-sentia-dark font-semibold px-8 py-4"
                                >
                                    <HiPhoto className="mr-2 w-5 h-5" />
                                    View Case Studies
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}

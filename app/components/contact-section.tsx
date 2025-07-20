"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HiEnvelope, HiCalendar, HiArrowUpRight } from "react-icons/hi2";

export function ContactSection() {
    return (
        <section id="contact" className="section-padding bg-white">
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
                        Get In Touch
                    </Badge>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-sentia-dark mb-6">
                        Let&apos;s Build Something
                        <span className="gradient-text block md:inline md:ml-3">
                            Amazing Together
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Ready to transform your ideas into intelligent
                        solutions? Contact us to discuss your project.
                    </p>
                </motion.div>

                {/* Contact Information */}
                <div className="max-w-2xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <Card className="shadow-lg">
                            <CardContent className="p-8 text-center">
                                <div className="w-16 h-16 bg-sentia-cyan/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <HiEnvelope className="w-8 h-8 text-sentia-cyan" />
                                </div>
                                <h3 className="text-2xl font-bold text-sentia-dark mb-4">
                                    Contact Us
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    Ready to start your project? Send us an
                                    email or schedule a meeting to discuss your
                                    needs.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-center space-x-3">
                                        <HiEnvelope className="w-5 h-5 text-sentia-cyan" />
                                        <a
                                            href="mailto:contact@sentialab.com"
                                            className="text-lg font-semibold text-sentia-dark hover:text-sentia-cyan transition-colors"
                                        >
                                            contact@sentialab.com
                                        </a>
                                    </div>

                                    <div className="pt-4">
                                        <a
                                            href="https://cal.com/caiopiccirillo"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center"
                                        >
                                            <Button
                                                size="lg"
                                                className="bg-sentia-dark text-white hover:bg-sentia-dark/90 font-semibold px-8 py-4 text-lg group"
                                            >
                                                <HiCalendar className="mr-2 w-5 h-5" />
                                                Schedule a Meeting
                                                <HiArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HiEnvelope, HiCalendar, HiArrowUpRight } from "react-icons/hi2";
import { useTranslation } from "@/i18n";

export function ContactSection() {
    const { t } = useTranslation();

    return (
        <section id="contact" className="section-padding relative">
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
                        {t("contact.badge")}
                    </Badge>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sentia-dark dark:text-white mb-6">
                        {t("contact.title.line1")}
                        <span className="gradient-text block mt-2">
                            {t("contact.title.line2")}
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        {t("contact.description")}
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
                        <Card className="glass-effect border-0">
                            <CardContent className="p-8 text-center">
                                <div className="w-16 h-16 bg-sentia-cyan/10 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                                    <HiEnvelope className="w-8 h-8 text-sentia-cyan" />
                                </div>
                                <h3 className="text-2xl font-bold text-sentia-dark dark:text-white mb-4">
                                    {t("contact.card.title")}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto leading-relaxed">
                                    {t("contact.card.description")}
                                </p>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-center space-x-3 group cursor-pointer">
                                        <HiEnvelope className="w-5 h-5 text-sentia-cyan group-hover:scale-110 transition-transform" />
                                        <a
                                            href="mailto:contact@sentialab.com"
                                            className="text-lg font-semibold text-sentia-dark dark:text-white hover:text-sentia-cyan transition-colors"
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
                                                className="bg-sentia-cyan hover:bg-sentia-cyan/90 text-white font-semibold px-8 py-6 text-lg group rounded-full shadow-[0_0_20px_rgba(45,177,188,0.3)] hover:shadow-[0_0_30px_rgba(45,177,188,0.5)] transition-all duration-300"
                                            >
                                                <HiCalendar className="mr-2 w-5 h-5" />
                                                {t("contact.card.scheduleMeeting")}
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

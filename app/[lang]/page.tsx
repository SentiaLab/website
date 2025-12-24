"use client";

import * as React from "react";
import { I18nProvider, Locale, isValidLocale } from "@/i18n";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { ExperienceSection } from "@/components/experience-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { use } from "react";

interface PageProps {
    params: Promise<{ lang: string }>;
}

export default function HomePage({ params }: PageProps) {
    const resolvedParams = use(params);
    const locale: Locale = isValidLocale(resolvedParams.lang) ? resolvedParams.lang : "en";

    return (
        <I18nProvider initialLocale={locale}>
            <main className="relative">
                {/* Navigation */}
                <Navigation />

                {/* Hero Section */}
                <HeroSection />

                {/* About Section */}
                <AboutSection />

                {/* Services Section */}
                <ServicesSection />

                {/* Experience Section */}
                <ExperienceSection />

                {/* Contact Section */}
                <ContactSection />

                {/* Footer */}
                <Footer />
            </main>
        </I18nProvider>
    );
}

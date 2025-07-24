"use client";

import * as React from "react";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { ExperienceSection } from "@/components/experience-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
    return (
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
    );
}

import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://sentialab.com"),
    title: {
        default: "SentiaLab - Robotics, AI & Embedded Systems",
        template: "%s | SentiaLab",
    },
    description:
        "SentiaLab specializes in robotics, artificial intelligence, and embedded systems. We develop innovative solutions combining computer vision, IoT, and machine design. Based in Brazil, serving clients worldwide.",
    keywords: [
        "robotics",
        "artificial intelligence",
        "embedded systems",
        "computer vision",
        "IoT",
        "machine design",
        "automation",
        "Brazil",
        "engineering",
    ],
    authors: [{ name: "SentiaLab" }],
    creator: "SentiaLab",
    publisher: "SentiaLab",
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://sentialab.com",
        siteName: "SentiaLab",
        title: "SentiaLab - Robotics, AI & Embedded Systems",
        description:
            "Innovative solutions in robotics, artificial intelligence, and embedded systems. 15+ years of engineering excellence.",
        images: [
            {
                url: "/sentialab.png",
                width: 1200,
                height: 630,
                alt: "SentiaLab - Robotics, AI & Embedded Systems",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "SentiaLab - Robotics, AI & Embedded Systems",
        description:
            "Innovative solutions in robotics, artificial intelligence, and embedded systems. 15+ years of engineering excellence.",
        images: ["/sentialab.png"],
    },
    icons: {
        icon: "/sentialab.ico",
        shortcut: "/sentialab.ico",
        apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
};

export const viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
            <body
                className={`${inter.variable} ${jetbrainsMono.variable} font-inter antialiased`}
            >
                <ThemeProvider>
                    <div className="relative min-h-screen bg-background">
                        {children}
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}

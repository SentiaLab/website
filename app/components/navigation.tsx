"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const navigationItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
];

export function Navigation() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            setScrolled(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setIsOpen(false);
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-white/90 dark:bg-slate-900/95 shadow-lg backdrop-blur-md border-b border-gray-200/20 dark:border-sentia-cyan/20"
                    : "bg-transparent",
            )}
        >
            <nav className="container-max">
                <div className="flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex items-center space-x-2"
                    >
                        <Link
                            href="#home"
                            onClick={() => scrollToSection("#home")}
                        >
                            <div className="flex items-center space-x-3 group cursor-pointer">
                                <div className="relative">
                                    <Image
                                        src="/sentialab.png"
                                        alt="SentiaLab"
                                        width={40}
                                        height={40}
                                        className="transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                                <span className="text-xl font-bold gradient-text">
                                    SentiaLab
                                </span>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="hidden md:flex"
                    >
                        <NavigationMenu>
                            <NavigationMenuList className="space-x-2">
                                {navigationItems.map((item) => (
                                    <NavigationMenuItem key={item.name}>
                                        <Link
                                            href={item.href}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                scrollToSection(item.href);
                                            }}
                                        >
                                            <NavigationMenuLink
                                                className={cn(
                                                    navigationMenuTriggerStyle(),
                                                    "relative font-medium bg-transparent rounded-lg px-4 py-2",
                                                    "text-gray-700 dark:text-gray-300",
                                                    "hover:bg-sentia-dark/10 dark:hover:bg-sentia-cyan/10",
                                                    "hover:text-sentia-dark dark:hover:text-sentia-cyan",
                                                    "transition-all duration-300 hover:shadow-lg hover:scale-105",
                                                )}
                                            >
                                                {item.name}
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </motion.div>

                    {/* CTA Button & Theme Toggle */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="hidden md:flex items-center space-x-3"
                    >
                        <Button
                            onClick={() => scrollToSection("#contact")}
                            className="bg-sentia-dark text-white hover:bg-sentia-dark/90 font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg"
                        >
                            Get Started
                        </Button>
                    </motion.div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="text-gray-700 dark:text-gray-300 hover:text-sentia-cyan hover:bg-sentia-cyan/10 dark:hover:bg-sentia-cyan/20"
                                >
                                    <AnimatePresence mode="wait">
                                        {isOpen ? (
                                            <motion.div
                                                key="close"
                                                initial={{
                                                    rotate: -90,
                                                    opacity: 0,
                                                }}
                                                animate={{
                                                    rotate: 0,
                                                    opacity: 1,
                                                }}
                                                exit={{
                                                    rotate: 90,
                                                    opacity: 0,
                                                }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <HiX className="h-6 w-6" />
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="menu"
                                                initial={{
                                                    rotate: 90,
                                                    opacity: 0,
                                                }}
                                                animate={{
                                                    rotate: 0,
                                                    opacity: 1,
                                                }}
                                                exit={{
                                                    rotate: -90,
                                                    opacity: 0,
                                                }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <HiMenu className="h-6 w-6" />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </Button>
                            </SheetTrigger>
                            <SheetContent
                                side="right"
                                className="w-[300px] sm:w-[400px]"
                            >
                                <div className="flex flex-col space-y-4 mt-8">
                                    <div className="flex items-center space-x-3 pb-4 border-b border-gray-200">
                                        <Image
                                            src="/sentialab.png"
                                            alt="SentiaLab"
                                            width={32}
                                            height={32}
                                        />
                                        <span className="text-lg font-bold gradient-text">
                                            SentiaLab
                                        </span>
                                    </div>
                                    {navigationItems.map((item, index) => (
                                        <motion.div
                                            key={item.name}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{
                                                duration: 0.3,
                                                delay: index * 0.1,
                                            }}
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    scrollToSection(item.href);
                                                }}
                                                className="flex items-center space-x-3 py-3 px-4 rounded-lg transition-colors duration-200 hover:bg-sentia-cyan/10 hover:text-sentia-cyan group"
                                            >
                                                <div className="w-2 h-2 rounded-full bg-sentia-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                                                <span className="font-medium">
                                                    {item.name}
                                                </span>
                                            </Link>
                                        </motion.div>
                                    ))}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: 0.5,
                                        }}
                                        className="pt-4 space-y-4"
                                    >
                                        <Button
                                            onClick={() =>
                                                scrollToSection("#contact")
                                            }
                                            className="bg-sentia-dark text-white hover:bg-sentia-dark/90 font-semibold py-3 px-6 rounded-lg transition-all duration-300 w-full"
                                        >
                                            Get Started
                                        </Button>
                                    </motion.div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </nav>
        </motion.header>
    );
}

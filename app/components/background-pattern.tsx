"use client";

import { useEffect, useState, useRef } from "react";
import {
    HiCpuChip,
    HiCog,
    HiCommandLine,
    HiGlobeAlt,
    HiServer,
    HiWifi,
    HiWrenchScrewdriver,
    HiBolt
} from "react-icons/hi2";
import {
    GiRobotGrab,
    GiGears,
    GiMicrochip,
    GiCircuitry
} from "react-icons/gi";
import { motion, useScroll, useTransform } from "framer-motion";

export function BackgroundPattern() {
    const [mounted, setMounted] = useState(false);
    const [icons, setIcons] = useState<any[]>([]);
    const [windowHeight, setWindowHeight] = useState(0); // Track window height for wrapping
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    useEffect(() => {
        setMounted(true);
        // Set initial window height
        setWindowHeight(window.innerHeight);

        const handleResize = () => setWindowHeight(window.innerHeight);
        window.addEventListener("resize", handleResize);

        const iconTypes = [
            // Tech / AI
            HiCpuChip,
            HiCommandLine,
            HiGlobeAlt,
            HiServer,
            HiWifi,
            GiMicrochip,
            GiCircuitry,

            // Mechanics / Robotics
            HiCog,
            HiWrenchScrewdriver,
            HiBolt,
            GiRobotGrab,
            GiGears
        ];

        const generatedIcons = [];

        // Grid 13x13
        const rows = 13;
        const cols = 13;
        const totalCells = rows * cols;

        for (let i = 0; i < totalCells; i++) {
            const row = Math.floor(i / cols);
            const col = i % cols;

            const jitterX = (Math.random() - 0.5) * 4;
            const jitterY = (Math.random() - 0.5) * 4;

            const xPct = (col / cols) * 100 + 4 + jitterX;
            const yPct = (row / rows) * 100 + 4 + jitterY; // Store numeric percentage

            const Icon = iconTypes[Math.floor(Math.random() * iconTypes.length)];
            const size = Math.floor(Math.random() * (35 - 20 + 1)) + 20;
            const delay = Math.random() * 2;

            // Parallax config
            const depth = (size - 20) / 15;
            const speed = 0.1 + (depth * 0.3);

            const isGear = Icon === HiCog || Icon === GiGears;
            const rotationDirection = Math.random() > 0.5 ? 1 : -1;
            const rotationSpeed = isGear ? rotationDirection * (0.2 + depth * 0.3) : 0;

            generatedIcons.push({
                Icon,
                x: `${xPct}%`, // CSS string for Left 
                yPct,          // Numeric % for calculation
                size,
                delay,
                speed,
                rotationSpeed
            });
        }

        setIcons(generatedIcons);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (!mounted) return null;

    return (
        <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
            {icons.map((item, index) => (
                <ParallaxIcon
                    key={index}
                    item={item}
                    scrollY={scrollY}
                    windowHeight={windowHeight}
                />
            ))}
        </div>
    );
}

function ParallaxIcon({ item, scrollY, windowHeight }: { item: any, scrollY: any, windowHeight: number }) {
    // Infinite Scroll Logic
    // We calculate the position based on the initial percentage and the scroll distance.
    // MODULO operator (%) wraps the value so it stays within the range [0, totalHeight].

    // Total height to wrap over. Add buffer (100px) so they wrap off-screen
    const buffer = 100;
    const period = windowHeight + buffer;

    // Transform scrollY into a looped Y position
    const y = useTransform(scrollY, (val: number) => {
        // Calculate initial pixel position from percentage
        const initialY = (item.yPct / 100) * windowHeight;

        // Calculate the "moved" position (standard parallax: moves UP as we scroll DOWN)
        const separation = val * item.speed;

        // Current raw position
        const rawY = initialY - separation;

        // Wrap logic:
        // ((rawY % period) + period) % period ensures result is always positive [0, period]
        // Subtract buffer needed if we shifted origin.
        // Let's keep 0 as top. 
        // If rawY becomes -50, it should wrap to period-50.
        const wrappedY = ((rawY % period) + period) % period;

        // If we want it to wrap partially off screen (buffer), we can shift offset
        // but simple 0..period wrapping works if period > viewport height.
        return wrappedY - (buffer / 2); // Shift up slightly so we use top buffer too
    });

    // Rotation continues linearly (no wrapping needed for rotation)
    const rotate = useTransform(scrollY, (val: number) => val * item.rotationSpeed);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ duration: 1, delay: item.delay }}
            style={{
                position: "absolute",
                left: item.x,
                top: 0, // We drive Y entirely via transform
                y,
                rotate
            }}
            className="text-gray-300 dark:text-gray-600"
        >
            <item.Icon size={item.size} />
        </motion.div>
    );
}

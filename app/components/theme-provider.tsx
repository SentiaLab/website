"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

interface ThemeProviderProps {
    children: React.ReactNode;
    attribute?: "class" | "data-theme";
    defaultTheme?: string;
    enableSystem?: boolean;
    disableTransitionOnChange?: boolean;
}

export function ThemeProvider({
    children,
    attribute = "class",
    disableTransitionOnChange = false,
    ...props
}: ThemeProviderProps) {
    return (
        <NextThemesProvider
            attribute={attribute}
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange={disableTransitionOnChange}
            themes={["light"]}
            forcedTheme="light"
            {...props}
        >
            {children}
        </NextThemesProvider>
    );
}

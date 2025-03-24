"use client";

import type { ReactNode } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const config = {
    initialColorMode: "light",
    useSystemColorMode: false,
};

const theme = extendTheme({
    config,
    colors: {
        purple: {
            50: "#f5f3ff",
            100: "#ede9fe",
            200: "#ddd6fe",
            300: "#c4b5fd",
            400: "#a78bfa",
            500: "#8b5cf6",
            600: "#7c3aed",
            700: "#6d28d9",
            800: "#5b21b6",
            900: "#4c1d95",
        },
    },
    fonts: {
        heading: "var(--font-sans)",
        body: "var(--font-sans)",
    },
    styles: {
        global: {
            body: {
                bg: "white",
                color: "gray.800",
            },
        },
    },
    components: {
        Button: {
            baseStyle: {
                fontWeight: "medium",
                borderRadius: "md",
            },
            variants: {
                solid: {
                    bg: "purple.500",
                    color: "white",
                    _hover: {
                        bg: "purple.600",
                    },
                },
                outline: {
                    borderColor: "purple.300",
                    color: "purple.700",
                    _hover: {
                        bg: "purple.50",
                    },
                },
            },
            defaultProps: {
                variant: "solid",
            },
        },
        Card: {
            baseStyle: {
                container: {
                    bg: "white",
                    borderRadius: "xl",
                    boxShadow: "md",
                    overflow: "hidden",
                },
            },
        },
    },
});

// Providers Component (Updated)
export function Providers({ children }: { children: ReactNode }) {
    return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}


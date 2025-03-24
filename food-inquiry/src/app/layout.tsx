import type React from "react"
import type {Metadata} from "next"
import {Inter} from "next/font/google"
import "./globals.css"
import {Providers} from "@/components/containers/providers";
import Navbar from "@/components/containers/navbar";


const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
    title: "Nutritious Recipes - Find Healthy Food Options",
    description: "Discover delicious recipes with nutrition information and cost estimates",
}

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Providers>
            <Navbar/>
            {children}
        </Providers>
        </body>
        </html>
    )
}


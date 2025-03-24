"use client"

import { useEffect, useRef } from "react"
import { Box } from "@chakra-ui/react"
import lottie from "lottie-web"

export default function FoodAnimation() {
    const container = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (container.current) {
            const animation = lottie.loadAnimation({
                container: container.current,
                renderer: "svg",
                loop: true,
                autoplay: true,
                path: "/animation/AnimationFood.json",
            })

            return () => {
                animation.destroy()
            }
        }
    }, [])

    return <Box ref={container} w="full" h="64" />
}
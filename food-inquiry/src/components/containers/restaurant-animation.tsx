// "use client"
//
// import { useEffect, useRef } from "react"
// import { Box } from "@chakra-ui/react"
// import lottie from "lottie-web"
//
// export default function RestaurantAnimation() {
//     const container = useRef<HTMLDivElement>(null)
//
//     useEffect(() => {
//         if (container.current) {
//             const animation = lottie.loadAnimation({
//                 container: container.current,
//                 renderer: "svg",
//                 loop: true,
//                 autoplay: true,
//                 path: "/animation/veg.json",
//             })
//
//             return () => {
//                 animation.destroy()
//             }
//         }
//     }, [])
//
//     return <Box ref={container} w="full" h="64" />
// }
//

"use client"

import { useEffect, useRef, useState } from "react"
import { Box } from "@chakra-ui/react"
import lottie from "lottie-web"

export default function RestaurantAnimation() {
    const container = useRef<HTMLDivElement>(null)
    const [lottieLoaded, setLottieLoaded] = useState(true)

    useEffect(() => {
        if (container.current) {
            let animation: any

            try {
                animation = lottie.loadAnimation({
                    container: container.current,
                    renderer: "svg",
                    loop: true,
                    autoplay: true,
                    path: "/animation/foodp.mp4",
                })

                // Handle loading error
                animation.addEventListener("data_failed", () => {
                    console.error("Failed to load Lottie animation")
                    setLottieLoaded(false)
                })

                // Confirm successful loading
                animation.addEventListener("data_ready", () => {
                    setLottieLoaded(true)
                })
            } catch (error) {
                console.error("Error loading Lottie animation:", error)
                setLottieLoaded(false)
            }

            return () => {
                if (animation) {
                    animation.destroy()
                }
            }
        }
    }, [])

    return <Box ref={container} w="full" h="64" />
}


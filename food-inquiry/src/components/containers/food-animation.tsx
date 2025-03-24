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





//
// "use client"
//
// import { useEffect, useRef, useState } from "react"
// import { Box } from "@chakra-ui/react"
// import lottie from "lottie-web"
//
// export default function FoodAnimation() {
//     const container = useRef<HTMLDivElement>(null)
//     const [lottieLoaded, setLottieLoaded] = useState(true)
//
//     useEffect(() => {
//         if (container.current) {
//             let animation: any
//
//             try {
//                 animation = lottie.loadAnimation({
//                     container: container.current,
//                     renderer: "svg",
//                     loop: true,
//                     autoplay: true,
//                     path: "/animation/veg.json",
//                 })
//
//                 // Handle loading error
//                 animation.addEventListener("data_failed", () => {
//                     console.error("Failed to load Lottie animation")
//                     setLottieLoaded(false)
//                 })
//
//                 // Confirm successful loading
//                 animation.addEventListener("data_ready", () => {
//                     setLottieLoaded(true)
//                 })
//             } catch (error) {
//                 console.error("Error loading Lottie animation:", error)
//                 setLottieLoaded(false)
//             }
//
//             return () => {
//                 if (animation) {
//                     animation.destroy()
//                 }
//             }
//         }
//     }, [])
//
//     // If Lottie fails to load, show the MP4 video as fallback
//     if (!lottieLoaded) {
//         return (
//             <Box w="full" h="64" position="relative">
//                 <video
//                     autoPlay
//                     loop
//                     muted
//                     playsInline
//                     style={{
//                         width: "100%",
//                         height: "100%",
//                         objectFit: "contain",
//                     }}
//                 >
//                     <source src="/animation/foodp.mp4" type="video/mp4" />
//                     Your browser does not support the video tag.
//                 </video>
//             </Box>
//         )
//     }
//
//     return <Box ref={container} w="full" h="64" />
// }
//

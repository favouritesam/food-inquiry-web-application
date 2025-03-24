"use client"
import { Box, Container, Heading, Text } from "@chakra-ui/react"
import dynamic from "next/dynamic";
const RestaurantFinder = dynamic(() => import("@/components/containers/restaurant-finder"), { ssr: false });



export default function RestaurantsPage() {
    return (
        <Box as="main" minH="100vh" bgGradient="linear(to-b, purple.50, white)" pt="4%">
            <Container maxW="container.xl" px={4} py={12}>
                <Heading as="h1" size="xl" color="purple.800" mb={4} textAlign="center">
                    Find Restaurants Near You
                </Heading>

                <Text fontSize="lg" color="purple.600" mb={8} textAlign="center" maxW="2xl" mx="auto">
                    Discover delicious dining options in your area with our restaurant finder
                </Text>
            </Container>
            <Box mt='-8%'><RestaurantFinder /></Box>
        </Box>
    )
}


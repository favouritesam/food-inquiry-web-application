"use client"

import { useState } from "react"
import { Box, Button, SimpleGrid, Text, VStack, Flex, Heading, Image, Spinner, Badge, HStack } from "@chakra-ui/react"
import { MapPin } from "lucide-react"
import RestaurantAnimation from "@/components/containers/restaurant-animation";

interface Restaurant {
    id: string
    name: string
    cuisine: string
    rating: number
    distance: string
    address: string
    image: string
}

export default function RestaurantFinder() {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([])
    const [loading, setLoading] = useState(false)
    const [locationStatus, setLocationStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
    const [error, setError] = useState("")

    // const getLocation = () => {
    //     setLocationStatus("loading")
    //     setError("")
    //
    //     if (!navigator.geolocation) {
    //         setError("Geolocation is not supported by your browser")
    //         setLocationStatus("error")
    //         return
    //     }
    //
    //     navigator.geolocation.getCurrentPosition(() => {
    //             setLocationStatus("success")
    //             fetchNearbyRestaurants()
    //         },
    //         () => {
    //             setError("Unable to retrieve your location")
    //             setLocationStatus("error")
    //         },
    //     )
    // }


    const getLocation = () => {
        setLocationStatus("loading");
        setError("");

        if (!navigator.geolocation) {
            setError("Geolocation is not supported by your browser.");
            setLocationStatus("error");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log("User's location:", position.coords);
                setLocationStatus("success");
                fetchNearbyRestaurants();
            },
            (error) => {
                console.error("Geolocation error:", error);
                if (error.code === 1) {
                    setError("Location permission denied. Please enable location access in your settings.");
                } else if (error.code === 2) {
                    setError("Location unavailable. Please ensure GPS is enabled.");
                } else if (error.code === 3) {
                    setError("Location request timed out. Try moving to an open area.");
                } else {
                    setError("Unable to retrieve your location. Please try again.");
                }
                setLocationStatus("error");
            },
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
        );
    };

    const fetchNearbyRestaurants = async () => {
        setLoading(true)
        try {
            // In a real app, you would fetch from an actual API using the coordinates
            // This is a mock implementation
            await new Promise((resolve) => setTimeout(resolve, 1500))

            const mockRestaurants: Restaurant[] = [
                {
                    id: "1",
                    name: "Purple Plate",
                    cuisine: "Contemporary",
                    rating: 4.7,
                    distance: "0.8 km",
                    address: "123 Main Street",
                    image: "/img/PupPlate.webp",
                },
                {
                    id: "2",
                    name: "Spice Garden",
                    cuisine: "Indian",
                    rating: 4.5,
                    distance: "1.2 km",
                    address: "456 Oak Avenue",
                    image: "/img/SpiceGarden.jpg",
                },
                {
                    id: "3",
                    name: "Pasta Paradise",
                    cuisine: "Italian",
                    rating: 4.3,
                    distance: "1.5 km",
                    address: "789 Elm Street",
                    image: "/img/PastaParadise.jpg",
                },
                {
                    id: "4",
                    name: "Sushi Sensation",
                    cuisine: "Japanese",
                    rating: 4.8,
                    distance: "2.0 km",
                    address: "101 Pine Road",
                    image: "/img/SushiSensation.jpg",
                },
                {
                    id: "5",
                    name: "Burger Bistro",
                    cuisine: "American",
                    rating: 4.2,
                    distance: "2.3 km",
                    address: "202 Maple Drive",
                    image: "/img/BurgerBistro.webp",
                },
                {
                    id: "6",
                    name: "Green Garden",
                    cuisine: "Vegetarian",
                    rating: 4.6,
                    distance: "2.7 km",
                    address: "303 Cedar Lane",
                    image: "/img/GreenGarden.jpeg",
                },
            ]

            setRestaurants(mockRestaurants)
        } catch (err) {
            setError("Failed to fetch nearby restaurants. Please try again later.")
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Box maxW="6xl" mx="auto" h='auto'>
            {locationStatus === "idle" && (
                <VStack spacing={8} py={8} textAlign="center">
                    <Box mb={8} maxW="md" mx="auto">
                        <RestaurantAnimation />
                    </Box>
                    <Text fontSize="lg" color="purple.800" mb={6}>
                        Allow access to your location to find restaurants near you
                    </Text>
                    <Button onClick={getLocation} mt='-2%' colorScheme="purple" size="lg" leftIcon={<MapPin size={20} />}>
                        Find Nearby Restaurants
                    </Button>
                </VStack>
            )}

            {locationStatus === "loading" && (
                <VStack spacing={6} py={12} textAlign="center">
                    <Spinner size="xl" thickness="4px" speed="0.65s" color="purple.600" />
                    <Text fontSize="lg" color="purple.800">
                        Getting your location...
                    </Text>
                </VStack>
            )}

            {locationStatus === "error" && (
                <VStack spacing={6} py={12} textAlign="center">
                    <Text color="red.500">{error}</Text>
                    <Button onClick={getLocation} colorScheme="purple">
                        Try Again
                    </Button>
                </VStack>
            )}

            {locationStatus === "success" && (
                <>
                    <Flex mt="10%" justify="space-between" align="center">
                        <Heading as="h2" size="lg" color="purple.800">
                            Nearby Restaurants
                        </Heading>
                        <Button variant="outline" colorScheme="purple" leftIcon={<MapPin size={16} />} onClick={getLocation}>
                            Update Location
                        </Button>
                    </Flex>

                    {loading ? (
                        <Flex justify="center" align="center" py={20}>
                            <Spinner size="xl" thickness="4px" speed="0.65s" color="purple.600" />
                        </Flex>
                    ) : error ? (
                        <VStack spacing={6} py={12} textAlign="center">
                            <Text color="red.500">{error}</Text>
                            <Button onClick={getLocation} colorScheme="purple">
                                Try Again
                            </Button>
                        </VStack>
                    ) : (
                        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mt='4%'>
                            {restaurants.map((restaurant) => (
                                <Box
                                    key={restaurant.id}
                                    borderRadius="xl"
                                    overflow="hidden"
                                    boxShadow="md"
                                    transition="box-shadow 0.2s"
                                    borderWidth="2px"
                                    borderColor="purple.100"
                                    _hover={{ borderColor: "purple.300",boxShadow: "lg"  }}
                                    bg="white"
                                >
                                    <Box overflow="hidden">
                                        <Image
                                            src={restaurant.image || "/placeholder.svg"}
                                            alt={restaurant.name}
                                            w="full"
                                            h="auto"
                                            aspectRatio={16 / 9}
                                            objectFit="cover"
                                        />
                                    </Box>
                                    <Box p={4}>
                                        <Flex justify="space-between" align="flex-start" mb={2}>
                                            <Heading as="h3" size="md" color="purple.800">
                                                {restaurant.name}
                                            </Heading>
                                            <Badge colorScheme="purple" px={2} py={1} borderRadius="md">
                                                <HStack spacing={1}>
                                                    <Text>★</Text>
                                                    <Text>{restaurant.rating}</Text>
                                                </HStack>
                                            </Badge>
                                        </Flex>
                                        <Text color="purple.600" mb={2}>
                                            {restaurant.cuisine}
                                        </Text>
                                        <Text color="gray.600" mb={4}>
                                            {restaurant.address}
                                        </Text>
                                        <Flex align="center" fontSize="sm" color="purple.700">
                                            <MapPin size={16} style={{ marginRight: "4px" }} />
                                            <Text>{restaurant.distance} away</Text>
                                        </Flex>
                                    </Box>
                                </Box>
                            ))}
                        </SimpleGrid>
                    )}
                </>
            )}
        </Box>
    )
}


"use client"

import { useState, useEffect } from "react"
import {
    Box,
    Heading,
    Text,
    Button,
    SimpleGrid,
    Flex,
    Image,
    Spinner,
    List,
    ListItem,
    OrderedList,
    VStack,
    Center,
} from "@chakra-ui/react"
import { Clock, Users, Info } from "lucide-react"
import CurrencyConverter from "@/components/containers/currency-converter";

interface Recipe {
    id: string
    title: string
    image: string
    calories: number
    servings: number
    prepTime: number
    cookTime: number
    ingredients: string[]
    instructions: string[]
    costInNaira: number
}

export default function RecipeDetail({ id }: { id: string }) {
    const [recipe, setRecipe] = useState<Recipe | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        if (!id) {
            setError("Invalid recipe ID")
            setLoading(false)
            return
        }

        const fetchRecipe = async () => {
            setLoading(true)
            try {
                // In a real app, you would fetch from an actual API
                // This is a mock implementation
                await new Promise((resolve) => setTimeout(resolve, 1000))

                const mockRecipe: Recipe = {
                    id,
                    title:
                        id === "1"
                            ? "Vegetable Stir Fry"
                            : id === "2"
                                ? "Chicken Curry"
                                : id === "3"
                                    ? "Pasta Primavera"
                                    : id === "4"
                                        ? "Grilled Salmon"
                                        : id === "5"
                                            ? "Quinoa Salad"
                                            : "Beef Stew",
                    image:
                        id === "1"
                            ? "/img/VegetableStirFry.jpg"
                            : id === "2"
                                ? "/img/chickenCurry.jpg"
                                : id === "3"
                                    ? "/img/PastaPrimavera.jpg"
                                    : id === "4"
                                        ? "/img/GrilledSalmon.jpg"
                                        : id === "5"
                                            ? "/img/QuinoaSalad.jpg"
                                            : "/img/BeefStew.jpg",
                    calories: id === "1" ? 320 : id === "2" ? 450 : id === "3" ? 380 : id === "4" ? 290 : id === "5" ? 210 : 520,
                    servings: 4,
                    prepTime: 15,
                    cookTime: 25,
                    ingredients: [
                        "2 cups mixed vegetables, chopped",
                        "1 tablespoon olive oil",
                        "2 cloves garlic, minced",
                        "1 tablespoon soy sauce",
                        "1 teaspoon ginger, grated",
                        "Salt and pepper to taste",
                    ],
                    instructions: [
                        "Heat oil in a large pan or wok over medium-high heat.",
                        "Add garlic and ginger, sauté for 30 seconds until fragrant.",
                        "Add vegetables and stir-fry for 5-7 minutes until tender-crisp.",
                        "Add soy sauce and season with salt and pepper.",
                        "Serve hot over rice or noodles.",
                    ],
                    costInNaira: 2500 + Math.floor(Math.random() * 1000),
                }

                setRecipe(mockRecipe)
            } catch (err) {
                setError("Failed to fetch recipe details. Please try again later.")
                console.error(err)
            } finally {
                setLoading(false)
            }
        }

        fetchRecipe()
    }, [id])

    if (loading) {
        return (
            <Flex justify="center" align="center" py={20}>
                <Spinner size="xl" thickness="4px" speed="0.65s" color="purple.600" />
            </Flex>
        )
    }

    if (error || !recipe) {
        return (
            <VStack spacing={4} py={20} textAlign="center">
                <Text color="red.500">{error || "Recipe not found"}</Text>
                <Button onClick={() => window.location.reload()} colorScheme="purple">
                    Try Again
                </Button>
            </VStack>
        )
    }

    return (
        <Box maxW="4xl" mx="auto">
            <Heading as="h1" size="xl" color="purple.800" mb={6}>
                {recipe.title}
            </Heading>

            <Box mb={8} borderRadius="xl" overflow="hidden">
                <Image src={recipe.image || "/placeholder.svg"} alt={recipe.title} w="full" h="350px" objectFit="cover" />
            </Box>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} mb={8}>
                <Box bg="white" p={4} borderRadius="lg" boxShadow="md">
                    <VStack>
                        <Info size={24} color="#805AD5" />
                        <Text fontSize="lg" fontWeight="semibold" color="purple.800">
                            {recipe.calories}
                        </Text>
                        <Text fontSize="sm" color="purple.600">
                            Calories per serving
                        </Text>
                    </VStack>
                </Box>

                <Box bg="white" p={4} borderRadius="lg" boxShadow="md">
                    <VStack>
                        <Clock size={24} color="#805AD5" />
                        <Text fontSize="lg" fontWeight="semibold" color="purple.800">
                            {recipe.prepTime + recipe.cookTime} min
                        </Text>
                        <Text fontSize="sm" color="purple.600">
                            Total time
                        </Text>
                    </VStack>
                </Box>

                <Box bg="white" p={4} borderRadius="lg" boxShadow="md">
                    <VStack>
                        <Users size={24} color="#805AD5" />
                        <Text fontSize="lg" fontWeight="semibold" color="purple.800">
                            {recipe.servings}
                        </Text>
                        <Text fontSize="sm" color="purple.600">
                            Servings
                        </Text>
                    </VStack>
                </Box>
            </SimpleGrid>

            <Box mb={8}>
                <Heading as="h2" size="lg" color="purple.800" mb={4}>
                    Cost Estimate
                </Heading>
                <Box bg="white" p={6} borderRadius="lg" boxShadow="md">
                    <Flex
                        direction={{ base: "column", sm: "row" }}
                        align={{ base: "flex-start", sm: "center" }}
                        justify="space-between"
                        gap={4}
                    >
                        <Box>
                            <Text fontSize="lg" fontWeight="medium" color="purple.800">
                                ₦{recipe.costInNaira.toLocaleString()}
                            </Text>
                            <Text fontSize="sm" color="purple.600">
                                Estimated cost in Naira
                            </Text>
                        </Box>
                        <CurrencyConverter amountInNaira={recipe.costInNaira} />
                    </Flex>
                </Box>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mb={8}>
                <Box>
                    <Heading as="h2" size="lg" color="purple.800" mb={4}>
                        Ingredients
                    </Heading>
                    <Box bg="white" p={6} borderRadius="lg" boxShadow="md">
                        <List spacing={2}>
                            {recipe.ingredients.map((ingredient, index) => (
                                <ListItem key={index} display="flex" alignItems="flex-start">
                                    <Box w="2" h="2" borderRadius="full" bg="purple.500" mt="2" mr="2" />
                                    <Text color="purple.900">{ingredient}</Text>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Box>

                <Box>
                    <Heading as="h2" size="lg" color="purple.800" mb={4}>
                        Instructions
                    </Heading>
                    <Box bg="white" p={6} borderRadius="lg" boxShadow="md">
                        <OrderedList spacing={4}>
                            {recipe.instructions.map((instruction, index) => (
                                <ListItem key={index} display="flex">
                                    <Center
                                        w="6"
                                        h="6"
                                        borderRadius="full"
                                        bg="purple.100"
                                        color="purple.800"
                                        fontWeight="medium"
                                        mr="3"
                                        flexShrink="0"
                                    >
                                        {index + 1}
                                    </Center>
                                    <Text color="purple.900">{instruction}</Text>
                                </ListItem>
                            ))}
                        </OrderedList>
                    </Box>
                </Box>
            </SimpleGrid>
        </Box>
    )
}


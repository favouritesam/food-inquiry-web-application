"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { SimpleGrid, Box, Heading, Text, Button, Flex, Spinner, Image, VStack } from "@chakra-ui/react"

interface Recipe {
    id: string
    title: string
    image: string
    calories: number
    servings: number
}

export default function RecipeList({ searchQuery }: { searchQuery: string }) {
    const [recipes, setRecipes] = useState<Recipe[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        if (!searchQuery) {
            setError("Invalid searchQuery")
            setLoading(false)
            return
        }
        const fetchRecipes = async () => {
            setLoading(true)
            try {
                // In a real app, you would fetch from an actual API
                // This is a mock implementation
                await new Promise((resolve) => setTimeout(resolve, 1000))

                // Mock data
                const mockRecipes: Recipe[] = [
                    {
                        id: "1",
                        title: "Vegetable Stir Fry",
                        image: "/img/VegetableStirFry.jpg",
                        calories: 320,
                        servings: 4,
                    },
                    {
                        id: "2",
                        title: "Chicken Curry",
                        image: "/img/chickenCurry.jpg",
                        calories: 450,
                        servings: 4,
                    },
                    {
                        id: "3",
                        title: "Pasta Primavera",
                        image: "/img/PastaPrimavera.jpg",
                        calories: 380,
                        servings: 3,
                    },
                    {
                        id: "4",
                        title: "Grilled Salmon",
                        image: "/img/GrilledSalmon.jpg",
                        calories: 290,
                        servings: 2,
                    },
                    {
                        id: "5",
                        title: "Quinoa Salad",
                        image: "/img/QuinoaSalad.jpg",
                        calories: 210,
                        servings: 4,
                    },
                    {
                        id: "6",
                        title: "Beef Stew",
                        image: "/img/BeefStew.jpg",
                        calories: 520,
                        servings: 6,
                    },
                ]

                // Filter recipes if there's a search query
                const filteredRecipes = searchQuery
                    ? mockRecipes.filter((recipe) => recipe.title.toLowerCase().includes(searchQuery.toLowerCase()))
                    : mockRecipes

                setRecipes(filteredRecipes)
            } catch (err) {
                setError("Failed to fetch recipes. Please try again later.")
                console.error(err)
            } finally {
                setLoading(false)
            }
        }

        fetchRecipes()
    }, [searchQuery])

    if (loading) {
        return (
            <Flex justify="center" align="center" py={20}>
                <Spinner size="xl" thickness="4px" speed="0.65s" color="purple.600" />
            </Flex>
        )
    }

    if (error) {
        return (
            <VStack spacing={4} py={20} textAlign="center">
                <Text color="red.500">{error}</Text>
                <Button onClick={() => window.location.reload()} colorScheme="purple">
                    Try Again
                </Button>
            </VStack>
        )
    }

    if (recipes.length === 0) {
        return (
            <VStack spacing={4} py={20} textAlign="center">
                <Text fontSize="lg" color="purple.800">
                    No recipes found for `{searchQuery}`
                </Text>
                <Text color="purple.600" mb={10}>
                    Try a different search term or browse our popular recipes
                </Text>
                <Link href="/recipes" passHref>
                    <Button colorScheme="purple">Browse All Recipes</Button>
                </Link>
            </VStack>
        )
    }

    return (
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={6}>
            {recipes.map((recipe) => (
                <Box
                    key={recipe.id}
                    borderRadius="xl"
                    overflow="hidden"
                    boxShadow="md"
                    transition="box-shadow 0.2s"
                    borderWidth="2px"
                    borderColor="purple.100"
                    _hover={{ borderColor: "purple.300",boxShadow: "lg" }}
                >
                    <Box overflow="hidden">
                        <Image
                            src={recipe.image || "/placeholder.svg"}
                            alt={recipe.title}
                            w="full"
                            h="auto"
                            aspectRatio={16 / 9}
                            objectFit="cover"
                            transition="transform 0.3s"
                            _hover={{ transform: "scale(1.05)" }}
                        />
                    </Box>
                    <Box p={4}>
                        <Heading as="h3" size="md" color="purple.800" mb={2}>
                            {recipe.title}
                        </Heading>
                        <Flex justify="space-between" fontSize="sm" color="purple.600">
                            <Text>{recipe.calories} calories per serving</Text>
                            <Text>{recipe.servings} servings</Text>
                        </Flex>
                    </Box>
                    <Box px={4} pb={4}>
                        <Link href={`/recipes/${recipe.id}`} passHref>
                            <Button as="a" colorScheme="purple" w="full">
                                View Recipe
                            </Button>
                        </Link>
                    </Box>
                </Box>
            ))}
        </SimpleGrid>
    )
}


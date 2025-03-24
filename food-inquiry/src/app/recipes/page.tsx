import {Suspense} from "react"
import {Box, Container, Heading, Flex, Spinner} from "@chakra-ui/react"
import RecipeSearch from "@/components/containers/recipe-search";
import RecipeList from "@/components/containers/recipe-list";


export default function RecipesPage({
                                        searchParams,
                                    }: {
    searchParams: { search?: string }
}) {
    const query = searchParams.search || ""

    return (
        <Box as="main" minH="100vh" bgGradient="linear(to-b, purple.50, white)" pt="4%">
            <Container maxW="container.xl" px={4} py={12}>
                <Heading as="h1" size="xl" color="purple.800" mb={8} textAlign="center">
                    {query ? `Recipes for "${query}"` : "Browse Recipes"}
                </Heading>

                <Box w="full" maxW="md" mx="auto" mb={12}>
                    <RecipeSearch/>
                </Box>

                <Suspense
                    fallback={
                        <Flex justify="center" align="center" py={20}>
                            <Spinner size="xl" thickness="4px" speed="0.65s" color="purple.600"/>
                        </Flex>
                    }
                >
                    <RecipeList searchQuery={query}/>
                </Suspense>
            </Container>
        </Box>
    )
}


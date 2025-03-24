import { Box, Container, Flex } from "@chakra-ui/react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import RecipeDetail from "@/components/containers/recipe-detail";


export default function RecipePage({ params }: { params: { id: string } }) {
    return (
        <Box as="main" minH="100vh" bgGradient="linear(to-b, purple.50, white)" pt="4%">
            <Container maxW="container.xl" px={4} py={12}>
                <Link href="/recipes" passHref>
                    <Flex as="a" align="center" color="purple.700" _hover={{ color: "purple.900" }} mb={8}>
                        <ArrowLeft size={16} style={{ marginRight: "8px" }} />
                        Back to recipes
                    </Flex>
                </Link>

                <RecipeDetail id={params.id} />
            </Container>
        </Box>
    )
}


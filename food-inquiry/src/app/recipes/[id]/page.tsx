"use client";

import { Box, Container, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useParams } from "next/navigation";
// import RecipeDetail from "@/components/containers/recipe-detail";
import dynamic from "next/dynamic";
const RecipeDetail = dynamic(() => import("@/components/containers/recipe-detail"), { ssr: false });


export default function RecipePage() {
    const params = useParams();
    const recipeId = params.id as string;

    return (
        <Box as="main" minH="100vh" bgGradient="linear(to-b, purple.50, white)" pt="4%">
            <Container maxW="container.xl" px={4} py={12}>

                <Link href="/recipes" passHref>
                    <Flex as="a" align="center" color="purple.700" _hover={{ color: "purple.900" }} mb={8}>
                        <ArrowLeft size={16} style={{ marginRight: "8px" }} />
                        Back to recipes
                    </Flex>
                </Link>

                <RecipeDetail id={recipeId} />
            </Container>
        </Box>
    );
}
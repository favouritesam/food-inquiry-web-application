import Link from "next/link"
import { Box, Container, Heading, Text, SimpleGrid, Flex, VStack } from "@chakra-ui/react"
import { Search } from "lucide-react"
import RecipeSearch from "@/components/containers/recipe-search";
import FoodAnimation from "@/components/containers/food-animation";


export default function Home() {
  return (
      <Box as="main" minH="100vh" bgGradient="linear(to-b, purple.50, white)">
        <Container maxW="container.xl" px={4} py='10%'>
          <VStack spacing={8} textAlign="center">
            <Heading as="h1" size={{ base: "xl", md: "2xl" }} color="purple.800" mt={{ base: "16", md: "0" }}>
              Find Your Perfect Recipe
            </Heading>

            <Text fontSize="lg" color="purple.600" maxW="2xl">
              Discover delicious recipes with nutrition information and cost estimates
            </Text>

            <Box w="full" maxW="md">
              <RecipeSearch />
            </Box>

            <Box w="full" maxW="lg">
              <FoodAnimation />
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full" maxW="4xl" mt='-16%'>
              <Link href="/recipes" passHref>
                <Flex
                    direction="column"
                    align="center"
                    p={6}
                    borderRadius="xl"
                    bg="white"
                    shadow="lg"
                    transition="all 0.2s"
                    border="2px"
                    borderColor="purple.200"
                    _hover={{ borderColor: "purple.400",shadow: "xl"  }}
                >
                  <Flex w="16" h="16" bg="purple.100" borderRadius="full" align="center" justify="center" mb={4}>
                    <Search size={32} color="#805AD5" />
                  </Flex>
                  <Heading as="h2" size="md" color="purple.800" mb={2}>
                    Browse Recipes
                  </Heading>
                  <Text color="purple.600" textAlign="center">
                    Explore our collection of delicious recipes with nutrition facts
                  </Text>
                </Flex>
              </Link>

              <Link href="/restaurants" passHref>
                <Flex
                    direction="column"
                    align="center"
                    p={6}
                    borderRadius="xl"
                    bg="white"
                    shadow="lg"
                    transition="all 0.2s"
                    border="2px"
                    borderColor="purple.200"
                    _hover={{ borderColor: "purple.400" ,  shadow: "xl" }}
                >
                  <Flex w="16" h="16" bg="purple.100" borderRadius="full" align="center" justify="center" mb={4}>
                    <Box
                        as="svg"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32px"
                        height="32px"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#805AD5"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                      <path d="M3 11l19-9-9 19-2-8-8-2z" />
                    </Box>
                  </Flex>
                  <Heading as="h2" size="md" color="purple.800" mb={2}>
                    Find Restaurants
                  </Heading>
                  <Text color="purple.600" textAlign="center">
                    Discover restaurants near you based on your location
                  </Text>
                </Flex>
              </Link>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>
  )
}


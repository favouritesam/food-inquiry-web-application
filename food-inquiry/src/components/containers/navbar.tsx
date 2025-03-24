"use client"

import Link from "next/link"
import { Box, Flex, Text, IconButton, Container, Stack, useDisclosure } from "@chakra-ui/react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <Box
            as="nav"
            bg="white"
            borderBottom="1px"
            borderColor="purple.100"
            position="fixed"
            top="0"
            left="0"
            right="0"
            width="100%"
            zIndex="1000"
            boxShadow="sm"
        >
            <Container maxW="container.xl" px={4}>
                <Flex h="16" alignItems="center" justifyContent="space-between">
                    <Link href="/" passHref>
                        <Flex as="a" alignItems="center">
                            <Text fontSize="2xl" fontWeight="bold" color="purple.800">
                                NutriRecipe
                            </Text>
                        </Flex>
                    </Link>

                    {/* Desktop menu */}
                    <Stack direction="row" spacing={8} display={{ base: "none", md: "flex" }}>
                        <Link href="/" passHref>
                            <Text as="a" color="purple.700" fontWeight="medium" _hover={{ color: "purple.900" }}>
                                Home
                            </Text>
                        </Link>
                        <Link href="/recipes" passHref>
                            <Text as="a" color="purple.700" fontWeight="medium" _hover={{ color: "purple.900" }}>
                                Recipes
                            </Text>
                        </Link>
                        <Link href="/restaurants" passHref>
                            <Text as="a" color="purple.700" fontWeight="medium" _hover={{ color: "purple.900" }}>
                                Restaurants
                            </Text>
                        </Link>
                    </Stack>

                    {/* Mobile menu button */}
                    <IconButton
                        display={{ base: "flex", md: "none" }}
                        onClick={onToggle}
                        icon={isOpen ? <X size={24} /> : <Menu size={24} />}
                        variant="ghost"
                        aria-label="Toggle Navigation"
                        color="purple.700"
                        _hover={{ color: "purple.900" }}
                    />
                </Flex>
            </Container>

            {/* Mobile menu */}
            {isOpen && (
                <Box display={{ base: "block", md: "none" }} bg="white" borderTop="1px" borderColor="purple.100" py={4}>
                    <Container maxW="container.xl" px={4}>
                        <Stack spacing={4}>
                            <Link href="/" passHref>
                                <Text
                                    as="a"
                                    color="purple.700"
                                    fontWeight="medium"
                                    py={2}
                                    _hover={{ color: "purple.900" }}
                                    onClick={onToggle}
                                >
                                    Home
                                </Text>
                            </Link>
                            <Link href="/recipes" passHref>
                                <Text
                                    as="a"
                                    color="purple.700"
                                    fontWeight="medium"
                                    py={2}
                                    _hover={{ color: "purple.900" }}
                                    onClick={onToggle}
                                >
                                    Recipes
                                </Text>
                            </Link>
                            <Link href="/restaurants" passHref>
                                <Text
                                    as="a"
                                    color="purple.700"
                                    fontWeight="medium"
                                    py={2}
                                    _hover={{ color: "purple.900" }}
                                    onClick={onToggle}
                                >
                                    Restaurants
                                </Text>
                            </Link>
                        </Stack>
                    </Container>
                </Box>
            )}
        </Box>
    )
}


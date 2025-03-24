"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { InputGroup, Input, InputRightElement, IconButton, Box } from "@chakra-ui/react"
import { Search } from "lucide-react"

export default function RecipeSearch() {
    const [query, setQuery] = useState("")
    const router = useRouter()

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        if (query.trim()) {
            router.push(`/recipes?search=${encodeURIComponent(query)}`)
        }
    }

    return (
        <Box as="form" onSubmit={handleSearch} position="relative" w="full">
            <InputGroup size="lg">
                <Input
                    type="text"
                    placeholder="Search for recipes..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    pl={4}
                    pr={12}
                    py={3}
                    borderRadius="full"
                    borderWidth="2px"
                    borderColor="purple.300"
                    _focus={{ borderColor: "purple.500", boxShadow: "0 0 0 1px var(--chakra-colors-purple-500)" }}
                    color="purple.900"
                />
                <InputRightElement width="4rem" h="full">
                    <IconButton
                        type="submit"
                        aria-label="Search"
                        icon={<Search size={20} />}
                        size="sm"
                        colorScheme="purple"
                        borderRadius="full"
                        position="absolute"
                        right="4px"
                        top="50%"
                        transform="translateY(-50%)"
                    />
                </InputRightElement>
            </InputGroup>
        </Box>
    )
}


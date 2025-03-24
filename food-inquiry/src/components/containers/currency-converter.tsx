"use client"

import { useState } from "react"
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Text,
    VStack,
    Box,
    Spinner,
    useDisclosure,
} from "@chakra-ui/react"
import { DollarSign } from "lucide-react"

interface CurrencyConverterProps {
    amountInNaira: number
}

export default function CurrencyConverter({ amountInNaira }: CurrencyConverterProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [amountInUSD, setAmountInUSD] = useState<number | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const convertCurrency = async () => {
        setLoading(true)
        setError("")

        try {
            // In a real app, you would use a currency conversion API
            // This is a mock implementation with a simulated exchange rate
            await new Promise((resolve) => setTimeout(resolve, 1000))

            // Mock exchange rate: 1 USD = ~1500 Naira (this would come from an API in a real app)
            const exchangeRate = 1500 + Math.random() * 100
            const convertedAmount = amountInNaira / exchangeRate

            setAmountInUSD(convertedAmount)
        } catch (err) {
            setError("Failed to convert currency. Please try again.")
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    const handleOpen = () => {
        onOpen()
        convertCurrency()
    }

    return (
        <>
            <Button variant="outline" colorScheme="purple" leftIcon={<DollarSign size={16} />} onClick={handleOpen}>
                Click to see USD
            </Button>

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Currency Conversion</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <Text color="gray.600" mb={4}>
                            Current conversion from Nigerian Naira (₦) to US Dollar ($)
                        </Text>

                        {loading ? (
                            <VStack py={8}>
                                <Spinner size="xl" thickness="4px" speed="0.65s" color="purple.600" mb={4} />
                                <Text color="purple.800">Converting currency...</Text>
                            </VStack>
                        ) : error ? (
                            <VStack py={8} textAlign="center">
                                <Text color="red.500" mb={4}>
                                    {error}
                                </Text>
                                <Button onClick={convertCurrency} colorScheme="purple">
                                    Try Again
                                </Button>
                            </VStack>
                        ) : amountInUSD !== null ? (
                            <VStack py={8} textAlign="center">
                                <Box mb={4}>
                                    <Text fontSize="lg" color="purple.800">
                                        Amount in Naira:
                                    </Text>
                                    <Text fontSize="2xl" fontWeight="bold" color="purple.900">
                                        ₦{amountInNaira.toLocaleString()}
                                    </Text>
                                </Box>
                                <Box mb={4}>
                                    <Text fontSize="lg" color="purple.800">
                                        Amount in USD:
                                    </Text>
                                    <Text fontSize="2xl" fontWeight="bold" color="purple.900">
                                        ${amountInUSD.toFixed(2)}
                                    </Text>
                                </Box>
                                <Text fontSize="sm" color="purple.600">
                                    Exchange rate is updated in real-time
                                </Text>
                            </VStack>
                        ) : (
                            <VStack py={8}>
                                <Text color="purple.800" mb={4}>
                                    Click convert to see the current rate
                                </Text>
                                <Button onClick={convertCurrency} colorScheme="purple">
                                    Convert Now
                                </Button>
                            </VStack>
                        )}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}


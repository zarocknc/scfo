import { Container } from "@chakra-ui/react"
import { Flex, Box } from "@chakra-ui/react"
import { Image, Button, ButtonGroup, Text, Spacer } from '@chakra-ui/react'
import Link from "next/link"


export default function Cabezal() {
    return (
        <Box bg="cyan">

            <Flex align="center" gap="2" mx="20px">
                <Link href="/">    
                    <Image src="/favlogo.svg" alt="SCFO logo" minW="60px" boxSize="6%"/>
                </Link>

                <Link href="/registro">
                    <Button>Registro</Button>
                </Link>
                <Link href="/">
                    <Button>HOME</Button>
                </Link>
                <Button>Button</Button>
                <Button>Button</Button>
                <Spacer />
                <Button>Hola</Button>


            </Flex>
            {/* <h1>Fuera del flexbox</h1> */}
        </Box>
    )
}


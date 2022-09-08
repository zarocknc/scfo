import { Container } from "@chakra-ui/react"
import { Flex, Box } from "@chakra-ui/react"
import { Image, Button, ButtonGroup, Text, Spacer } from '@chakra-ui/react'
import Link from "next/link"
import { IconButton } from "@chakra-ui/react"
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons"


export default function Cabezal() {
    return (
        <Box bg="#00B5D8">

            <Flex align="center" gap="2" mx="20px">
                <Link href="/">    
                    <Image src="/favlogo.svg" alt="SCFO logo" minW="60px" boxSize="6%"/>
                </Link>

                <Flex gap="2" pos="fixed" top="1rem" right="1rem" 
                display={["none","none","flex","flex"]}>
                    <Link href="/registro">
                        <Button>Registro</Button>
                    </Link>
                    <Link href="/">
                        <Button>HOME</Button>
                    </Link>
                    <Link href="/trabajos">
                        <Button>Trabajos</Button>
                    </Link>
                    <Link href="/fundamentos">
                        <Button>Examen Fundamentos de programacion</Button>
                    </Link>
                </Flex>

                <IconButton
                aria-label="Open Menu"
                pos="fixed"
                top="1rem"
                right="1rem"
                size="lg"
                mr="2"
                icon={<HamburgerIcon />}
                display={["flex","flex","none","none"]} />

                
                



            </Flex>
            {/* <h1>Fuera del flexbox</h1> */}
            
            {/* <Flex w="100vw" bgColor="gray.50" pos="fixed" zIndex={20} h="100vh" top={0} left={0}>
                    <Flex flexDir="column" align="center">
                    <Link href="/registro">
                        <Button>Registro</Button>
                    </Link>
                    <Link href="/">
                        <Button>HOME</Button>
                    </Link>
                    <Button>Trabajos</Button>
                    <Button>Documentos</Button>
                </Flex>
                </Flex> */}

        </Box>
        
    )
}


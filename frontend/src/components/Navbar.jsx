import { Button, Container,Flex,HStack,Text, useColorMode} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { CiSquarePlus } from "react-icons/ci";
import { MdOutlineWbSunny } from "react-icons/md";
import { px } from 'framer-motion';
import { IoSunny,IoMoon  } from "react-icons/io5";


function Navbar() {

  const {colorMode,toggleColorMode} = useColorMode("dark");

  return (
    <Container maxW={"1140px"} px={4}>
      <Flex h={16} 
        alignItems={"center"} 
        justifyContent={"space-between"}
        flexDir={
          {base:"columns",
            sm:"row"
          }
        }> 
        <Text 
        bgGradient={colorMode==="dark"?'linear(to-l, #b1fcdf, #d8ffc2)':'linear(to-l, #237839, #44ba00)'}
        bgClip='text'
        fontSize='4xl'
        fontWeight='bold'
        textAlign={'center'}><Link to={"/"}>PRODUCTS PAGE</Link> 
        </Text>
        <HStack spacing={2} alignItems={'center'}>
          <Link to={"/create"}>
          <Button><CiSquarePlus fontSize={25}/></Button></Link>
          <Button onClick={toggleColorMode}>{colorMode === "light"?<IoMoon />:<IoSunny />}</Button>
        </HStack>
      </Flex>
    </Container>
  )
}

export default Navbar
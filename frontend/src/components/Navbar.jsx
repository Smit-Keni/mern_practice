import { Button, Container,Flex,HStack,Text} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { CiSquarePlus } from "react-icons/ci";
import { MdOutlineWbSunny } from "react-icons/md";
import { px } from 'framer-motion';

function Navbar() {
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
        bgGradient='linear(to-l, #5efc03, #b3ff00)'
        bgClip='text'
        fontSize='4xl'
        fontWeight='bold'
        textAlign={'center'}><Link to={"/"}>PRODUCTS🥕</Link> 
        </Text>
        <HStack spacing={2} alignItems={'center'}>
          <Link to={"/create"}>
          <Button><CiSquarePlus fontSize={25}/></Button></Link>
          <Button><MdOutlineWbSunny fontSize={25} /></Button>
        </HStack>
      </Flex>
    </Container>
  )
}

export default Navbar
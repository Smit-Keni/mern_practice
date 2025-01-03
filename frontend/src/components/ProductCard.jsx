import { Box, Heading, HStack, IconButton, Image, Text, useColorModeValue, useToast } from '@chakra-ui/react'
import { transform } from 'framer-motion'
import React from 'react'
import { RiPencilFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { useProductStore } from '../store/product';

function ProductCard({product}) {

    const textColor = useColorModeValue("gray.600","gray.200");
    const bg = useColorModeValue("white","gray.800")
    const {deleteProduct} = useProductStore()
    const toast = useToast()

    const handleDeleteProduct = async (pid)=>{
        const {success,message} = await deleteProduct(pid)
        if(!success){
            toast({
              title: 'Couldn\'t delete product.',
              description: message,
              status: 'error',
              duration: 3000,
              isClosable: true,
              
              
            })
          }
          else{
            toast({
              title: 'Product deleted.',
              description: message,
              status: 'success',
              duration: 3000,
              isClosable: true,
          })
          }
    }

  return (
    <Box
    shadow="lg"
    rounded="lg"
    overflow="hidden"
    transition='all 0.3s'
    _hover={{transform:"translateY(-5px)",shadow:"xl"}}
    bg={bg}>
        <Image src={product.image} alt={product.name} h={48} w='full' objectfit='cover'></Image>
        <Box p={4}>
            <Heading as='h3' size='md' mb={2}>{product.name}</Heading>
            <Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>₹ {product.price} </Text>
            <HStack spacing={2}>
					<IconButton icon={<RiPencilFill />} colorScheme='blue' />
					<IconButton
						icon={<MdDelete />}
						onClick={()=>handleDeleteProduct(product._id)}
						colorScheme='red'
					/>
			</HStack>
        </Box>
    </Box>
  )
}

export default ProductCard
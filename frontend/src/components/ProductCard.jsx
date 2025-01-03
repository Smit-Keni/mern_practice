import { Box, Button, Heading, HStack, IconButton, Image, Input, Modal, ModalBody, ModalCloseButton, ModalFooter, ModalHeader, ModalOverlay, Text, useColorModeValue, useDisclosure, useToast, VStack } from '@chakra-ui/react'
import { transform } from 'framer-motion'
import React, { useState } from 'react'
import { RiPencilFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { useProductStore } from '../store/product';

function ProductCard({product}) {

    const textColor = useColorModeValue("gray.600","gray.200");
    const bg = useColorModeValue("white","gray.800")
    const {deleteProduct,updateProduct} = useProductStore()
    const toast = useToast()
    const [updatedProduct,setUpdatedProduct] = useState(product);

    const { isOpen, onOpen, onClose } = useDisclosure()

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

   
    const handleUpdateProduct = async (pid,updatedProduct) =>{
        const {success,message} = await updateProduct(pid,updatedProduct)
        onClose()
        if(!success){
            toast({
              title: 'Couldn\'t update product.',
              description: message,
              status: 'error',
              duration: 3000,
              isClosable: true,
              
              
            })
          }
          else{
            toast({
              title: 'Product updated.',
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
					<IconButton icon={<RiPencilFill />} onClick={onOpen} colorScheme='blue' />
					<IconButton
						icon={<MdDelete />}
						onClick={()=>handleDeleteProduct(product._id)}
						colorScheme='red'
					/>
			</HStack>
        </Box>
        <Modal isOpen={isOpen} onClose={onClose} bg='#323740'>
            <ModalOverlay>
                <ModalHeader>Update Product</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <VStack>
                    <Input placeholder='Product Name' name='name' value={updatedProduct.name}
                    onChange={(e)=> setUpdatedProduct({...updatedProduct,name:e.target.value})}/>
                    <Input placeholder='Price' name='price' type="number" value={updatedProduct.price}
                    onChange={(e)=> setUpdatedProduct({...updatedProduct,price:e.target.value})}/>
                    <Input placeholder='Image URL' name='image' value={updatedProduct.image}
                    onChange={(e)=> setUpdatedProduct({...updatedProduct,image:e.target.value})}/>
                    </VStack>
                    
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={()=>handleUpdateProduct(product._id,updatedProduct)}>Update</Button>
                    <Button variant="ghost" mr={3} onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalOverlay>
        </Modal>
    </Box>
  )
}

export default ProductCard
import { Box, Button, Container, Heading, Input, useColorModeValue, VStack } from '@chakra-ui/react';
import React from 'react'
import { useState } from 'react'
import { useProductStore } from '../store/product';
import { useToast } from '@chakra-ui/react'

const CreatePage = () => {

  const [newProduct,setNewProduct] = useState({
    name:"",
    price:"",
    image:""
  });

  const toast = useToast()

  const {createProduct} = useProductStore()

  const handleAddProduct =  async ()=>{
    const {success,message}= await createProduct(newProduct);
    if(!success){
      toast({
        title: 'Couldn\'t add product.',
        description: "Please check the entered information",
        status: 'error',
        duration: 3000,
        isClosable: true,
        
        
      })
    }
    else{
      toast({
        title: 'Product added succesfully.',
        description: "",
        status: 'success',
        duration: 3000,
        isClosable: true,
    })
    }}
  
  return (
    <Container maxW={"container.sm"} py={20}>
      <VStack spacing={8} >  
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create New Product
        </Heading>
        <Box w={"full"} bg={useColorModeValue("white","gray.800")} p={6} rounded={"lg"} shadow={"md"}> 
          <VStack spacing={8} padding={5}>
            <Input placeholder='Product Name'
            name="name"
            value={newProduct.name}
            onChange={(e)=>setNewProduct({...newProduct,name:e.target.value})}>

            </Input>
            <Input placeholder='Price'
            name="price"
            value={newProduct.price}
            onChange={(e)=>setNewProduct({...newProduct,price:e.target.value})}>
              
            </Input>
            <Input placeholder='Image URL'
            name="image"
            value={newProduct.image}
            onChange={(e)=>setNewProduct({...newProduct,image:e.target.value})}>
              
            </Input>
            <Button colorScheme='green' onClick={handleAddProduct}>Add Product</Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default CreatePage
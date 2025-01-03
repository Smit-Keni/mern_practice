import { Box, Container, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProductStore } from '../store/product';
import ProductCard from '../components/ProductCard';

const Homepage = () => {

  const {fetchProducts,products}=useProductStore();

  useEffect(()=>{
    fetchProducts();
  }, [fetchProducts]);
  console.log("products",products)

  return (
    <Container maxW='container.xl' py={12} >
      <VStack spacing={8}>
        <Text 
                bgGradient={'linear(to-l, #237839, #44ba00)'}
                bgClip='text'
                fontSize='4xl'
                fontWeight='bold'
                textAlign={'center'}><Link to={"/"}>Current Products</Link> 
                </Text>
        <SimpleGrid columns={{
          base:1,
          md:2,
          lg:3
        }} spacing={10}
        w={"full"}>
          {products.map((product)=>(<ProductCard key={product._id} product={product}/>))}

        
        </SimpleGrid>

        {products.length===0 &&(
          <Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
          No products found 😢{" "}
          <Link to={"/create"}>
            <Text as='span' color='green.100' _hover={{ textDecoration: "underline" }}>
              Create a product
            </Text>
          </Link>
        </Text>
        )}
        
      </VStack>
    </Container>
  )
}

export default Homepage
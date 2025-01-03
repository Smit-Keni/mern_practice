import { Box, Container, useColorModeValue} from "@chakra-ui/react"
import Homepage from "./Pages/Homepage";
import CreatePage from "./Pages/CreatePage";
import Navbar from "./components/Navbar";
import { Route,Routes } from "react-router-dom";



function App() {
 

  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.50","gray.900")}>
      <Navbar/>
      <Container>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/create" element={<CreatePage />}/>
        </Routes>

      </Container>
      
    </Box>
  );
}

export default App

import { Box, Container} from "@chakra-ui/react"
import Homepage from "./Pages/Homepage";
import CreatePage from "./Pages/CreatePage";
import Navbar from "./components/Navbar";
import { Route,Routes } from "react-router-dom";



function App() {
 

  return (
    <Box minH={"100vh"}>
      <Navbar/>
      <Container maxW={"1140px"} px={4}>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/create" element={<CreatePage />}/>
        </Routes>

      </Container>
      
    </Box>
  );
}

export default App

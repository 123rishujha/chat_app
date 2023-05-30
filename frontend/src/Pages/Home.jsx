import React, { useEffect } from "react";
import {
  Box,
  Container,
  Tab,
  TabList,
  Tabs,
  Text,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if(user) history.push("/chats");
  },[history]);
  
  
  
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl">Talk-A-Tive</Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded" colorScheme="green">
          <TabList>
            <Tab>Login</Tab>
            <Tab>Sign up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Home;

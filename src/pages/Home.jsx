import { Box, Button, Flex, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        bgImage="url('http://stock.calucid.com/fetch/calucid/pho-bowl/delicious-pho')"
        bgSize="cover"
        bgPosition="center"
        height={{ base: "60vh", md: "80vh" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        color="white"
      >
        <Box bg="rgba(0, 0, 0, 0.6)" p={6} borderRadius="md">
          <Heading fontSize={{ base: "3xl", md: "5xl" }}>Welcome to Pho Bowl</Heading>
          <Text fontSize={{ base: "md", md: "xl" }} mt={4}>
            Authentic Vietnamese Cuisine in Bethlehem, PA
          </Text>
          <Button as={RouterLink} to="/menu" colorScheme="red" size="lg" mt={6}>
            View Menu
          </Button>
        </Box>
      </Box>

      {/* About Section */}
      <Flex direction={{ base: "column", md: "row" }} align="center" p={8} gap={8}>
        <Image 
          src="http://stock.calucid.com/fetch/calucid/pho-bowl/restaurant-interior" 
          alt="Restaurant Interior" 
          width={{ base: "100%", md: "50%" }} 
          height="300px" 
          objectFit="cover" 
          borderRadius="md" 
        />
        <Box flex="1">
          <Heading fontSize="2xl">About Us</Heading>
          <Text mt={4}>
            At Pho Bowl, we bring the rich flavors of Vietnam to your table. Our handcrafted pho and traditional dishes 
            are made with the freshest ingredients and authentic recipes.
          </Text>
          <Button as={RouterLink} to="/about" colorScheme="red" mt={4}>
            Learn More
          </Button>
        </Box>
      </Flex>

      {/* Featured Dishes */}
      <Box bg="gray.100" py={12} textAlign="center">
        <Heading fontSize="2xl">Our Specialties</Heading>
        <Flex wrap="wrap" justify="center" gap={6} mt={6}>
          <Box width={{ base: "90%", md: "30%" }} bg="white" p={4} borderRadius="md" boxShadow="md">
            <Image 
              src="http://stock.calucid.com/fetch/calucid/pho-bowl/beef-pho" 
              alt="Beef Pho" 
              width="100%" 
              height="200px" 
              objectFit="cover" 
              borderRadius="md" 
            />
            <Heading fontSize="lg" mt={4}>Beef Pho</Heading>
            <Text mt={2}>Rich broth, tender beef, fresh herbs.</Text>
          </Box>
          <Box width={{ base: "90%", md: "30%" }} bg="white" p={4} borderRadius="md" boxShadow="md">
            <Image 
              src="http://stock.calucid.com/fetch/calucid/pho-bowl/spring-rolls" 
              alt="Spring Rolls" 
              width="100%" 
              height="200px" 
              objectFit="cover" 
              borderRadius="md" 
            />
            <Heading fontSize="lg" mt={4}>Spring Rolls</Heading>
            <Text mt={2}>Fresh veggies, shrimp, and peanut sauce.</Text>
          </Box>
          <Box width={{ base: "90%", md: "30%" }} bg="white" p={4} borderRadius="md" boxShadow="md">
            <Image 
              src="http://stock.calucid.com/fetch/calucid/pho-bowl/vermicelli-bowl" 
              alt="Vermicelli Bowl" 
              width="100%" 
              height="200px" 
              objectFit="cover" 
              borderRadius="md" 
            />
            <Heading fontSize="lg" mt={4}>Vermicelli Bowl</Heading>
            <Text mt={2}>Grilled meats, fresh herbs, and rice noodles.</Text>
          </Box>
        </Flex>
        <Button as={RouterLink} to="/menu" colorScheme="red" mt={6}>
          Explore Full Menu
        </Button>
      </Box>

      {/* Visit Us Section */}
      <Flex direction={{ base: "column", md: "row" }} align="center" p={8} gap={8}>
        <Box flex="1">
          <Heading fontSize="2xl">Visit Us</Heading>
          <Text mt={4}>
            524 W Broad St, Bethlehem, PA 18018, USA
          </Text>
          <Text mt={2} fontWeight="bold">(610) 419-4484</Text>
          <Button as={RouterLink} to="/visit" colorScheme="red" mt={4}>
            Get Directions
          </Button>
        </Box>
        <Image 
          src="http://stock.calucid.com/fetch/calucid/pho-bowl/restaurant-exterior" 
          alt="Restaurant Exterior" 
          width={{ base: "100%", md: "50%" }} 
          height="300px" 
          objectFit="cover" 
          borderRadius="md" 
        />
      </Flex>
    </Box>
  );
};

export default Home;
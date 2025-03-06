import { Box, Heading, Text, Image, VStack, HStack, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const About = () => {
  return (
    <Box maxW="1200px" mx="auto" p={4}>
      <VStack spacing={8} textAlign="center">
        <Heading as="h1" size="2xl">
          About Pho Bowl
        </Heading>
        <Image 
          src="http://stock.calucid.com/fetch/calucid/pho-bowl/restaurant-interior" 
          alt="Pho Bowl Interior" 
          width="100%" 
          height="400px" 
          objectFit="cover"
          borderRadius="md"
        />
        <Text fontSize="lg" maxW="800px">
          Welcome to Pho Bowl, your go-to destination for authentic Vietnamese cuisine in Bethlehem, PA. 
          Located at 524 W Broad St, we take pride in serving traditional pho, fresh spring rolls, and 
          other Vietnamese delicacies made with the finest ingredients.
        </Text>
        
        <HStack spacing={4}>
          <Link as={RouterLink} to="/menu">
            <Button colorScheme="teal" size="lg">View Menu</Button>
          </Link>
          <Link as={RouterLink} to="/visit">
            <Button colorScheme="orange" size="lg">Visit Us</Button>
          </Link>
        </HStack>

        <Heading as="h2" size="xl">
          Our Story
        </Heading>
        <Image 
          src="http://stock.calucid.com/fetch/calucid/pho-bowl/vietnamese-chef" 
          alt="Vietnamese Chef" 
          width="100%" 
          height="300px" 
          objectFit="cover"
          borderRadius="md"
        />
        <Text fontSize="lg" maxW="800px">
          At Pho Bowl, we are passionate about bringing the rich flavors of Vietnam to our community. 
          Our recipes have been passed down through generations, and we strive to create an inviting 
          atmosphere where every guest feels like family.
        </Text>

        <Heading as="h2" size="xl">
          Fresh Ingredients, Authentic Taste
        </Heading>
        <Image 
          src="http://stock.calucid.com/fetch/calucid/pho-bowl/fresh-ingredients" 
          alt="Fresh Ingredients" 
          width="100%" 
          height="300px" 
          objectFit="cover"
          borderRadius="md"
        />
        <Text fontSize="lg" maxW="800px">
          We believe that great food starts with great ingredients. That’s why we use only the freshest 
          herbs, vegetables, and meats to craft our dishes. From our signature pho broth to our 
          handcrafted spring rolls, every bite is a taste of Vietnam.
        </Text>

        <Heading as="h2" size="xl">
          Visit Us Today
        </Heading>
        <Image 
          src="http://stock.calucid.com/fetch/calucid/pho-bowl/restaurant-exterior" 
          alt="Pho Bowl Exterior" 
          width="100%" 
          height="300px" 
          objectFit="cover"
          borderRadius="md"
        />
        <Text fontSize="lg" maxW="800px">
          Whether you're craving a warm bowl of pho or looking to explore Vietnamese cuisine, Pho Bowl 
          is the perfect place to start. Stop by and experience the flavors of Vietnam right here in 
          Bethlehem, PA.
        </Text>

        <HStack spacing={4}>
          <Link as={RouterLink} to="/contact">
            <Button colorScheme="blue" size="lg">Contact Us</Button>
          </Link>
          <Link as={RouterLink} to="/visit">
            <Button colorScheme="green" size="lg">Get Directions</Button>
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
};

export default About;
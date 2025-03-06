import { Box, Heading, Text, Image, VStack, HStack, Link, Divider } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Visit = () => {
  return (
    <Box maxW="1200px" mx="auto" p={4}>
      <VStack spacing={6} textAlign="center">
        <Heading as="h1" size="2xl">Visit Us</Heading>
        <Image 
          src="http://stock.calucid.com/fetch/calucid/pho-bowl/restaurant-exterior" 
          alt="Pho Bowl Exterior" 
          width="100%" 
          height="300px" 
          objectFit="cover"
          borderRadius="md"
        />
        <Text fontSize="lg">Experience authentic Vietnamese cuisine at Pho Bowl.</Text>
      </VStack>

      <Divider my={6} />

      <VStack spacing={4} align="center">
        <Heading as="h2" size="lg">Our Location</Heading>
        <Text fontSize="md">524 W Broad St, Bethlehem, PA 18018, USA</Text>
        <Image 
          src="http://stock.calucid.com/fetch/calucid/pho-bowl/location-map" 
          alt="Pho Bowl Location Map" 
          width="100%" 
          height="250px" 
          objectFit="cover"
          borderRadius="md"
        />
      </VStack>

      <Divider my={6} />

      <VStack spacing={4} align="center">
        <Heading as="h2" size="lg">Hours of Operation</Heading>
        <Text fontSize="md">
          <strong>Monday - Friday:</strong> 11:00 AM - 9:00 PM
        </Text>
        <Text fontSize="md">
          <strong>Saturday - Sunday:</strong> 12:00 PM - 10:00 PM
        </Text>
      </VStack>

      <Divider my={6} />

      <VStack spacing={4} align="center">
        <Heading as="h2" size="lg">Contact Us</Heading>
        <Text fontSize="md">Phone: <Link href="tel:+16104194484" color="teal.500">(610) 419-4484</Link></Text>
      </VStack>

      <Divider my={6} />

      <VStack spacing={4} align="center">
        <Heading as="h2" size="lg">Explore More</Heading>
        <HStack spacing={6}>
          <Link as={RouterLink} to="/" color="teal.500">Home</Link>
          <Link as={RouterLink} to="/menu" color="teal.500">Menu</Link>
          <Link as={RouterLink} to="/about" color="teal.500">About</Link>
          <Link as={RouterLink} to="/contact" color="teal.500">Contact</Link>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Visit;
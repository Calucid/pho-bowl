import { Box, Container, Heading, Text, Link, VStack, HStack, Input, Textarea, Button, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={6} align="stretch">
        <Heading textAlign="center">Contact Us</Heading>

        <Box textAlign="center">
          <Text fontSize="lg">Pho Bowl</Text>
          <Text>524 W Broad St, Bethlehem, PA 18018, USA</Text>
          <Text>Phone: <Link href="tel:+16104194484">(610) 419-4484</Link></Text>
          <Text>Email: <Link href="mailto:contact@phobowl.com">contact@phobowl.com</Link></Text>
        </Box>

        <Box>
          <Heading size="md" mb={3}>Follow Us</Heading>
          <HStack spacing={4}>
            <IconButton as={Link} href="https://facebook.com" icon={<FaFacebook />} aria-label="Facebook" size="lg" />
            <IconButton as={Link} href="https://instagram.com" icon={<FaInstagram />} aria-label="Instagram" size="lg" />
            <IconButton as={Link} href="https://twitter.com" icon={<FaTwitter />} aria-label="Twitter" size="lg" />
          </HStack>
        </Box>

        <Box>
          <Heading size="md" mb={3}>Send Us a Message</Heading>
          <VStack spacing={4} align="stretch">
            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Textarea placeholder="Your Message" />
            <Button colorScheme="teal" width="full">Send Message</Button>
          </VStack>
        </Box>

        <Box>
          <Heading size="md" mb={3}>Find Us</Heading>
          <Box>
            <img 
              src="http://stock.calucid.com/fetch/calucid/pho-bowl/map" 
              alt="Pho Bowl Location" 
              width="100%" 
              height="300px" 
              style={{ borderRadius: "8px" }} 
            />
          </Box>
        </Box>
      </VStack>
    </Container>
  );
};

export default Contact;
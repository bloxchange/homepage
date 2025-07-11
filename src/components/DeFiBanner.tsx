import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const DeFiBanner = () => {
  return (
    <Box
      as="section"
      py={20}
      bg="brand.background"
      borderBottom="1px solid"
      borderColor="brand.border"
    >
      <Container maxW="container.xl">
        <VStack gap={8} alignItems="center" textAlign="center">
          <VStack gap={4} alignItems="center">
            <Heading
              as="h1"
              size="4xl"
              color="brand.text"
              textShadow="glow"
              fontFamily="monospace"
              letterSpacing="wider"
              //bgGradient="linear(to-r, brand.primary, brand.accent)"
              bgClip="text"
            >
              DeFi Revolution
            </Heading>
          </VStack>
          <Heading
            as="h2"
            size="lg"
            color="brand.text"
            fontFamily="monospace"
            fontWeight="normal"
            maxW="3xl"
          >
            Decentralizing the Centralized: A New Computing Paradigm
          </Heading>
          <Text fontSize="xl" color="brand.muted" maxW="2xl" lineHeight="tall">
            Blockchain opened the decentralized world, but ironically, it has
            become centralized somewhere. Can we decentralize it once more?
            Computing resources remain a barrier to true decentralization. Our
            mission is to optimize personal resources, making decentralized
            computing accessible to everyone and breaking down the barriers that
            prevent true financial freedom.
          </Text>
          <HStack gap={4} pt={4}>
            <RouterLink to="/about" style={{ textDecoration: 'none' }}>
              <Button
                size="lg"
                bg="brand.primary"
                color="white"
                _hover={{ bg: 'brand.primaryHover' }}
                fontFamily="monospace"
              >
                Learn More
              </Button>
            </RouterLink>
            <RouterLink to="/contact" style={{ textDecoration: 'none' }}>
              <Button
                size="lg"
                variant="outline"
                borderColor="brand.primary"
                color="brand.primary"
                _hover={{
                  bg: 'brand.primary',
                  color: 'white',
                }}
                fontFamily="monospace"
              >
                Join the Movement
              </Button>
            </RouterLink>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default DeFiBanner;

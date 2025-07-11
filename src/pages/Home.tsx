import { Box, Button, Container, Heading, HStack, Link, Text, VStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {

  return (
    <Box as="section" py={20} bg="brand.background" borderBottom="1px solid" borderColor="brand.border">
      <Container maxW="container.xl">
        <VStack gap={8} alignItems="center" textAlign="center">
          <Heading
            as="h1"
            size="4xl"
            color="brand.text"
            textShadow="glow"
            fontFamily="monospace"
            letterSpacing="wider"
            bgGradient="linear(to-r, brand.primary, brand.accent)"
            bgClip="text"
          >
            Traze
          </Heading>
          <Heading
            as="h2"
            size="lg"
            color="brand.text"
            fontFamily="monospace"
            fontWeight="normal"
            maxW="3xl"
          >
            A Modern Component Library for Building Beautiful and Responsive Web Applications
          </Heading>
          <Text
            fontSize="xl"
            color="brand.muted"
            maxW="2xl"
            lineHeight="tall"
          >
            Traze provides a comprehensive suite of customizable UI components, powerful theming capabilities, and intuitive APIs to help you create stunning user interfaces with ease.
          </Text>
          <HStack gap={4} pt={4}>
            <Link
              href="https://traze.bloxchange.dev"
              target="_blank"
              rel="noopener noreferrer"
              _hover={{ textDecoration: 'none' }}
            >
              <Button
                bg="brand.primary"
                color="brand.background"
                _hover={{ boxShadow: 'glow' }}
                fontFamily="monospace"
              >
                Try it Now
              </Button>
            </Link>
            <Link
              asChild
              _hover={{ textDecoration: 'none' }}
            >
              <RouterLink to="/traze-docs">
                <Button
                  bg="brand.primary"
                  color="brand.background"
                  _hover={{ boxShadow: 'glow' }}
                  fontFamily="monospace"
                >
                  Documentation
                </Button>
              </RouterLink>
            </Link>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Home;

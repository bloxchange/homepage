import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Link,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const TrazeBanner = () => {
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
            <Image
              src="/images/traze_app_icon.png"
              alt="Traze Logo"
              boxSize="120px"
              objectFit="contain"
            />
            <Heading
              as="h1"
              size="4xl"
              color="brand.primary"
              textShadow="glow"
              fontFamily="monospace"
              letterSpacing="wider"
              bgGradient="linear(to-r, brand.primary, brand.accent)"
            //bgClip="text"
            >
              Traze
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
            Advanced Trading Tools for Solana DEXs
          </Heading>
          <Text fontSize="xl" color="brand.muted" maxW="2xl" lineHeight="tall">
            Traze is a comprehensive suite of trading tools designed to enhance
            your decentralized trading experience on Solana blockchain. Run
            directly in your browser with no extra fees, featuring advanced
            analytics, wallet management, and specialized tools for DEX trading
            including pump.fun support.
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
                Launch Traze
              </Button>
            </Link>
            <RouterLink to="/traze-docs" style={{ textDecoration: 'none' }}>
              <Button
                bg="brand.primary"
                color="brand.background"
                _hover={{ boxShadow: 'glow' }}
                fontFamily="monospace"
              >
                Documentation
              </Button>
            </RouterLink>
          </HStack>
        </VStack>
      </Container>
    </Box >
  );
};

export default TrazeBanner;

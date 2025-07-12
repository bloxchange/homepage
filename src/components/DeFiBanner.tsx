import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';

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
              bgGradient="linear(to-r, brand.primary, brand.accent)"
            >
              DeFi Enhancement
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
            Optimizing Decentralization: Building Better DeFi Infrastructure
          </Heading>
          <Text fontSize="xl" color="brand.muted" maxW="2xl" lineHeight="tall">
            While blockchain technology has opened doors to decentralization,
            many DeFi platforms still face challenges with accessibility and
            resource optimization. We're enhancing the existing ecosystem by
            improving computing efficiency and making decentralized finance
            more accessible. Our approach focuses on optimizing personal
            resources and strengthening the infrastructure that powers
            decentralized financial services.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default DeFiBanner;

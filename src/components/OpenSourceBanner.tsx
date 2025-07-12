import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';

const OpenSourceBanner = () => {
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
          <Heading
            as="h1"
            size="4xl"
            color="brand.primary"
            textShadow="glow"
            fontFamily="monospace"
            letterSpacing="wider"
            bgGradient="linear(to-r, brand.primary, brand.accent)"
          >
            Open Source & Free
          </Heading>
          <Heading
            as="h2"
            size="lg"
            color="brand.text"
            fontFamily="monospace"
            fontWeight="normal"
            maxW="3xl"
          >
            Transparency Through Technology: Building Trust in the Open
          </Heading>
          <Text fontSize="xl" color="brand.muted" maxW="2xl" lineHeight="tall">
            By leveraging blockchain technology, we can open all contents to be
            transparent without concerns about security. bloXchange embraces this
            philosophy - we believe that openness is the path to achieving true
            security and transparency. Our commitment to open source development
            ensures that our community can verify, contribute, and trust in our
            mission to democratize decentralized finance.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default OpenSourceBanner;
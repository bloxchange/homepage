import {
  Box,
  Container,
  Heading,
  HStack,
  Icon,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FaDiscord, FaGithub, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const ContactBanner = () => {
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
            Get In Touch
          </Heading>
          <Heading
            as="h2"
            size="lg"
            color="brand.text"
            fontFamily="monospace"
            fontWeight="normal"
            maxW="3xl"
          >
            Connect with the bloXchange Community
          </Heading>
          <Text fontSize="xl" color="brand.muted" maxW="2xl" lineHeight="tall">
            Have questions about our platform? Want to contribute to our open
            source projects? Looking to collaborate or provide feedback? We'd
            love to hear from you. Join our community and be part of the
            decentralized future we're building together.
          </Text>
          <HStack gap={6} flexWrap="wrap" justifyContent="center">
            <Link
              href="https://discord.gg/fVM6pd3Z"
              color="brand.text"
              _hover={{
                color: 'brand.accent',
                textShadow: 'glow',
                transform: 'scale(1.1)',
              }}
              transition="all 0.2s"
            >
              <VStack gap={2}>
                <Icon as={FaDiscord} boxSize={8} />
                <Text fontFamily="monospace" fontSize="sm">Discord</Text>
              </VStack>
            </Link>
            <Link
              href="https://x.com/bloxchangedev"
              color="brand.text"
              _hover={{
                color: 'brand.accent',
                textShadow: 'glow',
                transform: 'scale(1.1)',
              }}
              transition="all 0.2s"
            >
              <VStack gap={2}>
                <Icon as={FaXTwitter} boxSize={8} />
                <Text fontFamily="monospace" fontSize="sm">X</Text>
              </VStack>
            </Link>
            <Link
              href="https://github.com/bloxchange"
              color="brand.text"
              _hover={{
                color: 'brand.accent',
                textShadow: 'glow',
                transform: 'scale(1.1)',
              }}
              transition="all 0.2s"
            >
              <VStack gap={2}>
                <Icon as={FaGithub} boxSize={8} />
                <Text fontFamily="monospace" fontSize="sm">GitHub</Text>
              </VStack>
            </Link>
            <Link
              href="mailto:ducnn@bloxchange.dev"
              color="brand.text"
              _hover={{
                color: 'brand.accent',
                textShadow: 'glow',
                transform: 'scale(1.1)',
              }}
              transition="all 0.2s"
            >
              <VStack gap={2}>
                <Icon as={FaEnvelope} boxSize={8} />
                <Text fontFamily="monospace" fontSize="sm">Email</Text>
              </VStack>
            </Link>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default ContactBanner;
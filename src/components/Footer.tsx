import {
  Box,
  Container,
  Text,
  HStack,
  Link,
  Icon,
  Image,
} from '@chakra-ui/react';
import { FaDiscord, FaGithub, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      as="footer"
      py={6}
      bg="brand.background"
      borderTop="1px solid"
      borderColor="brand.border"
    >
      <Container maxW="container.xl">
        <HStack justify="space-between" align="center">
          <HStack gap={4}>
            <Text color="brand.muted" fontSize="sm" fontFamily="monospace">
              © {currentYear} bloXchange. All rights reserved.
            </Text>
          </HStack>
          <HStack gap={4} justify="center">
            <Image src="/bloxchange_logo.png" alt="bloXchange" height="32px" />
          </HStack>
          <HStack gap={4}>
            <Link
              href="https://discord.gg/fVM6pd3Z"
              target="_blank"
              rel="noopener noreferrer"
              color="brand.muted"
              _hover={{ color: 'brand.primary' }}
            >
              <Icon as={FaDiscord} boxSize={5} />
            </Link>
            <Link
              href="https://x.com/bloxchangedev"
              target="_blank"
              rel="noopener noreferrer"
              color="brand.muted"
              _hover={{ color: 'brand.primary' }}
            >
              <Icon as={FaXTwitter} boxSize={5} />
            </Link>
            <Link
              href="https://github.com/bloxchange"
              target="_blank"
              rel="noopener noreferrer"
              color="brand.muted"
              _hover={{ color: 'brand.primary' }}
            >
              <Icon as={FaGithub} boxSize={5} />
            </Link>
            <Link
              href="mailto:ducnn@bloxchange.dev"
              color="brand.muted"
              _hover={{ color: 'brand.primary' }}
            >
              <Icon as={FaEnvelope} boxSize={5} />
            </Link>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default Footer;

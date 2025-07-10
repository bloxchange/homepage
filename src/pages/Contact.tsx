import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Link,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { FaDiscord, FaGithub, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Box as="section" py={20} bg="brand.background">
      <Container maxW="container.xl">
        <VStack gap={12} alignItems="flex-start">
          <Heading
            size="2xl"
            color="brand.text"
            textShadow="glow"
            fontFamily="monospace"
            letterSpacing="wider"
          >
            {t('contact.title')}
          </Heading>
          <Text
            fontSize="xl"
            color="brand.muted"
            fontFamily="monospace"
            animation="typing 4s steps(60, end)"
          >
            {t('contact.description')}
          </Text>
          <VStack align="flex-start" w="full">
            <Link
              href="https://discord.gg/fVM6pd3Z"
              color="brand.text"
              _hover={{
                color: 'brand.accent',
                textShadow: 'glow',
              }}
            >
              <HStack>
                <Icon as={FaDiscord} boxSize={6} />
                <Text fontFamily="monospace">Discord</Text>
              </HStack>
            </Link>
            <Link
              href="https://x.com/bloxchangedev"
              color="brand.text"
              _hover={{
                color: 'brand.accent',
                textShadow: 'glow',
              }}
            >
              <HStack>
                <Icon as={FaXTwitter} boxSize={6} />
                <Text fontFamily="monospace">X</Text>
              </HStack>
            </Link>
            <Link
              href="https://github.com/bloxchange"
              color="brand.text"
              _hover={{
                color: 'brand.accent',
                textShadow: 'glow',
              }}
            >
              <HStack>
                <Icon as={FaGithub} boxSize={6} />
                <Text fontFamily="monospace">GitHub</Text>
              </HStack>
            </Link>
            <Link
              href="mailto:ducnn@bloxchange.dev"
              color="brand.text"
              _hover={{
                color: 'brand.accent',
                textShadow: 'glow',
              }}
            >
              <HStack>
                <Icon as={FaEnvelope} boxSize={6} />
                <Text fontFamily="monospace">ducnn@bloxchange.dev</Text>
              </HStack>
            </Link>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Contact;

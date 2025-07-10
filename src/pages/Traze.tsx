import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Button,
  HStack,
  Link,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const Traze = () => {
  const { t } = useTranslation();

  // Get the features list as a string array
  const featuresList = t('traze.features.list', {
    returnObjects: true,
  }) as string[];

  return (
    <Box as="section" py={20} bg="brand.background">
      <Container maxW="container.xl">
        <VStack gap={8} alignItems="flex-start">
          <Heading
            size="2xl"
            color="brand.text"
            textShadow="glow"
            fontFamily="monospace"
            letterSpacing="wider"
          >
            {t('traze.title')}
          </Heading>
          <Text
            fontSize="xl"
            color="brand.muted"
            fontFamily="monospace"
            animation="flicker 2s linear infinite"
          >
            {t('traze.description')}
          </Text>
          <Box
            p={8}
            border="1px solid"
            borderColor="brand.border"
            bg="brand.card"
            w="full"
          >
            <VStack gap={6} alignItems="flex-start">
              <Text
                fontSize="xl"
                fontWeight="bold"
                color="brand.text"
                fontFamily="monospace"
                letterSpacing="wide"
              >
                {t('traze.features.title')}
              </Text>
              <VStack gap={4} alignItems="flex-start" w="full">
                {Array.isArray(featuresList) &&
                  featuresList.map((feature, index) => (
                    <Text
                      key={index}
                      color="brand.muted"
                      fontFamily="monospace"
                      w="full"
                      display="flex"
                      alignItems="center"
                      _before={{
                        content: '"•"',
                        marginRight: '2',
                        color: 'brand.primary',
                      }}
                    >
                      {feature}
                    </Text>
                  ))}
              </VStack>
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
                    {t('traze.buttons.learn')}
                  </Button>
                </Link>
                <Link href="/traze-docs" _hover={{ textDecoration: 'none' }}>
                  <Button
                    bg="brand.primary"
                    color="brand.background"
                    _hover={{ boxShadow: 'glow' }}
                    fontFamily="monospace"
                  >
                    {t('traze.buttons.docs')}
                  </Button>
                </Link>
              </HStack>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Traze;

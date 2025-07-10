import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  const features = [
    {
      key: 'mission',
      title: t('about.mission.title'),
      description: t('about.mission.description'),
    },
    {
      key: 'vision',
      title: t('about.vision.title'),
      description: t('about.vision.description'),
    },
    {
      key: 'values',
      title: t('about.values.title'),
      description: t('about.values.description'),
    },
  ];

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
            {t('about.title')}
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} w="full">
            {features.map(feature => (
              <Box
                key={feature.key}
                p={8}
                border="1px solid"
                borderColor="brand.border"
                bg="brand.card"
                _hover={{ boxShadow: 'glow' }}
                transition="all 0.3s ease"
              >
                <VStack gap={4} alignItems="flex-start">
                  <Text
                    fontSize="xl"
                    fontWeight="bold"
                    color="brand.text"
                    fontFamily="monospace"
                    letterSpacing="wide"
                  >
                    {feature.title}
                  </Text>
                  <Text color="brand.muted" fontFamily="monospace">
                    {feature.description}
                  </Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default About;

import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const Home = () => {
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
            {t('home.welcome')}
          </Heading>
          <Text
            fontSize="xl"
            color="brand.muted"
            fontFamily="monospace"
            whiteSpace="pre-line"
            animation="typing 4s steps(60, end)"
          >
            {t('home.description')}
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Home;

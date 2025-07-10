import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const TrazeDocument = () => {
  const { t } = useTranslation();

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
            {t('traze.docs.title')}
          </Heading>
          <Text
            fontSize="xl"
            color="brand.muted"
            fontFamily="monospace"
            animation="flicker 2s linear infinite"
          >
            {t('traze.docs.description')}
          </Text>
          <Box
            p={8}
            border="1px solid"
            borderColor="brand.border"
            bg="brand.card"
            w="full"
          >
            <VStack gap={6} alignItems="flex-start">
              <Text fontSize="xl" color="brand.muted" fontFamily="monospace">
                {t('traze.docs.content')}
              </Text>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default TrazeDocument;

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Button,
} from '@chakra-ui/react';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input, Textarea } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

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
          <Box
            p={8}
            border="1px solid"
            borderColor="brand.border"
            bg="brand.card"
            w="full"
            maxW="2xl"
          >
            <VStack gap={6}>
              <FormControl>
                <FormLabel color="brand.text" fontFamily="monospace">
                  {t('contact.form.name')}
                </FormLabel>
                <Input
                  bg="transparent"
                  borderColor="brand.border"
                  color="brand.text"
                  fontFamily="monospace"
                  _hover={{ borderColor: 'brand.primary' }}
                  _focus={{ borderColor: 'brand.primary', boxShadow: 'glow' }}
                />
              </FormControl>
              <FormControl>
                <FormLabel color="brand.text" fontFamily="monospace">
                  {t('contact.form.email')}
                </FormLabel>
                <Input
                  bg="transparent"
                  borderColor="brand.border"
                  color="brand.text"
                  fontFamily="monospace"
                  _hover={{ borderColor: 'brand.primary' }}
                  _focus={{ borderColor: 'brand.primary', boxShadow: 'glow' }}
                />
              </FormControl>
              <FormControl>
                <FormLabel color="brand.text" fontFamily="monospace">
                  {t('contact.form.message')}
                </FormLabel>
                <Textarea
                  bg="transparent"
                  borderColor="brand.border"
                  color="brand.text"
                  fontFamily="monospace"
                  _hover={{ borderColor: 'brand.primary' }}
                  _focus={{ borderColor: 'brand.primary', boxShadow: 'glow' }}
                  rows={6}
                />
              </FormControl>
              <Button
                type="submit"
                bg="brand.primary"
                color="brand.background"
                _hover={{ boxShadow: 'glow' }}
                fontFamily="monospace"
                alignSelf="flex-start"
              >
                {t('contact.form.submit')}
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Contact;

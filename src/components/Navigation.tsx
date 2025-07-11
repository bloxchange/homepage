import {
  Box,
  Container,
  HStack,
  Link as ChakraLink,
  Image,
  Text,
  Select,
  createListCollection,
  Portal,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

const Navigation = () => {
  const { t, i18n } = useTranslation();

  const languageCollection = createListCollection({
    items: [
      {
        label: 'EN',
        value: 'en',
      },
      {
        label: '中文',
        value: 'zh',
      },
      {
        label: 'VI',
        value: 'vi',
      },
    ],
  });

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Box
      as="nav"
      py={4}
      borderBottom="1px solid"
      borderColor="brand.border"
      bg="brand.card"
      position="sticky"
      top={0}
      zIndex={1000}
    >
      <Container maxW="container.xl">
        <HStack gap={8} justifyContent="space-between">
          <ChakraLink asChild>
            <RouterLink to="/">
              <HStack gap={4}>
                <Image src="/bloxchange_logo.png" alt="bloXchange" h="32px" />
                <Text
                  fontSize="2xl"
                  fontWeight="bold"
                  color="brand.text"
                  fontFamily="monospace"
                  letterSpacing="wider"
                  textShadow="glow"
                >
                  bloXchange
                </Text>
              </HStack>
            </RouterLink>
          </ChakraLink>
          <HStack gap={8}>
            <ChakraLink
              fontSize="lg"
              color="brand.text"
              _hover={{
                color: 'brand.accent',
                textShadow: 'glow',
              }}
              asChild
            >
              <RouterLink to="/">{t('nav.home')}</RouterLink>
            </ChakraLink>

            <ChakraLink
              fontSize="lg"
              color="brand.text"
              _hover={{
                color: 'brand.accent',
                textShadow: 'glow',
              }}
              asChild
            >
              <RouterLink to="/about">{t('nav.about')}</RouterLink>
            </ChakraLink>
            <ChakraLink
              fontSize="lg"
              color="brand.text"
              _hover={{
                color: 'brand.accent',
                textShadow: 'glow',
              }}
              asChild
            >
              <RouterLink to="/traze">{t('nav.traze')}</RouterLink>
            </ChakraLink>
            <ChakraLink
              fontSize="lg"
              color="brand.text"
              _hover={{
                color: 'brand.accent',
                textShadow: 'glow',
              }}
              asChild
            >
              <RouterLink to="/contact">{t('nav.contact')}</RouterLink>
            </ChakraLink>
            <Select.Root
              size="xs"
              width="3em"
              variant="outline"
              collection={languageCollection}
              value={[i18n.language]}
              onValueChange={valueChange =>
                handleLanguageChange(valueChange.value[0])
              }
              color="var(--chakra-colors-brand-text)"
            >
              <Select.HiddenSelect />
              <Select.Control>
                <Select.Trigger>
                  <Select.ValueText placeholder="Select language" />
                </Select.Trigger>
                <Select.IndicatorGroup>
                  <Select.Indicator />
                </Select.IndicatorGroup>
              </Select.Control>
              <Portal>
                <Select.Positioner>
                  <Select.Content>
                    {languageCollection.items.map(language => (
                      <Select.Item item={language} key={language.value}>
                        {language.label}
                        <Select.ItemIndicator />
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Positioner>
              </Portal>
            </Select.Root>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default Navigation;

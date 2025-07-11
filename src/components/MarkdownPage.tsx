import { useState, useEffect } from 'react';
import { Box, Container, Spinner } from '@chakra-ui/react';
import Markdown from './Markdown';

interface MarkdownPageProps {
  filePath: string;
}

const MarkdownPage = ({ filePath }: MarkdownPageProps) => {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(filePath);
        const text = await response.text();
        setContent(text);
      } catch (error) {
        console.error('Error loading markdown content:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [filePath]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minH="60vh">
        <Spinner size="xl" color="brand.primary" />
      </Box>
    );
  }

  return (
    <Box as="section" py={8} bg="brand.background">
      <Container maxW="container.xl">
        <Markdown content={content} />
      </Container>
    </Box>
  );
};

export default MarkdownPage;
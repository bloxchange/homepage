import { Box } from '@chakra-ui/react';
import MatrixBackground from '../components/MatrixBackground';

const Home = () => {
  return (
    <Box as="main" position="relative" minH="200vh">
      <MatrixBackground />

      {/* Initial spacer to allow scrolling */}
      <Box height="100vh" />

      {/* Fake div placeholder for TrazeBanner - now handled in MatrixBackground */}
      <Box
        height="auto"
        minH="200px"
        bg="transparent"
        position="relative"
        zIndex={1}
      />

      {/* Additional content space */}
      <Box height="150vh" bg="brand.background" />
    </Box>
  );
};

export default Home;

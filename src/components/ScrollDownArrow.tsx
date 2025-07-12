import { Box } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

interface ScrollDownArrowProps {
  scrollProgress: number;
}

const ScrollDownArrow = ({ scrollProgress }: ScrollDownArrowProps) => {
  // Hide arrow when user starts scrolling (after 5% scroll)
  const opacity = scrollProgress < 0.05 ? 1 : 0;
  const visibility = scrollProgress < 0.05 ? 'visible' : 'hidden';

  return (
    <Box
      position="fixed"
      bottom="40px"
      left="50%"
      transform="translateX(-50%)"
      zIndex={10}
      opacity={opacity}
      visibility={visibility}
      transition="opacity 0.3s ease-out, visibility 0.3s ease-out"
      pointerEvents="none"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={2}
        animation={`${bounce} 2s infinite`}
      >
        <Box
          fontSize="sm"
          color="brand.primary"
          fontFamily="monospace"
          textShadow="glow"
          letterSpacing="wider"
        >
          SCROLL DOWN
        </Box>
        <Box
          as="svg"
          w="32px"
          h="32px"
          color="brand.primary"
          filter="drop-shadow(0 0 8px currentColor)"
        >
          <path
            d="M7 10L12 15L17 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ScrollDownArrow;
import { useEffect, useRef, useState, useMemo } from 'react';
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import DeFiBanner from './DeFiBanner';

const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafRef = useRef<number | undefined>(undefined);
  const ticking = useRef(false);

  // Handle scroll events internally
  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        rafRef.current = requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const maxScroll =
            document.documentElement.scrollHeight - window.innerHeight;
          const progress = Math.min(scrollY / Math.max(maxScroll, 1), 1);
          setScrollProgress(progress);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  // Memoize banner calculations to prevent unnecessary re-computations
  const bannerStyles = useMemo(() => {
    // Transition phase: column transforms to banner (50-60% scroll)
    const transitionProgress = Math.max(
      0,
      Math.min(1, (scrollProgress - 0.5) / 0.1)
    );

    // Expansion phase: banner grows to full size (60-70% scroll)
    const expansionProgress = Math.max(
      0,
      Math.min(1, (scrollProgress - 0.6) / 0.1)
    );

    // Hold phase: banner stays at full size (70-80% scroll) - display time
    // Fade out phase: banner disappears (80-90% scroll) - slower fade
    const fadeProgress = Math.max(0, Math.min(1, (scrollProgress - 0.8) / 0.1));

    // Calculate banner properties
    let bannerOpacity, bannerScale, bannerTranslateY, bannerWidth, bannerHeight;

    if (scrollProgress < 0.5) {
      // Archive phase: banner hidden, column highlighted
      bannerOpacity = 0;
      bannerScale = 0.1;
      bannerTranslateY = 0;
      bannerWidth = '2px';
      bannerHeight = '80vh';
    } else if (scrollProgress < 0.65) {
      // Transition phase: column transforms to banner at its position
      bannerOpacity = transitionProgress * 0.9;
      bannerScale = 0.1 + transitionProgress * 0.4; // Scale from 0.1 to 0.5
      bannerTranslateY = 0; // Stay at column position
      bannerWidth = `${2 + transitionProgress * 298}px`; // Width grows from 2px to 300px
      bannerHeight = '80vh';
    } else if (scrollProgress < 0.7) {
      // Expansion phase: banner grows to full size
      bannerOpacity = 0.9 + expansionProgress * 0.1;
      bannerScale = 0.5 + expansionProgress * 0.5; // Scale from 0.5 to 1.0
      bannerTranslateY = 0;
      bannerWidth = `${300 + expansionProgress * 700}px`; // Width grows from 300px to 1000px
      bannerHeight = `${80 - expansionProgress * 20}vh`; // Height shrinks from 80vh to 60vh
    } else if (scrollProgress < 0.8) {
      // Hold phase: banner stays at full size for display time
      bannerOpacity = 1;
      bannerScale = 1;
      bannerTranslateY = 0;
      bannerWidth = '1000px';
      bannerHeight = '60vh';
    } else {
      // Fade out phase: banner disappears gradually
      bannerOpacity = 1 - fadeProgress;
      bannerScale = 1;
      bannerTranslateY = 0;
      bannerWidth = '1000px';
      bannerHeight = '60vh';
    }

    return {
      opacity: bannerOpacity,
      transform: `translateY(${bannerTranslateY}px) scale(${bannerScale})`,
      width: bannerWidth,
      height: bannerHeight,
    };
  }, [scrollProgress]);

  // DeFiBanner calculations - appears after TrazeBanner (90-100% scroll)
  const defiBannerStyles = useMemo(() => {
    // Transition phase: column transforms to banner (90-95% scroll)
    const transitionProgress = Math.max(
      0,
      Math.min(1, (scrollProgress - 0.9) / 0.05)
    );

    // Expansion phase: banner grows to full size (95-100% scroll)
    const expansionProgress = Math.max(
      0,
      Math.min(1, (scrollProgress - 0.95) / 0.05)
    );

    // Calculate banner properties
    let bannerOpacity, bannerScale, bannerTranslateY, bannerWidth, bannerHeight;

    if (scrollProgress < 0.9) {
      // Archive phase: banner hidden
      bannerOpacity = 0;
      bannerScale = 0.1;
      bannerTranslateY = 0;
      bannerWidth = '2px';
      bannerHeight = '80vh';
    } else if (scrollProgress < 0.95) {
      // Transition phase: column transforms to banner
      bannerOpacity = transitionProgress * 0.9;
      bannerScale = 0.1 + transitionProgress * 0.4;
      bannerTranslateY = 0;
      bannerWidth = `${2 + transitionProgress * 298}px`;
      bannerHeight = '80vh';
    } else {
      // Expansion phase: banner grows to full size
      bannerOpacity = 0.9 + expansionProgress * 0.1;
      bannerScale = 0.5 + expansionProgress * 0.5;
      bannerTranslateY = 0;
      bannerWidth = `${300 + expansionProgress * 700}px`;
      bannerHeight = `${80 - expansionProgress * 20}vh`;
    }

    return {
      opacity: bannerOpacity,
      transform: `translateY(${bannerTranslateY}px) scale(${bannerScale})`,
      width: bannerWidth,
      height: bannerHeight,
    };
  }, [scrollProgress]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set initial canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };
    updateCanvasSize();

    // 3D Grid properties
    const gridSize = 8;
    const spacing = 120;
    const zoom = 2;
    const rotX = 0;
    let rotY = 0.3;
    const rotZ = 0;

    // Matrix characters for vertical lines
    const matrixChars = 'ĐÁÂĂÊÉẼÕƠỢƯ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const fontSize = 36;
    let frameCount = 0;

    // 3D to 2D projection
    const project3D = (x: number, y: number, z: number) => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const distance = 400 * zoom;

      // Apply rotations
      const cosX = Math.cos(rotX),
        sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY),
        sinY = Math.sin(rotY);
      const cosZ = Math.cos(rotZ),
        sinZ = Math.sin(rotZ);

      // Rotate around X axis
      const y1 = y * cosX - z * sinX;
      const z1 = y * sinX + z * cosX;

      // Rotate around Y axis
      const x2 = x * cosY + z1 * sinY;
      const z2 = -x * sinY + z1 * cosY;

      // Rotate around Z axis
      const x3 = x2 * cosZ - y1 * sinZ;
      const y3 = x2 * sinZ + y1 * cosZ;

      // Project to 2D
      const scale = distance / (distance + z2);
      const x2d = centerX + x3 * scale;
      const y2d = centerY + y3 * scale;

      return { x: x2d, y: y2d, z: z2, scale: scale };
    };

    const drawGrid = () => {
      const half = gridSize / 2;
      const points: Array<{
        x3d: number;
        y3d: number;
        z3d: number;
        x2d: number;
        y2d: number;
        z2d: number;
        scale: number;
      }> = [];

      // Generate all grid points
      for (let x = -half; x <= half; x++) {
        for (let y = -half; y <= half; y++) {
          for (let z = -half; z <= half; z++) {
            const projected = project3D(x * spacing, y * spacing, z * spacing);
            points.push({
              x3d: x,
              y3d: y,
              z3d: z,
              x2d: projected.x,
              y2d: projected.y,
              z2d: projected.z,
              scale: projected.scale,
            });
          }
        }
      }

      // Sort points by z-depth for proper rendering
      points.sort((a, b) => a.z2d - b.z2d);

      // Draw grid lines
      ctx.strokeStyle = '#004400';
      ctx.lineWidth = 0.5;

      // Draw lines connecting adjacent points
      for (let i = 0; i < points.length; i++) {
        const p1 = points[i];

        // Connect to adjacent points
        for (let j = i + 1; j < points.length; j++) {
          const p2 = points[j];

          // Check if points are adjacent (distance of 1 in exactly one dimension)
          const dx = Math.abs(p1.x3d - p2.x3d);
          const dy = Math.abs(p1.y3d - p2.y3d);
          const dz = Math.abs(p1.z3d - p2.z3d);

          // Only draw horizontal (X) and depth (Z) lines, no vertical (Y) lines
          if (
            (dx === 1 && dy === 0 && dz === 0) ||
            (dx === 0 && dy === 0 && dz === 1)
          ) {
            // Calculate alpha based on depth
            const alpha = Math.max(0.8, Math.min(p1.scale, p2.scale) * 0.9);
            ctx.globalAlpha = alpha;

            ctx.beginPath();
            ctx.moveTo(p1.x2d, p1.y2d);
            ctx.lineTo(p2.x2d, p2.y2d);
            ctx.stroke();
          }
        }
      }

      // Reset alpha
      ctx.globalAlpha = 1;
    };

    const drawVerticalCharacterLines = () => {
      const half = gridSize / 2;

      // Archive effect: highlight center line when scrolling (0-50% scroll) - slower, more controlled
      const archiveProgress = Math.max(0, Math.min(1, scrollProgress * 2)); // 0 to 1 over first 50% (slower progression)

      // Banner transition phase: column transforms to banner (50-70% scroll)
      const bannerTransition = Math.max(
        0,
        Math.min(1, (scrollProgress - 0.5) / 0.2)
      ); // 50% to 70%

      // Opening effect: show expanding columns around center (70%+ scroll)
      const openingProgress = Math.max(
        0,
        Math.min(1, (scrollProgress - 0.7) / 0.3)
      ); // 70% to 100% scroll

      const centerX = 0;
      const centerZ = 0;

      // Enhanced archiving effect with dramatic visual changes

      // Select random grid positions for character columns (about 60% of positions)
      for (let x = -half; x <= half; x++) {
        for (let z = -half; z <= half; z++) {
          // Use position-based seed with better randomization
          const positionSeed = Math.abs(
            (x * 73 + z * 151 + x * z * 37) * 9301 + 49297
          );
          const showColumn = positionSeed % 100 < 30; // Show 30% of columns

          // Always show the center column for archive effect
          const isCenterColumn = x === centerX && z === centerZ;

          // Hide center column during banner transition phase
          const hideCenterForBanner = isCenterColumn && bannerTransition > 0;

          // Opening effect: show expanding columns around center
          const distanceFromCenter =
            Math.abs(x - centerX) + Math.abs(z - centerZ);
          const isOpeningColumn =
            distanceFromCenter <= Math.floor(openingProgress * 3) &&
            z === centerZ;
          const shouldShowForOpening =
            (isCenterColumn && bannerTransition === 0) ||
            (isOpeningColumn && openingProgress > 0);

          // Force show center column during archive phase only
          const forceShowCenter =
            isCenterColumn && scrollProgress > 0 && scrollProgress < 0.5;

          // Skip if column should be hidden or not shown
          if (!showColumn && !shouldShowForOpening && !forceShowCenter)
            continue;
          if (hideCenterForBanner) continue; // Hide center column during banner transition

          // No movement effect - columns stay in place
          const adjustedZ = z;
          // Removed forward movement - columns remain stationary for cleaner effect

          // Get top and bottom points of vertical line
          const topPoint = project3D(
            x * spacing,
            -half * spacing,
            adjustedZ * spacing
          );
          const bottomPoint = project3D(
            x * spacing,
            half * spacing,
            adjustedZ * spacing
          );
          const midPoint = project3D(x * spacing, 0, adjustedZ * spacing);

          // Calculate distance from viewer using rotated Z coordinate
          const viewerDistance = 400; // Distance from viewer to grid center
          const distance = viewerDistance + midPoint.z; // Use rotated Z: negative = closer, positive = farther
          const minDistance = viewerDistance - half * spacing; // Closest possible distance
          const maxDistance = viewerDistance + half * spacing; // Farthest possible distance
          const perspectiveScale = Math.max(
            0.1,
            1 - ((distance - minDistance) / (maxDistance - minDistance)) * 0.9
          );

          // Controlled archive effect: gradual scaling for center column
          let effectiveFontSize = fontSize;
          if (isCenterColumn && archiveProgress > 0) {
            // Controlled scaling that doesn't overwhelm
            effectiveFontSize = fontSize * (1 + archiveProgress * 3); // Scale up to 4x gradually
          }

          // Opening effect: scale opening columns
          if (isOpeningColumn && openingProgress > 0) {
            const openingScale =
              1 + openingProgress * 2 * (1 - distanceFromCenter / 4);
            effectiveFontSize = fontSize * openingScale;
          }
          const scaledFontSize = effectiveFontSize * perspectiveScale;

          // Calculate alpha based on distance
          let alpha = Math.max(0.3, 1 - (distance / maxDistance) * 0.7);

          // Enhanced archive effect: prominent brightness for center column
          if (isCenterColumn && archiveProgress > 0) {
            // Enhanced brightness increase with stronger pulsing for visual prominence
            const pulseEffect = 1 + Math.sin(frameCount * 0.3) * 0.3; // Stronger pulsing effect
            alpha = Math.min(
              1,
              alpha * (1 + archiveProgress * 4) * pulseEffect
            ); // Up to 5x brightness with strong pulse
          }

          // Opening effect: brighten opening columns
          if (isOpeningColumn && openingProgress > 0) {
            const openingBrightness =
              1 + openingProgress * 1.5 * (1 - distanceFromCenter / 4);
            alpha = Math.min(1, alpha * openingBrightness);
          }

          ctx.fillStyle = `rgba(0, 255, 0, ${alpha})`;
          ctx.font = `${scaledFontSize}px monospace`;

          // Calculate number of characters that fit in the line
          const lineHeight = Math.abs(bottomPoint.y - topPoint.y);
          let charCount = Math.floor(lineHeight / scaledFontSize);

          // Enhanced archive effect: increased character density for prominent glow
          if (isCenterColumn && archiveProgress > 0) {
            // Enhanced increase in character density for more visual impact
            charCount = Math.floor(charCount * (1 + archiveProgress * 3)); // Up to 4x more characters
          }

          // Opening effect: increase character density for opening columns
          if (isOpeningColumn && openingProgress > 0) {
            const densityMultiplier =
              1 + openingProgress * 0.6 * (1 - distanceFromCenter / 4);
            charCount = Math.floor(charCount * densityMultiplier);
          }

          // Draw characters along the vertical line
          for (let i = 0; i < charCount; i++) {
            const progress = i / Math.max(charCount - 1, 1);
            const y = topPoint.y + (bottomPoint.y - topPoint.y) * progress;
            const x_pos = topPoint.x + (bottomPoint.x - topPoint.x) * progress;

            // Calculate vertical opacity based on actual Y position: 100% at Y=0, 50% at extremes
            const currentY = -half + progress * 2 * half; // Current Y position in 3D space
            const distanceFromCenter = Math.abs(currentY) / half; // 0 at center, 1 at extremes
            let verticalOpacity = Math.max(0.5, 1.0 - distanceFromCenter * 0.5); // 1.0 at center, 0.5 at extremes

            // Archive effect: enhance center column opacity
            if (isCenterColumn && archiveProgress > 0) {
              verticalOpacity = Math.min(
                1,
                verticalOpacity * (1 + archiveProgress * 1)
              ); // Double the opacity boost
            }

            // Opening effect: enhance opening columns opacity
            if (isOpeningColumn && openingProgress > 0) {
              const opacityBoost =
                1 + openingProgress * 0.4 * (1 - distanceFromCenter / 3);
              verticalOpacity = Math.min(1, verticalOpacity * opacityBoost);
            }

            const finalAlpha = alpha * verticalOpacity;

            // Enhanced archive effect: prominent glow without movement
            if (isCenterColumn && archiveProgress > 0) {
              ctx.shadowColor = '#00ff00';
              // Enhanced glow with stronger pulsing for visual prominence
              const glowIntensity = archiveProgress * 40; // Stronger base glow
              const pulseGlow = 1 + Math.sin(frameCount * 0.4) * 0.4; // More pronounced pulsing
              ctx.shadowBlur = glowIntensity * pulseGlow;

              // Enhanced secondary glow for more visual impact
              ctx.shadowOffsetX = Math.sin(frameCount * 0.15) * 2;
              ctx.shadowOffsetY = Math.cos(frameCount * 0.15) * 2;
            } else if (isOpeningColumn && openingProgress > 0) {
              // Opening effect: add glow to opening columns
              ctx.shadowColor = '#00ff00';
              ctx.shadowBlur =
                12 * openingProgress * (1 - distanceFromCenter / 4);
              ctx.shadowOffsetX = 0;
              ctx.shadowOffsetY = 0;
            } else {
              ctx.shadowBlur = 0;
              ctx.shadowOffsetX = 0;
              ctx.shadowOffsetY = 0;
            }

            ctx.fillStyle = `rgba(0, 255, 0, ${finalAlpha})`;

            // Create individual random intervals for each character position
            const charSeed = Math.abs(x * 1000 + z * 100 + i);
            const randomInterval = 20 + (charSeed % 40);
            const updatePhase = Math.floor(frameCount / randomInterval);

            // Select random character
            const seed = Math.abs(updatePhase + charSeed);
            const charIndex =
              Math.abs(seed * 9301 + 49297) % matrixChars.length;
            const char = matrixChars[charIndex] || matrixChars[0];

            ctx.fillText(char, x_pos - scaledFontSize / 2, y);
          }
        }
      }
    };

    const draw = () => {
      // Set solid black background
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawGrid();
      drawVerticalCharacterLines();

      // Increment frame counter for character timing
      frameCount++;
    };

    let animationFrameId: number;
    const animate = () => {
      draw();
      animationFrameId = requestAnimationFrame(animate);
    };

    // Start the animation
    animate();

    const handleResize = () => {
      updateCanvasSize();
    };

    // Use the passed scrollProgress prop for rotation instead of internal scroll handler
    rotY = 0.3 + scrollProgress * Math.PI * 0.5; // Rotate from base angle up to 90 degrees

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [scrollProgress]);

  // TrazeBanner component integrated directly
  const TrazeBannerContent = () => (
    <Box
      as="section"
      py={20}
      bg="brand.background"
      borderBottom="1px solid"
      borderColor="brand.border"
    >
      <Container maxW="container.xl">
        <VStack gap={8} alignItems="center" textAlign="center">
          <Heading
            as="h1"
            size="4xl"
            color="brand.text"
            textShadow="glow"
            fontFamily="monospace"
            letterSpacing="wider"
            bgGradient="linear(to-r, brand.primary, brand.accent)"
            bgClip="text"
          >
            Traze
          </Heading>
          <Heading
            as="h2"
            size="lg"
            color="brand.text"
            fontFamily="monospace"
            fontWeight="normal"
            maxW="3xl"
          >
            A Modern Component Library for Building Beautiful and Responsive Web
            Applications
          </Heading>
          <Text fontSize="xl" color="brand.muted" maxW="2xl" lineHeight="tall">
            Traze provides a comprehensive suite of customizable UI components,
            powerful theming capabilities, and intuitive APIs to help you create
            stunning user interfaces with ease.
          </Text>
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
                Try it Now
              </Button>
            </Link>
            <RouterLink to="/traze-docs" style={{ textDecoration: 'none' }}>
              <Button
                bg="brand.primary"
                color="brand.background"
                _hover={{ boxShadow: 'glow' }}
                fontFamily="monospace"
              >
                Documentation
              </Button>
            </RouterLink>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );

  return (
    <>
      {/* Matrix Background Canvas */}
      <Box
        position="fixed"
        top={0}
        left={0}
        zIndex={0}
        width="100vw"
        height="100vh"
        bg="black"
      >
        <canvas
          ref={canvasRef}
          style={{ display: 'block', width: '100%', height: '100%' }}
        />
      </Box>

      {/* DeFiBanner that appears on scroll (80-100% scroll) */}
      <Box
        position="fixed"
        top="50%"
        left="50%"
        transform={`translate(-50%, -50%) ${defiBannerStyles.transform}`}
        zIndex={2}
        opacity={defiBannerStyles.opacity}
        width={defiBannerStyles.width}
        height={defiBannerStyles.height}
        overflow="hidden"
        display="flex"
        alignItems="center"
        justifyContent="center"
        willChange="transform, opacity, width, height"
        pointerEvents={scrollProgress > 0.95 ? 'auto' : 'none'} // Enable interactions when fully visible
      >
        <DeFiBanner />
      </Box>

      {/* TrazeBanner that appears on scroll (50-90% scroll) */}
      <Box
        position="fixed"
        top="50%"
        left="50%"
        transform={`translate(-50%, -50%) ${bannerStyles.transform}`}
        zIndex={2}
        opacity={bannerStyles.opacity}
        width={bannerStyles.width}
        height={bannerStyles.height}
        overflow="hidden"
        display="flex"
        alignItems="center"
        justifyContent="center"
        willChange="transform, opacity, width, height"
        pointerEvents={
          scrollProgress > 0.6 && scrollProgress < 0.85 ? 'auto' : 'none'
        } // Enable interactions when fully visible
      >
        <TrazeBannerContent />
      </Box>
    </>
  );
};

export default MatrixBackground;

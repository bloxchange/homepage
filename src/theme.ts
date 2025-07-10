import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          primary: { value: '#00ff41' }, // Matrix green
          secondary: { value: '#003B00' }, // Darker green
          accent: { value: '#08F26E' }, // Bright green
          text: { value: '#00ff41' }, // Matrix terminal green
          muted: { value: '#2E8B57' }, // Sea green
          background: { value: '#000000' }, // Pure black
          card: { value: '#0C0C0C' }, // Slightly lighter black
          border: { value: '#00ff4133' }, // Transparent green
          hover: { value: '#00ff4122' }, // Hover state
        },
      },
      shadows: {
        glow: { value: '0 0 10px #00ff41' }, // Green glow effect
      },
    },
    semanticTokens: {
      colors: {
        text: { value: '{colors.brand.text}' },
        background: { value: '{colors.brand.background}' },
        primary: { value: '{colors.brand.primary}' },
        secondary: { value: '{colors.brand.secondary}' },
        accent: { value: '{colors.brand.accent}' },
        muted: { value: '{colors.brand.muted}' },
        card: { value: '{colors.brand.card}' },
        border: { value: '{colors.brand.border}' },
      },
    },
    keyframes: {
      flicker: {
        '0%': { opacity: '0.8' },
        '50%': { opacity: '1' },
        '100%': { opacity: '0.8' },
      },
      type: {
        '0%': { width: '0' },
        '100%': { width: '100%' },
      },
    },
  },
  cssVarsRoot: ':where(html)',
});

export default createSystem(defaultConfig, config);

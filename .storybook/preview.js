import { ChakraProvider } from '@chakra-ui/react';
import { theme } from "./../src/theme.js"

export const parameters = {
  chakra: { theme },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

/*
 * Add Chakra UI provider in storybook
 */
export const decorators = [
  Story => (
    <ChakraProvider theme={theme}>
      <Story />
    </ChakraProvider>
  ),
];

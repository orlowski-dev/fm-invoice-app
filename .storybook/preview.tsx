import type { Preview } from "@storybook/react";
import React from "react";
import { inter } from "../app/layout";
import { CustomThemeProvider } from "../app/providers";
import { useDarkMode } from "storybook-dark-mode";
import "../styles/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      stylePreview: true,
    },
  },
  decorators: [
    (Story) => {
      return (
        <CustomThemeProvider
          enableSystem={false}
          defaultTheme={useDarkMode() ? "dark" : "light"}
        >
          <main className={inter.variable}>
            <Story />
          </main>
        </CustomThemeProvider>
      );
    },
  ],
};

export default preview;

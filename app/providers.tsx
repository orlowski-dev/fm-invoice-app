"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

export const CustomThemeProvider = ({
  children,
  ...rest
}: Readonly<{ children: ReactNode }> & ThemeProviderProps) => {
  return (
    <ThemeProvider
      enableSystem
      disableTransitionOnChange
      attribute="class"
      {...rest}
    >
      {children}
    </ThemeProvider>
  );
};

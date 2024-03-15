import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CustomThemeProvider } from "./providers";
import "@/styles/globals.css";

export const inter = Inter({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--main-font",
});

export const metadata: Metadata = {
  title: "Invoice App",
  description: "Frontend Mentor - Invoice app solution",
  icons: ["/brand/favicon.png"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <CustomThemeProvider>{children}</CustomThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Env } from "@/config/env";
import { ThemeProvider } from "@/components/themeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: `%s | Janstore`,
    default: Env.APP_NAME,
  },
  description: Env.APP_DESCRIPTION,
  metadataBase: new URL(Env.SERVER_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}  antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import Header from "@/components/Header";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ThemeModeScript } from "flowbite-react";
import ThemeCom from "@/components/ThemeCome";
import { ClerkProvider } from "@clerk/nextjs";
import FooterCom from "@/components/footer";
export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <ThemeModeScript />
        </head>
        <body>
          <ThemeProvider>
            <ThemeCom>
              <Header />
              {children}
              <FooterCom />
            </ThemeCom>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

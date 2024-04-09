import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./../globals.css";
import Header from "../../components/header_components/Header";
import Footer from "./Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { MenuContextProvider } from "@/context/MenuContext";
import { NextIntlClientProvider, useMessages } from "next-intl";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  metadataBase: new URL("https://www.takish155.dev"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      ja: "/ja",
    },
  },
};

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();

  return (
    <html lang={locale} className={poppins.className}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <NextIntlClientProvider messages={messages}>
            <MenuContextProvider>
              <Header />
            </MenuContextProvider>
            {children}
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

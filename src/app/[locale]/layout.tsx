import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./../globals.css";
import Header from "../../components/header_components/Header";
import Footer from "./Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { MenuContextProvider } from "@/context/MenuContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "takish155.dev",
  description: "A portfolio website for takish155",
};

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale} className={poppins.className}>
      <body>
        <ThemeProvider attribute="class" enableSystem>
          <MenuContextProvider>
            <Header />
          </MenuContextProvider>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

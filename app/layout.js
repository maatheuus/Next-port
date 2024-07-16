import { Baloo_2 } from "next/font/google";

import "@/app/_styles/globals.css";
import Header from "@/app/_components/Header";
import Providers from "@/app/Providers";
import ThemeSwitcher from "./_context/ToggleThemeContext";

const baloo = Baloo_2({
  subsets: ["latin"],
  display: "swap",
  weight: "500",
});

export const metadata = {
  title: {
    template: "%s / Maat",
    default: "Maat",
  },
  description: "Home page of the portfolio of Maat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${baloo.className} bg-stone-100`}>
        <div id="modal"></div>
        <Header />
        <div className="w-full">
          <main className="max-w-[1320px] mx-auto py-8 px-12 md:w-full">
            <Providers>
              <ThemeSwitcher />
              {children}
            </Providers>
          </main>
        </div>
      </body>
    </html>
  );
}

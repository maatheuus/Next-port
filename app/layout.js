import { Baloo_2 } from "next/font/google";

import "@/app/_styles/globals.css";
import Header from "@/app/_components/Header";
import Providers from "@/app/providers";
import { twMerge } from "tailwind-merge";
import { ViewTransitions } from "next-view-transitions";

const baloo = Baloo_2({
  subsets: ["latin"],
  display: "swap",
  weight: "500",
});

export const metadata = {
  title: {
    template: "%s | Maat",
    default: "Maat",
  },
  description: "Home page of the portfolio of Maat",
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="pt-BR" className="h-svh" suppressHydrationWarning>
        <body className={twMerge(baloo.className, "p-0 sm:p-12")}>
          <Providers>
            <div id="modal"></div>
            <Header />
            <div className="w-full">
              <main className="max-w-[1320px] mx-auto py-8 px-12 md:w-full">
                {children}
              </main>
            </div>
          </Providers>
        </body>
      </html>
    </ViewTransitions>
  );
}

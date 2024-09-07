import { Baloo_2 } from "next/font/google";

import "@/styles/globals.css";
import Providers from "@/app/Providers";
import { Toaster } from "@/components/ui/toaster";
import { ViewTransitions } from "next-view-transitions";
import Navbar from "@/components/navbar/Navbar";

const baloo = Baloo_2({
  subsets: ["latin"],
  display: "swap",
  weight: "500",
});

export const metadata = {
  title: {
    template: "%s | Maat",
    default: "Matheus",
  },
  description: "Home page of the portfolio of Maat",
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body className={baloo.className}>
          <Providers>
            <div id="modal"></div>
            <Navbar />
            <main className="container mx-auto py-8 px-2 sm:px-12 ">
              {children}
            </main>
            <Toaster />
          </Providers>
        </body>
      </html>
    </ViewTransitions>
  );
}

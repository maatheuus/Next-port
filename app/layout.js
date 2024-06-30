import { Baloo_2 } from "next/font/google";

import "@/app/_styles/globals.css";
import Header from "@/app/_components/Header";

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
        <Header />
        <div className="flex-1 px-8 py-10 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}

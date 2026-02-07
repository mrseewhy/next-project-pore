import { Fira_Sans, Lato } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const firaSans = Fira_Sans({
  variable: "--font-fira-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"], // specify multiple weights
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata = {
  title: "Federico & Co. - Raising Voices, Restoring Rights ",
  description:
    "At Federico & Co, we are devoted to advocating for the most vulnerable — children and women. Through education, legal reform, community engagement, and tireless activism, we champion justice and lasting change in the fight against trafficking and abuse.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${firaSans.variable} ${lato.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

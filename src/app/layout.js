import "./globals.css";
import { Montserrat } from "next/font/google";
import Header from "../components/header";
import Hero from "../components/Landing";
const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata = {
  title: "Luis Almenarez - Software Developer",
  description: "Luis Almenarez - Software Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <Hero />
        {children}
      </body>
    </html>
  );
}

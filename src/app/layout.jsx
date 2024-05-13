import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Outfit, Roboto, Poppins } from "next/font/google";
import Footer from "@/components/footer/Footer";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Next Application",
  description: "This is the description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

import "./globals.css";
import { CartProvider } from "@/components/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "MyShop",
  description: "Simple Ecommerce Store with Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar /> {/* SHOW ON ALL PAGES */}
          {children} {/* PAGE CONTENT */}
          <Footer /> {/* SHOW ON ALL PAGES */}
        </CartProvider>
      </body>
    </html>
  );
}


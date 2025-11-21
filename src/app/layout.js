import Banner from "@/components/Banner";
import "./globals.css";
import { CartProvider } from "@/components/CartContext";
import Footer from "@/components/Footer";

export const metadata = {
  title: "MyShop",
  description: "Simple Ecommerce Store with Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>{children}</CartProvider>
        <Footer />
      </body>
    </html>
  );
}

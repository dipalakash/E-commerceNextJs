import "./globals.css";
import { CartProvider } from "@/components/CartContext";

export const metadata = {
  title: "MyShop",
  description: "Simple Ecommerce Store with Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}

import "./globals.css"; // <-- import Tailwind CSS here

export const metadata = {
  title: "MyShop",
  description: "Simple Ecommerce Store with Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import Navbar from "../components/Navbar";
// import ProductCard from "../components/ProductCard";
import ProductCard from "../components/productCard";
import { CartProvider } from "../components/CartContext";

const products = [
  { id: 1, name: "Apple Phone", price: 79999, image: "/images/apple.png" },
  { id: 2, name: "Oppo A57", price: 19999, image: "/images/Oppo-A57-4G.png" },
  { id: 3, name: "Samsung Phone", price: 49999, image: "/images/samsung.webp" },
];

export default function Home() {
  return (
    <CartProvider>
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div className="bg-green-500 text-white p-8">Tailwind is working!</div>
      </main>
    </CartProvider>
  );
}

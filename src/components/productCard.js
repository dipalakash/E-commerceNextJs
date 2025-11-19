"use client";

import Image from "next/image";
import { useCart } from "./CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={200}
        className="object-contain w-full h-48"
      />

      <h2 className="text-lg font-bold mt-2">{product.name}</h2>
      <p className="text-gray-600 mb-2">₹{product.price}</p>

      <button
        onClick={() => addToCart(product)}
        className="bg-blue-600 text-white px-3 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}

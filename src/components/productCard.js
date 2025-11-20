"use client";
import Image from "next/image";
import { useCart } from "@/components/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-4 border border-gray-100 hover:-translate-y-1">
      {/* PRODUCT IMAGE */}
      <div className="w-full h-48 flex items-center justify-center mb-4">
        <Image
          src={product.image}
          alt={product.name}
          width={250}
          height={250}
          className="object-contain w-full h-full"
        />
      </div>

      {/* PRODUCT TITLE */}
      <h2 className="text-lg font-semibold text-gray-800 text-center">
        {product.name}
      </h2>

      {/* PRICE */}
      <p className="text-orange-500 text-sm text-center font-semibold mb-4">
        ₹{product.price}
      </p>

      {/* BUTTONS LIKE TEMPLATE */}
      <div className="flex justify-between items-center">
        <button className="text-blue-600 text-sm font-medium hover:underline">
          Buy Now
        </button>

        <button
          onClick={() => addToCart(product)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

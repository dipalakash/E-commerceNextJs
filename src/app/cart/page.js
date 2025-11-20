"use client";

import Navbar from "@/components/Navbar";
import { useCart } from "@/components/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  console.log("CART DEBUG:", cart); // <-- VERY IMPORTANT Debug line

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

        {cart.length === 0 && <p>Your cart is empty.</p>}

        {cart.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded flex justify-between items-center mb-3"
          >
            <span>{item.name}</span>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Remove
            </button>
          </div>
        ))}

        {cart.length > 0 && (
          <button
            onClick={clearCart}
            className="bg-gray-800 text-white px-4 py-2 rounded mt-4"
          >
            Clear Cart
          </button>
        )}
      </div>
    </>
  );
}

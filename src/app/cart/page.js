 "use client";

import Navbar from "@/components/Navbar";
import { useCart } from "@/components/CartContext";
import Image from "next/image";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>

        {cart.length === 0 ? (
          <p className="text-gray-600 text-lg">Your cart is empty.</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* LEFT SIDE — CART ITEMS */}
            <div className="lg:col-span-2 space-y-4">

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center bg-white shadow-md rounded-xl p-4 border hover:shadow-lg transition"
                >
                  {/* PRODUCT IMAGE */}
                  <div className="w-28 h-28 shrink-0 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={100}
                      height={100}
                      className="object-contain w-full h-full"
                    />
                  </div>

                  {/* PRODUCT DETAILS */}
                  <div className="ml-4 flex-1">
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-purple-600 text-md font-bold mt-1">
                      ₹{item.price.toLocaleString()}
                    </p>
                  </div>

                  {/* REMOVE BUTTON */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 font-semibold hover:underline ml-4"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* RIGHT SIDE — SUMMARY */}
            <div className="bg-white shadow-md border rounded-xl p-6 h-fit sticky top-20">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>

              <div className="flex justify-between text-gray-700 mb-2">
                <span>Total Items:</span>
                <span>{cart.length}</span>
              </div>

              <div className="flex justify-between text-lg font-bold text-gray-900 mb-4">
                <span>Total Price:</span>
                <span>₹{totalPrice.toLocaleString()}</span>
              </div>

              <button
                onClick={clearCart}
                className="w-full bg-red-500 text-white py-2 rounded-xl hover:bg-red-600 transition"
              >
                Clear Cart
              </button>

              <button
                className="w-full mt-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-xl hover:opacity-90 transition"
              >
                Proceed to Checkout
              </button>
            </div>

          </div>
        )}
      </div>
    </>
  );
}

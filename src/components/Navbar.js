"use client";

import Link from "next/link";
import { useCart } from "./CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">
        MyShop
      </Link>

      <Link href="/cart" className="font-semibold">
        Cart ({cart.length})
      </Link>
    </nav>
  );
}

"use client";

import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-20 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 border-t">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Logo and Description */}
        <div>
          <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            MyShop
          </h2>
          <p className="mt-3 text-gray-600">
            Your trusted destination for modern electronics & accessories.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 classname="font-semibold text-gray-800 text-lg mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li><Link href="/products" className="hover:text-purple-600">Products</Link></li>
            <li><Link href="/about" className="hover:text-purple-600">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-purple-600">Contact</Link></li>
            <li><Link href="/cart" className="hover:text-purple-600">Cart</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-gray-800 text-lg mb-3">
            Support
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li><Link href="#" className="hover:text-purple-600">FAQ</Link></li>
            <li><Link href="#" className="hover:text-purple-600">Terms & Conditions</Link></li>
            <li><Link href="#" className="hover:text-purple-600">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="font-semibold text-gray-800 text-lg mb-3">
            Follow Us
          </h3>
          <div className="flex gap-4 text-2xl text-gray-700">
            <FaFacebook className="hover:text-blue-600 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaTwitter className="hover:text-blue-400 cursor-pointer" />
            <FaLinkedin className="hover:text-blue-700 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t py-4 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} MyShop — All Rights Reserved.
      </div>
    </footer>
  );
}

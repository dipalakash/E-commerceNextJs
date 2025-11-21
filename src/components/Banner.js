"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <div className="relative w-full h-[350px] md:h-[480px] lg:h-[520px] overflow-hidden shadow-lg">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <Image
          src="/images/banner.jpg" // <-- change image here
          alt="Shop Banner"
          fill
          className="object-cover brightness-[0.75]"
        />
      </motion.div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-5xl font-extrabold drop-shadow-lg"
        >
          Big Season Sale 🎉
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-3 text-lg md:text-xl opacity-90"
        >
          Up to <span className="font-bold text-yellow-300">50% OFF</span> on
          all products!
        </motion.p>

        <motion.a
          href="/products"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-6 bg-white text-purple-700 font-semibold px-6 py-3 rounded-full shadow-xl hover:bg-purple-700 hover:text-white transition"
        >
          Shop Now
        </motion.a>
      </div>
    </div>
  );
}

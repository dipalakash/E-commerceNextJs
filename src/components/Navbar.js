// "use client";

// import { useState } from "react";
// import { useCart } from "@/components/CartContext";
// import Link from "next/link";

// export default function Navbar() {
//   const { cart } = useCart();
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   return (
//     <nav className="bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 backdrop-blur-xl shadow-sm">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* LOGO */}
//         <Link
//           href="/"
//           className="text-3xl font-extrabold bg-clip-text text-transparent 
//                      bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105 transition-transform"
//         >
//           MyShop
//         </Link>

//         {/* NAV LINKS */}
//         <div className="hidden md:flex space-x-10 text-lg font-medium">
//           {[
//             ["About Us", "/about"],
//             ["Services", "/services"],
//             ["Products", "/products"],
//             ["Contact", "/contact"],
//           ].map(([name, link]) => (
//             <Link
//               key={name}
//               href={link}
//               className="text-gray-700 hover:text-purple-600 transition-all hover:scale-105"
//             >
//               {name}
//             </Link>
//           ))}
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="flex items-center gap-6">
//           {/* CART */}
//           <Link
//             href="/cart"
//             className="relative text-gray-700 hover:text-purple-600 text-lg font-semibold transition-all hover:scale-105"
//           >
//             🛒 Cart
//             <span className="absolute -top-3 -right-4 bg-purple-600 text-white text-xs px-2 rounded-full">
//               {cart.length}
//             </span>
//           </Link>

//           {/* Account Dropdown */}
//           <div className="relative">
//             <button
//               onClick={() => setDropdownOpen(!dropdownOpen)}
//               className="bg-white px-4 py-2 rounded-xl shadow-sm border hover:bg-purple-50 transition-all font-medium flex items-center gap-2"
//             >
//               👤 Account
//             </button>

//             {dropdownOpen && (
//               <div className="absolute right-0 mt-3 bg-white shadow-lg w-40 rounded-xl overflow-hidden animate-fade-in">
//                 <Link
//                   href="/login"
//                   className="block px-4 py-2 hover:bg-purple-100"
//                 >
//                   Login
//                 </Link>
//                 <Link
//                   href="/profile"
//                   className="block px-4 py-2 hover:bg-purple-100"
//                 >
//                   Profile
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }





"use client";

import { useState, useEffect } from "react";
import { useCart } from "@/components/CartContext";
import Link from "next/link";

export default function Navbar() {
  const { cart } = useCart();
  const [mounted, setMounted] = useState(false);

  // prevent hydration error
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 backdrop-blur-xl shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link className="text-3xl font-extrabold" href="/">
          MyShop
        </Link>

        <div className="flex gap-6 items-center">
          <Link href="/cart" className="relative">

            🛒 Cart

            <span className="absolute -top-3 -right-4 bg-purple-600 text-white text-xs px-2 rounded-full">
              {mounted ? cart.length : 0}
            </span>

          </Link>
        </div>
      </div>
    </nav>
  );
}

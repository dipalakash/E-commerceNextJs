export async function GET() {
  const products = [
    { id: 1, name: "Apple iPhone 15", price: 79999, image: "/images/apple.png" },
    { id: 2, name: "Samsung S23", price: 69999, image: "/images/samsung.webp" },
    { id: 3, name: "Oppo A57", price: 19999, image: "/images/Oppo-A57-4G.png" },
    { id: 4, name: "OnePlus 11", price: 55999, image: "/images/apple.png" },
    { id: 5, name: "Vivo V29", price: 29999, image: "/images/samsung.webp" },
    { id: 6, name: "Realme 11 Pro", price: 24999, image: "/images/Oppo-A57-4G.png" },
  ];

  return Response.json(products);
}

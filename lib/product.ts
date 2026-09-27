export type Product = {
  id: number;
  name: string;
  category: string;
  gender: string;
  purity: string;
  price: number;
  weight: string;
  description: string;
  images: string[];
  badge?: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Classic Silver Chain",
    category: "Chains",
    gender: "Men",
    purity: "92.5%",
    price: 4990,
    weight: "38.4 g",
    description:
      "A timeless silver chain designed for everyday elegance, combining classic proportions with the enduring character of fine silver.",
    images: [
      "/images/hero.jpg",
      "/images/hero.jpg",
      "/images/hero.jpg",
    ],
    badge: "NEW",
  },

  {
    id: 2,
    name: "Traditional Silver Payal",
    category: "Payal",
    gender: "Women",
    purity: "92.5%",
    price: 3290,
    weight: "42.1 g",
    description:
      "A traditional silver payal designed with graceful detailing for festive occasions and everyday elegance.",
    images: [
      "/images/hero.jpg",
      "/images/hero.jpg",
      "/images/hero.jpg",
    ],
    badge: "POPULAR",
  },

  {
    id: 3,
    name: "Elegant Silver Bracelet",
    category: "Bracelets",
    gender: "Women",
    purity: "92.5%",
    price: 2890,
    weight: "24.7 g",
    description:
      "An elegant silver bracelet with a refined design that works beautifully from everyday wear to special occasions.",
    images: [
      "/images/hero.jpg",
      "/images/hero.jpg",
      "/images/hero.jpg",
    ],
  },

  {
    id: 4,
    name: "Silver Kada",
    category: "Kada",
    gender: "Men",
    purity: "92.5%",
    price: 4190,
    weight: "32.8 g",
    description:
      "A classic silver kada with a strong, timeless silhouette designed for everyday wear.",
    images: [
      "/images/hero.jpg",
      "/images/hero.jpg",
      "/images/hero.jpg",
    ],
  },

  {
    id: 5,
    name: "Silver Kids Bracelet",
    category: "Bracelets",
    gender: "Kids",
    purity: "92.5%",
    price: 1690,
    weight: "13.2 g",
    description:
      "A delicate silver bracelet designed for children with a simple and comfortable silhouette.",
    images: [
      "/images/hero.jpg",
      "/images/hero.jpg",
      "/images/hero.jpg",
    ],
  },

  {
    id: 6,
    name: "Silver Pendant",
    category: "Pendants",
    gender: "Women",
    purity: "92.5%",
    price: 2190,
    weight: "11.6 g",
    description:
      "A refined silver pendant designed to add a subtle touch of elegance to everyday styling.",
    images: [
      "/images/hero.jpg",
      "/images/hero.jpg",
      "/images/hero.jpg",
    ],
    badge: "NEW",
  },

  {
    id: 7,
    name: "Silver Men's Ring",
    category: "Rings",
    gender: "Men",
    purity: "92.5%",
    price: 1790,
    weight: "9.8 g",
    description:
      "A clean and timeless silver ring designed for understated everyday style.",
    images: [
      "/images/hero.jpg",
      "/images/hero.jpg",
      "/images/hero.jpg",
    ],
  },

  {
    id: 8,
    name: "Silver Anklet Pair",
    category: "Anklets",
    gender: "Women",
    purity: "70%",
    price: 2690,
    weight: "46.5 g",
    description:
      "A traditional silver anklet pair with an elegant profile designed for everyday and festive wear.",
    images: [
      "/images/hero.jpg",
      "/images/hero.jpg",
      "/images/hero.jpg",
    ],
  },
];

export function getProductById(id: number) {
  return products.find(
    (product) => product.id === id
  );
}
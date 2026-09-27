export type Product = {
  id: number;
  name: string;
  category: string;
  gender: string;
  purity: string;
  price: number;
  weight: string;

  /*
    Product gallery.

    Later these paths can come from
    Supabase Storage instead of local files.
  */
  images: string[];

  badge?: string;

  description: string;
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
    images: [
      "/images/products/classic-silver-chain-1.jpg",
      "/images/products/classic-silver-chain-2.jpg",
      "/images/products/classic-silver-chain-3.jpg",
    ],
    badge: "NEW",
    description:
      "A timeless silver chain designed for everyday elegance, combining classic proportions with the enduring character of fine silver.",
  },

  {
    id: 2,
    name: "Traditional Silver Payal",
    category: "Payal",
    gender: "Women",
    purity: "92.5%",
    price: 3290,
    weight: "42.1 g",
    images: [
      "/images/products/traditional-silver-payal-1.jpg",
      "/images/products/traditional-silver-payal-2.jpg",
      "/images/products/traditional-silver-payal-3.jpg",
    ],
    badge: "POPULAR",
    description:
      "A traditional silver payal designed with graceful detailing for everyday wear and special occasions.",
  },

  {
    id: 3,
    name: "Elegant Silver Bracelet",
    category: "Bracelets",
    gender: "Women",
    purity: "92.5%",
    price: 2890,
    weight: "24.7 g",
    images: [
      "/images/products/elegant-silver-bracelet-1.jpg",
      "/images/products/elegant-silver-bracelet-2.jpg",
      "/images/products/elegant-silver-bracelet-3.jpg",
    ],
    description:
      "A refined silver bracelet balancing delicate detailing with an understated everyday silhouette.",
  },

  {
    id: 4,
    name: "Silver Kada",
    category: "Bracelets",
    gender: "Men",
    purity: "92.5%",
    price: 4190,
    weight: "32.8 g",
    images: [
      "/images/products/silver-kada-1.jpg",
      "/images/products/silver-kada-2.jpg",
      "/images/products/silver-kada-3.jpg",
    ],
    description:
      "A classic silver kada with a strong, timeless form designed for everyday wear.",
  },

  {
    id: 5,
    name: "Silver Kids Bracelet",
    category: "Bracelets",
    gender: "Kids",
    purity: "92.5%",
    price: 1690,
    weight: "13.2 g",
    images: [
      "/images/products/silver-kids-bracelet-1.jpg",
      "/images/products/silver-kids-bracelet-2.jpg",
      "/images/products/silver-kids-bracelet-3.jpg",
    ],
    description:
      "A lightweight silver bracelet designed with a simple and comfortable profile for children.",
  },

  {
    id: 6,
    name: "Silver Pendant",
    category: "Pendants",
    gender: "Women",
    purity: "92.5%",
    price: 2190,
    weight: "11.6 g",
    images: [
      "/images/products/silver-pendant-1.jpg",
      "/images/products/silver-pendant-2.jpg",
      "/images/products/silver-pendant-3.jpg",
    ],
    badge: "NEW",
    description:
      "A refined silver pendant designed to add a subtle touch of elegance to everyday styling.",
  },

  {
    id: 7,
    name: "Silver Men's Ring",
    category: "Rings",
    gender: "Men",
    purity: "92.5%",
    price: 1790,
    weight: "9.8 g",
    images: [
      "/images/products/silver-mens-ring-1.jpg",
      "/images/products/silver-mens-ring-2.jpg",
      "/images/products/silver-mens-ring-3.jpg",
    ],
    description:
      "A clean and timeless silver ring designed for understated everyday style.",
  },

  {
    id: 8,
    name: "Silver Anklet Pair",
    category: "Anklets",
    gender: "Women",
    purity: "70%",
    price: 2690,
    weight: "46.5 g",
    images: [
      "/images/products/silver-anklet-pair-1.jpg",
      "/images/products/silver-anklet-pair-2.jpg",
      "/images/products/silver-anklet-pair-3.jpg",
    ],
    description:
      "A traditional silver anklet pair designed with an elegant profile for everyday and festive wear.",
  },
];


export function getProductById(
  id: number
): Product | undefined {
  return products.find(
    (product) => product.id === id
  );
}
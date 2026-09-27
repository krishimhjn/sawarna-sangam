"use client";

import Link from "next/link";
import { useWishlist } from "@/components/WishlistProvider";
import "./wishlist.css";

type Product = {
  id: number;
  name: string;
  category: string;
  gender: string;
  purity: string;
  price: number;
  weight: string;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Classic Silver Chain",
    category: "Chains",
    gender: "Men",
    purity: "92.5%",
    price: 4990,
    weight: "38.4 g",
    image: "/images/hero.jpg",
  },
  {
    id: 2,
    name: "Traditional Silver Payal",
    category: "Payal",
    gender: "Women",
    purity: "92.5%",
    price: 3290,
    weight: "42.1 g",
    image: "/images/hero.jpg",
  },
  {
    id: 3,
    name: "Elegant Silver Bracelet",
    category: "Bracelets",
    gender: "Women",
    purity: "92.5%",
    price: 2890,
    weight: "24.7 g",
    image: "/images/hero.jpg",
  },
  {
    id: 4,
    name: "Silver Kada",
    category: "Bracelets",
    gender: "Men",
    purity: "92.5%",
    price: 4190,
    weight: "32.8 g",
    image: "/images/hero.jpg",
  },
  {
    id: 5,
    name: "Silver Kids Bracelet",
    category: "Bracelets",
    gender: "Kids",
    purity: "92.5%",
    price: 1690,
    weight: "13.2 g",
    image: "/images/hero.jpg",
  },
  {
    id: 6,
    name: "Silver Pendant",
    category: "Pendants",
    gender: "Women",
    purity: "92.5%",
    price: 2190,
    weight: "11.6 g",
    image: "/images/hero.jpg",
  },
  {
    id: 7,
    name: "Silver Men's Ring",
    category: "Rings",
    gender: "Men",
    purity: "92.5%",
    price: 1790,
    weight: "9.8 g",
    image: "/images/hero.jpg",
  },
  {
    id: 8,
    name: "Silver Anklet Pair",
    category: "Anklets",
    gender: "Women",
    purity: "70%",
    price: 2690,
    weight: "46.5 g",
    image: "/images/hero.jpg",
  },
];

export default function WishlistPage() {
  const {
    wishlist,
    removeFromWishlist,
    clearWishlist,
  } = useWishlist();

  const wishlistProducts = products.filter(
    (product) =>
      wishlist.includes(product.id)
  );

  return (
    <main className="wishlist-page">

      {/* HEADER */}

      <header className="wishlist-header">

        <Link
          href="/"
          className="wishlist-back"
        >
          ← HOME
        </Link>

        <div className="wishlist-heading">

          <p>
            SWARNA SANGAM
          </p>

          <h1>
            Your Wishlist
          </h1>

          <span>
            {wishlistProducts.length === 0
              ? "Your saved pieces will appear here."
              : `${wishlistProducts.length} ${
                  wishlistProducts.length === 1
                    ? "piece"
                    : "pieces"
                } saved`}
          </span>

        </div>

        {wishlistProducts.length > 0 && (
          <button
            type="button"
            className="wishlist-clear"
            onClick={clearWishlist}
          >
            CLEAR ALL
          </button>
        )}

      </header>


      {/* EMPTY STATE */}

      {wishlistProducts.length === 0 ? (
        <section className="wishlist-empty">

          <div className="wishlist-empty-icon">
            ♡
          </div>

          <h2>
            Nothing saved yet
          </h2>

          <p>
            Save pieces you love and find them
            here whenever you're ready.
          </p>

          <Link
            href="/shop"
            className="wishlist-shop-button"
          >
            EXPLORE SILVER
          </Link>

        </section>
      ) : (

        /* PRODUCT GRID */

        <section className="wishlist-grid">

          {wishlistProducts.map(
            (product) => (

              <article
                key={product.id}
                className="wishlist-card"
              >

                <div className="wishlist-image">

                  <Link
                    href={`/product/${product.id}`}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                    />
                  </Link>

                  <button
                    type="button"
                    className="wishlist-remove"
                    onClick={() =>
                      removeFromWishlist(
                        product.id
                      )
                    }
                    aria-label={`Remove ${product.name} from wishlist`}
                  >
                    ♥
                  </button>

                </div>


                <Link
                  href={`/product/${product.id}`}
                  className="wishlist-info"
                >

                  <div className="wishlist-meta">

                    <span>
                      {product.category}
                    </span>

                    <span>
                      {product.purity}
                    </span>

                  </div>

                  <h2>
                    {product.name}
                  </h2>

                  <div className="wishlist-bottom">

                    <span>
                      {product.weight}
                    </span>

                    <strong>
                      ₹
                      {product.price.toLocaleString(
                        "en-IN"
                      )}
                    </strong>

                  </div>

                </Link>

              </article>

            )
          )}

        </section>

      )}

    </main>
  );
}
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useWishlist } from "@/components/WishlistProvider";
import "./shop.css";

type Product = {
  id: number;
  name: string;
  category: string;
  gender: string;
  purity: string;
  price: number;
  weight: string;
  badge?: string;
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
  },
  {
    id: 4,
    name: "Silver Kada",
    category: "Bracelets",
    gender: "Men",
    purity: "92.5%",
    price: 4190,
    weight: "32.8 g",
  },
  {
    id: 5,
    name: "Silver Kids Bracelet",
    category: "Bracelets",
    gender: "Kids",
    purity: "92.5%",
    price: 1690,
    weight: "13.2 g",
  },
  {
    id: 6,
    name: "Silver Pendant",
    category: "Pendants",
    gender: "Women",
    purity: "92.5%",
    price: 2190,
    weight: "11.6 g",
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
  },
  {
    id: 8,
    name: "Silver Anklet Pair",
    category: "Anklets",
    gender: "Women",
    purity: "70%",
    price: 2690,
    weight: "46.5 g",
  },
];

const categories = [
  "All",
  "Women",
  "Men",
  "Kids",
  "Gifts",
];

const sorts = [
  "Featured",
  "Price: Low to High",
  "Price: High to Low",
  "Newest",
];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] =
    useState("All");

  const [sort, setSort] =
    useState("Featured");

  const [filtersOpen, setFiltersOpen] =
    useState(false);

  const {
    isWishlisted,
    toggleWishlist,
  } = useWishlist();

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== "All") {
      result = result.filter(
        (product) =>
          product.gender === activeCategory
      );
    }

    if (sort === "Price: Low to High") {
      result.sort(
        (a, b) => a.price - b.price
      );
    }

    if (sort === "Price: High to Low") {
      result.sort(
        (a, b) => b.price - a.price
      );
    }

    if (sort === "Newest") {
      result.sort((a, b) => {
        if (
          a.badge === "NEW" &&
          b.badge !== "NEW"
        ) {
          return -1;
        }

        if (
          a.badge !== "NEW" &&
          b.badge === "NEW"
        ) {
          return 1;
        }

        return 0;
      });
    }

    return result;
  }, [activeCategory, sort]);

  return (
    <main className="shop-page">

      {/* =========================
          SHOP HEADER
      ========================= */}

      <header className="shop-header">

        <Link
          href="/"
          className="shop-back"
        >
          ← BACK
        </Link>

        <div className="shop-heading">

          <p className="shop-eyebrow">
            SWARNA SANGAM
          </p>

          <h1>
            Shop Silver
          </h1>

          <p className="shop-description">
            Discover timeless silver jewellery
            and meaningful pieces crafted for
            everyday elegance.
          </p>

        </div>

      </header>


      {/* =========================
          CATEGORY BAR
      ========================= */}

      <section className="shop-controls">

        <div className="category-scroll">

          {categories.map((category) => (
            <button
              key={category}
              className={`category-button ${
                activeCategory === category
                  ? "category-button-active"
                  : ""
              }`}
              onClick={() =>
                setActiveCategory(category)
              }
            >
              {category}
            </button>
          ))}

        </div>

        <div className="shop-actions">

          <button
            className="filter-button"
            onClick={() =>
              setFiltersOpen(true)
            }
          >
            FILTER
          </button>

          <select
            className="sort-select"
            value={sort}
            onChange={(event) =>
              setSort(event.target.value)
            }
          >
            {sorts.map((item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            ))}
          </select>

        </div>

      </section>


      {/* =========================
          PRODUCT COUNT
      ========================= */}

      <div className="shop-result-bar">

        <span>
          {filteredProducts.length} PRODUCTS
        </span>

        <span>
          {activeCategory === "All"
            ? "ALL COLLECTIONS"
            : activeCategory.toUpperCase()}
        </span>

      </div>


      {/* =========================
          PRODUCT GRID
      ========================= */}

      <section className="product-grid">

        {filteredProducts.map((product) => {

          const productIsWishlisted =
            isWishlisted(product.id);

          return (
            <article
              key={product.id}
              className="product-card"
            >

              {/* Product Image */}

              <Link
                href={`/product/${product.id}`}
                className="product-image"
              >

                <div className="product-placeholder">
                  <span>SILVER</span>
                </div>

                {product.badge && (
                  <span className="product-badge">
                    {product.badge}
                  </span>
                )}

              </Link>


              {/* Wishlist */}

              <button
                type="button"
                className={`wishlist-button ${
                  productIsWishlisted
                    ? "wishlist-button-active"
                    : ""
                }`}
                onClick={() =>
                  toggleWishlist(product.id)
                }
                aria-label={
                  productIsWishlisted
                    ? "Remove from wishlist"
                    : "Add to wishlist"
                }
              >
                {productIsWishlisted
                  ? "♥"
                  : "♡"}
              </button>


              {/* Product Information */}

              <Link
                href={`/product/${product.id}`}
                className="product-info"
              >

                <div className="product-top-line">

                  <p className="product-category">
                    {product.category}
                  </p>

                  <span className="product-purity">
                    {product.purity}
                  </span>

                </div>

                <h2>
                  {product.name}
                </h2>

                <div className="product-bottom-line">

                  <span className="product-weight">
                    {product.weight}
                  </span>

                  <span className="product-price">
                    ₹
                    {product.price.toLocaleString(
                      "en-IN"
                    )}
                  </span>

                </div>

              </Link>

            </article>
          );
        })}

      </section>


      {/* =========================
          EMPTY STATE
      ========================= */}

      {filteredProducts.length === 0 && (
        <div className="shop-empty">

          <h2>
            No products found
          </h2>

          <p>
            Try another collection or filter.
          </p>

          <button
            onClick={() =>
              setActiveCategory("All")
            }
          >
            VIEW ALL PRODUCTS
          </button>

        </div>
      )}


      {/* =========================
          MOBILE FILTER SHEET
      ========================= */}

      {filtersOpen && (
        <div
          className="filter-overlay"
          onClick={() =>
            setFiltersOpen(false)
          }
        >

          <div
            className="filter-sheet"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <div className="filter-sheet-header">

              <h2>
                Filters
              </h2>

              <button
                type="button"
                onClick={() =>
                  setFiltersOpen(false)
                }
                aria-label="Close filters"
              >
                ×
              </button>

            </div>


            <div className="filter-section">

              <p>
                COLLECTION
              </p>

              <div className="filter-options">

                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    className={
                      activeCategory === category
                        ? "filter-option-active"
                        : ""
                    }
                    onClick={() => {
                      setActiveCategory(
                        category
                      );

                      setFiltersOpen(false);
                    }}
                  >
                    {category}
                  </button>
                ))}

              </div>

            </div>

          </div>

        </div>
      )}

    </main>
  );
}
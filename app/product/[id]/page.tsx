"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/CartProvider";
import { useWishlist } from "@/components/WishlistProvider";
import "./product.css";

type Product = {
  id: number;
  name: string;
  category: string;
  gender: string;
  purity: string;
  price: number;
  weight: string;
  description: string;
  images: string[];
};

const product: Product = {
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
};

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="product-heart-icon"
    >
      <path
        d="M20.8 8.8c0 5.2-8.8 10-8.8 10s-8.8-4.8-8.8-10A4.8 4.8 0 0 1 12 6.1a4.8 4.8 0 0 1 8.8 2.7Z"
        fill={filled ? "currentColor" : "none"}
      />
    </svg>
  );
}

export default function ProductPage() {
  const { addToCart } = useCart();

  const {
    isWishlisted,
    toggleWishlist,
  } = useWishlist();

  const [activeImage, setActiveImage] = useState(0);

  const [quantity, setQuantity] = useState(1);

  const [addedToBag, setAddedToBag] = useState(false);

  const wishlisted = isWishlisted(product.id);

  const handleAddToCart = () => {
    addToCart(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        weight: product.weight,
        image: product.images[0],
      },
      quantity
    );

    setAddedToBag(true);

    window.setTimeout(() => {
      setAddedToBag(false);
    }, 2200);
  };

  const increaseQuantity = () => {
    setQuantity((current) => current + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((current) =>
      current > 1 ? current - 1 : 1
    );
  };

  return (
    <main className="product-page">

      {/* =========================
          TOP NAVIGATION
      ========================= */}

      <div className="product-topbar">

        <Link
          href="/shop"
          className="product-back"
        >
          ← SHOP
        </Link>

        <Link
          href="/"
          className="product-brand"
        >
          SWARNA SANGAM
        </Link>

        <Link
          href="/cart"
          className="product-cart-link"
        >
          BAG
        </Link>

      </div>


      {/* =========================
          PRODUCT
      ========================= */}

      <section className="product-layout">

        {/* =========================
            GALLERY
        ========================= */}

        <div className="product-gallery">

          <div className="product-main-image">

            <img
              src={product.images[activeImage]}
              alt={product.name}
            />

            <button
              type="button"
              className={`product-gallery-wishlist ${
                wishlisted
                  ? "product-gallery-wishlist-active"
                  : ""
              }`}
              onClick={() =>
                toggleWishlist(product.id)
              }
              aria-label={
                wishlisted
                  ? "Remove from wishlist"
                  : "Add to wishlist"
              }
              aria-pressed={wishlisted}
            >
              <HeartIcon filled={wishlisted} />
            </button>

          </div>


          <div className="product-thumbnails">

            {product.images.map(
              (image, index) => (
                <button
                  key={index}
                  type="button"
                  className={`product-thumbnail ${
                    activeImage === index
                      ? "product-thumbnail-active"
                      : ""
                  }`}
                  onClick={() =>
                    setActiveImage(index)
                  }
                  aria-label={`View image ${
                    index + 1
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${
                      index + 1
                    }`}
                  />
                </button>
              )
            )}

          </div>

        </div>


        {/* =========================
            PRODUCT INFORMATION
        ========================= */}

        <div className="product-details">

          <Link
            href={`/shop?category=${product.category}`}
            className="product-category"
          >
            {product.category}
          </Link>

          <h1>{product.name}</h1>

          <div className="product-meta">

            <span>{product.purity}</span>

            <span>·</span>

            <span>{product.weight}</span>

          </div>


          <div className="product-price">
            ₹
            {product.price.toLocaleString(
              "en-IN"
            )}
          </div>


          <p className="product-description">
            {product.description}
          </p>


          {/* =========================
              QUANTITY
          ========================= */}

          <div className="product-quantity-section">

            <span className="product-label">
              QUANTITY
            </span>

            <div className="quantity-control">

              <button
                type="button"
                onClick={decreaseQuantity}
                aria-label="Decrease quantity"
              >
                −
              </button>

              <span>{quantity}</span>

              <button
                type="button"
                onClick={increaseQuantity}
                aria-label="Increase quantity"
              >
                +
              </button>

            </div>

          </div>


          {/* =========================
              ADD TO BAG
          ========================= */}

          <button
            type="button"
            className="product-add-button"
            onClick={handleAddToCart}
          >
            ADD TO BAG
          </button>


          {/* =========================
              PRODUCT DETAILS
          ========================= */}

          <div className="product-accordions">

            <details open>
              <summary>
                PRODUCT DETAILS
                <span>+</span>
              </summary>

              <div className="product-accordion-content">

                <div>
                  <span>Purity</span>
                  <strong>
                    {product.purity}
                  </strong>
                </div>

                <div>
                  <span>Weight</span>
                  <strong>
                    {product.weight}
                  </strong>
                </div>

                <div>
                  <span>Category</span>
                  <strong>
                    {product.category}
                  </strong>
                </div>

                <div>
                  <span>For</span>
                  <strong>
                    {product.gender}
                  </strong>
                </div>

              </div>
            </details>


            <details>
              <summary>
                SHIPPING & DELIVERY
                <span>+</span>
              </summary>

              <div className="product-accordion-content">

                <p>
                  Shipping and delivery details
                  will be confirmed at checkout.
                </p>

              </div>
            </details>


            <details>
              <summary>
                RETURNS
                <span>+</span>
              </summary>

              <div className="product-accordion-content">

                <p>
                  Return policy details will be
                  displayed here before launch.
                </p>

              </div>
            </details>

          </div>

        </div>

      </section>


      {/* =========================
          MOBILE STICKY BAR
      ========================= */}

      <div className="product-mobile-bar">

        <div className="product-mobile-price">
          ₹
          {product.price.toLocaleString(
            "en-IN"
          )}
        </div>

        <button
          type="button"
          onClick={handleAddToCart}
        >
          ADD TO BAG
        </button>

      </div>


      {/* =========================
          TOAST
      ========================= */}

      {addedToBag && (
        <div className="product-toast">

          <div>
            <strong>
              Added to your bag
            </strong>

            <span>
              {product.name}
            </span>
          </div>

          <Link href="/cart">
            VIEW BAG
          </Link>

        </div>
      )}

    </main>
  );
}
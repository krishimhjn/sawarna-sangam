"use client";

import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import "./cart.css";

export default function CartPage() {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    cartTotal,
  } = useCart();

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString("en-IN")}`;
  };

  if (cart.length === 0) {
    return (
      <main className="cart-page">
        <div className="cart-container cart-empty">
          <p className="cart-eyebrow">YOUR BAG</p>

          <h1 className="cart-empty-title">
            Your shopping bag is empty.
          </h1>

          <p className="cart-empty-text">
            Discover our silver jewellery collection and
            find something made to become part of your story.
          </p>

          <Link href="/shop" className="cart-shop-button">
            EXPLORE COLLECTION
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <div className="cart-container">

        {/* Header */}
        <div className="cart-header">
          <div>
            <p className="cart-eyebrow">YOUR BAG</p>

            <h1 className="cart-title">
              Shopping Bag
            </h1>
          </div>

          <p className="cart-item-count">
            {cart.reduce(
              (total, item) => total + item.quantity,
              0
            )}{" "}
            {cart.reduce(
              (total, item) => total + item.quantity,
              0
            ) === 1
              ? "ITEM"
              : "ITEMS"}
          </p>
        </div>

        <div className="cart-layout">

          {/* Cart Items */}
          <section className="cart-items">

            {cart.map((item) => (
              <article
                key={item.id}
                className="cart-item"
              >

                {/* Product Image */}
                <div className="cart-item-image">
                  <img
                    src={item.image}
                    alt={item.name}
                  />
                </div>

                {/* Product Information */}
                <div className="cart-item-details">

                  <p className="cart-item-category">
                    SILVER JEWELLERY
                  </p>

                  <h2 className="cart-item-name">
                    {item.name}
                  </h2>

                  <p className="cart-item-weight">
                    {item.weight}
                  </p>

                  <p className="cart-item-price">
                    {formatPrice(item.price)}
                  </p>

                  {/* Quantity */}
                  <div className="cart-item-bottom">

                    <div className="cart-quantity">

                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.quantity - 1
                          )
                        }
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>

                      <span>
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.quantity + 1
                          )
                        }
                        aria-label="Increase quantity"
                      >
                        +
                      </button>

                    </div>

                    <button
                      type="button"
                      className="cart-remove"
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                    >
                      REMOVE
                    </button>

                  </div>

                </div>

              </article>
            ))}

          </section>

          {/* Summary */}
          <aside className="cart-summary">

            <p className="cart-summary-label">
              ORDER SUMMARY
            </p>

            <div className="cart-summary-row">
              <span>Subtotal</span>

              <span>
                {formatPrice(cartTotal)}
              </span>
            </div>

            <div className="cart-summary-row">
              <span>Shipping</span>

              <span className="cart-shipping-note">
                Calculated at checkout
              </span>
            </div>

            <div className="cart-summary-divider" />

            <div className="cart-summary-total">
              <span>Total</span>

              <strong>
                {formatPrice(cartTotal)}
              </strong>
            </div>

            <button
              type="button"
              className="cart-checkout-button"
            >
              PROCEED TO CHECKOUT
            </button>

            <Link
              href="/shop"
              className="cart-continue"
            >
              CONTINUE SHOPPING →
            </Link>

          </aside>

        </div>
      </div>
    </main>
  );
}
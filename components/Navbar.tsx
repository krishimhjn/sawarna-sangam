"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "@/components/CartProvider";
import { useWishlist } from "@/components/WishlistProvider";
import "./Navbar.css";

const searchProducts = [
  {
    id: 1,
    name: "Classic Silver Chain",
    category: "Chains",
    gender: "Men",
    purity: "92.5%",
    price: 4990,
    image: "/images/hero.jpg",
  },
  {
    id: 2,
    name: "Traditional Silver Payal",
    category: "Payal",
    gender: "Women",
    purity: "92.5%",
    price: 3290,
    image: "/images/hero.jpg",
  },
  {
    id: 3,
    name: "Elegant Silver Bracelet",
    category: "Bracelets",
    gender: "Women",
    purity: "92.5%",
    price: 2890,
    image: "/images/hero.jpg",
  },
  {
    id: 4,
    name: "Silver Kada",
    category: "Bracelets",
    gender: "Men",
    purity: "92.5%",
    price: 4190,
    image: "/images/hero.jpg",
  },
  {
    id: 5,
    name: "Silver Kids Bracelet",
    category: "Bracelets",
    gender: "Kids",
    purity: "92.5%",
    price: 1690,
    image: "/images/hero.jpg",
  },
  {
    id: 6,
    name: "Silver Pendant",
    category: "Pendants",
    gender: "Women",
    purity: "92.5%",
    price: 2190,
    image: "/images/hero.jpg",
  },
  {
    id: 7,
    name: "Silver Men's Ring",
    category: "Rings",
    gender: "Men",
    purity: "92.5%",
    price: 1790,
    image: "/images/hero.jpg",
  },
  {
    id: 8,
    name: "Silver Anklet Pair",
    category: "Anklets",
    gender: "Women",
    purity: "70%",
    price: 2690,
    image: "/images/hero.jpg",
  },
];

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="nav-svg"
    >
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l5 5" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="nav-svg"
    >
      <path d="M20.8 8.8c0 5.2-8.8 10-8.8 10s-8.8-4.8-8.8-10A4.8 4.8 0 0 1 12 6.1a4.8 4.8 0 0 1 8.8 2.7Z" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="nav-svg"
    >
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5.5 20c.7-4 3-6 6.5-6s5.8 2 6.5 6" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="nav-svg"
    >
      <path d="M5 8.5h14l-1 12H6l-1-12Z" />
      <path d="M9 9V6.5a3 3 0 0 1 6 0V9" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg
      viewBox="0 0 12 8"
      aria-hidden="true"
      className="chevron-icon"
    >
      <path d="m1 1 5 5 5-5" />
    </svg>
  );
}

export default function Navbar() {
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();

  const [categoriesOpen, setCategoriesOpen] =
    useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const [mobileCategoriesOpen, setMobileCategoriesOpen] =
    useState(false);

  const [searchOpen, setSearchOpen] =
    useState(false);

  const [searchQuery, setSearchQuery] =
    useState("");

  useEffect(() => {
    document.body.style.overflow =
      searchOpen || mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [searchOpen, mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileCategoriesOpen(false);
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery("");
  };

  const filteredProducts =
    searchQuery.trim().length > 0
      ? searchProducts.filter((product) => {
          const query =
            searchQuery.toLowerCase();

          return (
            product.name
              .toLowerCase()
              .includes(query) ||
            product.category
              .toLowerCase()
              .includes(query) ||
            product.gender
              .toLowerCase()
              .includes(query) ||
            product.purity
              .toLowerCase()
              .includes(query)
          );
        })
      : [];

  return (
    <>
      {/* =========================
          ANNOUNCEMENT
      ========================= */}

      <div className="navbar-announcement">
        TIMELESS SILVER · CRAFTED WITH CARE
      </div>

      {/* =========================
          NAVBAR
      ========================= */}

      <nav className="navbar">
        <div className="navbar-inner">

          {/* LOGO */}

          <div className="navbar-brand">
            <Link
              href="/"
              className="navbar-logo"
              onClick={closeMobileMenu}
            >
              <Image
                src="/images/logo.png"
                alt="Swarna Sangam Jewellers"
                width={581}
                height={226}
                priority
              />
            </Link>
          </div>


          {/* DESKTOP NAVIGATION */}

          <div className="desktop-nav">

            {/* CATEGORIES */}

            <div
              className="categories-wrapper"
              onMouseEnter={() =>
                setCategoriesOpen(true)
              }
              onMouseLeave={() =>
                setCategoriesOpen(false)
              }
            >
              <button
                type="button"
                className="categories-button"
                onClick={() =>
                  setCategoriesOpen(
                    (current) => !current
                  )
                }
              >
                <span>CATEGORIES</span>

                <ChevronDown />
              </button>

              {categoriesOpen && (
                <div className="categories-dropdown">

                  <div className="category-column">
                    <p className="category-heading">
                      WOMEN
                    </p>

                    <Link href="/shop?category=Necklaces">
                      Necklaces
                    </Link>

                    <Link href="/shop?category=Chains">
                      Chains
                    </Link>

                    <Link href="/shop?category=Bracelets">
                      Bracelets
                    </Link>

                    <Link href="/shop?category=Rings">
                      Rings
                    </Link>
                  </div>


                  <div className="category-column">
                    <p className="category-heading">
                      MEN
                    </p>

                    <Link href="/shop?category=Chains">
                      Chains
                    </Link>

                    <Link href="/shop?category=Bracelets">
                      Bracelets
                    </Link>

                    <Link href="/shop?category=Rings">
                      Rings
                    </Link>

                    <Link href="/shop?category=Kada">
                      Kada
                    </Link>
                  </div>


                  <div className="category-column">
                    <p className="category-heading">
                      OTHER
                    </p>

                    <Link href="/shop?gender=Kids">
                      Kids
                    </Link>

                    <Link href="/shop?category=Payal">
                      Payal & Anklets
                    </Link>

                    <Link href="/shop?category=Gifts">
                      Gifts
                    </Link>

                    <Link href="/shop?category=Artifacts">
                      Artifacts
                    </Link>
                  </div>


                  <div className="category-footer">
                    <Link href="/shop">
                      VIEW ALL SILVER
                    </Link>
                  </div>

                </div>
              )}
            </div>


            {/* OTHER NAV LINKS */}

            <Link
              href="/shop?new=true"
              className="nav-link"
            >
              NEW ARRIVALS
            </Link>

            <Link
              href="/shop?best=true"
              className="nav-link"
            >
              BEST SELLERS
            </Link>

            <Link
              href="/shop?category=Gifts"
              className="nav-link"
            >
              GIFTS
            </Link>

          </div>


          {/* =========================
              DESKTOP ACTIONS
          ========================= */}

          <div className="navbar-actions">

            {/* SEARCH */}

            <button
              type="button"
              className="navbar-action"
              onClick={() =>
                setSearchOpen(true)
              }
              aria-label="Search"
            >
              <SearchIcon />
            </button>


            {/* WISHLIST */}

            <Link
              href="/wishlist"
              className="navbar-action navbar-wishlist"
              aria-label="Wishlist"
            >
              <HeartIcon />

              {wishlistCount > 0 && (
                <span className="navbar-count">
                  {wishlistCount}
                </span>
              )}
            </Link>


            {/* ACCOUNT */}

            <button
              type="button"
              className="navbar-action account-button"
              aria-label="Account"
            >
              <UserIcon />
            </button>


            {/* BAG */}

            <Link
              href="/cart"
              className="navbar-action navbar-bag"
              aria-label="Shopping bag"
            >
              <BagIcon />

              {cartCount > 0 && (
                <span className="navbar-count cart-count">
                  {cartCount}
                </span>
              )}
            </Link>


            {/* MOBILE MENU */}

            <button
              type="button"
              className="mobile-menu-button"
              onClick={() =>
                setMobileMenuOpen(
                  (current) => !current
                )
              }
              aria-label={
                mobileMenuOpen
                  ? "Close menu"
                  : "Open menu"
              }
            >
              {mobileMenuOpen ? "×" : "☰"}
            </button>

          </div>

        </div>
      </nav>


      {/* =========================
          MOBILE MENU
      ========================= */}

      {mobileMenuOpen && (
        <div className="mobile-menu">

          <button
            type="button"
            className="mobile-menu-item mobile-category-button"
            onClick={() =>
              setMobileCategoriesOpen(
                (current) => !current
              )
            }
          >
            <span>CATEGORIES</span>

            <span>
              {mobileCategoriesOpen
                ? "−"
                : "+"}
            </span>
          </button>


          {mobileCategoriesOpen && (
            <div className="mobile-categories">

              <div className="mobile-category-grid">

                <Link
                  href="/shop?gender=Women"
                  onClick={closeMobileMenu}
                >
                  Women
                </Link>

                <Link
                  href="/shop?gender=Men"
                  onClick={closeMobileMenu}
                >
                  Men
                </Link>

                <Link
                  href="/shop?gender=Kids"
                  onClick={closeMobileMenu}
                >
                  Kids
                </Link>

                <Link
                  href="/shop?category=Chains"
                  onClick={closeMobileMenu}
                >
                  Chains
                </Link>

                <Link
                  href="/shop?category=Bracelets"
                  onClick={closeMobileMenu}
                >
                  Bracelets
                </Link>

                <Link
                  href="/shop?category=Rings"
                  onClick={closeMobileMenu}
                >
                  Rings
                </Link>

                <Link
                  href="/shop?category=Payal"
                  onClick={closeMobileMenu}
                >
                  Payal
                </Link>

                <Link
                  href="/shop?category=Gifts"
                  onClick={closeMobileMenu}
                >
                  Gifts
                </Link>

              </div>

            </div>
          )}


          <Link
            href="/shop?new=true"
            className="mobile-menu-item"
            onClick={closeMobileMenu}
          >
            NEW ARRIVALS
          </Link>


          <Link
            href="/shop?best=true"
            className="mobile-menu-item"
            onClick={closeMobileMenu}
          >
            BEST SELLERS
          </Link>


          <Link
            href="/shop?category=Gifts"
            className="mobile-menu-item"
            onClick={closeMobileMenu}
          >
            GIFTS
          </Link>


          <Link
            href="/wishlist"
            className="mobile-menu-item"
            onClick={closeMobileMenu}
          >
            <span>WISHLIST</span>

            {wishlistCount > 0 && (
              <span className="mobile-wishlist-count">
                {wishlistCount}
              </span>
            )}
          </Link>


          <Link
            href="/cart"
            className="mobile-menu-item mobile-cart-link"
            onClick={closeMobileMenu}
          >
            <span>BAG</span>

            {cartCount > 0 && (
              <span className="mobile-cart-count">
                {cartCount}
              </span>
            )}
          </Link>

        </div>
      )}


      {/* =========================
          SEARCH OVERLAY
      ========================= */}

      {searchOpen && (
        <div
          className="search-overlay"
          onClick={closeSearch}
        >

          <div className="search-overlay-backdrop" />

          <div
            className="search-panel"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <div className="search-header">

              <div className="search-brand">

                <span>
                  SWARNA SANGAM
                </span>

                <p>
                  Search our silver collection
                </p>

              </div>


              <button
                type="button"
                className="search-close"
                onClick={closeSearch}
                aria-label="Close search"
              >
                ×
              </button>

            </div>


            <div className="search-input-wrapper">

              <SearchIcon />

              <input
                type="search"
                autoFocus
                value={searchQuery}
                onChange={(event) =>
                  setSearchQuery(
                    event.target.value
                  )
                }
                placeholder="Search jewellery..."
              />

              {searchQuery && (
                <button
                  type="button"
                  className="search-clear"
                  onClick={() =>
                    setSearchQuery("")
                  }
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}

            </div>


            <div className="search-results">

              {searchQuery.trim() === "" ? (

                <div className="search-start">

                  <p>
                    POPULAR SEARCHES
                  </p>

                  <div className="search-suggestions">

                    <button
                      type="button"
                      onClick={() =>
                        setSearchQuery("chain")
                      }
                    >
                      Chains
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setSearchQuery("bracelet")
                      }
                    >
                      Bracelets
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setSearchQuery("ring")
                      }
                    >
                      Rings
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setSearchQuery("payal")
                      }
                    >
                      Payal
                    </button>

                  </div>

                </div>

              ) : filteredProducts.length > 0 ? (

                <div className="search-result-list">

                  <div className="search-result-count">
                    {filteredProducts.length}{" "}
                    PRODUCTS FOUND
                  </div>

                  {filteredProducts.map(
                    (product) => (

                      <Link
                        key={product.id}
                        href={`/product/${product.id}`}
                        className="search-result"
                        onClick={closeSearch}
                      >

                        <div className="search-result-image">

                          <img
                            src={product.image}
                            alt={product.name}
                          />

                        </div>


                        <div className="search-result-info">

                          <p>
                            {product.category}
                          </p>

                          <h3>
                            {product.name}
                          </h3>

                          <span>
                            {product.purity}
                          </span>

                        </div>


                        <strong>
                          →
                        </strong>

                      </Link>

                    )
                  )}

                </div>

              ) : (

                <div className="search-no-results">

                  <div>
                    NO PRODUCTS FOUND
                  </div>

                  <p>
                    We couldn't find anything
                    matching your search.
                  </p>

                  <Link
                    href="/shop"
                    onClick={closeSearch}
                  >
                    VIEW ALL PRODUCTS
                  </Link>

                </div>

              )}

            </div>

          </div>

        </div>
      )}
    </>
  );
}
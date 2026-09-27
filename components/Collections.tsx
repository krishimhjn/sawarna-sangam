import "./Collections.css";

const collections = [
  {
    title: "Women",
    description: "Necklaces, rings, bracelets & more",
    href: "/shop?category=women",
    number: "01",
  },
  {
    title: "Men",
    description: "Chains, rings, bracelets & more",
    href: "/shop?category=men",
    number: "02",
  },
  {
    title: "Kids",
    description: "Delicate pieces for little ones",
    href: "/shop?category=kids",
    number: "03",
  },
  {
    title: "Gifts & Artifacts",
    description: "Meaningful silver pieces",
    href: "/shop?category=gifts",
    number: "04",
  },
];

export default function Collections() {
  return (
    <section id="collection" className="collections">
      <div className="collections-container">

        <div className="collections-header">
          <div>
            <p className="collections-label">EXPLORE</p>

            <h2 className="collections-title">
              Our Collections
            </h2>
          </div>

          <a
            href="/shop"
            className="collections-view-all"
          >
            VIEW ALL
            <span>↗</span>
          </a>
        </div>

        <div className="collections-grid">
          {collections.map((collection) => (
            <a
              key={collection.title}
              href={collection.href}
              className="collection-card"
            >
              <div className="collection-card-number">
                {collection.number}
              </div>

              <div className="collection-card-content">

                <p className="collection-card-label">
                  COLLECTION
                </p>

                <h3 className="collection-card-title">
                  {collection.title}
                </h3>

                <p className="collection-card-description">
                  {collection.description}
                </p>

                <span className="collection-card-link">
                  EXPLORE
                  <span className="collection-arrow">→</span>
                </span>

              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
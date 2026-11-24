
import React, { useEffect, useState } from "react";
import "./App.css";

const dresses = [
  "/dress1.jpg",
  "/dress2.jpg",
  "/dress3.jpg"
];

const collections = [
  [
    { name: "DESIGNER TOTE BAG", price: "$160.00", image: "/handabg1.jpg" },
    { name: "EVENING GOWN", price: "$180.00", image: "/dress4.jpg" },
    { name: "PREMIUM FOOTWEAR", price: "$120.00", image: "/slipper.jpg" }
  ],
  [
    { name: "CLASSIC HANDBAG", price: "$150.00", image: "/handbag.jpg" },
    { name: "DESIGNER DRESS", price: "$190.00", image: "/dress5.jpg" },
    { name: "FLORAL HEELS", price: "$130.00", image: "/shoe.jpg" }
  ],
  [
    { name: "LUXURY HANDBAG", price: "$170.00", image: "/handbag2.jpg" },
    { name: "PARTY COLLECTION", price: "$200.00", image: "/earings.jpg" },
    { name: "DESIGNER SHOES", price: "$140.00", image: "/shoe1.jpg" }
  ],
 
];

function App() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive(prev => (prev + 1) % dresses.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="website">

      <section className="main-banner">

        <div className="banner-heading">
          <h1>
            WINTER
            <br />
            COLLECTION
          </h1>

          <p>
            Stay ahead of the trend with our premium winter
            collection. Find styles that make every moment
            special.
          </p>

          <div className="season">
            <span className="season-icon">Ⅱ</span>
            <span>NEW SEASON COLLECTION</span>
          </div>
        </div>

        <div className="dress-stage">

          {dresses.map((image, index) => {
            const position =
              (index - active + dresses.length) % dresses.length;

            return (
              <div
                key={image}
                className={`model model-${position}`}
              >
                <img src={image} alt="Winter fashion collection" />
              </div>
            );
          })}

        </div>

      </section>

      <aside className="product-sidebar" key={active}>

        {collections[active].map((product, index) => (
          <div className="product-card" key={product.image}>

            <div className="product-photo">
              <img src={product.image} alt={product.name} />
            </div>

            <p className="product-name">{product.name}</p>
            <p className="product-price">{product.price}</p>

          </div>
        ))}

      </aside>

    </main>
  );
}

export default App;

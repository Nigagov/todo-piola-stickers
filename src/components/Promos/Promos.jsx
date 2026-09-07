import "./Promos.css";

function Promos() {
  const combos = [
    {
      id: "stickers-6cm",
      icon: "🟡",
      title: "Stickers 6 cm",
      description:
        "Elegí la cantidad que necesitás y armá tu combo.",
      options: [
        {
          id: "sticker-6cm-1",
          quantity: "1 unidad",
          price: 2000,
        },
        {
          id: "sticker-6cm-10",
          quantity: "10 unidades",
          price: 15000,
        },
        {
          id: "sticker-6cm-50",
          quantity: "50 unidades",
          price: 40000,
        },
      ],
    },

    {
      id: "dtf-uv",
      icon: "🌸",
      title: "Stickers en DTF UV",
      description:
        "Stickers resistentes y con excelente terminación.",
      options: [
        {
          id: "dtf-uv-5cm",
          quantity: "100 unidades (5 cm)",
          price: 90000,
        },
        {
          id: "dtf-uv-8cm",
          quantity: "100 unidades (8 cm)",
          price: 240000,
        },
      ],
    },

    {
      id: "tatuajes",
      icon: "✨",
      title: "Tatuajes temporales",
      description:
        "Ideales para eventos, diseños y momentos especiales.",
      options: [
        {
          id: "tatuajes-30",
          quantity: "30 unidades",
          price: 30000,
        },
        {
          id: "tatuajes-50",
          quantity: "50 unidades",
          price: 40000,
        },
        {
          id: "tatuajes-100",
          quantity: "100 unidades",
          price: 70000,
        },
      ],
    },
  ];

  function addToCart(combo, option) {
    const currentCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = currentCart.find(
      (item) => item.id === option.id
    );

    let updatedCart;

    if (existingProduct) {
      updatedCart = currentCart.map((item) =>
        item.id === option.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
    } else {
      updatedCart = [
        ...currentCart,
        {
          id: option.id,
          name: `${combo.title} - ${option.quantity}`,
          price: option.price,
          icon: combo.icon,
          quantity: 1,
        },
      ];
    }

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    window.dispatchEvent(
      new Event("cartUpdated")
    );

    alert(
      `${combo.title} (${option.quantity}) fue agregado al carrito 🛒`
    );
  }

  return (
    <section id="promos" className="promos">

      <h2>🔥 Combos y precios</h2>

      <p className="promos-subtitle">
        Elegí la opción que mejor se adapte a lo que necesitás.
      </p>

      <div className="promos-grid">

        {combos.map((combo) => (

          <div
            className="promo-card"
            key={combo.id}
          >

            <div className="promo-icon">
              {combo.icon}
            </div>

            <h3>{combo.title}</h3>

            <p className="promo-description">
              {combo.description}
            </p>

            <div className="promo-options">

              {combo.options.map((option) => (

                <div
                  className="promo-option"
                  key={option.id}
                >

                  <div>

                    <span className="option-quantity">
                      {option.quantity}
                    </span>

                    <strong>
                      $
                      {option.price.toLocaleString("es-AR")}
                    </strong>

                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      addToCart(combo, option)
                    }
                  >
                    🛒 Agregar
                  </button>

                </div>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Promos;
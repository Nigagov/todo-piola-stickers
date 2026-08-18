import "./Products.css";

function Products() {

  const products = [
    {
      id: 1,
      name: "Stickers en tendencia",
      description: "Los diseños que están marcando tendencia.",
      icon: "🔥",
    },
    {
      id: 2,
      name: "Los más vendidos",
      description: "Los favoritos de nuestros clientes.",
      icon: "🏆",
    },
    {
      id: 3,
      name: "Emprendimientos",
      description: "Stickers con logos e identidad de marca.",
      icon: "🏪",
    },
  ];

  function addToCart(product) {

    const currentCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = currentCart.find(
      (item) => item.id === product.id
    );

    let updatedCart;

    if (existingProduct) {

      updatedCart = currentCart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: Number(item.quantity || 0) + 1,
            }
          : item
      );

    } else {

      updatedCart = [
        ...currentCart,
        {
          ...product,
          price: 0,
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
      `${product.name} fue agregado al carrito 🛒`
    );
  }

  return (
    <section
      id="productos"
      className="products"
    >

      <h2>⭐ Productos destacados</h2>

      <p className="products-subtitle">
        Conocé algunos de los diseños que más se destacan en Todo Piola Stickers.
      </p>

      <div className="products-grid">

        {products.map((product) => (

          <div
            className="product-card"
            key={product.id}
          >

            <div className="product-image">
              {product.icon}
            </div>

            <h3>
              {product.name}
            </h3>

            <p className="product-description">
              {product.description}
            </p>

            <button
              type="button"
              onClick={() =>
                addToCart(product)
              }
            >
              🛒 Agregar al carrito
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Products;
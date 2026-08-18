import { useEffect, useState } from "react";
import "./Cart.css";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const loadCart = () => {
      const savedCart =
        JSON.parse(localStorage.getItem("cart")) || [];

      const normalizedCart = savedCart.map((item) => ({
        ...item,
        quantity:
          Number(item.quantity) > 0
            ? Number(item.quantity)
            : 1,
      }));

      setCart(normalizedCart);

      localStorage.setItem(
        "cart",
        JSON.stringify(normalizedCart)
      );
    };

    loadCart();

    window.addEventListener("cartUpdated", loadCart);

    return () => {
      window.removeEventListener("cartUpdated", loadCart);
    };
  }, []);

  const updateQuantity = (id, change) => {
    const updatedCart = cart
      .map((item) => ({
        ...item,
        quantity: Number(item.quantity) + change,
      }))
      .filter(
        (item) =>
          item.id !== id ||
          item.quantity > 0
      );

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  const removeProduct = (id) => {
    const updatedCart = cart.filter(
      (item) => item.id !== id
    );

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  const total = cart.reduce(
    (acc, item) =>
      acc + item.price * item.quantity,
    0
  );

  const sendWhatsAppOrder = () => {
    if (cart.length === 0) {
      return;
    }

    let message =
      "Hola 👋 Quiero hacer un pedido de Todo Piola Stickers:\n\n";

    cart.forEach((item) => {
      message +=
        `${item.icon} ${item.name} x${item.quantity} - $${(
          item.price * item.quantity
        ).toLocaleString("es-AR")}\n`;
    });

    message +=
      `\n💰 Total estimado: $${total.toLocaleString("es-AR")}`;

    message +=
      "\n\nQuedo atento/a para coordinar el pago y el envío 😊";

    const whatsappUrl =
      `https://wa.me/5493571456314?text=${encodeURIComponent(message)}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section id="carrito" className="cart">

      <h2>🛒 Tu carrito</h2>

      {cart.length === 0 ? (

        <div className="cart-empty">

          <div className="cart-icon">
            🛍️
          </div>

          <h3>Tu carrito está vacío</h3>

          <p>
            Agregá tus stickers favoritos y aparecerán acá.
          </p>

          <a
            href="#productos"
            className="cart-button-shop"
          >
            Explorar productos
          </a>

        </div>

      ) : (

        <div className="cart-container">

          <div className="cart-items">

            {cart.map((item) => (

              <div
                className="cart-item"
                key={item.id}
              >

                <div className="cart-item-info">

                  <span className="cart-item-icon">
                    {item.icon}
                  </span>

                  <div>
                    <h3>{item.name}</h3>

                    <p>
                      ${item.price.toLocaleString("es-AR")} c/u
                    </p>
                  </div>

                </div>

                <div className="cart-item-actions">

                  <button
                    type="button"
                    onClick={() =>
                      updateQuantity(item.id, -1)
                    }
                  >
                    −
                  </button>

                  <span>
                    {item.quantity}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      updateQuantity(item.id, 1)
                    }
                  >
                    +
                  </button>

                  <button
                    type="button"
                    className="remove-button"
                    onClick={() =>
                      removeProduct(item.id)
                    }
                  >
                    🗑️
                  </button>

                </div>

                <strong className="cart-item-total">
                  $
                  {(
                    item.price * item.quantity
                  ).toLocaleString("es-AR")}
                </strong>

              </div>

            ))}

          </div>

          <div className="cart-summary">

            <h3>Resumen del pedido</h3>

            <div className="cart-total">

              <span>Total estimado</span>

              <strong>
                ${total.toLocaleString("es-AR")}
              </strong>

            </div>

            <p>
              El pedido se enviará por WhatsApp para
              confirmar disponibilidad, pago y envío.
            </p>

            <button
              type="button"
              className="whatsapp-order-button"
              onClick={sendWhatsAppOrder}
            >
              📱 Realizar pedido por WhatsApp
            </button>

          </div>

        </div>

      )}

    </section>
  );
}

export default Cart;
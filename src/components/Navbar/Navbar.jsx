import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-logo">

        <img
          src="/logo.jpeg"
          alt="Todo Piola Stickers"
        />

        <span>Todo Piola Stickers</span>

      </div>

      <ul className="navbar-links">

        <li>
          <a href="#inicio">Inicio</a>
        </li>

        <li>
          <a href="#catalogo">Catálogo</a>
        </li>

        <li>
          <a href="#promos">Promos</a>
        </li>

        <li>
          <a href="#personalizados">Personalizados</a>
        </li>

        <li>
          <a href="#contacto">Contacto</a>
        </li>

      </ul>

      <button
        className="cart-button"
        type="button"
        onClick={() => {
          document
            .getElementById("carrito")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        🛒
      </button>

    </nav>
  );
}

export default Navbar;
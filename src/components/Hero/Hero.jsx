import "./Hero.css";

function Hero() {
  return (
    <section id="inicio" className="hero">

      <div className="hero-content">

        <img
          src="/logo.jpeg"
          alt="Todo Piola Stickers"
          className="logo"
        />

        <h1>Todo Piola Stickers</h1>

        <p>
          Los productos más piolas de Argentina.
        </p>

        <a href="#catalogo" className="hero-button">
          Ver catálogo
        </a>

      </div>

    </section>
  );
}

export default Hero;
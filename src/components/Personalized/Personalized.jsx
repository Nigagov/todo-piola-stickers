import "./Personalized.css";

function Personalized() {
  return (
    <section id="personalizados" className="personalized">

      <h2>🎨 Stickers personalizados</h2>

      <p className="personalized-subtitle">
        ¿Tenés una idea? La convertimos en un sticker único para vos.
      </p>

      <div className="personalized-grid">

        <div className="personalized-card">

          <div className="personalized-icon">
            🏪
          </div>

          <h3>Para emprendimientos</h3>

          <p>
            Creamos stickers con tu logo, marca o diseño para darle identidad
            a tu emprendimiento.
          </p>

        </div>

        <div className="personalized-card">

          <div className="personalized-icon">
            ✏️
          </div>

          <h3>Tu propio diseño</h3>

          <p>
            Mandanos tu imagen o idea y prepararemos un sticker pensado para
            vos.
          </p>

        </div>

        <div className="personalized-card">

          <div className="personalized-icon">
            ⭐
          </div>

          <h3>Diseños únicos</h3>

          <p>
            Elegí el material, tamaño y acabado que más te guste para crear
            algo completamente personalizado.
          </p>

        </div>

      </div>

      <a
        href="https://wa.me/5493571456314?text=Hola%20👋%20Quiero%20consultar%20por%20stickers%20personalizados."
        target="_blank"
        rel="noopener noreferrer"
        className="personalized-button"
      >
        Consultar por WhatsApp
      </a>

    </section>
  );
}

export default Personalized;
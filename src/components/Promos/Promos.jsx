import "./Promos.css";

function Promos() {

  const whatsappPlanchas =
    "https://wa.me/5493571456314?text=Hola%20👋%20Quisiera%20consultar%20por%20los%20combos%20en%20planchas.";

  const whatsappIndividuales =
    "https://wa.me/5493571456314?text=Hola%20👋%20Quisiera%20consultar%20por%20los%20combos%20individuales.";

  return (
    <section id="promos" className="promos">

      <h2>🔥 Promos y Combos</h2>

      <p className="promos-subtitle">
        Elegí la opción que mejor se adapte a lo que estás buscando.
      </p>

      <div className="promos-grid">

        {/* COMBOS EN PLANCHAS */}

        <div className="promo-card">

          <div className="promo-icon">
            📄
          </div>

          <span className="badge">
            COMBOS EN PLANCHAS
          </span>

          <h3>Combos en planchas</h3>

          <p className="promo-description">
            Varios stickers reunidos en una misma plancha,
            ideales para tener diferentes diseños en un solo combo.
          </p>

          <div className="promo-placeholder">
            <span>📦</span>

            <p>
              Consultá disponibilidad y opciones.
            </p>
          </div>

          <a
            href={whatsappPlanchas}
            target="_blank"
            rel="noopener noreferrer"
            className="promo-button"
          >
            📱 Consultar combo
          </a>

        </div>


        {/* COMBOS INDIVIDUALES */}

        <div className="promo-card">

          <div className="promo-icon">
            ✨
          </div>

          <span className="badge">
            COMBOS INDIVIDUALES
          </span>

          <h3>Combos individuales</h3>

          <p className="promo-description">
            Combiná diferentes stickers individuales
            y armá el combo que más te guste.
          </p>

          <div className="promo-placeholder">
            <span>🛍️</span>

            <p>
              Consultá disponibilidad y opciones.
            </p>
          </div>

          <a
            href={whatsappIndividuales}
            target="_blank"
            rel="noopener noreferrer"
            className="promo-button"
          >
            📱 Consultar combo
          </a>

        </div>

      </div>

    </section>
  );
}

export default Promos;
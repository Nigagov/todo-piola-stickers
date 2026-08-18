import "./Catalog.css";

function Catalog() {

  // Cuando ella te pase el Drive, reemplazamos solamente este valor.
  const driveLink = "";

  const pinterestLink =
    "https://pin.it/3rOVrwpCv";

  return (
    <section id="catalogo" className="catalog">

      <h2>📚 Nuestro catálogo</h2>

      <p className="catalog-subtitle">
        Descubrí nuestros diseños y consultá los stickers disponibles
        actualmente.
      </p>

      <div className="catalog-grid">

        {/* STOCK */}

        <div className="catalog-card stock-card">

          <div className="catalog-icon">
            📦
          </div>

          <span className="catalog-badge">
            STOCK DISPONIBLE
          </span>

          <h3>Stickers disponibles</h3>

          <p>
            Consultá nuestro stock actualizado y encontrá los diseños
            disponibles para comprar.
          </p>

          {driveLink ? (
            <a
              href={driveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="catalog-button"
            >
              📦 Ver stock disponible
            </a>
          ) : (
            <button
              type="button"
              className="catalog-button catalog-button-disabled"
              disabled
            >
              📦 Stock próximamente
            </button>
          )}

        </div>


        {/* PINTEREST */}

        <div className="catalog-card">

          <div className="catalog-icon">
            📌
          </div>

          <span className="catalog-badge secondary">
            INSPIRACIÓN
          </span>

          <h3>Descubrí nuestros diseños</h3>

          <p>
            También podés conocer más ideas y diseños a través de nuestro
            catálogo de Pinterest.
          </p>

          <a
            href={pinterestLink}
            target="_blank"
            rel="noopener noreferrer"
            className="catalog-button secondary-button"
          >
            📌 Ver Pinterest
          </a>

        </div>

      </div>

    </section>
  );
}

export default Catalog;
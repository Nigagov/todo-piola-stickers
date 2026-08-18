import "./Benefits.css";

function Benefits() {
  return (
    <section className="benefits">

      <h2>¿Por qué elegir Todo Piola Stickers?</h2>

      <div className="benefits-grid">

        <div className="benefit-card">
          <span>🚚</span>
          <h3>Envíos a todo el país</h3>
          <p>
            Recibí tus stickers donde estés.
          </p>
        </div>

        <div className="benefit-card resistance-card">

          <span>💧☀️✋</span>

          <h3>Resistentes y duraderos</h3>

          <p>
            Resistentes al agua, al sol y al roce.
          </p>

        </div>

        <div className="benefit-card">
          <span>🎨</span>
          <h3>Diseños personalizados</h3>
          <p>
            Hacemos stickers únicos para vos.
          </p>
        </div>

        <div className="benefit-card">
          <span>💳</span>
          <h3>Pagá con Mercado Pago</h3>
          <p>
            Comprá de forma rápida y segura.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Benefits;
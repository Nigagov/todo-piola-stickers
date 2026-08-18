import "./Payment.css";

function Payment() {
  return (
    <section className="payment">

      <h2>💳 Formas de pago</h2>

      <p className="payment-subtitle">
        Elegí el método que te resulte más cómodo para realizar tu compra.
      </p>

      <div className="payment-grid">

        <div className="payment-card">

          <div className="payment-icon">
            💳
          </div>

          <h3>Mercado Pago</h3>

          <p>
            Pagá de forma rápida y segura con todas las tarjetas.
          </p>

        </div>

        <div className="payment-card">

          <div className="payment-icon">
            🏦
          </div>

          <h3>Transferencia</h3>

          <p>
            Transferencia bancaria o virtual mediante Alias o CBU.
          </p>

        </div>

        <div className="payment-card">

          <div className="payment-icon">
            💵
          </div>

          <h3>Efectivo</h3>

          <p>
            Consultá disponibilidad para retiro en Río Tercero.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Payment;
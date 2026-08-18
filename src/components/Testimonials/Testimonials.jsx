import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">

      <h2>⭐ Lo que dicen nuestros clientes</h2>

      <p className="testimonials-subtitle">
        Más de <strong>500 clientes felices</strong> ya confiaron en Todo Piola Stickers.
      </p>

      <div className="testimonials-grid">

        <div className="testimonial-card">

          <div className="stars">
            ⭐⭐⭐⭐⭐
          </div>

          <p>
            "Excelente calidad. Los stickers quedaron increíbles y llegaron antes de lo esperado."
          </p>

          <h4>Marcos</h4>

        </div>

        <div className="testimonial-card">

          <div className="stars">
            ⭐⭐⭐⭐⭐
          </div>

          <p>
            "La impresión es espectacular. Muy buena atención y excelente calidad."
          </p>

          <h4>Melina</h4>

        </div>

        <div className="testimonial-card">

          <div className="stars">
            ⭐⭐⭐⭐⭐
          </div>

          <p>
            "Volvería a comprar sin dudas. Muy recomendables."
          </p>

          <h4>Camila</h4>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;
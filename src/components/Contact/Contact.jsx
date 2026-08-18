import "./Contact.css";

function Contact() {

  const whatsappLink =
    "https://wa.me/5493571456314?text=Hola%20👋%20Vi%20la%20página%20de%20Todo%20Piola%20Stickers%20y%20quisiera%20hacer%20una%20consulta.";

  const instagramLink =
    "https://www.instagram.com/todopiolastickers/";

  return (
    <section id="contacto" className="contact">

      <h2>📞 ¡Hablemos!</h2>

      <p className="contact-subtitle">
        ¿Tenés una idea para un sticker? Nosotros la hacemos realidad.
      </p>

      <div className="contact-grid">

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <div className="contact-icon">
            📱
          </div>

          <h3>WhatsApp</h3>

          <p>
            Escribinos y recibí atención personalizada.
          </p>
        </a>

        <a
          href={instagramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <div className="contact-icon">
            📷
          </div>

          <h3>Instagram</h3>

          <p>
            Seguinos para ver nuevos diseños y promociones.
          </p>
        </a>

        <div className="contact-card">

          <div className="contact-icon">
            📍
          </div>

          <h3>Ubicación</h3>

          <p>
            Río Tercero, Córdoba, Argentina.
          </p>

        </div>

      </div>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="contact-button"
      >
        Escribinos por WhatsApp
      </a>

    </section>
  );
}

export default Contact;
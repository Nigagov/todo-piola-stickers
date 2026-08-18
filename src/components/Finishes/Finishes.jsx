import "./Finishes.css";

function Finishes() {

  const finishes = [
    {
      icon: "🖤",
      title: "Mate",
      description:
        "Un acabado elegante y sin reflejos, ideal para un estilo moderno."
    },
    {
      icon: "✨",
      title: "Brillante",
      description:
        "Colores más intensos y vivos con un acabado llamativo."
    },
    {
      icon: "🪵",
      title: "Texturizado",
      description:
        "Una terminación con relieve que aporta una sensación única al tacto."
    }
  ];

  return (
    <section className="finishes">

      <h2>Tipos de acabado</h2>

      <p className="finishes-subtitle">
        Elegí el acabado que mejor represente tu diseño y personalidad.
      </p>

      <div className="finishes-grid">

        {finishes.map((finish) => (
          <div className="finish-card" key={finish.title}>

            <div className="finish-icon">
              {finish.icon}
            </div>

            <h3>{finish.title}</h3>

            <p>{finish.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Finishes;
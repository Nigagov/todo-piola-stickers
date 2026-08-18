import "./Materials.css";

function Materials() {
  return (
    <section className="materials">

      <h2>Nuestros materiales</h2>

      <p className="materials-subtitle">
        Elegí el material que mejor se adapte al diseño y uso de tus stickers.
      </p>

      <div className="materials-grid">

        {/* DTF UV */}

        <div className="material-card">

          <div className="material-icon">
            🎨
          </div>

          <span className="material-badge">
            MATERIAL
          </span>

          <h3>DTF UV</h3>

          <p>
            Una opción ideal para lograr diseños con excelente definición
            y un acabado profesional.
          </p>

        </div>


        {/* VINILO */}

        <div className="material-card">

          <div className="material-icon">
            🏷️
          </div>

          <span className="material-badge">
            MATERIAL
          </span>

          <h3>Vinilo</h3>

          <p>
            Elegí entre nuestras dos opciones de vinilo según el resultado
            que estés buscando.
          </p>


          <div className="vinyl-options">

            <div className="vinyl-option">

              <span>✨</span>

              <div>
                <h4>Vinilo transparente</h4>

                <p>
                  Ideal cuando buscás un acabado transparente.
                </p>
              </div>

            </div>


            <div className="vinyl-option">

              <span>⬜</span>

              <div>
                <h4>Vinilo común</h4>

                <p>
                  Una opción clásica para tus diseños.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Materials;
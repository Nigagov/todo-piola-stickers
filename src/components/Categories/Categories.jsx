import "./Categories.css";

function Categories() {

  const categories = [
    "🎨 Ilustración / Arte",
    "🎭 Cultura / Entretenimiento",
    "🛠️ Hobbies / Profesiones",
    "🌿 Naturaleza / Animales",
    "✨ Varios",
  ];

  return (
    <section className="categories">

      <h2>Explorá por categorías</h2>

      <p className="categories-subtitle">
        Encontrá stickers para todos los gustos y descubrí tu próxima colección.
      </p>

      <div className="categories-grid">

        {categories.map((category) => (
          <div className="category-card" key={category}>
            {category}
          </div>
        ))}

      </div>

    </section>
  );
}

export default Categories;
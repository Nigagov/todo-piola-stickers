import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Benefits from "./components/Benefits/Benefits";
import Categories from "./components/Categories/Categories";
import Catalog from "./components/Catalog/Catalog";
import Products from "./components/Products/Products";
import Promos from "./components/Promos/Promos";
import Testimonials from "./components/Testimonials/Testimonials";
import Materials from "./components/Materials/Materials";
import Finishes from "./components/Finishes/Finishes";
import Payment from "./components/Payment/Payment";
import Contact from "./components/Contact/Contact";
import Personalized from "./components/Personalized/Personalized";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <Benefits />

      <Categories />

      <Catalog />

      <Personalized />
      
      <Products />

      <Promos />

      <Testimonials />

      <Materials />

      <Finishes />

      <Payment />

      <Contact />

      <Cart />
    </>
  );
}

export default App;
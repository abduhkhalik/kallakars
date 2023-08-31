import About from "../../components/about/About";
import Navbar from "../../components/navbar/Navbar";
import Products from "../../components/products/Products";
import Slider from "../../components/slider/Slider";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="">
        <div className="relative">
          <Slider />
          <About />
          <Products/>
        </div>
      </section>
    </>
  );
};

export default Home;

import About from "../../components/about/About";
import Footer from "../../components/footer/Footer";
import Location from "../../components/location/Location";
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
          <Location/>
          <Footer/>
        </div>
      </section>
    </>
  );
};

export default Home;

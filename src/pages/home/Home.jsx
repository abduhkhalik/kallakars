import About from "../../components/about/About";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="">
        <div className="relative">
          <Slider />
          <About />
        </div>
      </section>
    </>
  );
};

export default Home;

import Pic from "../../assets/Pak Hasanudin.jpeg";

const About = () => {
  return (
    <section className="py-16">
      <div className="container">
      <div className="flex justify-center items-center">
        <div className="flex flex-wrap lg:flex-nowrap lg:gap-5">
          <div className="w-full lg:w-1/2">
            <img src={Pic} className="rounded-xl" alt="Sultan Hasanudin" />
          </div>
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl font-bold">About Us</h1>
            <p className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              porta, eros non ullamcorper aliquam, neque enim rutrum risus, sit
              amet dapibus magna risus vel neque. Vivamus tempor sapien leo, eu
              sollicitudin felis porta a. Donec erat turpis, ullamcorper a
              blandit ac, aliquam sit amet quam. Mauris ac sagittis enim.
              Phasellus eget orci lacinia, tristique nisi sit amet, elementum
              odio. Aliquam viverra gravida convallis. Integer turpis sapien,
              mattis eu viverra id, congue a risus. Vivamus viverra, arcu eu
              vehicula interdum, orci risus luctus augue, ac suscipit diam arcu
              nec elit.{" "}
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default About;

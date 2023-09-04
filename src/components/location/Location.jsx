const Location = () => {
  return (
    <section id="location" className="py-16">
      <div className="container">
        <h2 className="font-extrabold text-3xl text-green-800 mb-10">Location</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15957.320326603924!2d119.883336!3d-0.8963582!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d8bef81fbf1476b%3A0x36fe66d03fbb8f03!2sBENELLI%20PALU%20KALLA%20KARS!5e0!3m2!1sid!2sid!4v1693552934112!5m2!1sid!2sid"
          className="w-full h-[400px] rounded-lg"
        />
      </div>
    </section>
  );
};

export default Location;

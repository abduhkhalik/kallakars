import Logo from "../../assets/logo-removebg-preview.png";

const Navbar = () => {
  const links = [
    { name: "Home", link: "#" },
    { name: "About us", link: "#about" },
    { name: "Products", link: "#products" },
    { name: "Contact", link: "#contact" },
    { name: "Location", link: "#location" },
  ];

  window.onscroll = () => {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;

    if (window.scrollY > fixedNav) {
      header.classList.add("nav-fixed");
    } else {
      header.classList.remove("nav-fixed");
    }
  };

  const handleActive = (e) => {
    e.preventDefault();
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
  };

  return (
    <header className="bg-white bg-opacity-70 py-1 lg:px-4 absolute top-0 left-0 w-full flex items-center z-10">
      <nav className="container">
        <div className="flex items-center justify-between relative">
          <div className="lg:px-4">
            <a
              href="/"
              className="font-bold w-full py-6 object-contain text-2xl text-gray-600 flex items-center gap-1"
            >
              <img width={200} src={Logo} alt="Kalla"/>
              <span className="text-3xl">PALU</span>
            </a>
          </div>
          <div className="flex items-center px-4">
            <button
              id="hamburger"
              onClick={handleActive}
              type="button"
              className="block absolute right-4 lg:hidden"
            >
              <span className="hamburger-line origin-top-left transition ease-in-out"></span>
              <span className="hamburger-line transition ease-in-out"></span>
              <span className="hamburger-line origin-bottom-left transition ease-in-out"></span>
            </button>
            <div
              id="nav-menu"
              className="hidden lg:block lg:static lg:bg-transparent lg:max-w-full absolute py-5 bg-white shadow-lg lg:shadow-none rounded-lg max-w-[240px] w-full right-4 top-full"
            >
              <ul className="block lg:flex">
                {links.map((item, index) => (
                  <li key={index} className="group">
                    <a
                      href={item.link}
                      className="text-base font-medium uppercase hover:underline md:text-black underline-offset-4 transition lg:text-black py-2 mx-4 hover:text- ease-in-out"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

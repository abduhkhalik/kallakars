import './Footer.css'
const Footer = () => {
  return (
    <footer className="bg-slate-300 pt-6 lg:pt-8">
      <div className="mx-auto mb-6 w-full max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 flex flex-col px-6 flex-wrap md:mb-0">
            <span className="text-left text-2xl text-gray-500 font-semibold">
              KALLA KARS PALU
            </span>
            <span className="text-sm">
              Authorized Main Dealer Benelli, Keeway, & United E--Motor
            </span>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div className='px-6'>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Resources
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a
                    href="index.html"
                    className="hover:underline hover:text-green-800"
                  >
                    Carrer
                  </a>
                </li>
              </ul>
            </div>
            <div className='px-6'>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                Follow us
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline hover:text-green-800"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline hover:text-green-800"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div className='px-6'>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                Contact Us
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <p className="hover:underline hover:text-green-800">
                    08xx-xxxx-xxxx
                  </p>
                </li>
                <li>
                  <p className="hover:underline hover:text-green-800">
                    Jl.Mangunsakoro Depan Tripel F, Kota Palu, Sulawesi Tengah
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={`grafis px-6 sm:flex sm:items-center sm:justify-between`}>
        <span className="text-sm mt-5 sm:text-center">
          © 2023{" "}
          <a href="#" className="hover:underline">
            Kalla Kars Palu
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;

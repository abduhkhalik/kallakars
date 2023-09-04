import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Tx3000 from "../../assets/products/Tx3000.png";
import T1800 from "../../assets/products/T1800.png";
import Mx1200 from "../../assets/products/Mx1200.png";
import "./Products.css";

const Products = () => {
  const products = [
    { id: 1, img: Tx3000, kategori: "United" },
    { id: 2, img: T1800, kategori: "United" },
    { id: 3, img: Mx1200, kategori: "United" },
    { id: 4, img: Tx3000, kategori: "United" },
    { id: 5, img: Tx3000, kategori: "United" },
  ];

  return (
    <div className="py-16 bg-slate-100">
      <div className="container">
        <h2 className="text-3xl font-extrabold mb-10 text-green-800">
          Products
        </h2>
        <div className="flex flex-col justify-center items-center underline">
          <ul className="flex gap-10 mb-2">
            <li className="text-slate-200 hover:text-black">
              <button className="px-4 py-2 bg-green-800 hover:bg-opacity-70 uppercase rounded-xl">
                Benelli
              </button>
            </li>
            <li className="text-slate-200 hover:text-black">
              <button className="px-4 py-2 bg-orange-500 hover:bg-opacity-70 uppercase rounded-xl">
                Keeway
              </button>
            </li>
            <li className="text-slate-200 hover:text-black">
              <button className="px-4 py-2 bg-yellow-400 hover:bg-opacity-70 uppercase rounded-xl">
                United
              </button>
            </li>
          </ul>
          <div className="mb-10 text-sm">
            <p>Kategori Products</p>
          </div>
        </div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {products.map((item) => (
            <SwiperSlide key={item.id} className="products">
              <img src={item.img} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Products;

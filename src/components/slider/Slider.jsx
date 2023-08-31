import { Swiper, SwiperSlide } from "swiper/react";
import Slide1 from "../../assets/wallpaperflare.com_wallpaper.jpg";
import Slide2 from "../../assets/2.jpg";
import Slide3 from "../../assets/3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Slider.css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper
        pagination={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Slide1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide3} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

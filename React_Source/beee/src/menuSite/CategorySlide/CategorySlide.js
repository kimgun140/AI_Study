import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./CatagorySlide.css";
import chicken from "./img/chicken.svg";
import burger from "./img/burger.svg";
import pizza from "./img/pizza.svg";
import kfood from "./img/kfood.svg";
import sandwich from "./img/sandwich.svg";
import china from "./img/china.svg";
import japan from "./img/japan.svg";
import dessert from "./img/dessert.svg";
import cafe from "./img/cafe.svg";
import porkfood from "./img/porkfoot.svg";
import { Link } from "react-router-dom";
import { Navigation } from "swiper";
import "swiper/css/navigation";

export default function CategorySlide() {
  return (
    <div className="categoryslide1">
      <Swiper
        slidesPerView={4}
        spaceBetween={-32}
        // pagination={{
        //   dynamicBullets: true,
        //   // type: "progressbar",
        // }}
        style={{
          "--swiper-navigation-color": "gray",
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Link to="/main/chicken">
            <img src={chicken} alt="#" />
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/main/burger">
            <img src={burger} alt="burger"></img>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/main/pizza">
            <img src={pizza} alt="pizza"></img>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/main/kfood">
            <img src={kfood} alt="#" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/main/sandwich">
            <img src={sandwich} alt="#" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/main/china">
            <img src={china} alt="#" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/main/japan">
            <img src={japan} alt="#" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/main/dessert">
            <img src={dessert} alt="#" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/main/cafe">
            <img src={cafe} alt="#" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/main/porkfood">
            <img src={porkfood} alt="#" />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

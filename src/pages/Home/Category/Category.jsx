import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper/modules";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"From 11.00am to 10.00pm"}
        heading={"Order Online"}
      ></SectionTitle>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className="mySwiper mt-10 mb-10"
      >
        <SwiperSlide>
          <img className="w-auto" src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-auto" src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-auto" src={slide3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-auto" src={slide4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-auto" src={slide5} alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;

import styles from "./Carousel.module.css";
import { Swiper, SwiperSlide, useSwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import Card from "../Card/Card";
import { Navigation } from "swiper";
import { useEffect } from "react";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";

const Controls = ({ data }) => {
  const swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(0, 1);
  }, [data]);
};

const Carousel = ({ data, component, type }) => {
  //console.log(data);
  return (
    <div className={styles.wrapper}>
      <Swiper
        style={{ padding: "0px 20px" }}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data} />
        <CarouselLeftNavigation />
        <CarouselRightNavigation />
        {data.map((item) => {
          // console.log(item)
          return (
            <SwiperSlide style={{ width: "auto" }} key={item.id}>
              {component(item)}
              {/* <Card data={item} type={type} /> */}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default Carousel;

import styles from "./CarouselLeftNavigation.module.css";
import { useState, useEffect } from "react";
import { useSwiper, useSwiperSlide } from "swiper/react";
import { ReactComponent as LeftArrow } from "../../../assests/leftArrow.svg";

const CarouselLeftNavigation = () => {
  const swiper = useSwiper();
  const [isBegining, setIsBegining] = useState(swiper.isBeginning);
  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsBegining(swiper.isBeginning);
    });
  }, [swiper.isBeginning, swiper]);
  return (
    <div className={styles.leftNavigation}>
      {!isBegining && <LeftArrow onClick={() => swiper.slidePrev()} />}
    </div>
  );
};

export default CarouselLeftNavigation;

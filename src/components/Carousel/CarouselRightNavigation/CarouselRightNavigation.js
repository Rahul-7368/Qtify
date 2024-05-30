import styles from "./CarouselRightNavigation.module.css";
import { useState, useEffect } from "react";
import { useSwiper } from "swiper/react";
import { ReactComponent as RightArrow } from "../../../assests/rightArrow.svg";

const CarouselRightNavigation = () => {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);
  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsEnd(swiper.isEnd);
    });
  }, [swiper.isEnd, swiper]);
  return (
    <div className={styles.rightNavigation}>
      {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
    </div>
  );
};

export default CarouselRightNavigation;

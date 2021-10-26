import React from "react";
import { Swiper } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./HorizontalSwiperStyle.css";

interface IHorizontalSwiperProps {
  children: React.ReactNodeArray;
}
export default function HorizontalSwiper(props: IHorizontalSwiperProps) {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      navigation={true}
      keyboard={{
        enabled: true,
      }}
      className="mySwiper"
    >
      {props.children}
    </Swiper>
  );
}

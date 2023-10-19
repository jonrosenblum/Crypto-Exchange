import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import CoinMenuItem from "./CoinMenuItem";

export default function CoinMenu({ cryptoArray }) {

  if (!cryptoArray) {
    return null;
  }

  return (
    <div>
      <Swiper
        spaceBetween={30}
        slidesPerView={7}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{ delay: 2000 }}
        modules={[Navigation, Autoplay]}
      >
        {cryptoArray.map(({ symbol, name, priceUsd, imgSource }) => <SwiperSlide key={symbol}>
          <CoinMenuItem imgSource={imgSource} symbol={symbol} name={name} price={parseFloat(priceUsd)} />
        </SwiperSlide>)}
      </Swiper>
    </div>
  );
}
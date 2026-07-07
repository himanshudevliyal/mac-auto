"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-fade";

const images = [
  {
    src: "/img/banner7.png",
    alt: "Image 1",
  },
  {
    src: "/img/banner9.png",
    alt: "Image 2",
  },

  {
    src: "/img/banner8.png",
    alt: "Image 3",
  },

  {
    src: "/img/banner2.png",
    alt: "Image 4",
  },
  {
    src: "/img/banner1.png",
    alt: "Image 5",
  },
];

export default function ImageSwiper() {
  return (
    <div className="relative ">
      <Swiper
        modules={[Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        speed={800}
        loop={true}
        className="w-full h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full">
              <div className="relative w-full">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt || "Banner image"}
                  width={1920} // max width (desktop)
                  height={800} // banner height
                  priority={index === 0}
                  fetchPriority={index === 0 ? "high" : "auto"}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  sizes="(max-width: 768px) 100vw,
           (max-width: 1200px) 100vw,
           100vw"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

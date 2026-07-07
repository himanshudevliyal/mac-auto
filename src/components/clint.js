"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

export default function ClientLogos() {
  const logos = [
    { src: "/img/akasa.png", alt: "Client Logo 2" },
    { src: "/img/amc.png", alt: "Client Logo 3" },
    { src: "/img/pkf.png", alt: "Client Logo 4" },
    { src: "/img/akasa.png", alt: "Client Logo 2" },
    { src: "/img/amc.png", alt: "Client Logo 3" },
    { src: "/img/pkf.png", alt: "Client Logo 4" },
    { src: "/img/akasa.png", alt: "Client Logo 2" },
    { src: "/img/amc.png", alt: "Client Logo 3" },
    { src: "/img/pkf.png", alt: "Client Logo 4" },
    // { src: "/img/akasa.png", alt: "Client Logo 5" },
    // { src: "/img/akasa.png", alt: "Client Logo 6" },
  ];

  return (
    <section className="section bg-gray-100">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Trusted by Leading Companies
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join the ranks of businesses that trust us to deliver exceptional
              results.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <Swiper
            spaceBetween={20}
            slidesPerView={2}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 60,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 70,
              },
            }}
            className="mySwiper max-w-[800px]"
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center px-4 bg-white rounded-[20px] shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Image
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.alt}
                    width={140}
                    height={70}
                    className="w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

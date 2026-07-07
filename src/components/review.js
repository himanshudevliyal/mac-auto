"use client";

import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    name: "Mr. Sanjay Verma",
    location: "Exclusive Dealer, Raipur",
    description:
      "MACK EV has always delivered quality without compromise. Their consistent focus on product excellence has helped us build strong relationships with customers. Over the years, we’ve grown steadily, even in a competitive market. Their reliable support and innovative solutions make a real difference. We are proud to be part of their journey and look forward to continued success together.",
    rating: 5,
  },
  {
    id: 2,
    name: "Mr. Abhimanyu Manhas",
    location: "Dealer, Jammu",
    description:
      "Becoming a MACK EV dealer has been a rewarding decision. Every year, our profits have increased steadily due to their unmatched service, premium quality, and timely support. They truly understand the needs of dealers and work closely with us. Their guidance and transparency have helped us scale confidently. We now enjoy stronger customer trust and higher sales.",
    rating: 5,
  },
  {
    id: 3,
    name: "Mr. Abhilash",
    location: "Dealer, Delhi",
    description:
      "Before joining MACK EV, I represented a well-known brand, but it lacked real value. Mac offered us EV and spare parts dealership, boosting our income by 25%. Rickshaw owners now come to us for affordable charging and services. Their approach is practical and profitable. Thanks to Abhijeet Sir for the trust and opportunity that transformed our business model.",
    rating: 5,
  },
  {
    id: 4,
    name: "Mr. Vakeel Ahmed",
    location: "Dealer, Jhansi (M.P)",
    description:
      "At MACK EV, we are not just dealers—we’re treated like family. They’ve supported us with excellent pricing and consistent quality, which helps us stay ahead in our region. Their positive and transparent approach builds dealer confidence. We always feel encouraged and empowered to offer the best deals to our customers while ensuring steady business growth.",
    rating: 5,
  },

  {
    id: 5,
    name: "Mr. Sanjay Verma",
    location: "Exclusive Dealer, Raipur",
    description:
      "MACK EV has always delivered quality without compromise. Their consistent focus on product excellence has helped us build strong relationships with customers. Over the years, we’ve grown steadily, even in a competitive market. Their reliable support and innovative solutions make a real difference. We are proud to be part of their journey and look forward to continued success together.",
    rating: 5,
  },
  {
    id: 6,
    name: "Mr. Abhimanyu Manhas",
    location: "Dealer, Jammu",
    description:
      "Becoming a MACK EV dealer has been a rewarding decision. Every year, our profits have increased steadily due to their unmatched service, premium quality, and timely support. They truly understand the needs of dealers and work closely with us. Their guidance and transparency have helped us scale confidently. We now enjoy stronger customer trust and higher sales.",
    rating: 5,
  },
  {
    id: 7,
    name: "Mr. Abhilash",
    location: "Dealer, Delhi",
    description:
      "Before joining MACK EV, I represented a well-known brand, but it lacked real value. Mac offered us EV and spare parts dealership, boosting our income by 25%. Rickshaw owners now come to us for affordable charging and services. Their approach is practical and profitable. Thanks to Abhijeet Sir for the trust and opportunity that transformed our business model.",
    rating: 5,
  },
  {
    id: 8,
    name: "Mr. Vakeel Ahmed",
    location: "Dealer, Jhansi (M.P)",
    description:
      "At MACK EV, we are not just dealers—we’re treated like family. They’ve supported us with excellent pricing and consistent quality, which helps us stay ahead in our region. Their positive and transparent approach builds dealer confidence. We always feel encouraged and empowered to offer the best deals to our customers while ensuring steady business growth.",
    rating: 5,
  },
];

export default function CustomerTestimonials() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-16 px-4 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why They Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Their trust and words keep us moving forward — here’s what they have
            to say.
          </p>
        </div>

        <div className="relative py-2">
          <button
            ref={prevRef}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-gray-100 rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-200"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <button
            ref={nextRef}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-200"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            onBeforeInit={(swiper) => {
              if (typeof swiper.params.navigation !== "boolean") {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="h-full">
                <Card className="h-full    lg:min-h-[400px]  flex flex-col justify-between shadow-lg overflow-hidden bg-white rounded-2xl border-0">
                  <CardContent className="h-full flex flex-col p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonial.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "fill-gray-200 text-gray-200"
                          }`}
                        />
                      ))}
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed text-sm flex-1">
                      {testimonial.description}
                    </p>

                    <div className="border-t pt-4">
                      <h4 className="font-semibold text-gray-900 text-base">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.location}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

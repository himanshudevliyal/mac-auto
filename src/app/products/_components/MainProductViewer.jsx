"use client";
import { useState } from "react";
import { Palette } from "lucide-react";
import Container from "@mui/material/Container";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import EnquiryFormModal from "./form";
import DownloadFormModal from "./download-form-modal";

export default function MainProductViewer({ product }) {
  const [selectedColor, setSelectedColor] = useState(0);
  // const [selectedState, setSelectedState] = useState("");
  // const [selectedCity, setSelectedCity] = useState("");

  // const handleStateChange = (value) => {
  //   setSelectedState(value);
  //   setSelectedCity("");
  // };

  return (
    <>
      <div className="section">
        <Container maxWidth="xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* 360 Viewer */}
            <div className="relative order-1 lg:order-none">
              <div className="mx-auto">
                <Swiper
                  slidesPerView={1}
                  loop={true}
                  allowTouchMove={true}
                  className="w-full max-w-lg sm:max-w-xl md:max-w-2xl mx-auto"
                >
                  {product?.carousel?.map((src, index) => (
                    <SwiperSlide key={index}>
                      <div className="w-full flex justify-center items-center">
                        <Image
                          src={`https://api.macautoindia.com/${src}`}
                          alt={src}
                          width={400}
                          height={400}
                          className="object-contain w-full max-h-[400px]"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="flex justify-center ">
                <div className="text-[var(--color-secondary)] px-3 sm:px-4 py-2 rounded-full shadow-lg text-xs sm:text-sm">
                  360° Drag to Rotate
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-md p-5 sm:p-8 border border-white/20 backdrop-blur-sm">
              <div className="border-b border-gray-100 pb-4 sm:pb-6 mb-4 sm:mb-6">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-base sm:text-lg font-bold">
                      {product?.title?.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="text-xs capitalize sm:text-sm text-gray-500 font-medium">
                      {product?.category}
                    </div>
                    <h1
                      className="font-bold "
                      style={{
                        fontSize: "1.25rem",
                        lineHeight: "1.75rem",
                        color: "#1f2937",
                      }}
                    >
                      {product?.title}
                    </h1>
                  </div>
                </div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {product?.description}
                </p>
              </div>

              {/* Colors */}
              {product?.colors?.length > 0 && (
                <div className="mb-6 sm:mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Palette className="w-5 h-5 text-green-600" />
                    <h3 className="text-base sm:text-lg font-semibold text-gray-700">
                      Available Color
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {product.colors.map((color, index) => (
                      <button
                        key={index}
                        className={`relative w-7 h-7 sm:w-8 sm:h-8 rounded-xl border-2 transition-all duration-300 ${
                          selectedColor === index
                            ? "border-green-600 ring-2 ring-green-200 scale-110 shadow-xl"
                            : "border-gray-300 hover:border-green-400 hover:shadow-lg"
                        }`}
                        style={{
                          backgroundColor: color.color_hex || color.color,
                        }}
                        onClick={() => setSelectedColor(index)}
                      >
                        {selectedColor === index && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full shadow-lg animate-pulse" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* State/City Pricing */}
              {/* <div className="mb-6 sm:mb-8">
                 <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <h3 className="text-base sm:text-lg font-semibold text-gray-700">
                    Pricing Details
                  </h3>
                </div> 
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 sm:mb-6 capitalize">
                  <select
                    className="border-2 capitalize border-green-200 py-2.5 px-3 sm:py-3 sm:px-4 rounded-xl text-sm sm:text-base focus:outline-none focus:ring-4 focus:ring-green-200 focus:border-green-500 bg-white shadow-sm"
                    value={selectedState}
                    onChange={(e) => handleStateChange(e.target.value)}
                  >
                    <option value="">Select State*</option>
                    {product.pricing?.map((state, index) => (
                      <option
                        key={index}
                        value={state.name}
                        className="capitalize"
                      >
                        {state.name}
                      </option>
                    ))}
                  </select>

                  <select
                    className="border-2 capitalize border-green-200 py-2.5 px-3 sm:py-3 sm:px-4 rounded-xl text-sm sm:text-base focus:outline-none focus:ring-4 focus:ring-green-200 focus:border-green-500 bg-white shadow-sm"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    disabled={!selectedState}
                  >
                    <option value="">Select City*</option>
                    {selectedState &&
                      product.pricing
                        .find((s) => s.name === selectedState)
                        ?.cities?.map((city, index) => (
                          <option
                            key={index}
                            value={city.name}
                            className="capitalize"
                          >
                            {city.name}
                          </option>
                        ))}
                  </select>
                </div> 

                <div className="bg-green-50 p-3 sm:p-4 rounded-2xl border border-green-200">
                  <div className="flex items-baseline gap-1 sm:gap-2 mb-1 sm:mb-2">
                    <span className="text-2xl sm:text-3xl font-bold text-green-600">
                      ₹
                    </span>
                    <span className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
                      {formatPrice(currentPrice)}
                    </span>
                    <span className="text-sm sm:text-lg text-gray-600">/-</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Ex-showroom Price{" "}
                    <span className="font-semibold text-green-600">
                      {getCurrentLocation()}
                    </span>
                  </p>
                </div>
              
              </div> */}

              <div className="flex gap-4 rounded-[10px]">
                <EnquiryFormModal vehicle_name={product.title} />
                {product?.brochure?.length > 0 && (
                  <DownloadFormModal
                    fileUrl={`https://api.macautoindia.com/${product.brochure[0]}`}
                    fileName={
                      product?.title
                        ? `${product.title}-brochure.pdf`
                        : "brochure.pdf"
                    }
                  />
                )}
              </div>
            </div>
          </div>
        </Container>

        {/* EMI Section */}
        {/* <EMICalculator
        product={product}
        selectedState={selectedState}
        selectedCity={selectedCity}
      /> */}
      </div>
      {/* Video Section */}
      {product?.video_link && (
        <div className="section bg-gray-100">
          <Container maxWidth="xl">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              <div className="lg:col-span-5 order-2 lg:order-none text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
                  Explore Our YouTube Channel
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6">
                  Dive deeper into our innovations, product demonstrations, and
                  behind-the-scenes videos. Subscribe to our YouTube channel and
                  stay updated with the latest content from Macauto India.
                </p>
                <a
                  href="https://www.youtube.com/@Macautoindia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn inline-block"
                >
                  Visit YouTube Channel
                </a>
              </div>
              <div className="h-[220px] sm:h-[300px] md:h-[400px] relative rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden lg:col-span-7">
                <iframe
                  src={product.video_link}
                  title="Product Video"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
}

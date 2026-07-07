"use client";

import { useState } from "react";
import Container from "@mui/material/Container";
import Image from "next/image";

export default function Features({ product }) {
  const features = product?.features?.map((item, index) => ({
    ...item,
    id: `feature-${index}`,
  }));

  const [activeSection, setActiveSection] = useState(features[0]?.id || "");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentImage, setCurrentImage] = useState(
    features[0]?.image
      ? `https://api.macautoindia.com/${features[0].image}`
      : "/placeholder.svg"
  );

  const toggleSection = (sectionId) => {
    if (sectionId === activeSection) return;

    setIsTransitioning(true);

    setTimeout(() => {
      setActiveSection(sectionId);
      const section = features?.find((s) => s.id === sectionId);
      const imageUrl = section?.image
        ? `https://api.macautoindia.com/${section.image.replace(/\\/g, "/")}`
        : "/placeholder.svg";
      setCurrentImage(imageUrl);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 250);
  };

  const activeData = features.find((section) => section.id === activeSection);

  return (
    <>
      {features?.length > 0 && (
        <div className="bg-gray-100 section">
          <Container maxWidth="xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-0">
              {/* Image & Heading Block (Top in mobile, right in desktop) */}
              <div className="order-1 md:order-2 col-span-2 bg-white flex flex-col rounded-t-xl md:rounded-r-[20px] md:rounded-bl-none">
                <div className="p-4 md:p-12">
                  {/* Heading (visible only on mobile) */}
                  <div className="block md:hidden text-center ">
                    <h2 className="text-xl font-bold text-gray-800">
                      {activeData?.heading}
                    </h2>
                  </div>
                  {/* Image */}
                  <div className="relative h-auto lg:h-full  rounded-2xl overflow-hidden">
                    <div
                      className={`w-full transition-all duration-700 ease-out ${
                        isTransitioning
                          ? "opacity-0 scale-90 rotate-2"
                          : "opacity-100 scale-100 rotate-0"
                      }`}
                    >
                      <Image
                        src={currentImage}
                        alt="Bike Feature"
                        width={800}
                        height={600}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabs Panel (Bottom in mobile, left in desktop) */}
              <div className="bg-gradient-to-br from-green-800 to-green-900 text-white flex flex-col rounded-b-xl md:rounded-l-[20px] md:rounded-tr-none">
                <div className="p-4 md:p-12 flex-1">
                  <div className="flex md:flex-col gap-2 md:gap-4 overflow-x-auto md:overflow-visible scrollbar-thin">
                    {features.map((section, index) => (
                      <button
                        key={section.id}
                        onClick={() => toggleSection(section.id)}
                        className={`flex-shrink-0 md:w-full text-left py-0 px-2 md:p-4 rounded-[20px] transition-all duration-300 group ${
                          activeSection === section.id
                            ? "bg-white/10 backdrop-blur-sm border border-white/20"
                            : "hover:bg-white/5"
                        }`}
                      >
                        <div className="flex items-center gap-3 md:gap-4">
                          {/* Number (only desktop) */}
                          <div className="text-2xl font-bold text-white w-8 hidden lg:block">
                            {String(index + 1).padStart(2, "0")}
                          </div>
                          {/* Heading */}
                          <div className="flex-1 items-center">
                            <div className="text-sm md:text-xl font-semibold whitespace-nowrap mb-0 lg:whitespace-normal">
                              {section.heading}
                            </div>
                          </div>
                          {/* Dot (only desktop) */}
                          <div
                            className={`w-3 h-3 md:w-4 md:h-4 rounded-full hidden lg:block ${
                              activeSection === section.id
                                ? "scale-125 bg-green-500"
                                : "scale-100 bg-white"
                            } transition-transform duration-300`}
                          ></div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
}

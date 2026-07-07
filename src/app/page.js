import dynamic from "next/dynamic";
import React from "react";
import HeroSection from "./home/hero";
// import ContingentSection from "./home/about";
// import Blogs from "@/components/blog";
// import OurProduct from "@/components/products";
import NewsSection from "./home/news-section";
import VehicleCategoryFilter from "./home/products";
import CustomerTestimonials from "@/components/review";
import VideoSection from "./home/video-section";
import ClientLogos from "@/components/clint";
import Support from "./home/cards";

export default function Home() {
  return (
    <>
      <HeroSection />
      <VehicleCategoryFilter></VehicleCategoryFilter>
      <VideoSection></VideoSection>
      <NewsSection />
      <Support></Support>
      <CustomerTestimonials></CustomerTestimonials>
      <ClientLogos></ClientLogos>
    </>
  );
}

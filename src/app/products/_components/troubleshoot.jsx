"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, Eye, ThumbsUp, Users, TrendingUp } from "lucide-react";
import VideoModal from "@/app/home/video";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Container from "@mui/material/Container";
import Image from "next/image";
const videos = [
  {
    id: 1,
    title:
      "MACK EV Tejas SH E-Rickshaw | Best E-Rickshaw in India | Electric Rickshaw 2025",
    description:
      "Meet the MACK EV Tejas SH, your new smart e-rickshaw partner for daily rides designed for more comfort, more range and ultimate safety!",
    thumbnail: "/img/youtub/img-1.jpg",
    videoId: "https://www.youtube.com/embed/xy4qt1JHG1Y?si=XbilkYh8k_8ANhb_",
    duration: "6:45",
    views: "892K",
    likes: "42K",
    category: "Case Study",
    channel: "Business Success",
    trending: true,
  },
  {
    id: 2,
    title:
      "Mac 900 E-Rickshaw | 1200W Motor, 100 KM Range, Fast Charging | Best Electric Rickshaw",
    description:
      "Introducing the Mac 900 E-Rickshaw – a perfect blend of power, style, and profitability!  Specially designed for Indian roads and daily use, this electric rickshaw delivers exceptional performance with low maintenance and high returns.",
    thumbnail: "/img/youtub/img-3.jpg",
    videoId: "https://www.youtube.com/embed/xy4qt1JHG1Y?si=jiwykeYYkW-eKTf_",
    duration: "10:30",
    views: "1.5M",
    likes: "67K",
    category: "Market Analysis",
    channel: "Industry Insights",
    trending: false,
  },
  {
    id: 3,
    title:
      "Mac Tejas DHL | 100KM Electric Passenger Vehicle | Price, Range & Features Explained",
    description:
      "Mac Tejas DHL, Mac electric vehicle, Mac Tejas DHL demo, Mac electric passenger vehicle, electric passenger auto, electric passenger rickshaw, 100KM electric vehicle India, electric vehicle India 2024, best electric rickshaw India",
    thumbnail: "/img/youtub/img-4.jpg",
    videoId: "https://www.youtube.com/embed/7yaRwHrDxKE?si=lJEY2UEU9skEMMWQ",
    duration: "8:15",
    views: "634K",
    likes: "28K",
    category: "Sustainability",
    channel: "Green Business",
    trending: true,
  },

  {
    id: 4,
    title:
      "MACK EV Tejas SH E-Rickshaw | Best E-Rickshaw in India | Electric Rickshaw 2025",
    description:
      "Meet the MACK EV Tejas SH, your new smart e-rickshaw partner for daily rides designed for more comfort, more range and ultimate safety!",
    thumbnail: "/img/youtub/img-1.jpg",
    videoId: "https://www.youtube.com/embed/xy4qt1JHG1Y?si=XbilkYh8k_8ANhb_",
    duration: "6:45",
    views: "892K",
    likes: "42K",
    category: "Case Study",
    channel: "Business Success",
    trending: true,
  },
  {
    id: 5,
    title:
      "Mac 900 E-Rickshaw | 1200W Motor, 100 KM Range, Fast Charging | Best Electric Rickshaw",
    description:
      "Introducing the Mac 900 E-Rickshaw – a perfect blend of power, style, and profitability!  Specially designed for Indian roads and daily use, this electric rickshaw delivers exceptional performance with low maintenance and high returns.",
    thumbnail: "/img/youtub/img-3.jpg",
    videoId: "https://www.youtube.com/embed/xy4qt1JHG1Y?si=jiwykeYYkW-eKTf_",
    duration: "10:30",
    views: "1.5M",
    likes: "67K",
    category: "Market Analysis",
    channel: "Industry Insights",
    trending: false,
  },
  {
    id: 6,
    title:
      "Mac Tejas DHL | 100KM Electric Passenger Vehicle | Price, Range & Features Explained",
    description:
      "Mac Tejas DHL, Mac electric vehicle, Mac Tejas DHL demo, Mac electric passenger vehicle, electric passenger auto, electric passenger rickshaw, 100KM electric vehicle India, electric vehicle India 2024, best electric rickshaw India",
    thumbnail: "/img/youtub/img-4.jpg",
    videoId: "https://www.youtube.com/embed/7yaRwHrDxKE?si=lJEY2UEU9skEMMWQ",
    duration: "8:15",
    views: "634K",
    likes: "28K",
    category: "Sustainability",
    channel: "Green Business",
    trending: true,
  },
  // {
  //   id: 4,
  //   title: "EV Charging Solutions for Businesses",
  //   description:
  //     "Complete guide to setting up charging infrastructure for commercial electric vehicles.",
  //   thumbnail: "/img/banner2.png",
  //   videoId: "https://www.youtube.com/embed/wLGL61iwo7k?si=-iitDdC0MZaW-ZI5",
  //   duration: "12:20",
  //   views: "445K",
  //   likes: "19K",
  //   category: "Infrastructure",
  //   channel: "EV Solutions",
  //   trending: false,
  // },
  // {
  //   id: 5,
  //   title: "ROI Calculator for Electric Vehicles",
  //   description:
  //     "Step-by-step guide to calculate return on investment for electric vehicle adoption.",
  //   thumbnail: "/img/banner2.png",
  //   duration: "9:45",
  //   views: "723K",
  //   likes: "35K",
  //   videoId: "https://www.youtube.com/embed/wLGL61iwo7k?si=-iitDdC0MZaW-ZI5",

  //   category: "Finance",
  //   channel: "Business Finance",
  //   trending: true,
  // },
  // {
  //   id: 6,
  //   title: "Customer Testimonials - EV Transformation",
  //   description:
  //     "Real customer experiences and testimonials from businesses using electric vehicles.",
  //   thumbnail: "/img/banner2.png",
  //   videoId: "7yaRwHrDxKE",
  //   duration: "11:10",
  //   views: "567K",
  //   likes: "24K",
  //   category: "Testimonials",
  //   channel: "Customer Stories",
  //   trending: false,
  // },
];

export default function VideoSection() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const swiperRef = useRef();

  return (
    <div className="section bg-gray-100">
      <Container maxWidth="xl">
        <div className="space-y-8 ">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-slate-800">
              Troubleshooting Made Easy with MAC Care
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Get expert video guides to solve common vehicle issues and keep
              your ride smooth.<br></br> Simple, step-by-step solutions—anytime,
              anywhere, right at your fingertips.
            </p>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet !bg-green-400",
              bulletActiveClass: "swiper-pagination-bullet-active !bg-blue-600",
            }}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2.5 },
              1280: { slidesPerView: 3.5 },
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="!pb-12"
          >
            {videos.map((video, index) => (
              <SwiperSlide key={video.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="cursor-pointer h-full"
                  onClick={() => setSelectedVideo(video.videoId)}
                >
                  <Card className="overflow-hidden group h-full pt-0 hover:shadow-xl transition-all duration-300 border border-slate-200 bg-white">
                    <div className="relative">
                      <Image
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        width={300}
                        height={300}
                        className="w-full h-48 object-cover rounded-md group-hover:scale-105 transition-transform duration-300 ease-in-out"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                      <motion.div
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="bg-white rounded-full p-4 shadow-lg">
                          <Play className="w-6 h-6 text-slate-800 fill-current" />
                        </div>
                      </motion.div>

                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <Badge
                          variant="secondary"
                          className="bg-white/90 text-slate-800 text-xs"
                        >
                          {video.category}
                        </Badge>
                        {video.trending && (
                          <Badge className="bg-red-500 text-white text-xs flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            Trending
                          </Badge>
                        )}
                      </div>

                      <div className="absolute bottom-3 right-3">
                        <div className="bg-black/80 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {video.duration}
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-5 pt-2">
                      <div className="space-y-3">
                        <h3 className="font-semibold text-lg line-clamp-2 text-slate-800 leading-tight  group-hover:text-green-500">
                          {video.title}
                        </h3>
                        <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed">
                          {video.description}
                        </p>

                        <div className="flex items-center justify-between pt-5 pb-0 border-t border-slate-100">
                          <button className="btn">Watch Now</button>
                          <div className="flex items-center gap-1 text-xs text-slate-500">
                            <Users className="w-3 h-3" />
                            {video.channel}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <VideoModal
            videos={videos}
            selectedVideo={selectedVideo}
            isOpen={!!selectedVideo}
            onClose={() => setSelectedVideo(null)}
          />
        </div>
      </Container>
    </div>
  );
}

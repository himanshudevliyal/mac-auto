"use client";

import React, { useState } from "react";
import Image from "next/image";
import Container from "@mui/material/Container";
import { Play } from "lucide-react";
import VideoModal from "@/app/home/video";

export default function VideoSection() {
  const videos = [
    "https://www.youtube.com/embed/hQQBAcQwwyY?si=g01MIwSXdbqRCbOj",
  ];
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="section">
      <Container maxWidth="xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Images */}
          <div className="relative group">
            <div
              className="relative rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedVideo(videos[0])}
            >
              <Image
                src="/img/youtub/img-1.jpg"
                alt="Interior design team collaborating on projects"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white rounded-full p-4 shadow-lg">
                  <Play className="w-6 h-6 text-slate-800 fill-current" />
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-4">
            <div>
              <div className="text-[var(--color-primary-light)] text-sm font-medium mb-4 flex items-center">
                <span className="w-8 h-px bg-[var(--color-primary-light)] mr-3"></span>
                SINCE 2014
              </div>
              <div className="text-2xl md:text-3xl font-bold leading-tight mb-6">
                MACK EV – Driving Electric 3-Wheeler Innovation Since 2014
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Founded in 2014 as MACK EV, our journey began as a visionary venture and has grown into one of India’s top electric mobility brands with a strong PAN India presence. Today, we proudly carry forward that legacy as MACK EV, continuing to redefine sustainable mobility.</p>

              <p className="text-gray-600 text-lg leading-relaxed">We specialize in manufacturing Electric 3-Wheeler Vehicles, spare parts, and accessories. All our products are i-CAT certified and recognized for patented technology and modern designs.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">Our lineup includes eco-friendly Electric 3-Wheelers for passengers and Electric Carts for cargo transportation – all built to support sustainable mobility.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">With a skilled technical team and a well-equipped manufacturing setup, MACK EV continues to innovate and contribute to a cleaner, greener future.</p>
            </div>
          </div>
        </div>

        {/* Video Modal */}
        <VideoModal
          videos={videos}
          selectedVideo={selectedVideo}
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      </Container>
    </div>
  );
}

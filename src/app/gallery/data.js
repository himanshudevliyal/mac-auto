"use client";

import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui";
import { useEffect } from "react";
import Image from "next/image";

export const images = [
  { id: 1, src: "/img/gallery/img-1.png", alt: "Image 1" },
  { id: 2, src: "/img/gallery/img-2.png", alt: "Image 2" },
  { id: 3, src: "/img/gallery/img-3.png", alt: "Image 3" },
  { id: 4, src: "/img/gallery/img-4.png", alt: "Image 4" },
  { id: 5, src: "/img/gallery/img-5.png", alt: "Image 5" },
  { id: 6, src: "/img/gallery/img-6.png", alt: "Image 6" },
  { id: 7, src: "/img/gallery/img-7.png", alt: "Image 7" },
  { id: 8, src: "/img/gallery/img-8.png", alt: "Image 8" },
  { id: 9, src: "/img/gallery/img-9.png", alt: "Image 9" },
  { id: 10, src: "/img/gallery/img-10.png", alt: "Image 10" },
];

export default function GridGallery() {
  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {
      Thumbs: false,
      Toolbar: true,
    });

    return () => {
      Fancybox.unbind("[data-fancybox='gallery']");
    };
  }, []);

  return (
    <>
      <div className="section py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {images.map((image) => (
              <a
                key={image.id}
                data-fancybox="gallery"
                href={image.src}
                data-caption={image.alt}
                className="break-inside-avoid block"
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={500}
                  height={700}
                  className="w-full h-auto rounded-[20px] bg-gray-100 shadow-md hover:opacity-80 transition-opacity duration-300"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

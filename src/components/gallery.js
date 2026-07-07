"use client";

import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui";
import { useEffect } from "react";
import Image from "next/image";
import Container from "@mui/material/Container";
const images = [
  { id: 1, src: "/bajaj/1.png", alt: "Image 1" },
  { id: 2, src: "/bajaj/2.png", alt: "Image 2" },
  { id: 3, src: "/bajaj/3.png", alt: "Image 3" },
  { id: 4, src: "/bajaj/4.png", alt: "Image 4" },
  { id: 5, src: "/bajaj/5.png", alt: "Image 5" },
  { id: 6, src: "/bajaj/6.png", alt: "Image 6" },
  { id: 7, src: "/bajaj/7.png", alt: "Image 7" },
  { id: 8, src: "/bajaj/8.png", alt: "Image 8" },
];

export default function Gallery() {
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
      <div className="section bg-gray-100">
        <Container maxWidth="xl">
          <div className="grid grid-cols-2 mb-10">
            <div className="mb-5">
              <h1 className="  mb-6">НАШ КОНТИНГЕНТ</h1>
              <p>Логистическая компания «CARGO EXPERT» работает с 2015 года.</p>
            </div>

            <div className="">
              <p className="text-gray-500 max-w-3xl leading-relaxed">
                Логистическая компания «CARGO EXPERT» работает с 2015 года. Мы
                оказываем услуги по доставке грузов по всей России и в страны
                СНГ. За время работы мы зарекомендовали себя как надежный
                партнер, который всегда выполняет свои обязательства в срок.
                Наша команда состоит из опытных специалистов, которые знают все
                тонкости логистического бизнеса и готовы решить любые задачи
                наших клиентов.
              </p>
            </div>
          </div>

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
                  className="w-full h-auto rounded-lg shadow-md hover:opacity-80 transition-opacity duration-300"
                />
              </a>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}

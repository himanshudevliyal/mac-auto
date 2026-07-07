"use client";

import { useEffect } from "react";
import Image from "next/image";
import Container from "@mui/material/Container";

// Fancybox import
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function Gallery({ product }) {
  const { gallery } = product;
  const baseURL = "https://api.mack-ev.com/";

  useEffect(() => {
    if (typeof window !== "undefined") {
      Fancybox.bind("[data-fancybox='gallery']", {
        Thumbs: false,
        Toolbar: true,
      });

      return () => {
        Fancybox.unbind("[data-fancybox='gallery']");
      };
    }
  }, []);

  return (
    <div className="section">
      <Container maxWidth="xl">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 mb-10 gap-8">
          <div>
            <div className="text-4xl font-bold mb-6">Product Gallery</div>
            <p className="text-xl text-gray-700">
              Explore product visuals and installation examples.
            </p>
          </div>
          <div>
            <p className="text-gray-500 max-w-3xl leading-relaxed">
              This gallery includes high-resolution images showcasing the
              product from different angles and in real-world usage. Click on
              any image to view it in a larger format.
            </p>
          </div>
        </div>

        {/* Image Grid */}
        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {gallery.map((path, index) => {
            const formattedPath = path.replace(/\\/g, "/");
            const fullUrl = `${baseURL}${formattedPath}`;
            return (
              <a
                key={index}
                href={fullUrl}
                data-fancybox="gallery"
                data-caption={`Image ${index + 1}`}
                className="block cursor-pointer"
              >
                <Image
                  src={fullUrl}
                  alt={`Gallery Image ${index + 1}`}
                  width={300}
                  height={300}
                  className="w-full h-[250px] object-cover rounded-[20px] shadow-md hover:opacity-80 transition-opacity duration-300"
                />
              </a>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

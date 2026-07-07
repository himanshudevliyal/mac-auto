"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useData } from "@/components/DataContext";

export default function VehicleCategoryFilter() {
  const [selectedCategory, setSelectedCategory] = useState("passenger");
  const { data: vehicles = [], loading } = useData();

  // FIX: Build category map with at least one carousel image
  const categories = Object.values(
    vehicles.reduce((acc, vehicle) => {
      const cat = vehicle.category?.toLowerCase() || "uncategorized";
      if (!acc[cat]) {
        acc[cat] = {
          id: cat,
          name: cat.charAt(0).toUpperCase() + cat.slice(1),
          description: `Explore our ${cat} vehicles`,
          carousel: [],
        };
      }
      if (vehicle.carousel) {
        acc[cat].carousel.push(vehicle.carousel?.[0]);
      }
      return acc;
    }, {}),
  );

  const filteredProducts = vehicles.filter(
    (product) =>
      product.category?.toLowerCase() === selectedCategory?.toLowerCase(),
  );

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);

  const selectedCategoryData = categories.find(
    (cat) => cat.id === selectedCategory,
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 max-w-[800px] mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4">
            From passengers to cargo — we’ve got an EV for every need.
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore your category now!
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex justify-center gap-2 lg:gap-6  mb-12">
          {loading ? (
            <p>loading...</p>
          ) : (
            <>
              {[
                { id: "passenger", image: "/img/passenger.png" },
                { id: "loader", image: "/img/loader.png" },
                { id: "garbage" },
                { id: "golf", image: "/img/golf.png" },
              ].map((category) => {
                const selected = categories.find(
                  (cat) => cat.id === category.id,
                );

                const imageSrc =
                  category.image ||
                  `https://api.mack-ev.com/${selected?.carousel?.[0]}`;

                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`group relative flex flex-col items-center justify-center p-2 lg:p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 text-black shadow:none lg:shadow-2xl ${
                      selectedCategory === category.id
                        ? "bg-[linear-gradient(135deg,#8BC248,#58B947)] text-white"
                        : "bg-gray-100"
                    }`}
                  >
                    <Image
                      src={imageSrc}
                      alt={selected?.name ?? ""}
                      width={100}
                      height={100}
                      sizes="100px"
                      loading="lazy"
                      className="object-contain"
                    />

                    <span className="font-bold text-sm lg:text-lg mb-2">
                      {selected?.name}
                    </span>
                    <span className="text-sm hidden lg:block text-center opacity-80 leading-tight">
                      {selected?.description}
                    </span>
                    {selectedCategory === selected?.id && (
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-lg"></div>
                    )}
                  </button>
                );
              })}
            </>
          )}
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredProducts.map((product, index) => (
            <Card
              key={product.id}
              className="group rounded-2xl overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 bg-white/80 backdrop-blur-sm pt-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <Image
                  src={`https://api.mack-ev.com/${product.carousel[0].replace(/\\/g, "/")}`}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 50vw,
         25vw"
                  priority={index < 4} // only first row priority
                  loading={index < 4 ? "eager" : "lazy"}
                  className="object-contain transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Badge className="absolute capitalize top-4 right-4 bg-white/90 text-gray-800 shadow-lg backdrop-blur-sm border-0 font-semibold">
                  {product.category}
                </Badge>
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="flex gap-2 mb-4">
                    {product.colors?.map((color, i) => (
                      <div
                        key={i}
                        title={color.name}
                        className="w-6 h-6 rounded-full border-2 border-gray-300"
                        style={{
                          backgroundColor: color.color,
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold group-hover:text-green-500 text-gray-900 transition-colors duration-300">
                      {product.title}
                    </CardTitle>
                    <p className="text-sm text-gray-500 font-medium mt-1 uppercase tracking-wide">
                      {product.brand || ""}
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <CardDescription className="text-sm text-gray-600 mb-6 line-clamp-2 leading-relaxed">
                  {product.description}
                </CardDescription>
                <div className="flex justify-between items-end gap-4">
                  {/* <div>
                    <p className="text-xs text-gray-700 uppercase tracking-wide mb-1">
                      Starting from
                    </p>
                    <p className="text-xl text-gray-700 font-bold">
                      {formatPrice(product.starting_from || 0)}
                    </p>
                  </div> */}

                  <Link href={`/products/${product.slug}`} className="btn">
                    View Details
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
              <span className="text-3xl">🔍</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              No vehicles found
            </h3>
            <p className="text-gray-500 text-lg max-w-md mx-auto">
              We couldn’t find any vehicles in the{" "}
              {selectedCategoryData?.name.toLowerCase()} category. Try selecting
              a different category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

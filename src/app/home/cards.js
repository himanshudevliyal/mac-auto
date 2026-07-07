import Image from "next/image";
import { ArrowRight, Headphones } from "lucide-react";
import Link from "next/link";
import Container from "@mui/material/Container";

export default function Support() {
  const products = [
    {
      id: "2",
      title: "M Care",
      bold: "Customer Support",
      description:
        "If you need product or parts, technical support, or have any other questions, we're here to help.",
      contact: "Call us at:\n+91-80 9062 9062",
      imagePath: "/img/heo-img.jpg",
      href: "/sales-service",
      bg: "bg-[#00A650] group-hover:bg-[#009140]",
      icon: (
        <Headphones className="h-10 w-10 text-white absolute top-6 right-6" />
      ),
    },
    {
      id: "1",
      title: "Visit our store for",
      bold: "Spare Parts",
      description:
        "Explore our wide range of genuine and compatible spare parts for all your service needs.",
      imagePath: "/img/heo-img.jpg",
      href: "/contact",
      bg: "bg-[rgba(0,0,0,0.5)] group-hover:bg-black/70",
    },
  ];

  return (
    <div className="section bg-gray-50">
      <Container maxWidth="xl">
        <div className="grid grid-cols-12 gap-6">
          {products.map((product, index) => {
            const isSecondCard = product.id === "2";

            return (
              <div
                key={index}
                className={`col-span-12  ${
                  isSecondCard ? "md:col-span-8" : "md:col-span-4"
                }`}
              >
                <Link
                  href={product.href}
                  className="group relative block overflow-hidden h-[400px] transition-all duration-300 hover:shadow-xl"
                >
                  {/* Custom BG color from product.bg */}
                  <div
                    className={`absolute inset-0 transition-all duration-300 ${
                      product.id % 2 == 0
                        ? "bg-[rgba(0,61,116,0.7)] z-10 group-hover:bg-blue-900"
                        : "bg-[rgba(34,197,94,0.7)] z-10 group-hover:bg-[#15803d]"
                    }`}
                  ></div>

                  {/* Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={product.imagePath || "/placeholder.svg"}
                      alt={product.title}
                      fill
                      className="object-cover brightness-75 group-hover:brightness-100 transition-all duration-300"
                      priority
                    />
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-between p-6 text-white z-20">
                    {product.icon && product.icon}
                    <div>
                      <div className="text-3xl font-extrabold mb-1">
                        {product.title}
                      </div>
                      <div className="text-2xl font-semibold mb-4">
                        {product.bold}
                      </div>
                      <p className="text-base leading-relaxed whitespace-pre-line">
                        {product.description}
                      </p>
                      {product.contact && (
                        <p className="text-lg mt-4 whitespace-pre-line font-medium">
                          {product.contact}
                        </p>
                      )}
                    </div>

                    <div className="self-end">
                      <div className="bg-white p-2 rounded-full group-hover:bg-blue-100 transition-colors">
                        <ArrowRight className="h-6 w-6 text-blue-900" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

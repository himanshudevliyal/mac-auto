"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb({ title, bgImage = "/img/banner1.png" }) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    ...segments.map((seg, index) => {
      const href = "/" + segments.slice(0, index + 1).join("/");
      const label = decodeURIComponent(seg.replace(/-/g, " "));
      return { label, href };
    }),
  ];

  return (
    <section className="relative bgThree  breadcrumb min-h-[250px] py-16 text-white flex justify-center items-center">
      {/* <div className="absolute top-0 bottom-0 w-full bg-black/60"></div> */}

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="breadcrumb-title font-bold mb-4 capitalize text-white">
          {title}
        </h1>

        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap justify-center items-center text-sm sm:text-base text-white space-x-1 sm:space-x-2">
            {breadcrumbs.map((crumb, index) => (
              <li key={index} className="flex items-center">
                <Link
                  href={crumb.href}
                  className={`hover:underline text-lg ${
                    index === breadcrumbs.length - 1
                      ? "font-semibold"
                      : "font-bold"
                  } capitalize`}
                >
                  {crumb.label}
                </Link>
                {index < breadcrumbs.length - 1 && (
                  <ChevronRight className="w-4 h-4 mx-1 sm:mx-2 text-white opacity-50" />
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
}

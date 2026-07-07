import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function NewsSection() {
  const clientLogos = [
    {
      alt: "NDTV logo",
      query: "/img/news/auto-logo-header.svg",
      slug: "https://auto.economictimes.indiatimes.com/news/industry/how-electric-ambulances-are-transforming-the-healthcare-sector/88934810",
    },
    {
      alt: "Republic TV logo",
      query: "/img/news/bt_business_today_logo.png",
      slug: "https://www.businesstoday.in/auto/story/future-of-ev-manufacturers-in-next-few-years-315725-2021-12-15",
    },
    {
      alt: "News24 logo",
      query: "/img/news/logo-3.png",
      slug: "https://www.financialexpress.com/business/express-mobility-interview-abhijeet-wassan-mac-auto-ev-sales-have-tripled-in-first-half-2390785/",
    },
    {
      alt: "Adgully logo",
      query: "/img/news/thehindu-logo.svg",
      slug: "https://www.thehindu.com/business/ev-firm-macstar-auto-plans-to-raise-8-mn-to-fund-rd-expansion/article37917726.ece",
    },
  ];

  return (
    <div className="relative flex flex-col md:flex-row items-center  ">
      {/* Red section */}
      <div
        className="relative bg-green-600 text-white p-8 md:p-12 flex items-center justify-center text-center w-full md:w-1/3 lg:w-1/4 xl:w-1/5
                   md:clip-path-[polygon(0_0,100%_0,95%_100%,0%_100%)]"
      >
        <h2 className="text-4xl md:text-4xl font-bold italic">
          Featured In
          {/* <ArrowRight className="inline-block ml-2" /> */}
        </h2>
      </div>

      {/* Logos section */}
      <div className="flex-1  overflow-x-auto py-8 md:py-12 px-4 grid grid-cols-2 md:px-8 md:flex items-center justify-center gap-8 md:gap-12 lg:gap-16">
        {clientLogos.map((logo, index) => (
          <Link key={index} href={logo.slug}>
            <Image
              key={index}
              src={logo.query}
              alt={logo.alt}
              width={120}
              height={80}
              target="_blank"
              className="w-[200px] object-contain shrink-0"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Container from "@mui/material/Container";
import Breadcrumb from "@/components/breadcrumb";
import Link from "next/link";
import NewsSection from "../home/news-section";

export const metadata = {
  title: "  MACK EV Media & Press – Stories, News and Updates",

  description:
    " Explore MACK EV’s latest news, press stories, and media highlights. See how we’re driving e-rickshaw innovation across India since 2014.",
  alternates: {
    canonical: `/media`,
  },
};
export default function NewsSectionPage() {
  const newsData = [
    {
      id: 3,
      date: "Dec 27, 2021",
      title:
        "EV sales have more than tripled in the first half of FY22 — Abhijeet Wassan, MACK EV",
      image: "/img/news/news-3.webp",
      slug: "https://www.financialexpress.com/business/express-mobility-interview-abhijeet-wassan-mac-auto-ev-sales-have-tripled-in-first-half-2390785/",
    },
    {
      id: 4,
      date: "Jan 16, 2022",
      title: "How electric ambulances are transforming the healthcare sector",
      image: "/img/news/news-4.webp",
      slug: "https://auto.economictimes.indiatimes.com/news/industry/how-electric-ambulances-are-transforming-the-healthcare-sector/88934810",
    },
    {
      id: 1,
      date: " Dec 09, 2021",
      title: "EV firm Macstar Auto plans to raise $8 mn to fund R&D, expansion",
      image: "/img/news/news-1.webp",
      slug: "https://www.thehindu.com/business/ev-firm-macstar-auto-plans-to-raise-8-mn-to-fund-rd-expansion/article37917726.ece",
    },
    {
      id: 2,
      date: "Dec 15, 2021",
      title: "Future of EV manufacturers in next few year",
      image: "/img/news/news-2.webp",
      slug: "https://www.businesstoday.in/auto/story/future-of-ev-manufacturers-in-next-few-years-315725-2021-12-15",
    },
  ];
  return (
    <>
      <Breadcrumb title="News Media" />
      <NewsSection></NewsSection>
      <section className="section bg-gray-50">
        <Container maxWidth="xl">
          <div className="space-y-2 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Latest News & Updates
            </h2>
            <p className="max-w-4xl mx-auto">
              Stay up-to-date with the latest announcements, product launches,
              dealership expansions, and innovations from MACK EV.
              Explore how we&apos;re shaping the future of electric mobility
              across the nation.
            </p>
          </div>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {newsData.map((news) => (
              <Card
                key={news.id}
                className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 pt-0 rounded-2xl overflow-hidden h-full flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={news.image || "/placeholder.svg"}
                    alt={news.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="px-6   flex flex-col flex-grow">
                  <div className="text-sm text-gray-500 mb-3 font-medium">
                    {news.date}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-4 line-clamp-2 leading-relaxed">
                    {news.title}
                  </div>
                  <Link
                    href={news.slug}
                    target="_blank"
                    className="btn text-center"
                  >
                    Know More
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

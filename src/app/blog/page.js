import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { blogs } from "./[slug]/data";
import Breadcrumb from "@/components/breadcrumb";
export const metadata = {
  title: " MACK EV Blog – Electric Vehicle & E-Rickshaw Insights",
  description:
    " Read the MACK EV Blog for inspiring EV stories, e-rickshaw insights, and clean mobility ideas driving a greener, better future for India.",
  alternates: {
    canonical: `/blog`,
  },
};
export default function BlogMainPage() {
  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  // Generate description from sections
  const getDescription = (blog) => {
    if (blog.sections && blog.sections.length > 0) {
      const firstSection = blog.sections[0];
      if (firstSection.summary) {
        if (typeof firstSection.summary === "string") {
          return firstSection.summary.slice(0, 150) + "...";
        } else if (
          Array.isArray(firstSection.summary) &&
          firstSection.summary.length > 0
        ) {
          const firstSummary = firstSection.summary[0];
          if (typeof firstSummary === "string") {
            return firstSummary.slice(0, 150) + "...";
          }
        }
      }
    }
    return "Discover the latest insights about MACK EV's electric vehicles and sustainable mobility solutions.";
  };

  // Get estimated reading time
  const getReadingTime = (blog) => {
    let wordCount = 0;
    blog.sections?.forEach((section) => {
      if (typeof section.summary === "string") {
        wordCount += section.summary.split(" ").length;
      } else if (Array.isArray(section.summary)) {
        section.summary.forEach((item) => {
          if (typeof item === "string") {
            wordCount += item.split(" ").length;
          } else if (item.points) {
            item.points.forEach((point) => {
              wordCount += point.split(" ").length;
            });
          }
        });
      }
    });
    const readingTime = Math.ceil(wordCount / 200);
    return readingTime;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumb title="Blogs" />

      <div className="mx-auto max-w-7xl px-4 py-12">
        {blogs.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <Card
                key={blog.slug}
                className="group pt-0 overflow-hidden border-0 bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={
                      blog.mainImage ||
                      "/placeholder.svg?height=250&width=400&query=blog image"
                    }
                    alt={blog.blogTitle}
                    width={400}
                    height={250}
                    className="w-full h-[250px] transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                <CardContent>
                  {/* Tags */}
                  <div className="mb-3 flex flex-wrap gap-1">
                    {blog.tags?.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700"
                      >
                        {tag}
                      </span>
                    ))}
                    {blog.tags?.length > 2 && (
                      <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                        +{blog.tags.length - 2}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h2 className="mb-3 text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-green-600 transition-colors">
                    {blog.blogTitle}
                  </h2>

                  {/* Description */}
                  <p className="mb-4 text-gray-600 line-clamp-3 leading-relaxed">
                    {getDescription(blog)}
                  </p>

                  {/* Meta Info */}
                  <div className="mb-4 flex items-center text-sm text-gray-500">
                    <Calendar className="mr-1 h-4 w-4" />
                    <span>{formatDate(blog.date)}</span>
                    <span className="mx-2">•</span>
                    <span>{getReadingTime(blog)} min read</span>
                  </div>

                  {/* Read More Button */}
                  <Link href={`/blog/${blog.slug}`}>
                    <Button className="btn w-full">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="mx-auto max-w-md">
              <div className="mb-4 text-6xl">📝</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                No blogs found
              </h3>
              <p className="text-gray-600 mb-4">
                No blog posts are available at the moment.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

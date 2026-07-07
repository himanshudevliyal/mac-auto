import Image from "next/image";
import { Calendar, User, ArrowRight } from "lucide-react";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";
import Container from "@mui/material/Container";
export default function Blogs() {
  const smallPosts = [
    {
      id: 1,
      image: "/img/blog-01.webp",
      title: "Frequently Utilized Metal Welding System",
      date: "MAY 09, 2024",
      author: "ADMIN",
    },
    {
      id: 2,
      image: "/img/blog-01.webp",
      title: "How Does One Go About Buying Furniture?",
      date: "MAY 09, 2024",
      author: "ADMIN",
    },
    {
      id: 3,
      image: "/img/blog-01.webp",
      title: "Four Ways For Creating Extra Space In Small Homes",
      date: "MAY 09, 2024",
      author: "ADMIN",
    },
  ];

  return (
    <section className="section bg-gray-100">
      <Container maxWidth="xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-[var(--color-primary-light)] text-sm font-medium tracking-wide">
              <div className="w-8 h-px bg-[var(--color-primary-light)]"></div>
              CLIENT FEEDBACK
            </div>
            <h1 className=" font-bold text-gray-800">
              Latest posts & articles
            </h1>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 justify-center    items-center">
          {/* Left Column - Small Posts */}
          <div className="space-y-6 col-span-12 md:col-span-6   lg:col-span-5">
            {smallPosts.map((post) => (
              <div
                key={post.id}
                className="flex gap-4 border-b pb-6 border-gray-300  group cursor-pointer "
              >
                <div className="flex-shrink-0">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={100}
                    height={100}
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 text-xs  mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-5 w-5 icons" />
                      <span className="text-sm font-medium">{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-5 w-5 icons" />
                      <span className="text-sm font-medium">
                        BY {post.author}
                      </span>
                    </div>
                  </div>
                  <h6 className=" font-medium text-gray-800 group-hover:text-[var(--color-secondary)] transition-colors ">
                    {post.title}
                  </h6>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Featured Post */}
          <article className="group   cursor-pointer items-center flex col-span-12 md:col-span-6 lg:col-span-7">
            <div className="relative ">
              <Image
                src="/img/download.webp"
                alt="Modern living room with gray sofa and wooden coffee table"
                width={600}
                height={400}
                className="w-full h-[400px] object-cover rounded-l-lg"
              />
            </div>

            <div className="bg-white cards   relative h-100 flex p-5  justify-center flex-col rounded-r-lg">
              <div className="gap-4 flex  text-xs  mb-3">
                <div className="flex items-center gap-1">
                  <Calendar className="h-5 w-5 icons" />
                  <span className="text-sm font-medium">MAY 09, 2024</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-5 w-5 icons" />
                  <span className="text-sm font-medium">BY ADMIN</span>
                </div>
              </div>

              <h3 className="text-2xl    font-medium text-gray-800 mb-4 group-hover:text-[var(--color-secondary)] transition-colors">
                How To Choose The Right Furniture Of Your Home
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Modest, recently established interior design company that seeks
                to address a variety of topics, including...
              </p>
              <Link
                href=""
                className="h-[50px] w-[50px] z-12  bg-[var(--color-secondary)] rounded-full flex justify-center items-center absolute bottom-0 right-0"
              >
                <MdArrowOutward className="text-white w-5 h-5" />
              </Link>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Container from "@mui/material/Container";
import Image from "next/image";
import Breadcrumb from "@/components/breadcrumb";
import { data } from "./_data";

export async function generateMetadata({ params, searchParams, request }) {
  const { slug } = await params;
  const content = data.find((item) => item.slug === slug);

  if (!content) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    };
  }

  const meta = content.metaData || {};

  return {
    title: meta.metaTitle || content.title,
    description: meta.metaDescription || "",
    keywords: meta.keywords ? meta.keywords.join(", ") : "",
    alternates: {
      canonical: `https://mack-ev.com/${content.slug}`,
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const content = data.find((item) => item.slug === slug);

  if (!content) {
    return <p>Product Not Found</p>;
  }

  return (
    <>
      <Breadcrumb title={content.title} />
      {/* Hero Image */}
      <div className="section">
        <Container maxWidth="xl">
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/img/blogs-img.jpeg"
              alt={content.title}
              width={2000}
              height={2000}
              className="w-full h-auto object-contain shadow-2xl"
            />
          </div>
        </Container>
      </div>
      <div className="section bg-gray-50">
        {content.paragraphs?.length > 0 && (
          <div>
            <Container maxWidth="xl">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                  {content.title}
                </h2>
                {content.paragraphs.map((para, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: para }}></p>
                ))}
              </div>
            </Container>
          </div>
        )}

        {content.subHeading && (
          <div className=" text-center mt-4">
            <Container maxWidth="xl">
              <div className="max-w-4xl mx-auto text-center lg:text-left space-y-6">
                {content.subHeading.heading?.map((h, i) => (
                  <h3
                    key={i}
                    className="text-3xl md:text-4xl text-center font-bold text-gray-900"
                  >
                    {h}
                  </h3>
                ))}
                {content.subHeading.paragraphs?.map((para, i) => (
                  <p
                    className="text-center"
                    key={i}
                    dangerouslySetInnerHTML={{ __html: para }}
                  ></p>
                ))}
              </div>
            </Container>
          </div>
        )}
      </div>
      {/* Driver Benefits */}
      {content.driverBenefits && (
        <div className="section">
          <Container maxWidth="xl">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
                {content.driverBenefits.title}
              </h2>
            </div>
            {content.driverBenefits?.paragraphs?.map((item, index) => (
              <p className="text-center max-w-[900px] mx-auto" key={index}>
                {item}
              </p>
            ))}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {content.driverBenefits.benefits?.map((benefit, i) => (
                <Card
                  key={i}
                  className="group rounded-[20px] mb-4 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                >
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white mb-0">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 dark:text-gray-400">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </div>
      )}
      {/* Features & Performance */}
      {content.featuresPerformance && (
        <section className="bg-gray-50 section">
          <Container maxWidth="xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="lg:sticky top-[100px]">
                <div className="text-center lg:text-left mb-8">
                  <h2 className="text-4xl md:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    {content.featuresPerformance.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mt-6">
                    {content.featuresPerformance.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {content.featuresPerformance.features?.map((feature, i) => (
                  <div
                    key={i}
                    className="space-y-4 p-4 border-l-2 border-l-green-500 border-1 border-green-300 rounded-[20px]"
                  >
                    <div className="text-lg font-semibold text-gray-900">
                      {feature.title}
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}
      {/* Brand Reputation */}
      {content.brandReputation && (
        <section className="section">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-0">
              {content.brandReputation.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {content.brandReputation.points?.map((point, i) => (
              <Card
                key={i}
                className="rounded-[20px] shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
              >
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">
                    {point.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    {point.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {content.whyChoose && (
        <section className="bg-gray-50 section">
          <Container maxWidth="xl">
            <div className="">
              <div className="t lg:text-left mb-8 text-center">
                {content?.whyChoose?.title && (
                  <h2 className="text-4xl md:text-3xl  text-center text lg:text-5xl font-bold text-gray-900 leading-tight">
                    {content?.whyChoose?.title}
                  </h2>
                )}

                {content?.whyChoose?.description && (
                  <p className="text-gray-600 text-lg  text-center leading-relaxed max-w-3xl mt-6">
                    {content.whyChoose.description}
                  </p>
                )}
              </div>

              <div className="flex justify-center gap-5 flex-wrap">
                {content.whyChoose.points?.map((feature, i) => (
                  <div
                    key={i}
                    className="space-y-4 p-4 border-l-2 border-l-green-500 border-1 border-green-300 rounded-[20px]"
                  >
                    <p className="text-gray-600 leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}
      {/* Financing */}
      {content.financing && (
        <section className="section bg-gray-50">
          <Container maxWidth="xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                {content.financing.title}
              </h2>
              <p className="text-gray-600">{content.financing.description}</p>
            </div>
          </Container>
        </section>
      )}
      {/* Manufacturers */}
      {/* Conclusion */}
      {content.conclusion && (
        <section className="section text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            {typeof content.conclusion === "object" &&
            content.conclusion.heading
              ? content.conclusion.heading
              : "Conclusion"}
          </h2>
          <Container maxWidth="xl">
            <div className="max-w-3xl mx-auto text-center">
              {typeof content.conclusion === "string" ? (
                <p dangerouslySetInnerHTML={{ __html: content.conclusion }}></p>
              ) : (
                <>
                  {content.conclusion.paragraph && (
                    <p
                      dangerouslySetInnerHTML={{
                        __html: content.conclusion.paragraph,
                      }}
                    ></p>
                  )}
                </>
              )}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}

import Image from "next/image";
import WhyChoose from "./_componets/why-choose-us";
import Container from "@mui/material/Container";
import Component from "./_componets/vision";
import Breadcrumb from "@/components/breadcrumb";
import VideoSection from "./_componets/video";
export const metadata = {
  title: "About MACK EV | EV Pioneer & E-Rickshaw Innovator",

  description:
    "Founded in 2014, MACK EV is a leading electric vehicle manufacturer with i-CAT certified E-Rickshaws and patented designs. From passenger to cargo carts, we deliver eco-friendly mobility solutions with PAN-India presence.",
  keywords:
    " Electric Rickshaw Manufacturers in india, India's No-1 Electric Rickshaw Manufacturer & Supplier, E Rickshaw Manufacturers in india, electric rickshaw price in India, electric cargo rickshaw India, i-cat certified e rickshaw manufacturers, e rickshaw parts supplier India, electric vehicle manufacturers in India, eco friendly transport in India, Electric Three Wheeler at Best Price in India, e rickshaw price in Delhi on road, e rickshaw price in india, E Rickshaw Dealer in india, electric rickshaws in india, charging auto rickshaw price, about Macauto India, company profile electric vehicles, electric rickshaw brand history",
  alternates: {
    canonical: `/about`,
  },
  robots: {
    index: true,
    follow: true,
  },
};
export default function About() {
  return (
    <>
      <Breadcrumb title="About us" />
      <VideoSection></VideoSection>
      <Component></Component>

      <section className="section">
        <Container maxWidth="xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/img/founder.webp"
                alt="Founder"
                width={500}
                height={500}
                className="w-full rounded-2xl"
              />
            </div>

            <div>
              <h2 className="font-bold mb-6 text-black">
                Our focus enables us to provide customized, actionable recommendations.

              </h2>

              <blockquote className="border-l-4 border-green-500 pl-5 italic text-gray-800 mb-6">
                Let me start by saying that Environment & Entrepreneurship go hand in hand. I dreamed of an opportunity that allowed people to grow affordably—regardless of age, background, or education—while sustaining the environment.

              </blockquote>

              <p className="text-gray-800 mb-5 leading-relaxed">
                Years ago, I stumbled upon the Electric Vehicle industry—a path where my ideals and purpose aligned. With 15 years of experience, starting in marketing and now as CEO of MACK EV (formerly MAC auto), I believe EVs are the future with strong ROI potential and immense eco-impact. This journey has been both challenging and fulfilling, shaping not just my career but also my commitment to sustainability.
              </p>

              <p className="text-gray-800 mb-5 leading-relaxed">
                Today, I feel grateful for the experiences that led me here. Each step was a lesson, every hurdle a moment of growth. Together with the MACK EV team and our network of dedicated partners, we are turning our shared vision into reality—building innovative, accessible, and eco-friendly mobility solutions for India.
              </p>

              <p className="text-gray-800 mb-5 leading-relaxed">

                As we continue this journey, we remain committed to empowering lives through cleaner transport and driving the change towards a greener future. Our mission is not just business—it’s a movement for transformation.
              </p>

              {/* Signature */}
              <div className="mt-6">
                <p className="font-bold text-black">Abhijeet Wassan
                </p>
                <p className="uppercase text-gray-500 tracking-wider">
                  Founder & CEO
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <WhyChoose />
    </>
  );
}

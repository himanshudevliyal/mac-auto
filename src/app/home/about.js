import Image from "next/image";
import { Truck, Shield, Clock, Users, MapPin, Headphones } from "lucide-react";
import Container from "@mui/material/Container";
import { ArrowUpRight } from "lucide-react";
// import VehicleCategoryFilter from "./products";

export default function ContingentSection() {
  const leftServices = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "EV Rickshaw Delivery",
      description:
        "Efficient and eco-friendly delivery using electric rickshaws across urban and rural areas.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Vehicle Insurance",
      description:
        "Comprehensive insurance coverage for your EV rickshaws during transport and usage.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Timely Dispatch",
      description:
        "Fast and reliable dispatch of EV rickshaws with strict adherence to delivery timelines.",
    },
  ];

  const rightServices = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Skilled Team",
      description:
        "A team of trained professionals dedicated to handling EV rickshaw logistics and support.",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Live Tracking",
      description:
        "GPS-enabled tracking to monitor your EV rickshaw location in real-time.",
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "24/7 Support",
      description:
        "Round-the-clock assistance for any inquiries or issues related to EV rickshaw services.",
    },
  ];

  return (
    <>
      <div className="section">
        <Container maxWidth="xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Images */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                {/* Satisfaction Guarantee Badge */}
                <div className="absolute bottom-0 bg-white  left-0  text-white pl-0 pb-0 p-4  ">
                  <div className="bg-green-700 p-10 rounded-2xl shadow-lg">
                    <div className="text-4xl font-bold mb-1">100%</div>
                    <div className="text-sm font-medium">
                      Satisfaction
                      <br />
                      Guarantee
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-4">
              {/* Header */}
              <div>
                <div className="text-[var(--color-primary-light)] text-sm font-medium mb-4 flex items-center">
                  <span className="w-8 h-px bg-[var(--color-primary-light)] mr-3"></span>
                  SINCE 2014
                </div>
                <h1 className="text-2xl md:text-4xl   leading-tight mb-6">
                  MACK EV – Leading the Way in E-Rickshaw Innovation Since 2014
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed ">
                  MACK EV started in early 2014 as a dream organization & today
                  has grown to become one of the industry leading players with
                  PAN India presence. MACK EV is one of the pioneers in
                  Electric Rickshaw Manufacturer, spare parts & accessories in
                  India. Our products are i-CAT (International Centre for
                  Automotive Technology) certified by Govt of India and
                  positioned as a Electric Vehicle company having patented
                  technologies & state of the art design capabilities. We take
                  pride in manufacturing the widely popular Electric Rickshaw
                  for passengers and Electric Cart for loading purposes that are
                  well known for their eco-friendly performance.
                </p>

                <p className="text-gray-600 text-lg leading-relaxed ">
                  We are offering very unique and innovative designs not like
                  other manufacturers whose designs are more or less the same
                  like ordinary E Rickshaw Models. Our policy is to serve
                  customers with the best of our efforts and deliver them one of
                  the best products and services which helps us to earn a great
                  respect amongst people
                </p>

                {/* <ConsultButton title="Book Consult" url="/contact" /> */}
              </div>
            </div>
          </div>
        </Container>
      </div>

      <section className="section bg-gray-100">
        <Container maxWidth="xl">
          {/* Heading Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className=" font-bold mb-4">OUR CONTINGENT</h2>
              <p>
                “CARGO EXPERT” has been serving since 2015, offering a wide
                range of logistics solutions for EV rickshaw transportation and
                delivery.
              </p>
            </div>
            <div>
              <p className="text-gray-500 leading-relaxed">
                With years of experience, “CARGO EXPERT” is known for its timely
                and secure delivery of EV rickshaws across India and neighboring
                countries. Our expert team understands every detail of logistics
                and ensures a smooth and efficient experience for our customers.
              </p>
            </div>
          </div>

          {/* Card Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center     ">
            {/* Left Services */}
            <div className="space-y-8 lg:-mr-[80px] z-10">
              {leftServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl p-6 transition-all duration-300 hover:bg-[var(--color-secondary)] hover:shadow-2xl"
                  style={{
                    boxShadow: "0 0 20px rgba(249, 115, 22, 0.1)",
                  }}
                >
                  <div className="flex items-start space-x-4 relative">
                    <div className="w-12 h-12 absolute -top-12 -left-12 bg-[var(--color-secondary)] rounded-full flex items-center justify-center text-white group-hover:bg-[var(--color-primary-light)] transition duration-300">
                      {service.icon}
                    </div>
                    <div className="pl-8">
                      <h5 className="font-semibold  mb-2 group-hover:text-white">
                        {service.title}
                      </h5>
                      <p className="text-gray-400 text-sm group-hover:text-white">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Center Image */}
            <div className="flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
                <Image
                  src="/img/heo-img.jpg"
                  alt="EV Rickshaw"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Services */}
            <div className="space-y-8 lg:-ml-[80px]">
              {rightServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl p-6 transition-all duration-300 hover:bg-[var(--color-secondary)] hover:shadow-2xl"
                  style={{
                    boxShadow: "0 0 20px rgba(249, 115, 22, 0.1)",
                  }}
                >
                  <div className="flex items-start space-x-4 relative">
                    <div className="w-12 h-12 absolute -top-12 -right-12 bg-[var(--color-secondary)] rounded-full flex items-center justify-center text-white group-hover:bg-[var(--color-primary-light)] transition duration-300">
                      {service.icon}
                    </div>
                    <div className="pr-8">
                      <h4 className="font-semibold  mb-2 group-hover:text-white">
                        {service.title}
                      </h4>
                      <p className="text-gray-400 text-sm group-hover:text-white">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

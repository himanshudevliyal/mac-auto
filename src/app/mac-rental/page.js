import Image from "next/image";
import Link from "next/link";
import {
  Car,
  DollarSign,
  MapPin,
  CheckCircle,
  Wrench,
  LifeBuoy,
  Headphones,
  BatteryCharging,
  UserPlus,
  Upload,
  ClipboardList,
  Mail,
  Phone,
  Globe,
  ArrowRight,
  Smartphone,
  Monitor,
  FileText,
  FileCheck,
  Rocket,
  Users,
  Handshake,
  Gauge,
  Zap,
  Shield,
  Star,
  ShieldCheck,
  BatteryFull,
  BadgeDollarSign,
  CheckCircle2,
  CreditCard,
  Megaphone,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Container from "@mui/material/Container";
import Breadcrumb from "@/components/breadcrumb";
export const metadata = {
  title: "Mac Rental – Flexible E-Rickshaw Hire & Rent-to-Own Plans",
  keywords: `electric scooter rental, e-rickshaw rental India, e-rickshaw rent-to-own, daily e-rickshaw rental, electric vehicles rental, E Rickshaw On Rent near me, e-rickshaw rent-to-own in india, electric autorickshaw rental, electric vehicles for sale, electric vehicles in India`,
  description:
    "Drive your future with Mac Rental’s flexible e-rickshaw hire plans. Choose daily or rent-to-own options with 24×7 support across Delhi & NCR.",

  alternates: {
    canonical: `/mac-rental`,
  },
};
export default function Macmobility() {
  const advantages = [
    {
      number: "01",
      title: "Trusted EV Brand",
      description:
        "Recognized and trusted by thousands through www.macautoindia.com for reliable electric mobility solutions.",
    },
    {
      number: "02",
      title: "Transparent Pricing",
      description:
        "We ensure fair pricing with absolutely no hidden charges—what you see is what you pay.",
    },
    {
      number: "03",
      title: "24x7 Roadside Assistance",
      description:
        "Enjoy peace of mind with regular vehicle maintenance and full-time roadside support whenever you need it.",
    },
    {
      number: "04",
      title: "Smart GPS-Enabled Vehicles",
      description:
        "Our vehicles are equipped with GPS and offer real-time tracking and support for enhanced safety and efficiency.",
    },
    {
      number: "05",
      title: "High Mileage & Battery Backup",
      description:
        "Experience long-range travel and dependable performance with high mileage and robust battery life.",
    },
  ];

  const plans = [
    {
      title: "Basic Plan",
      price: "₹300",
      period: "/Day",
      description: "Without Charging & Parking",
      popular: false,
      gradient: "from-green-400 to-green-500",
      bgGradient: "from-green-50 to-green-100",
      features: [
        "Flexible daily rental",
        "Ideal for self-managed charging",
        "Great for experienced drivers",
        "No hidden charges",
        "24/7 customer support",
      ],
      icon: <Zap className="w-8 h-8" />,
    },
    {
      title: "Premium Plan",
      price: "₹450",
      period: "/Day",
      description: "With Charging & Parking Included",
      popular: true,
      gradient: "from-green-600 to-green-700",
      bgGradient: "from-green-100 to-green-200",
      features: [
        "Hassle-free daily rental",
        "All-inclusive convenience",
        "Perfect for new EV drivers",
        "Free charging stations",
        "Dedicated parking spots",
      ],
      icon: <Shield className="w-8 h-8" />,
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Register Online",
      description:
        "Visit www.macautoindia.com to start your registration process.",
      icon: <FileText className="w-8 h-8" />,
      color: "from-green-400 to-green-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      number: "02",
      title: "Upload KYC",
      description:
        "Provide Driving License, Aadhaar, and PAN for verification.",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      number: "03",
      title: "Select a Plan",
      description:
        "Choose between ₹300 or ₹450 per day plan as per your convenience.",
      icon: <FileCheck className="w-8 h-8" />,
      color: "from-green-600 to-green-700",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      number: "04",
      title: "Drive & Earn",
      description:
        "Start your journey with Mac Rentel and begin earning daily!",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-green-700 to-green-800",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
  ];

  const benefits = [
    {
      title: "No Loan",
      icon: <CheckCircle2 className="w-8 h-8 text-primary" />,
      gradient: "from-blue-500 to-blue-600",
      items: ["Avoid the complexities and interest of traditional loans."],
    },
    {
      title: "No EMI",
      icon: <CheckCircle2 className="w-8 h-8 text-primary" />,
      gradient: "from-purple-500 to-purple-600",
      items: ["Flexible payments without fixed monthly installments."],
    },
    {
      title: "Just Drive & Own",
      icon: <CheckCircle2 className="w-8 h-8 text-primary" />,
      gradient: "from-green-500 to-green-600",
      items: ["Take ownership step-by-step, simply by driving."],
    },
  ];
  return (
    <>
      {" "}
      <Breadcrumb title="MAC Rental" />
      <main className="flex-1">
        {/* <section className="relative w-full h-[100vh] md:h-[70vh] flex items-center justify-center text-center bg-gradient-to-br from-green-700 to-green-900 text-white overflow-hidden">
        <Image
          src="/img/banner2.png"
          width={1920}
          height={1080}
          alt="Modern EV Rickshaw driving through a city street"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          priority
        />
        <div className="relative z-10 px-4 md:px-6 max-w-6xl space-y-6 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight drop-shadow-lg">
            Mac Rentel – Your EV Partner on the Move
          </h1>
          <p className="text-3xl md:text-5xl font-semibold  drop-shadow-md">
            Drive. Earn. Own.
          </p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            With Mac Rentel, step into the future of urban transportation. We
            offer E-Rickshaw and E-Cart rentals on flexible, affordable daily
            plans, designed to empower drivers and entrepreneurs in Delhi & NCR.
          </p>
          <Button asChild className="btn">
            <Link href="#rental-plans">Explore Our Plans</Link>
          </Button>
        </div>
      </section> */}

        <div className="section">
          <Container maxWidth="xl">
            <div className="">
              {/* Left side - Images */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src="/img/mac-driver.webp"
                    alt="Interior design team collaborating on projects"
                    width={2000}
                    height={2000}
                    className="w-full h-auto object-contain   shadow-2xl  relative "
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>

        <section
          id="rental-plans"
          className="w-full section bg-white overflow-hidden"
        >
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-1/4 w-32 h-32 bg-green-300 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-green-400 rounded-full blur-3xl"></div>
          </div>

          <Container maxWidth="lg" className=" relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                Our Flexible{" "}
                <span className="bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-primary-dark)] bg-clip-text text-transparent">
                  Rental Plans
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                E-Rickshaw / E-Cart Rental Options: Choose the plan that best
                suits your business needs and budget
              </p>
            </div>

            {/* Plans Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
              {plans.map((plan, index) => (
                <Card
                  key={index}
                  className={`group relative overflow-hidden bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-primary-dark)] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                        Most Popular
                      </div>
                    </div>
                  )}

                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${plan.bgGradient} opacity-30 group-hover:opacity-50 transition-opacity duration-300`}
                  ></div>

                  <CardHeader className="relative z-10 text-center  pt-6">
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                      <div
                        className={`w-15 h-15 rounded-2xl bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-primary-dark)] flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                      >
                        {plan.icon}
                      </div>
                    </div>

                    {/* Plan Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.title}
                    </h3>

                    {/* Price */}
                    <div className="">
                      <div className="flex items-baseline justify-center">
                        <span
                          className={`text-4xl font-bold bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-primary-dark)] bg-clip-text text-transparent`}
                        >
                          {plan.price}
                        </span>
                        <span className="text-xl text-gray-600 ml-1">
                          {plan.period}
                        </span>
                      </div>
                      <p className="text-lg text-gray-600 mt-2">
                        {plan.description}
                      </p>
                    </div>
                  </CardHeader>

                  <CardContent className="relative z-10 px-6 pb-6">
                    {/* Features */}
                    <div className="space-y-3 mb-4">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-green-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <div className="absolute bottom-4 left-4 w-6 h-6 bg-green-300 rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Driver-Cum-Owner Plan Section - Empowering & Clear */}
        <section id="benefits" className="w-full section bg-gray-100">
          <Container maxWidth="lg">
            <div className="flex flex-col items-center text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Your Path to Ownership
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Own your vehicle after just 600 days! Drive with us under our
                  rental plan, and after 600 rental days (approximately 20
                  months) of consistent payment, the vehicle is yours to own.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {benefits.map((benefit, index) => (
                  <Card
                    key={index}
                    className="group relative h-full overflow-hidden rounded-[20px] bg-white border-0 shadow-lg pt-0 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    {/* Gradient Header */}
                    <div
                      className={`bg-gradient-to-r ${benefit.gradient} p-6 text-white relative`}
                    >
                      <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                      <div className="relative z-10">
                        <div className="text-lg font-bold leading-tight">
                          {benefit.title}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <CardContent className="p-6">
                      <ul className="space-y-4">
                        {benefit.items.map((item, idx) => (
                          <li key={idx} className="flex items-start group/item">
                            <div className="flex-shrink-0 mt-1"></div>
                            <span className="ml-3 text-gray-700 group-hover/item:text-gray-900 transition-colors leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>

                    {/* Hover Effect Border */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                    ></div>
                  </Card>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="section ">
          <Container maxWidth="xl text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-14 text-gray-800">
              Operating Across Delhi & NCR
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto">
              Multiple Mac Rentel hubs for easy pick-up and drop-off, wherever
              you are.
            </p>
            <div className="relative max-w-6xl mx-auto">
              <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-8">
                {["Delhi", "Noida", "Ghaziabad", "Faridabad", "Gurugram"].map(
                  (city, index) => (
                    <div
                      key={city}
                      className="flex flex-col items-center justify-center p-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <MapPin className="h-10 w-10 text-[var(--color-primary-dark)] mb-2" />
                      <h3 className="text-xl font-semibold text-gray-800">
                        {city}
                      </h3>
                    </div>
                  )
                )}
              </div>
            </div>
          </Container>
        </section>

        <section className="section bg-gray-100">
          <Container maxWidth="xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left Column - Main Content */}
              <div className="space-y-8 lg:sticky top-25">
                <div className="space-y-6">
                  <p className="text-green-500 font-medium text-sm uppercase tracking-wide">
                    India’s Fastest Growing EV Brand
                  </p>

                  <div className="text-4xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                    Why Choose{" "}
                    <span className="text-[var(--color-primary-dark)]">
                      Mac Rentel
                    </span>
                    ?
                  </div>

                  <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                    <p>
                      Explore why thousands trust MACK EV for electric
                      mobility—combining innovation, reliability, and support in
                      every journey.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Updated Content Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Trusted EV Brand */}
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <ShieldCheck className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Trusted EV Brand
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Recognized and trusted by thousands through
                    www.macautoindia.com for reliable electric mobility
                    solutions.
                  </p>
                </div>

                {/* Transparent Pricing */}
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <BadgeDollarSign className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Transparent Pricing
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We ensure fair pricing with absolutely no hidden
                    charges—what you see is what you pay.
                  </p>
                </div>

                {/* 24x7 Roadside Assistance */}
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <LifeBuoy className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    24x7 Roadside Assistance
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Enjoy peace of mind with regular vehicle maintenance and
                    full-time roadside support whenever you need it.
                  </p>
                </div>

                {/* Smart GPS-Enabled Vehicles */}
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <MapPin className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Smart GPS-Enabled Vehicles
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our vehicles are equipped with GPS and offer real-time
                    tracking and support for enhanced safety and efficiency.
                  </p>
                </div>

                {/* High Mileage & Battery Backup */}
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <BatteryFull className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    High Mileage & Battery Backup
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Experience long-range travel and dependable performance with
                    high mileage and robust battery life.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Driver Login Panel Section - Prominent CTA */}
        <section
          className="relative py-20 md:py-28 text-white overflow-hidden bg-fixed bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: 'url("/img/heo-img.jpg")' }}
        >
          <div className="absolute inset-0 w-full h-full z-4 bg-black/50  "></div>

          <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
            <svg
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="grid"
                  width="80"
                  height="80"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M80 0H0V80"
                    stroke="currentColor"
                    strokeOpacity="0.2"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          {/* Main Content */}
          <div className="relative z-10 container mx-auto px-4 md:px-6 text-center flex flex-col gap-4">
            <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
              Driver Login Panel
            </div>
            <p className="text-xl md:text-xl mb-4 max-w-3xl mx-auto">
              Track Your Rides | Earnings | Rental Days | Service Reminders
            </p>
            <div>
              <a
                href="https://dashboard.brandingwaale.com/"
                target="_blank"
                className="btn  text-lg md:text-xl   transition"
              >
                Login Now
              </a>
            </div>

            <div className="text-base md:text-lg">
              Available on Mobile & Web.
            </div>
            <div className="mt-4 flex items-center justify-center gap-6 text-xl md:text-2xl opacity-90">
              <Smartphone className="h-8 w-8 text-emerald-400 drop-shadow-md" />
              <Monitor className="h-8 w-8 text-emerald-400 drop-shadow-md" />
            </div>
          </div>
        </section>

        {/* Get Started in 4 Easy Steps Section - Step-by-Step Visual */}
        <section id="join" className="w-full  section bg-gray-50">
          <Container maxWidth="xl">
            {/* Header */}
            <div className="text-center mb-10">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-primary-dark)] bg-clip-text text-transparent">
                  Steps
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get started with in 4 simple steps
              </p>
            </div>

            {/* Steps */}
            <div className="relative">
              {/* Desktop Progress Line */}
              <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-green-200 via-green-300 to-green-400 z-0"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                {steps.map((step, index) => (
                  <div key={index} className="relative">
                    <Card
                      className={`group h-full relative rounded-[20px] overflow-hidden bg-white border-2 ${step.borderColor} hover:border-opacity-60 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3`}
                    >
                      <CardContent className="p-8 text-center">
                        {/* Step Number with Icon */}
                        <div className="relative mb-6">
                          <div
                            className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-primary-dark)] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                          >
                            {step.icon}
                          </div>
                          <div
                            className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-primary-dark)] flex items-center justify-center text-white text-sm font-bold shadow-md`}
                          >
                            {step.number}
                          </div>
                        </div>

                        {/* Content */}
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                          {step.description}
                        </p>

                        {/* Hover Effect Background */}
                        <div
                          className={`absolute inset-0 ${step.bgColor} opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none`}
                        ></div>
                      </CardContent>
                    </Card>

                    {/* Mobile Arrow */}
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}

"use client";

import {
  Building2,
  Truck,
  Zap,
  TrendingUp,
  ShoppingCart,
  DollarSign,
  Target,
  ChevronDown,
} from "lucide-react";

const milestones = [
  {
    year: "2014",
    title: "2014 - Company Incorporated",
    description:
      "The foundation of our journey began with the incorporation of our company.",
    details:
      "Established with a vision to revolutionize the electric vehicle industry in India.",
    icon: Building2,
    colorTheme: "blue",
  },
  {
    year: "2015",
    title: "2015 - 3 Wheeler Mac 900 Launched",
    description:
      "Successfully launched our first 3 Wheeler Mac 900 with i-CAT Certification.",
    details:
      "Project: Mac 900 Series • Certification: i-CAT Approved • Market Entry: Commercial Segment",
    icon: Truck,
    colorTheme: "green",
  },
  {
    year: "2016",
    title: "2016 - 1st 3V Wheeler Electric Cargo",
    description:
      "Introduced our first 3V Wheeler Electric Cargo vehicle for commercial use.",
    details:
      "Innovation: Electric Cargo Solutions • Target: Last-mile Delivery • Eco-friendly Technology",
    icon: Zap,
    colorTheme: "blue",
  },
  {
    year: "2017",
    title: "2017 - Highest Sales Record",
    description: "Registered the highest sales in the 3 Wheeler industry.",
    details:
      "Achievement: Industry Leader • Market Share: #1 Position • Growth Rate: 300%+",
    icon: TrendingUp,
    colorTheme: "green",
  },
  {
    year: "2018",
    title: "2018 - 7 Models of E-Cart Launched",
    description:
      "Expanded our product portfolio with 7 different E-Cart models.",
    details:
      "Portfolio: 7 Unique Models • Segments: Passenger & Cargo • Innovation: Diverse Solutions",
    icon: ShoppingCart,
    colorTheme: "blue",
  },
  {
    year: "2019",
    title: "2019 - 30 Crore Revenue Milestone",
    description:
      "Revenue reached 30 Crore with the successful Kumbh Mela project.",
    details:
      "Revenue: ₹30 Crores • Major Project: Kumbh Mela • Fleet Size: 1000+ Vehicles",
    icon: DollarSign,
    colorTheme: "green",
  },
  {
    year: "2020",
    title: "2020 - 50 Crore Turnover Achievement",
    description:
      "Crossed the 50 Crore turnover mark, establishing market leadership.",
    details:
      "Turnover: ₹50 Crores • Growth: 67% YoY • Market Position: Industry Pioneer",
    icon: Target,
    colorTheme: "blue",
  },
];

export default function Timeline() {
  const getColorClasses = (theme) => {
    if (theme === "blue") {
      return {
        badge: "bg-gradient-to-br from-blue-500 to-blue-600",
        card: "bg-gradient-to-br from-blue-50 to-blue-100",
        accent: "bg-gradient-to-b from-blue-500 to-blue-600",
        icon: "bg-gradient-to-br from-blue-500 to-blue-600",
      };
    }
    return {
      badge: "bg-gradient-to-br from-green-500 to-green-600",
      card: "bg-gradient-to-br from-green-50 to-green-100",
      accent: "bg-gradient-to-b from-green-500 to-green-600",
      icon: "bg-gradient-to-br from-green-500 to-green-600",
    };
  };

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute top-96 right-20 w-40 h-40 bg-green-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-purple-200 rounded-full blur-2xl"></div>

        {/* Dot Pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, #e2e8f0 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto py-20 px-4">
        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-blue-700 to-green-400 rounded-full"></div>

          {/* Timeline Items */}
          <div className="space-y-20">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              const Icon = milestone.icon;
              const colors = getColorClasses(milestone.colorTheme);

              return (
                <div
                  key={milestone.year}
                  className="relative flex items-center"
                >
                  {/* Year Badge */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                    <div
                      className={`w-20 h-20 rounded-full ${colors.badge} shadow-lg flex items-center justify-center border-4 border-white transition-all duration-300 hover:scale-110`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    {/* <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
                      <span className="bg-white px-4 py-2 rounded-full text-lg font-bold text-gray-800 shadow-md">
                        {milestone.year}
                      </span>
                    </div> */}
                  </div>

                  {/* Connecting Line */}
                  <div
                    className={`absolute top-1/2 w-16 h-0.5 bg-gradient-to-r from-blue-400 to-green-400 opacity-30 ${
                      isEven
                        ? "right-[calc(50%+40px)]"
                        : " left-[calc(50%+40px)]"
                    }`}
                  ></div>

                  {/* Content Card */}
                  <div
                    className={`w-full flex ${
                      isEven
                        ? "justify-start pr-4 md:pr-20"
                        : "justify-end pl-4 md:pl-20"
                    }`}
                  >
                    <div
                      className={`w-full md:w-5/12 ${
                        isEven ? "md:mr-auto" : "md:ml-auto"
                      }`}
                    >
                      <div
                        className={`${colors.card} rounded-2xl shadow-lg p-8 transition-all duration-300 hover:-translate-y-2`}
                      >
                        <div className="flex items-start space-x-4">
                          <div
                            className={`p-4 rounded-xl ${colors.icon} shadow-md rounded-[20px]`}
                          >
                            <Icon className="w-6 h-6 text-white" />
                          </div>

                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                              {milestone.title}
                            </h3>
                            <p className="text-gray-700 leading-relaxed text-lg">
                              {milestone.description}
                            </p>
                          </div>
                        </div>

                        {/* Left Border Accent */}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

import Btn from "@/components/btn";
import {
  Flag,
  PackagePlus,
  CheckSquare,
  Star,
  Plus,
  ShieldCheck,
  BadgeDollarSign,
  Handshake,
} from "lucide-react";

export default function Component() {
  const reasons = [
    { name: "Designed in India, Made in India", icon: Flag },
    {
      name: "Multiple products, One New Launch every 3 months",
      icon: PackagePlus,
    },
    { name: "Tested for 3 years", icon: CheckSquare },
    { name: "Best in Class Features", icon: Star },
    { name: "30 Plus accessories - Customizable", icon: Plus },
    { name: "Highest Warranty 3 years", icon: ShieldCheck },
    { name: "Attractive Consumer Schemes", icon: BadgeDollarSign },
    {
      name: "Transparent Relationship with Dedicated Sales Manager ",
      icon: Handshake,
    },
  ];

  return (
    <div className="bg-gray-100 section py-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-4">
          8 Reasons!
        </h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Here’s why our customers trust and choose us over the rest
        </p>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full px-4">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex h-20 items-center  rounded-l-full rounded-[20px]  overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="w-20 h-full rounded-l-full flex items-center justify-center bg-[var(--color-primary-dark)] text-white text-2xl -mr-4 z-10 shrink-0">
                <reason.icon className="w-8 h-8" />
              </div>

              <div className="w-full flex items-center py-2  pl-6 bg-white  h-full text-lg font-medium text-gray-800 ">
                {reason.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="d flex justify-center mt-6">
        <Btn></Btn>
      </div>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";

import {
  CheckCircle2,
  Phone,
  Mail,
  Globe,
  Users,
  Lightbulb,
  Handshake,
  Rocket,
  Award,
  DollarSign,
  Zap,
  Wrench,
  Star,
  CreditCard,
  Megaphone,
  FileCheck,
  FileText,
  CheckCircle,
  Truck,
  Store,
  Car,
  Battery,
  Smartphone,
  MailIcon,
  GraduationCap,
  MessageSquare,
  Database,
  LineChart,
  Headphones,
  RefreshCw,
  ArrowLeft,
} from "lucide-react";

import DealerForm from "@/components/dealer-form";
export const metadata = {
  title: " Start Your EV Dealership with MACK EV – Apply Now!",
  keywords: `electric vehicle dealership India, EV dealer near me, best EV dealership India, electric vehicles in India, electric vehicles cost India, e rickshaw dealership India, electric auto rickshaw dealer India, electric auto rickshaw market India, e‑rickshaw business opportunity India `,
  description:
    "Partner with MACK EV for a profitable EV dealership. Low investment, high returns & full support to grow your electric vehicle business. Apply today!",

  alternates: {
    canonical: `/dealership`,
  },
};
export default function Component() {
  return (
    <main>
      {/* Hero Section */}

      <div className="py-5 ">
        <div className="   container px-4 max-w-6xl mx-auto">
          <div className="flex  flex-wrap  items-center   justify-center lg:justify-between mb-4">
            <Link
              href="/"
              className="logo flex justify-center items-center mb-10"
            >
              <Image
                width={200}
                height={200}
                src="/logo.png"
                alt="logo"
                className=""
              ></Image>
            </Link>
            <Link href="/" className="flex items-center btn gap-2">
              <ArrowLeft size={16} />
              Back to Main Website
            </Link>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 lg:gap-0">
            <div className="relative lg:col-span-5  ">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/img/banner5.jpeg"
                  alt="Interior design team collaborating on projects"
                  width={2000}
                  height={2000}
                  className="w-full h-auto  max-h-[470px]   shadow-2xl     relative    object-contain "
                />
              </div>
            </div>

            <div className="form-section lg:col-span-7 shadow-2xl p-4">
              <h2 className="mb-10">Apply For Dealership</h2>
              <DealerForm></DealerForm>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

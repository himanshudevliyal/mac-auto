"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";

import { motion } from "framer-motion";
import { User, FileText, Building2, TrendingUp } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";

const stats = [
  {
    number: "10,000+",
    label: "Active Tenders",
    icon: FileText,
  },
  {
    number: "5,000+",
    label: "Companies",
    icon: Building2,
  },
  {
    number: "98%",
    label: "Success Rate",
    icon: TrendingUp,
  },
];
// Zod validation schema
const contactFormSchema = z.object({
  first_name: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50),
  last_name: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(50),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[+]?[1-9][\d]{9,14}$/, "Please enter a valid phone number"),
  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters")
    .max(100, "Subject must be less than 100 characters")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000),
  // saveInfo: z.boolean().optional(),
});

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      phone: "",
      subject: "",
      message: "",
      // saveInfo: false,
    },
  });

  const saveInfo = watch("saveInfo");

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      reset();
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error sending message. Please try again.");
    }
  };

  return (
    <>
      <section className="flex justify-center items-center bg-green-50">
        <div className="grid lg:grid-cols-2 gap-0 items-start ">
          <div className="flex justify-center items-center h-[100vh] ">
            <div className=" container mx-auto">
              <div className=" p-10 rounded-4xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* First & Last Name */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="first_name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        First Name *
                      </label>
                      <Input
                        id="first_name"
                        {...register("first_name")}
                        className={`border-gray-200 focus:border-[var(--color-primary-light)] focus:ring-[var(--color-primary-light)] ${
                          errors.first_name
                            ? "border-red-500 focus:ring-red-500"
                            : ""
                        }`}
                      />
                      {errors.first_name && (
                        <p className="text-sm text-red-600 mt-1">
                          {errors.first_name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="last_name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Last Name *
                      </label>
                      <Input
                        id="last_name"
                        {...register("last_name")}
                        className={`border-gray-200 focus:border-[var(--color-primary-light)] focus:ring-[var(--color-primary-light)] ${
                          errors.last_name
                            ? "border-red-500 focus:ring-red-500"
                            : ""
                        }`}
                      />
                      {errors.last_name && (
                        <p className="text-sm text-red-600 mt-1">
                          {errors.last_name.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone & Subject */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone *
                      </label>
                      <Input
                        id="phone"
                        {...register("phone")}
                        className={`border-gray-200 focus:border-[var(--color-primary-light)] focus:ring-[var(--color-primary-light)] ${
                          errors.phone
                            ? "border-red-500 focus:ring-red-500"
                            : ""
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-sm text-red-600 mt-1">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Subject
                      </label>
                      <Input
                        id="subject"
                        {...register("subject")}
                        className={`border-gray-200 focus:border-[var(--color-primary-light)] focus:ring-[var(--color-primary-light)] ${
                          errors.subject
                            ? "border-red-500 focus:ring-red-500"
                            : ""
                        }`}
                      />
                      {errors.subject && (
                        <p className="text-sm text-red-600 mt-1">
                          {errors.subject.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      placeholder="Your message..."
                      className={`min-h-[120px] border-gray-200 focus:border-[var(--color-primary-light)] focus:ring-[var(--color-primary-light)] ${
                        errors.message
                          ? "border-red-500 focus:ring-red-500"
                          : ""
                      }`}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-600 mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Save Info Checkbox */}
                  {/* <div className="flex items-center space-x-2">
                    <Checkbox
                      id="saveInfo"
                      checked={saveInfo}
                      onCheckedChange={(checked) =>
                        setValue("saveInfo", !!checked)
                      }
                      className="border-gray-300 data-[state=checked]:bg-[var(--color-primary-light)] data-[state=checked]:border-[var(--color-primary-light)]"
                    />
                    <label htmlFor="saveInfo" className="text-sm text-gray-600">
                      Save my name and phone in this browser for the next time.
                    </label>
                  </div> */}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[var(--color-primary-light)] hover:bg-[var(--color-secondary)] text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    {isSubmitting ? "Sending..." : "Submit Now"}
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="h-[100vh] relative flex justify-center items-center min-h-screen p-6 overflow-hidden bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600">
            {/* Background decorative elements */}
            <div className="absolute inset-0">
              <div className="absolute top-20 left-10 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-lg rotate-12 animate-pulse"></div>
              <div className="absolute top-40 right-20 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full animate-bounce"></div>
              <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-white/15 backdrop-blur-sm rounded-lg -rotate-12"></div>
              <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-white/25 backdrop-blur-sm rounded-full"></div>
            </div>

            <div className="relative flex justify-center items-center flex-col">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-white space-y-8"
              >
                <Image
                  src="/login.svg"
                  alt="LOGIN-IMG"
                  width={300}
                  height={300}
                ></Image>
                <div className="space-y-6">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
                  >
                    Streamline Your Bidding Process
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-lg"
                  >
                    Access thousands of tender opportunities and manage your
                    bids efficiently on our secure platform.
                  </motion.p>
                </div>

                {/* Stats cards with glass effect */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                >
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="group"
                    >
                      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl hover:bg-white/15 transition-all duration-300">
                        <div className="flex items-center space-x-3 mb-2">
                          <stat.icon className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                          <div className="text-2xl lg:text-3xl font-bold text-white">
                            {stat.number}
                          </div>
                        </div>
                        <div className="text-white/80 font-medium group-hover:text-white transition-colors">
                          {stat.label}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            {/* Bottom gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/10 to-transparent"></div>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, MapPin, Phone, Send, User, X } from "lucide-react";
import { Input } from "@/components/ui/input";

import ServicesSection from "./cards";
import Breadcrumb from "@/components/breadcrumb";
import Container from "@mui/material/Container";
import { useState } from "react";
import { toast } from "sonner";
const enquiryFormSchema = z.object({
  firstName: z
    .string({ required_error: "First name is required" })
    .trim()
    .min(2, "First name must be at least 2 characters")
    .regex(/^[a-zA-Z\s]+$/, "First name can contain only letters"),

  lastName: z
    .string()
    .trim()
    .regex(/^[a-zA-Z\s]*$/, "Last name can contain only letters")
    .optional(),

  lead_type: z
    .string({ required_error: "Please select enquiry type" })
    .min(1, "Please select enquiry type"),

  phoneNumber: z
    .string({ required_error: "Phone number is required" })
    .regex(/^[6-9]\d{9}$/, {
      message:
        "Phone number must be a valid 10-digit Indian number starting with 6-9",
    }),
});

const LEAD_TYPES = [
  { label: "Dealership Enquiry", value: 2561916 },
  { label: "Retail Sales Enquiry", value: 2561917 },
  { label: "Govt. Supply Enquiry", value: 2568926 },
  { label: "Bulk Order Enquiry", value: 2574534 },
];

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({ resolver: zodResolver(enquiryFormSchema) });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(
        "https://api.macautoindia.com/v1/kylas/contact-lead",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName: data.firstName,
            lastName: data.lastName,

            lead_type: data.lead_type,

            phoneNumber: data.phoneNumber,
            // cfDoYouHaveShowroomSpace: data.cfDoYouHaveShowroomSpace,
            // cfInvestmentCapacity: data.cfInvestmentCapacity,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit enquiry.");
      }

      toast.success("Your enquiry has been submitted successfully.");
      form.reset();
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Submission failed. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderError = (field) =>
    form.formState.errors[field] && (
      <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
        <span className="w-1 h-1 bg-red-500 rounded-full"></span>
        {form.formState.errors[field]?.message}
      </p>
    );

  return (
    <>
      <Breadcrumb title="Contact us" />

      <ServicesSection />

      <section className="section bg-gray-100">
        <Container maxWidth="xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div className="space-y-6 lg:sticky top-20">
              <div className="flex items-center gap-2 text-[var(--color-primary-light)] text-sm font-medium tracking-wide">
                <div className="w-8 h-px bg-[var(--color-primary-light)]"></div>
                Get in Touch with MACK EV Pvt. Ltd.
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Have questions about our products, services, or need support?
              </h2>
              <p className="text-gray-600 leading-relaxed max-w-md">
                We’re here to help you every step of the way.
              </p>
              <p className="text-gray-600 leading-relaxed max-w-md">
                Whether you’re looking for detailed information, a business
                inquiry, or technical support — our team is just a message away.
                Fill out the form, and we’ll get back to you shortly.
              </p>
            </div>

            {/* Form */}
            <div className="  shadow-lg bg-white p-10   overflow-hidden   rounded-2xl">
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="firstName"
                      className="text-sm font-medium text-gray-700 flex items-center gap-2"
                    >
                      <User className="w-4 h-4 text-green-600" />
                      First Name *
                    </label>
                    <Input
                      id="firstName"
                      placeholder="Enter your first name"
                      className="h-12 border-gray-200 focus:border-green-500 focus:ring-green-500 transition-colors"
                      {...form.register("firstName")}
                    />
                    {renderError("firstName")}
                  </div>

                  {/* Last Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="lastName"
                      className="text-sm font-medium text-gray-700 flex items-center gap-2"
                    >
                      <User className="w-4 h-4 text-green-600" />
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      placeholder="Enter your last name"
                      className="h-12 border-gray-200 focus:border-green-500 focus:ring-green-500 transition-colors"
                      {...form.register("lastName")}
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label
                      htmlFor="phoneNumber"
                      className="text-sm font-medium text-gray-700 flex items-center gap-2"
                    >
                      <Phone className="w-4 h-4 text-green-600" />
                      Phone Number *
                    </label>
                    <Input
                      id="phoneNumber"
                      type="tel"
                      placeholder="+91 99 9999 9999"
                      className="h-12 border-gray-200 focus:border-green-500 focus:ring-green-500 transition-colors"
                      {...form.register("phoneNumber")}
                    />
                    {renderError("phoneNumber")}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Send className="w-4 h-4 text-green-600" />
                      Enquiry Type *
                    </label>

                    <select
                      {...form.register("lead_type")}
                      className="w-full h-12 border border-gray-200 rounded-md px-4 py-3"
                    >
                      <option value="">Select enquiry type</option>
                      {LEAD_TYPES.map((item) => (
                        <option key={item.value} value={item.value}>
                          {item.label}
                        </option>
                      ))}
                    </select>

                    {renderError("lead_type")}
                  </div>
                </div>
                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Processing Your Request...
                    </>
                  ) : (
                    "Submit Now"
                  )}
                </button>
              </form>
            </div>
          </div>
        </Container>
      </section>
      <div className="w-full h-[450px] overflow-hidden rounded-lg shadow-lg ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2417481361026!2d77.29446337428665!3d28.472265391342656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce7ef32e76bb7%3A0xa7a6ee1e11ce522c!2sMac%20Auto%20India%2C%20a%20leading%20manufacturer%20%26%20Supplier%20of%20Electric%20Rickshaws%2C%20E-Loaders%2C%20and%20E-Scooters!5e0!3m2!1sen!2sin!4v1754371138643!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

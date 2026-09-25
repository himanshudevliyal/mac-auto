"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Loader2, User, Phone, MapPin, Mail, X } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const enquiryFormSchema = z.object({
  firstName: z
    .string({
      required_error: "First name is required",
    })
    .trim()
    .min(2, "First name is required"),

  lastName: z.string().optional(),

  email: z.string().email("Enter valid email").optional().or(z.literal("")),

  city: z
    .string({
      required_error: "City is required",
    })
    .trim()
    .min(1, "City is required"),

  state: z
    .string({
      required_error: "State is required",
    })
    .trim()
    .min(1, "State is required"),

  phoneNumber: z
    .string({
      required_error: "Phone number is required",
    })
    .regex(/^[6-9]\d{9}$/, {
      message:
        "Phone number must be a valid 10-digit Indian number starting with 6-9",
    }),
});

export default function DealerForm({
  productId = "",
  onClose,
  callback = null,
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(enquiryFormSchema),

    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      city: "",
      state: "",
      phoneNumber: "",
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    const fullName = [data.firstName, data.lastName].filter(Boolean).join(" ");
    try {
      const payload = {
        // Existing Backend Fields
        fullname: fullName,

        mobile_number: data.phoneNumber,

        city: data.city,

        state: data.state,

        email: data.email,

        // Static Dealership Data
        lead_type: 1,

        pipeline_id: 1,

        stage_id: 9,

        form_id: 1,

        // Product
        vehicle_id: productId,
        custom_dealership_pipeline_lead_type: "",
        custom_dealership_pipeline_lead_quality: "",
        custom_dealership_pipeline_products_or_services: "",
        custom_dealership_pipeline_requirement: "",
        custom_dealership_pipeline_latest_remark: "",
        custom_dealership_pipeline_past_evauto_industry_experience: "",
        custom_dealership_pipeline_own_showroom: "",
        custom_dealership_pipeline_size_of_showroom: "",
        custom_dealership_pipeline_how_old_is_the_gst_number: "",
        custom_dealership_pipeline_investment_capacity_or_plan: "",
        custom_dealership_pipeline_dealer_primary_issue: "",
        source:"Website"
      };

      const response = await fetch(
        `https://leadapi.mack-ev.com/v1/leads/external-lead`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(payload),
        },
      );

      if (!response.ok) {
        const errorData = await response.json();

        throw new Error(errorData.message || "Failed to submit enquiry.");
      }

      toast.success("Your dealer application has been submitted successfully.");

      form.reset();

      if (typeof callback === "function") {
        callback();
      }

      router.push("/thank-you");
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Submission failed. Please try again.",
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
    <div>
      <Button
        onClick={onClose}
        variant="ghost"
        size="sm"
        className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2"
      >
        <X className="w-5 h-5" />
      </Button>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <User className="w-4 h-4 text-green-600" />
              First Name *
            </label>

            <Input
              placeholder="Enter your first name"
              {...form.register("firstName")}
            />

            {renderError("firstName")}
          </div>

          {/* Last Name */}

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <User className="w-4 h-4 text-green-600" />
              Last Name
            </label>

            <Input
              placeholder="Enter your last name"
              {...form.register("lastName")}
            />
          </div>

          {/* Email */}

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <Mail className="w-4 h-4 text-green-600" />
              Email
            </label>

            <Input
              type="email"
              placeholder="Enter your email"
              {...form.register("email")}
            />

            {renderError("email")}
          </div>

          {/* Phone */}

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <Phone className="w-4 h-4 text-green-600" />
              Phone Number *
            </label>

            <Input
              type="tel"
              placeholder="9999999999"
              {...form.register("phoneNumber")}
            />

            {renderError("phoneNumber")}
          </div>

          {/* City */}

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-green-600" />
              City *
            </label>

            <Input placeholder="Enter your city" {...form.register("city")} />

            {renderError("city")}
          </div>

          {/* State */}

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-green-600" />
              State *
            </label>

            <Input placeholder="Enter your state" {...form.register("state")} />

            {renderError("state")}
          </div>
        </div>

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
            "Submit Dealer Application"
          )}
        </button>
      </form>
    </div>
  );
}

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import {
  Loader2,
  User,
  Phone,
  MapPin,
  Mail,
  X,
  Tag,
  Star,
  Package,
  ClipboardList,
  MessageSquare,
  History,
  Store,
  Ruler,
  FileText,
  IndianRupee,
  AlertCircle,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const optionalText = z.string().trim().optional().or(z.literal(""));

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

  // Custom dealership pipeline fields (all optional)
  leadType: optionalText,
  leadQuality: optionalText,
  productsOrServices: optionalText,
  requirement: optionalText,
  latestRemark: optionalText,
  pastEvAutoIndustryExperience: optionalText,
  ownShowroom: optionalText,
  sizeOfShowroom: optionalText,
  gstNumberAge: z
    .string()
    .trim()
    .regex(/^\d*$/, { message: "Enter age in years (numbers only)" })
    .optional()
    .or(z.literal("")),
  investmentCapacityOrPlan: optionalText,
  dealerPrimaryIssue: optionalText,
});

// Config for the custom fields so they are rendered from one place.
// type: "input" (default) | "select" | "textarea"
const customFields = [
  {
    name: "leadType",
    label: "Lead Type",
    icon: Tag,
    placeholder: "Enter lead type",
  },
  {
    name: "leadQuality",
    label: "Lead Quality",
    icon: Star,
    placeholder: "Enter lead quality",
  },
  {
    name: "productsOrServices",
    label: "Products or Services",
    icon: Package,
    placeholder: "Products or services you deal in",
  },
  {
    name: "pastEvAutoIndustryExperience",
    label: "Past EV / Auto Industry Experience",
    icon: History,
    placeholder: "e.g. 5 years in two-wheeler dealership",
  },
  {
    name: "ownShowroom",
    label: "Do You Own a Showroom?",
    icon: Store,
    type: "select",
    options: ["Yes", "No"],
  },
  {
    name: "sizeOfShowroom",
    label: "Size of Showroom",
    icon: Ruler,
    placeholder: "e.g. 1500 sq ft",
  },
  {
    name: "gstNumberAge",
    label: "How Old Is the GST Number? (years)",
    icon: FileText,
    placeholder: "e.g. 3",
    inputType: "number",
  },
  {
    name: "investmentCapacityOrPlan",
    label: "Investment Capacity / Plan",
    icon: IndianRupee,
    placeholder: "e.g. ₹10-15 lakh",
  },
  {
    name: "requirement",
    label: "Requirement",
    icon: ClipboardList,
    type: "textarea",
    fullWidth: true,
    placeholder: "Describe your requirement",
  },
  {
    name: "dealerPrimaryIssue",
    label: "Dealer Primary Issue",
    icon: AlertCircle,
    type: "textarea",
    fullWidth: true,
    placeholder: "Main issue you face as a dealer",
  },
  {
    name: "latestRemark",
    label: "Latest Remark",
    icon: MessageSquare,
    type: "textarea",
    fullWidth: true,
    placeholder: "Any additional remarks",
  },
];

const controlClasses =
  "w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm outline-none focus-visible:ring-1 focus-visible:ring-ring";

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
      leadType: "",
      leadQuality: "",
      productsOrServices: "",
      requirement: "",
      latestRemark: "",
      pastEvAutoIndustryExperience: "",
      ownShowroom: "",
      sizeOfShowroom: "",
      gstNumberAge: "",
      investmentCapacityOrPlan: "",
      dealerPrimaryIssue: "",
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

        // Custom fields
        custom_dealership_pipeline_lead_type: data.leadType || "",
        custom_dealership_pipeline_lead_quality: data.leadQuality || "",
        custom_dealership_pipeline_products_or_services:
          data.productsOrServices || "",
        custom_dealership_pipeline_requirement: data.requirement || "",
        custom_dealership_pipeline_latest_remark: data.latestRemark || "",
        custom_dealership_pipeline_past_evauto_industry_experience:
          data.pastEvAutoIndustryExperience || "",
        custom_dealership_pipeline_own_showroom: data.ownShowroom || "",
        custom_dealership_pipeline_size_of_showroom: data.sizeOfShowroom || "",
        custom_dealership_pipeline_how_old_is_the_gst_number:
          data.gstNumberAge || "",
        custom_dealership_pipeline_investment_capacity_or_plan:
          data.investmentCapacityOrPlan || "",
        custom_dealership_pipeline_dealer_primary_issue:
          data.dealerPrimaryIssue || "",

        source: "Website",
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

  const renderCustomField = (field) => {
    const Icon = field.icon;

    return (
      <div
        key={field.name}
        className={`space-y-2 ${field.fullWidth ? "md:col-span-2" : ""}`}
      >
        <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
          <Icon className="w-4 h-4 text-green-600" />
          {field.label}
        </label>

        {field.type === "select" ? (
          <select className={controlClasses} {...form.register(field.name)}>
            <option value="">Select</option>
            {field.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : field.type === "textarea" ? (
          <textarea
            rows={3}
            placeholder={field.placeholder}
            className={controlClasses}
            {...form.register(field.name)}
          />
        ) : (
          <Input
            type={field.inputType || "text"}
            min={field.inputType === "number" ? 0 : undefined}
            placeholder={field.placeholder}
            {...form.register(field.name)}
          />
        )}

        {renderError(field.name)}
      </div>
    );
  };

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

          {/* Custom dealership pipeline fields */}
          {customFields.map(renderCustomField)}
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
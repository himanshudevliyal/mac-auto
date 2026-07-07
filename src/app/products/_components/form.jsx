"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Loader2, Send, Shield, CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

/* -------------------- ZOD SCHEMA -------------------- */
const enquiryFormSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  phoneNumber: z.string().min(10, "Valid phone number required"),
  vehicle_name: z.string().min(2, "Vehicle name is required"),
  city: z.string().min(2, "City is required"),
  quantity: z.number().min(1, "Minimum quantity is 1"),
});

/* -------------------- COMPONENT -------------------- */
export default function EnquiryFormModal({ vehicle_name }) {
  console.log({ vehicle_name });
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(enquiryFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      vehicle_name: vehicle_name,
      city: "",
      quantity: 1,
    },
  });

  const handleClose = () => {
    setIsOpen(false);
    form.reset();
  };

  /* -------------------- SUBMIT -------------------- */
  const onSubmit = async (data) => {
    setIsSubmitting(true);

    const payload = {
      phoneNumber: data.phoneNumber,
      vehicle_name: data.vehicle_name,
      firstName: data.firstName,
      lastName: data.lastName,
      city: data.city,
      quantity: data.quantity,
    };

    try {
      const response = await fetch(
        "https://api.mack-ev.com/v1/kylas/enquiry-lead",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      if (!response.ok) {
        throw new Error("Failed");
      }

      toast.success("Enquiry submitted successfully");
      handleClose();
    } catch (error) {
      toast.error("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  /* -------------------- UI -------------------- */
  return (
    <>
      <Button className="btn" onClick={() => setIsOpen(true)}>
        Make an Enquiry
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[600px] p-0 bg-white">
          <div className="p-6 bg-blue-600 text-white">
            <div className="flex items-center gap-4">
              <Shield />
              <div>
                <DialogTitle className="text-xl">Vehicle Enquiry</DialogTitle>
                <DialogDescription className="text-blue-100">
                  Quick & reliable response
                </DialogDescription>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="mb-4 p-3 bg-blue-50 border-l-4 border-blue-600">
              <div className="flex items-center gap-2 text-blue-700">
                <CheckCircle size={18} />
                <span className="font-semibold">Why choose us?</span>
              </div>
              <p className="text-sm text-blue-600">
                Instant response • Best pricing
              </p>
            </div>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <Input placeholder="First Name" {...form.register("firstName")} />

              <Input placeholder="Last Name" {...form.register("lastName")} />

              <Input
                placeholder="Phone Number"
                {...form.register("phoneNumber")}
              />

              <Input
                placeholder="Vehicle Name"
                {...form.register("vehicle_name")}
                disabled
              />

              <Input placeholder="City" {...form.register("city")} />

              <Input
                type="number"
                min={1}
                placeholder="Quantity"
                {...form.register("quantity", { valueAsNumber: true })}
              />

              <Separator />

              <Button
                type="submit"
                className="btn w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="mr-2" />
                    Submit Enquiry
                  </>
                )}
              </Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

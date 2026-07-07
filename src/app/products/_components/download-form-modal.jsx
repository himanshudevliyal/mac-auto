"use client";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Download } from "lucide-react";

export default function DownloadFormModal({ fileUrl, fileName }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    lastName: "", // ✅ Added lastName
    phone: "",
    city: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!String(formData.name).trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(String(formData.name))) {
      newErrors.name = "Name should only contain letters";
    }

    if (!String(formData.phone).trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(String(formData.phone))) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!String(formData.city).trim()) {
      newErrors.city = "City is required";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // ✅ API call with lastName included
      const response = await fetch(
        "https://api.mack-ev.com/v1/kylas/download-brochure",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName: formData.name,
            lastName: formData.lastName,
            city: formData.city,
            phoneNumber: formData.phone,
          }),
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit enquiry.");
      }

      // ✅ Trigger PDF download after success
      const link = document.createElement("a");
      link.href = fileUrl;
      link.target = "_blank";
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Reset form and close modal
      setFormData({ name: "", lastName: "", phone: "", city: "" });
      setIsOpen(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(error.message || "Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="text-green-500 hover:bg-green-500 hover:text-white rounded-[8px] bg-transparent"
        >
          <span className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Download Brochure
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white border-0 rounded-[20px]">
        <DialogHeader>
          <DialogTitle>Download Brochure</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First Name */}
          <div className="space-y-2">
            <Label htmlFor="name">First Name *</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your first name"
              value={formData.name}
              onChange={handleInputChange}
              className="flex h-9 w-full border border-gray-300 rounded-md px-3 py-1 focus:border-blue-600 focus:ring-blue-600"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          {/* Last Name (no validation) */}
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleInputChange}
              className="flex h-9 w-full border border-gray-300 rounded-md px-3 py-1 focus:border-blue-600 focus:ring-blue-600"
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleInputChange}
              className="flex h-9 w-full border border-gray-300 rounded-md px-3 py-1 focus:border-blue-600 focus:ring-blue-600"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>

          {/* City */}
          <div className="space-y-2">
            <Label htmlFor="city">City *</Label>
            <Input
              id="city"
              name="city"
              type="text"
              placeholder="Enter your city"
              value={formData.city}
              onChange={handleInputChange}
              className="flex h-9 w-full border border-gray-300 rounded-md px-3 py-1 focus:border-blue-600 focus:ring-blue-600"
            />
            {errors.city && (
              <p className="text-red-500 text-sm">{errors.city}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit & Download"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

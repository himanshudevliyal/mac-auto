"use client";

import { useState } from "react";
import { Shield } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import DealerForm from "./dealer-form";

// Schema

export default function BecomeDealerDialog({ isOpen, setIsOpen }) {
  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[600px] p-0 bg-white border border-gray-200 max-h-[90vh] overflow-y-auto">
          {/* Scrollable Form Body */}
          <div className="p-8">
            <DealerForm
              callback={() => {
                setIsOpen(false);
              }}
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

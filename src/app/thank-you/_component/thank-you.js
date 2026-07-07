"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ThankYou() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);
  return (
    <div className="section flex items-center justify-center">
      {/* Redirect component (5 sec baad Home pe redirect karega) */}

      <div className="max-w-2xl w-full space-y-8 text-center">
        {/* Message Card */}
        <Card className="border-0 shadow-none">
          <CardContent className="space-y-6">
            <div className="flex justify-center items-center">
              <div className="relative bg-[var(--color-primary)] animate-pulse p-6 rounded-full">
                <Heart className="w-16 h-16 text-white fill-current" />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-[var(--color-primary-dark)]">
                Thank You for Applying for MACK EV Dealership!
              </h2>
              <p className="text-gray-700 leading-relaxed max-w-lg mx-auto">
                Your application has been received successfully. Our dealership
                team will review your details and connect with you within 24–48
                hours.
              </p>
            </div>

            <div className="flex justify-center gap-4 pt-4">
              <Link href="/" className="btn">
                Home
              </Link>
              <Link href="/about" className="btn-outline w-auto">
                About us
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

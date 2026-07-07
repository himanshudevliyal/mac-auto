"use client";

import Container from "@mui/material/Container";
import { useState } from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BecomeDealerDialog from "./become-dealer-dialog";
import { Button } from "./ui/button";
import { FaYoutube } from "react-icons/fa6";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const data = [
    { title: "Noida", city: "noida" },
    { title: "Ghaziabad", city: "ghaziabad" },
    { title: "Meerut", city: "meerut" },
    { title: "Moradabad", city: "moradabad" },
    { title: "Banaras", city: "banaras" },
    { title: "Basti", city: "basti" },
    { title: "Jaunpur", city: "Jaunpur" },
    { title: "Kanpur Dehat", city: "kanpur-dehat" },
    { title: "Lucknow", city: "lucknow" },
    { title: "Prayagraj", city: "prayagraj" },
    { title: "Faridabad", city: "faridabad" },
    { title: "Delhi", city: "Delhi" },
  ];
  return (
    <>
      <footer className="bg-black text-gray-300 px-6 py-12 mt-0">
        <Container maxWidth="xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={150}
                  height={150}
                  className="w-[150px] md:w-[200px]  scale-105"
                ></Image>
              </div>
              <h5 className="font-medium text-gray-400">
                {" "}
                MACK.EV – Driving E-Rickshaw Innovation Since 2014
              </h5>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                As one of India’s pioneering electric vehicle manufacturers,
                MACK EV (formerly MACK EV) specializes in eco-friendly
                E-Rickshaws and loading carts with patented designs and i-CAT
                certifications. With a strong PAN India presence, MACK EV is
                committed to delivering innovative, reliable, and
                high-performance electric mobility solutions.
              </p>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                Our dedication to quality and customer satisfaction sets us
                apart in the EV industry, as we continue to power a cleaner and
                greener future.
              </p>
            </div>

            {/* Company Section */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About us
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href="/products"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Our Products
                  </Link>
                </li> */}
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-and-conditions"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Account Section */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Our Products
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/products/900"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    900
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/dhoom"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Dhoom
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/tejas-dhl"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Tejas DHL
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/tejas-ultra"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Tejas Ultra
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/vajra"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Vajra
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/vayu"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Vayu
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    View All Products
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-400">
                    121A, 121B Gurukul Indraprastha Industrial. Green Valley
                    Faridabad, Haryana -121010
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <p className="text-sm text-gray-400"> +91 80 9062 9062</p>
                </div>

                <div className="flex gap-3 mt-4">
                  <Link
                    href="https://www.facebook.com/MacAutoofficial"
                    target="_blank"
                    className="w-10 h-10 bg-slate-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://x.com/macautoofficial"
                    target="_blank"
                    className="w-10 h-10 bg-slate-700 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </Link>
                  <Link
                    target="_blank"
                    href="https://www.youtube.com/@mackevofficial"
                    className="w-10 h-10 bg-slate-700 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <FaYoutube className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/mackevofficial/"
                    target="_blank"
                    className="w-10 h-10 bg-slate-700 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </Link>
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/company/mac-auto-india-pvt-ltd"
                    className="w-10 h-10 bg-slate-700 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="  border-t border-slate-700 py-6  mx-auto">
            <ul className="flex flex-wrap justify-center gap-3 ">
              {data.map((city, index) => (
                <li key={index}>
                  <Link
                    href={`/cities/${city.city}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {city.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Bottom Section */}
          <div className="border-t border-slate-700 pt-6 flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              MACK EV | Design & Developed By
              <a href="https://brandingwaale.com/"> Brandingwaale Webtech</a>
            </p>
            <div className="flex items-center gap-2">
              <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xs">VISA</span>
              </div>
              <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                <div className="flex gap-0.5">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                </div>
              </div>

              <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-purple-600 font-bold text-xs">
                  Skrill
                </span>
              </div>
              <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-[var(--color-secondary)] font-bold text-xs">
                  MC
                </span>
              </div>
              <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xs">VISA</span>
              </div>
            </div>
          </div>
        </Container>
      </footer>
      <Button
        className="  rotate-90 bottom-4 right-[-50px] z-50 bgOne py-6  text-white fixed  top-[50%]  max-h-[100px] cursor-pointer "
        onClick={() => setIsOpen(true)}
      >
        Become a Dealer
      </Button>
      <BecomeDealerDialog isOpen={isOpen} setIsOpen={setIsOpen} />{" "}
    </>
  );
}

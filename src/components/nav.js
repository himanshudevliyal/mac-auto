"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Menu, Search, X, Download, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SearchSidebar from "./serchbar";
import Link from "next/link";
import Container from "@mui/material/Container";
import { Button, buttonVariants } from "@/components/ui/button";
import { BiSupport } from "react-icons/bi";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useData } from "./DataContext";
import { cn } from "@/lib/utils";
import { Card } from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

export default function Navbar() {
  const [isVehiclesOpen, setIsVehiclesOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("passenger");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { data: vehicles = [], loading } = useData();
  const [expandedProduct, setExpandedProduct] = useState(null);
  const [openCategory, setOpenCategory] = useState(null);

  const vehicleCategories = vehicles
    .filter((vehicle) => vehicle.category)
    .reduce((acc, vehicle) => {
      const category = vehicle.category.toLowerCase();
      if (!acc[category]) acc[category] = { products: [] };
      acc[category].products.push(vehicle);
      return acc;
    }, {});

  useEffect(() => {
    const categories = Object.keys(vehicleCategories);
    if (categories.length > 0 && !selectedCategory) {
      setSelectedCategory(categories[0]);
    }
  }, [vehicleCategories, selectedCategory]);

  const handleDownload = (fileUrl, filename = "brochure.pdf") => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", filename);
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getAnimationDirection = (category, categories) => {
    const currentIndex = categories.indexOf(selectedCategory);
    const newIndex = categories.indexOf(category);
    return newIndex > currentIndex ? "up" : "down";
  };

  const slideVariants = {
    up: {
      initial: { y: 20, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: -20, opacity: 0 },
    },
    down: {
      initial: { y: -20, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: 20, opacity: 0 },
    },
  };

  return (
    <>
      {/* Top Header */}
      <div className="nav-header py-2 overflow-hidden    hidden lg:block">
        <Container maxWidth="xl">
          <div className="flex text-[10px] lg:text-sm justify-end items-center gap-2 md:gap-4 relative z-10">
            <Link
              href="/sales-service"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "rounded-full border-2 text-[10px] lg:text-sm border-white/30 hover:border-white/50 hover:text-white transition-all bg-white/10 backdrop-blur-sm text-white hover:bg-white/20",
              )}
            >
              MAC Care
            </Link>
            {/* <Link
              href="/mac-rental"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "rounded-full text-[10px] lg:text-sm border-2 border-white/30 hover:border-white/50 hover:text-white transition-all bg-white/10 backdrop-blur-sm text-white hover:bg-white/20"
              )}
            >
              MAC Rental
            </Link> */}

            <Link
              href="/dealership"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "rounded-full text-[10px] lg:text-sm border-2 border-white/30 hover:border-white/50 hover:text-white transition-all bg-white/10 backdrop-blur-sm text-white hover:bg-white/20",
              )}
            >
              Dealership
            </Link>
            {/* <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="text-[10px] lg:text-sm justify-between rounded-full px-2 border-2 border-white/30 hover:border-white/50 hover:text-white transition-all bg-white/10 backdrop-blur-sm text-white hover:bg-white/20"
                >
                  <span className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download Brochure
                  </span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-56 rounded-lg p-2 bg-white border-0 text-black"
                align="center"
              >
                {["passenger", "loader", "garbage"].map(
                  (categoryKey, index) => {
                    const categoryData = vehicleCategories[categoryKey];
                    if (!categoryData) return null;

                    return (
                      <Collapsible key={categoryKey} className="w-full">
                        <CollapsibleTrigger className="flex items-center justify-between w-full px-2 py-2 rounded-sm cursor-pointer hover:bg-gray-100">
                          <span className="font-medium capitalize">
                            {categoryKey}
                          </span>
                          <ChevronDown className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
                        </CollapsibleTrigger>

                        <CollapsibleContent className="ml-4 mt-1 space-y-1 border-l-2 border-gray-200 pl-2">
                          {categoryData.products.map((item) => (
                            <div key={item.id} className="mb-2">
                              <div
                                className="cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-sm text-sm flex items-center"
                                onClick={() => {
                                  if (item.brochure?.[0]) {
                                    const fileUrl = `https://api.mack-ev.com/${item.brochure[0].replace(
                                      /\\/g,
                                      "/"
                                    )}`;
                                    handleDownload(
                                      fileUrl,
                                      `${item.title}.pdf`
                                    );
                                  }
                                }}
                              >
                                {item.title}
                              </div>
                            </div>
                          ))}
                        </CollapsibleContent>

                        {index < 3 && (
                          <DropdownMenuSeparator className="my-1" />
                        )}
                      </Collapsible>
                    );
                  }
                )}
              </DropdownMenuContent>
            </DropdownMenu> */}

            <Link
              href="/dealer-locator"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "rounded-full text-[10px] lg:text-sm border-2 border-white/30 hover:border-white/50 hover:text-white transition-all bg-white/10 backdrop-blur-sm text-white hover:bg-white/20",
              )}
            >
              Dealer Locator
            </Link>

            <span className="text-white gap-2 font-medium hidden lg:flex text-sm items-center md:text-base">
              <BiSupport className="text-xl" />
              Help/support
            </span>
            <span className="text-white gap-2 font-medium hidden lg:flex text-sm md:text-base">
              <Phone /> +91 80 9062 9062
            </span>
          </div>
        </Container>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white text-black shadow-sm py-2 h-[80px] flex justify-center items-center z-50 sticky top-0">
        <Container maxWidth="xl">
          <div className="flex justify-between items-center">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="logo"
                width={200}
                height={200}
                className="w-[150px] md:w-[200px]  scale-105"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center justify-between gap-6 lg:gap-10">
              <Link
                href="/"
                className="text-lg font-medium hover:text-gray-700"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-lg font-medium hover:text-gray-700"
              >
                About
              </Link>

              <div
                className="relative group"
                onMouseEnter={() => setIsVehiclesOpen(true)}
                onMouseLeave={() => setIsVehiclesOpen(false)}
              >
                <button className="flex items-center text-lg font-medium hover:text-gray-700">
                  Vehicles <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div
                  className={`absolute top-5 mt-1 pt-7 w-[650px] transition-opacity duration-200 ${
                    isVehiclesOpen
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                  }`}
                >
                  <div className="flex bg-white rounded-lg shadow-xl text-black">
                    <div className="w-1/3 border-r border-gray-200">
                      {["passenger", "loader", "garbage", "golf"].map(
                        (category) => (
                          <button
                            key={category}
                            className={`w-full capitalize text-left px-4 py-3 text-lg font-medium border-b border-gray-200 last:border-b-0 ${
                              selectedCategory === category
                                ? "bg-gray-100 text-black border-r-2 border-gray-400"
                                : "hover:bg-gray-100"
                            }`}
                            onMouseEnter={() => setSelectedCategory(category)}
                          >
                            {category}
                          </button>
                        ),
                      )}
                    </div>
                    <div className="w-2/3 p-6">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={selectedCategory}
                          variants={
                            slideVariants[
                              getAnimationDirection(
                                selectedCategory,
                                Object.keys(vehicleCategories),
                              )
                            ]
                          }
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          transition={{ duration: 0.3 }}
                        >
                          <h3 className="text-lg font-semibold mb-4 capitalize">
                            {selectedCategory}
                          </h3>
                          <div className="grid grid-cols-3 gap-3">
                            {vehicleCategories[selectedCategory]?.products?.map(
                              (product) => (
                                <Link
                                  key={product.id}
                                  href={`/products/${product.slug}`}
                                  className="text-center group cursor-pointer"
                                >
                                  <div className="h-24 flex items-center justify-center">
                                    <Image
                                      height={60}
                                      width={60}
                                      src={`https://api.mack-ev.com/${product.carousel[0].replace(
                                        /\\/g,
                                        "/",
                                      )}`}
                                      alt={product.title}
                                      className="max-h-full w-auto object-contain"
                                    />
                                  </div>
                                  <p className="text-xs font-medium group-hover:text-gray-800">
                                    {product.title}
                                  </p>
                                </Link>
                              ),
                            )}
                          </div>
                          <div className="mt-6">
                            <Link
                              href={`/${selectedCategory.toLowerCase()}`}
                              className="text-sm font-medium hover:text-gray-700"
                            >
                              View all {selectedCategory} →
                            </Link>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>

              {/* Other Nav Items */}

              <Link
                href="/media"
                className="text-lg font-medium hover:text-gray-700"
              >
                News Media
              </Link>
              <Link
                href="/blog"
                className="text-lg font-medium hover:text-gray-700"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-lg font-medium hover:text-gray-700"
              >
                Contact Us
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="h-5 w-5" />
              </motion.button>
              <div className="ml-auto flex gap-2">
                <Link href="/contact" className="btn">
                  Enquire Now
                </Link>
                <Dialog>
                  <DialogTrigger asChild>
                    <div variant="outline" className="btn-outline">
                      Login
                    </div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px] p-6 bg-white rounded-2xl">
                    <DialogHeader className="text-center mb-6">
                      <DialogTitle className="text-2xl font-bold">
                        LOGIN AS?
                      </DialogTitle>
                    </DialogHeader>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <a
                        href="https://dms.mack-ev.com"
                        target="_blank"
                        className="text-sm font-semibold uppercase"
                      >
                        <Card className="flex flex-col items-center justify-center   border-transparent  shadow-2xl rounded-2xl border-0 p-4 cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                          <Image
                            src="/img/dealer-main.png"
                            alt="dealer icon"
                            width={120}
                            height={120}
                            className=" aspect-square object-contain"
                          />
                          Dealer
                        </Card>
                      </a>
                      {/*  */}
                      <a
                        href="https://customer.mack-ev.com"
                        target="_blank"
                        className="text-sm font-semibold uppercase"
                      >
                        <Card className="flex flex-col items-center justify-center shadow-2xl rounded-2xl border-0 p-4 cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                          <Image
                            src="/img/custmor-final.png"
                            alt="customer icon"
                            width={120}
                            height={120}
                            className=" aspect-square object-contain"
                          />
                          Customer
                        </Card>
                      </a>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            {/* Mobile Nav */}
            {/* Mobile Nav */}
            <div className="lg:hidden flex g-4">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button className="text-black p-2">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-full bg-white">
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center p-4 border-b">
                      <Image
                        src="/logo.png"
                        alt="logo"
                        width={120}
                        height={50}
                      />
                      <SheetTrigger asChild>
                        <button className="p-2 rounded hover:bg-gray-100">
                          <X className="h-6 w-6" />
                        </button>
                      </SheetTrigger>
                    </div>

                    <nav className="flex-1 overflow-y-auto p-4 space-y-2">
                      <Link
                        href="/"
                        className="block font-medium py-2 border-b border-gray-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Home
                      </Link>
                      <Link
                        href="/about"
                        className="block font-medium py-2 border-b border-gray-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        About{" "}
                      </Link>

                      {/* Vehicles - No FuelType Grouping */}
                      <Collapsible className="w-full">
                        <CollapsibleTrigger className="flex items-center justify-between w-full font-medium py-2 border-b border-gray-200 [&[data-state=open]>svg]:rotate-180">
                          Vehicles{" "}
                          <ChevronDown className="h-4 w-4 transition-transform" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="pl-4 pt-2 space-y-2">
                          {["passenger", "loader", "garbage", "golf"].map(
                            (categoryKey) => {
                              const categoryData =
                                vehicleCategories[categoryKey];
                              if (!categoryData) return null;

                              return (
                                <Collapsible
                                  key={categoryKey}
                                  open={openCategory === categoryKey}
                                  onOpenChange={(isOpen) =>
                                    setOpenCategory(isOpen ? categoryKey : null)
                                  }
                                  className="w-full"
                                >
                                  <CollapsibleTrigger className="flex items-center justify-between w-full capitalize text-left py-2 [&[data-state=open]>svg]:rotate-180">
                                    {categoryKey}
                                    <ChevronDown className="h-4 w-4 transition-transform" />
                                  </CollapsibleTrigger>

                                  <CollapsibleContent className="grid grid-cols-3 gap-3 p-2">
                                    {categoryData.products.map((product) => (
                                      <Link
                                        key={product.id}
                                        href={`/products/${product.slug}`}
                                        className="text-center group cursor-pointer flex flex-col items-start"
                                        onClick={() =>
                                          setIsMobileMenuOpen(false)
                                        }
                                      >
                                        <div className="h-20 flex">
                                          <Image
                                            height={100}
                                            width={100}
                                            src={`https://api.mack-ev.com/${product.carousel[0].replace(
                                              /\\/g,
                                              "/",
                                            )}`}
                                            alt={product.title}
                                            className="max-h-full w-auto object-contain"
                                          />
                                        </div>
                                        <p className="text-xs font-medium group-hover:text-gray-800 mt-1">
                                          {product.title}
                                        </p>
                                      </Link>
                                    ))}
                                  </CollapsibleContent>
                                </Collapsible>
                              );
                            },
                          )}
                        </CollapsibleContent>
                      </Collapsible>

                      <Link
                        href="/sales-service"
                        className="block font-medium py-2 border-b border-gray-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        MAC Care
                      </Link>
                      {/* <Link
                        href="/mac-rental"
                        className="block font-medium py-2 border-b border-gray-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        MAC Rental
                      </Link> */}
                      <Link
                        href="/dealership"
                        className="block font-medium py-2 border-b border-gray-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Dealership
                      </Link>
                      <Link
                        href="/blog"
                        className="block font-medium py-2 border-b border-gray-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Blogs
                      </Link>
                      <Link
                        href="/contact"
                        className="block font-medium py-2 border-b border-gray-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Contact Us
                      </Link>

                      <div className="mt-10 flex flex-col gap-4">
                        <div>
                          {" "}
                          <Link
                            href="/contact"
                            className="btn"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Enquire Now
                          </Link>
                        </div>

                        <Dialog>
                          <DialogTrigger asChild>
                            <div className="flex justify-start w-full">
                              <button
                                variant="outline"
                                className="btn-outline w-auto"
                              >
                                Login
                              </button>
                            </div>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[500px] p-6 bg-white rounded-2xl">
                            <DialogHeader className="text-center mb-6">
                              <DialogTitle className="text-2xl font-bold">
                                LOGIN AS?
                              </DialogTitle>
                            </DialogHeader>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <a
                                href="https://dms.mack-ev.com"
                                target="_blank"
                                className="text-sm font-semibold uppercase"
                              >
                                <Card className="flex flex-col items-center justify-center   border-transparent  shadow-2xl rounded-2xl border-0 p-4 cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                                  <Image
                                    src="/img/dealer-main.png"
                                    alt="dealer icon"
                                    width={120}
                                    height={120}
                                    className=" aspect-square object-contain"
                                  />
                                  Dealer
                                </Card>
                              </a>
                              {/*  */}
                              <a
                                href="https://customer.mack-ev.com"
                                target="_blank"
                                className="text-sm font-semibold uppercase"
                              >
                                <Card className="flex flex-col items-center justify-center shadow-2xl rounded-2xl border-0 p-4 cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                                  <Image
                                    src="/img/custmor-final.png"
                                    alt="customer icon"
                                    width={120}
                                    height={120}
                                    className=" aspect-square object-contain"
                                  />
                                  Customer
                                </Card>
                              </a>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </Container>
      </nav>

      {/* Search Sidebar */}
      <SearchSidebar
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        vehicles={vehicles}
      />
    </>
  );
}

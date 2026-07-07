"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/nav";
import Footer from "@/components/footer";
import { DataProvider } from "../DataContext";
import MacBuddy from "../macBuddy";

export default function Layout({ children }) {
  const pathname = usePathname();
  const routes = ["/dealership"];

  if (routes.includes(pathname)) return children;
  return (
    <DataProvider>
      <div>
        <Navbar />
        {children}
        <Footer></Footer>
        <MacBuddy></MacBuddy>
      </div>
    </DataProvider>
  );
}

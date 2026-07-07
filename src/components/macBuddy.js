"use client";

import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Laptop, Zap } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function MacBuddy() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setIsOpen(!isOpen);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50" ref={dropdownRef}>
      {/* MacBuddy Button */}
      <button
        onClick={toggleDropdown}
        className="group relative flex h-16 w-16 items-center justify-center rounded-full shadow-2xl text-white transition-transform duration-300 hover:scale-110 hover:shadow-3xl active:scale-95  bg-green-500 "
        aria-label="Open MacBuddy chat"
      >
        <div className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-25 bg-gradient-to-tr from-blue-400 via-blue-600 to-indigo-700"></div>
        {isOpen ? (
          <X size={28} className="transition-transform duration-200" />
        ) : (
          <div className="relative">
            <FaWhatsapp
              size={28}
              className="transition-transform duration-200 group-hover:rotate-12"
            />
            <div
              className="absolute -right-1 -top-1 h-3 w-3 rounded-full shadow-lg animate-pulse"
              style={{ backgroundColor: "#7BBF48" }}
            ></div>
          </div>
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute bottom-20   -right-5 lg:right-0 w-96 origin-bottom-right transform overflow-hidden rounded-3xl bg-white/90 backdrop-blur-xl shadow-2xl animate-in slide-in-from-bottom-4 fade-in-0">
          {/* Header */}
          <div className="relative p-4 md:p-6 bg-gradient-to-tr bgThree rounded-t-3xl shadow-md">
            <div className="absolute inset-0 bg-black/10 rounded-t-3xl"></div>
            <div className="relative flex items-center">
              <div className="mr-4 rounded-full bg-white/20 p-3 backdrop-blur-sm">
                <FaWhatsapp size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">MacBuddy</h3>
                <div className="flex items-center text-sm text-blue-100">
                  <div
                    className="mr-2 h-2 w-2 rounded-full animate-pulse"
                    style={{ backgroundColor: "#7BBF48" }}
                  ></div>
                  Online • Ready to help with your Mac needs
                </div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="max-h-72 overflow-y-auto p-4 md:p-6 bg-gradient-to-b from-gray-50 to-white">
            {[
              "👋 Hey there! I'm MacBuddy, your personal Mac expert and troubleshooter.",
              ,
            ].map((msg, index) => (
              <div
                key={index}
                className={`mb-4 max-w-sm animate-in slide-in-from-left-2 fade-in-0 duration-${
                  500 + index * 200
                }`}
              >
                <div className="rounded-2xl rounded-tl-md p-4 shadow-md bg-gradient-to-r from-blue-50/50 via-blue-100/30 to-indigo-50/30">
                  <p className="text-gray-800 leading-relaxed">{msg}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div className="p-6 border-t border-gray-200/50 bg-white/80">
            <div className="space-y-3">
              <a
                href="https://api.whatsapp.com/send/?phone=919990018193&text=I+want+to+enquire+about+MAC+Auto&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full px-6 py-4 font-semibold text-white rounded-[20px] shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl active:scale-95  bgThree"
              >
                <MessageCircle
                  size={20}
                  className="transition-transform group-hover:rotate-12"
                />
                Chat with MacBuddy on WhatsApp
              </a>
              <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                <Zap size={14} style={{ color: "#7BBF48" }} />
                <span>Usually responds within minutes</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

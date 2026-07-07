"use client";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useData } from "./DataContext";

export default function SearchSidebar({ isOpen, onClose }) {
  const { data: vehicles, loading, error } = useData();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [selectedSearchIndex, setSelectedSearchIndex] = useState(-1);
  const inputRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (loading || error || !vehicles || vehicles.length === 0) {
        setSearchSuggestions([]);
        return;
      }

      const lowerSearch = searchQuery.toLowerCase().trim();

      if (lowerSearch.length > 0) {
        const filtered = vehicles
          .map((product) => ({
            id: product.id,
            slug: product.slug,
            title: product.title || "",
            category: product.category || "",
            brand: product.title?.split(" ")[0] || "",
            model: product.title?.split(" ").slice(1).join(" ") || "",
            type: product.category || "",
            description: product.description || "",
          }))
          .filter((product) =>
            [
              product.brand,
              product.model,
              product.type,
              product.description,
            ].some((field) => field.toLowerCase().includes(lowerSearch))
          )
          .slice(0, 8);

        setSearchSuggestions(filtered);
        setSelectedSearchIndex(-1);
      } else {
        setSearchSuggestions([]);
      }
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchQuery, vehicles, loading, error]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleSearchKeyDown = (e) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedSearchIndex((prev) =>
          prev < searchSuggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedSearchIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case "Enter":
        e.preventDefault();
        if (selectedSearchIndex >= 0) {
          handleSuggestionClick(searchSuggestions[selectedSearchIndex]);
        }
        break;
      case "Escape":
        onClose();
        break;
    }
  };

  const handleSuggestionClick = (product) => {
    setSearchQuery("");
    setSearchSuggestions([]);
    onClose();
    router.push(`/products/${product.slug}`);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSearchSuggestions([]);
    inputRef.current?.focus();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/30 bg-opacity-50 z-40"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="bg-[linear-gradient(135deg,#3e5eab,#26a9E1)] p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Search Vehicles</h2>
                <button
                  onClick={onClose}
                  className="p-3 hover:bg-blue-500 rounded-xl transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-blue-200" />
                </div>
                <input
                  ref={inputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleSearchKeyDown}
                  placeholder="Search by brand, model, type..."
                  className="w-full pl-12 pr-12 py-3 bg-white bg-opacity-20 border border-blue-400 rounded-lg text-blue-900 placeholder-blue-200 focus:outline-none focus:bg-opacity-30 focus:border-blue-300 transition-all duration-200"
                />
                {searchQuery && (
                  <button
                    onClick={clearSearch}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-blue-700 cursor-pointer hover:text-blue-900 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
            </div>

            {/* Results */}
            <div className="flex-1 overflow-y-auto">
              {loading ? (
                <div className="p-8 text-center text-gray-400">
                  <p>Loading vehicles...</p>
                </div>
              ) : error ? (
                <div className="p-8 text-center text-red-500">
                  <p>Error loading vehicles: {error.message}</p>
                  <p className="text-sm mt-1">
                    Please check your API connection.
                  </p>
                </div>
              ) : searchQuery ? (
                searchSuggestions.length > 0 ? (
                  <div className="p-4 space-y-3">
                    {searchSuggestions.map((product, index) => (
                      <motion.button
                        key={product.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => handleSuggestionClick(product)}
                        className={`w-full p-4 text-left rounded-xl border transition-all duration-200 group ${
                          selectedSearchIndex === index
                            ? "bg-blue-50 border-blue-300 shadow-md"
                            : "bg-gray-50 border-gray-200 hover:bg-blue-50 hover:border-blue-300 hover:shadow-md"
                        }`}
                      >
                        <div className="flex items-start space-x-4">
                          <div className="flex-1 gap-5">
                            <div className="flex items-center gap-5 mb-2">
                              <h3 className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                                {product.title}
                              </h3>
                              <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                                {product.category}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 line-clamp-3">
                              {product.description}
                            </p>
                          </div>
                          <ArrowRight className="h-4 w-4 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </motion.button>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center text-gray-400">
                    <Search className="h-12 w-12 mx-auto mb-3" />
                    <p className="font-medium text-gray-600">
                      No vehicles found
                    </p>
                    <p className="text-sm mt-1">Try different keywords</p>
                  </div>
                )
              ) : (
                <div className="p-8 text-center text-gray-400">
                  <Search className="h-16 w-16 mx-auto mb-4 text-blue-300" />
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    Start Your Search
                  </h3>
                  <p className="text-gray-500">
                    Type to search for vehicles by brand, model, or type
                  </p>
                </div>
              )}
            </div>

            {/* Keyboard help */}
            <div className="border-t border-gray-200 p-4 bg-gray-50 text-center text-xs text-gray-500">
              Use <kbd className="px-2 py-1 bg-gray-200 rounded">↑↓</kbd> to
              navigate,
              <kbd className="px-2 py-1 bg-gray-200 rounded">Enter</kbd> to
              select, <kbd className="px-2 py-1 bg-gray-200 rounded">Esc</kbd>{" "}
              to close
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

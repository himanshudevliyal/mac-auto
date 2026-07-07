"use client";
import { useEffect, useState } from "react";

export default function FinancerLogos({
  selectedState,
  selectedCity,
  onInterestRateChange,
}) {
  const [filteredFinancers, setFilteredFinancers] = useState([]);
  const [selectedFinancerId, setSelectedFinancerId] = useState(null);

  useEffect(() => {
    fetch("https://api.macautoindia.com/v1/financers")
      .then((res) => res.json())
      .then((data) => {
        if (data?.status && data.data?.financers?.length > 0) {
          const matched = data.data.financers.filter((financer) =>
            financer.area_serve.some(
              (area) =>
                area.state.toLowerCase() === selectedState.toLowerCase() &&
                area.city.some(
                  (c) => c.value.toLowerCase() === selectedCity.toLowerCase()
                )
            )
          );

          setFilteredFinancers(
            matched.map((financer) => ({
              id: financer.id,
              name: financer.name,
              interestRate: Number.parseFloat(financer.interest_percentage), // Store interest rate
              logo: financer.logo.map(
                (path) =>
                  `https://api.macautoindia.com/${path.replace(/\\/g, "/")}`
              )[0], // only showing the first logo
            }))
          );
          // Reset selected financer and interest rate when state/city changes
          setSelectedFinancerId(null);
          onInterestRateChange(0);
        }
      })
      .catch((err) => console.error("Error fetching financers:", err));
  }, [selectedState, selectedCity, onInterestRateChange]);

  const handleFinancerClick = (financer) => {
    setSelectedFinancerId(financer.id);
    onInterestRateChange(financer.interestRate);
  };

  if (!selectedState || !selectedCity) return null;

  return (
    <div className="grid grid-cols-3 gap-4 mt-6">
      {filteredFinancers.map((financer) => (
        <button
          key={financer.id}
          onClick={() => handleFinancerClick(financer)}
          className={`p-2 border rounded-xl hover:border-green-500 bg-white shadow hover:shadow-lg transition-all ${
            selectedFinancerId === financer.id
              ? "border-green-600 ring-2 ring-green-200"
              : ""
          }`}
        >
          <img
            src={financer.logo || "/placeholder.svg"}
            alt={financer.name}
            className="w-full max-h-[80px] object-contain"
          />
        </button>
      ))}
    </div>
  );
}

"use client";

import { useState, useMemo, useEffect } from "react";
import { State, City } from "country-state-city";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Filter } from "lucide-react";
import { Mail, Phone, MapPin, CheckCircle, Star } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function DealerFilterPage() {
  const [dealers, setDealers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchDealers() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API}/dealers`);
        const data = await response.json();

        if (data?.status && data?.data?.dealers) {
          setDealers(data.data.dealers);
        } else {
          setDealers([]);
        }
      } catch (error) {
        console.error("API Error:", error);
        setDealers([]);
      } finally {
        setLoading(false);
      }
    }

    fetchDealers();
  }, []);

  const states =
    State.getStatesOfCountry("IN")?.map((state) => ({
      value: state.isoCode,
      label: state.name,
    })) ?? [];

  const cities = useMemo(() => {
    if (!selectedState) return [];

    return (
      City.getCitiesOfState("IN", selectedState)?.map((city) => ({
        value: city.name,
        label: city.name,
      })) ?? []
    );
  }, [selectedState]);

  const filteredDealers = useMemo(() => {
    let result = dealers;

    if (selectedState) {
      const stateName =
        State.getStateByCodeAndCountry(selectedState, "IN")?.name ?? "";

      result = result.filter(
        (dealer) =>
          dealer.state?.toLowerCase() === stateName.toLowerCase() ||
          dealer.location?.toLowerCase().includes(stateName.toLowerCase())
      );
    }

    if (selectedCity) {
      result = result.filter(
        (dealer) =>
          dealer.city?.toLowerCase() === selectedCity.toLowerCase() ||
          dealer.location?.toLowerCase().includes(selectedCity.toLowerCase())
      );
    }

    if (searchTerm) {
      result = result.filter((dealer) =>
        dealer.fullname?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return result;
  }, [dealers, selectedState, selectedCity, searchTerm]);

  function handleStateChange(value) {
    setSelectedState(value);
    setSelectedCity("");
  }

  function handleReset() {
    setSelectedState("");
    setSelectedCity("");
    setSearchTerm("");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r bgThree px-6 py-20 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl  font-bold text-white flex text-center items-center gap-3">
            <Filter className="w-8 h-8" />
            Dealer Locator
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 -mt-8">
        {/* Filter Section */}
        <Card className="shadow-xl border-0 rounded-2xl backdrop-blur bg-white/90">
          <CardContent className="pt-6 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Search */}
              <div>
                <Label className="text-sm font-semibold mb-2 block text-gray-700">
                  Search Dealer
                </Label>
                <Input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Enter dealer name..."
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm 
                         focus:outline-none focus:ring-2 focus:ring-green-500 
                         focus:border-green-500 transition"
                />
              </div>

              {/* State */}
              <div>
                <Label className="text-sm font-semibold mb-2 block text-gray-700">
                  State
                </Label>
                <Select
                  className="bg-white"
                  value={selectedState}
                  onValueChange={handleStateChange}
                >
                  <SelectTrigger
                    className="w-full rounded-lg border-gray-300 !
                  bg-white focus:ring-2 focus:ring-green-500  "
                  >
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent className="max-h-20  border-0  bg-white rounded-lg">
                    {states.map((state) => (
                      <SelectItem key={state.value} value={state.value}>
                        {state.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* City */}
              <div>
                <Label className="text-sm font-semibold mb-2 block text-gray-700">
                  City
                </Label>
                <Select
                  value={selectedCity}
                  onValueChange={setSelectedCity}
                  disabled={!selectedState}
                >
                  <SelectTrigger className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-green-500">
                    <SelectValue
                      placeholder={
                        selectedState ? "Select city" : "Select state first"
                      }
                    />
                  </SelectTrigger>
                  <SelectContent className="max-h-60 border-0 bg-white rounded-lg">
                    {cities.map((city) => (
                      <SelectItem key={city.value} value={city.value}>
                        {city.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {(selectedState || selectedCity || searchTerm) && (
              <Button
                onClick={handleReset}
                className="mt-5 text-sm text-green-600 hover:text-green-700 
                       font-medium transition hover:underline bg-green-300"
              >
                Clear Filters
              </Button>
            )}
          </CardContent>
        </Card>

        {/* Results */}
        <div className="mt-8">
          {loading ? (
            <p className="text-center py-16 text-gray-500 animate-pulse">
              Loading dealers...
            </p>
          ) : (
            <>
              <p className="text-sm mb-5 text-gray-600 font-medium">
                Showing {filteredDealers.length} dealer
                {filteredDealers.length !== 1 ? "s" : ""}
              </p>

              {filteredDealers.length === 0 ? (
                <Card className="rounded-2xl shadow-md border-0">
                  <CardContent className="py-16 text-center text-2xl text-red-600">
                    No dealers found
                  </CardContent>
                </Card>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
                  {filteredDealers.map((dealer) => (
                    <Card
                      key={dealer.id}
                      className="relative rounded-3xl shadow-md hover:shadow-2xl 
             transition duration-300 border border-gray-100 overflow-hidden bg-white"
                    >
                      {/* Top Green Border */}
                      <div className="absolute top-0 left-0 w-full h-2 bg-green-600" />

                      <CardContent className="p-6 pt-8 space-y-6">
                        {/* Header */}
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-4">
                            {/* Avatar */}
                            <div>
                              <div
                                className="w-14 h-14 flex items-center justify-center
                        bg-green-600 text-white text-xl font-semibold
                        rounded-2xl"
                              >
                                {dealer.fullname
                                  ?.trim()
                                  .charAt(0)
                                  .toUpperCase()}
                              </div>
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg text-gray-800">
                                {dealer.fullname}
                              </h3>

                              <div className="flex items-center gap-3 mt-2">
                                {/* Verified */}
                                <span className="flex items-center gap-1 text-green-600 text-sm font-medium">
                                  <CheckCircle className="w-4 h-4" />
                                  Verified
                                </span>

                                {/* Premium */}
                              </div>
                            </div>
                          </div>
                        </div>

                        <hr className="border-gray-200" />

                        {/* Contact Details */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-green-50 rounded-xl">
                              <Mail className="w-5 h-5 text-green-600" />
                            </div>
                            <span className="text-gray-600 text-sm">
                              {dealer.email}
                            </span>
                          </div>

                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-green-50 rounded-xl">
                              <Phone className="w-5 h-5 text-green-600" />
                            </div>
                            <span className="text-gray-600 text-sm">
                              {dealer.mobile_number}
                            </span>
                          </div>

                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-green-50 rounded-xl">
                              <MapPin className="w-5 h-5 text-red-500" />
                            </div>
                            <span className="text-gray-600 text-sm">
                              {dealer.location}
                            </span>
                          </div>
                        </div>

                        {/* Button */}
                        <a href={`tel:${dealer.mobile_number}`} className="btn">
                          Contact Dealer →
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

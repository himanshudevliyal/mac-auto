"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function VehicleSpecsTable({ product }) {
  const specifications = product?.specifications || [];
  const [activeTab, setActiveTab] = useState(specifications[0]?.tab_name || "");

  const handleTabChange = (value) => {
    setActiveTab(value);
  };

  return (
    <div className="section bg-gray-100 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Technical Specifications
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Detailed specifications and features of the {product?.title ?? ""}{" "}
            {product?.model ?? ""}
          </p>
        </div>

        {specifications.length > 0 ? (
          <Tabs value={activeTab} onValueChange={handleTabChange}>
            <TabsList className="flex gap-0 md:gap-4    overflow-x-scroll  scrollbar-thin  bg-green-100 rounded-xl p-2">
              {specifications.map((spec, index) => (
                <TabsTrigger
                  key={index}
                  value={spec.tab_name}
                  className="data-[state=active]:bg-green-600 data-[state=active]:text-white font-bold text-sm lg:text-md  p-2 lg:p-2  transition-all duration-300   rounded-[8px]"
                >
                  {spec.tab_name}
                </TabsTrigger>
              ))}
            </TabsList>

            {specifications.map((spec, index) => (
              <TabsContent
                key={index}
                value={spec.tab_name}
                className="overflow-hidden"
              >
                <Card className="border-0 shadow-md bg-white mt-2">
                  <CardHeader className="pb-4">
                    <CardTitle className=" text-sm lg:text-xl text-black">
                      {spec.tab_name}
                    </CardTitle>
                    <Separator className="bg-slate-300 mt-2" />
                  </CardHeader>
                  <CardContent>
                    {spec.specs && spec.specs.length > 0 ? (
                      <div className="overflow-x-auto">
                        <table className="min-w-full table-auto text-left border border-slate-200">
                          <tbody>
                            {spec.specs.map((item, idx) => (
                              <tr
                                key={idx}
                                className="hover:bg-slate-50 transition-colors"
                              >
                                <td className="px-4 py-3  border-b border-slate-200 font-bold text-slate-700 text-sm lg:text-lg">
                                  {item.label}
                                </td>
                                <td className="px-4 py-3 text-right border-b border-slate-200 font-medium text-sm lg:text-lg text-slate-900">
                                  {item.value}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <div className="text-center text-gray-500 py-4">
                        No specifications available.
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        ) : (
          <div className="text-center text-gray-500 py-8">
            No technical specifications available.
          </div>
        )}
      </div>
    </div>
  );
}

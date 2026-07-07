// context/DataContext.js
"use client";
import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API}/vehicles?status=active`)
      .then((res) => res.json())
      .then((resData) => {
        setData(resData?.data?.vehicles || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching API:", err);
        setLoading(false);
      });
  }, []);

  return (
    <DataContext.Provider value={{ data, loading }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}

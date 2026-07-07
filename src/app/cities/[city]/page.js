import { data } from "@/app/[slug]/_data";
import Container from "@mui/material/Container";
import Link from "next/link";
import React from "react";

export default async function Page({ params }) {
  const { city } = await params;

  // Filter items where slug exists in title (case-insensitive)
  const matchedItems = data.filter((item) =>
    item.slug.toLowerCase().includes(city.toLowerCase())
  );

  return (
    <div className="section">
      <Container maxWidth="xl">
        {matchedItems.length > 0 ? (
          <ul className="flex flex-wrap gap-3">
            {matchedItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={`/${item.slug}`}
                  className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full border border-green-300 hover:bg-green-200 hover:text-green-900 transition-colors duration-200"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found for: {slug}</p>
        )}
      </Container>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

type MenuItem = {
  _id: string;
  name: string;
  price: number;
  category: string;
  isPopular: boolean;
};

export default function FeaturedItems() {
  const [items, setItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    fetch("/api/menu")
      .then((res) => res.json())
      .then((data) => setItems(data.data || []))
      .catch((error) => console.error("Error fetching menu:", error));
  }, []);

  return (
    <section className="px-4 py-12 text-center sm:px-6 lg:px-8">
      <h2 className="mb-8 text-2xl font-bold sm:text-3xl">Popular Dishes</h2>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item._id}
            className="rounded-lg border p-5 shadow-md sm:p-6"
          >
            <h3 className="text-lg font-semibold sm:text-xl">{item.name}</h3>
            <p className="mt-2 text-sm text-gray-600 sm:text-base">
              Rs. {item.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
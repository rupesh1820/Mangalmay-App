import { useEffect, useState } from "react";

export default function PanchangSection() {
  const [panchang, setPanchang] = useState([]);

  useEffect(() => {
    setPanchang([
      { date: "29 July 2025", title: "29th July Hindu" },
      { date: "28 July 2025", title: "28th July Hindu" },
      { date: "27 July 2025", title: "27th July Hindu" },
      { date: "26 July 2025", title: "26th July Hindu" },
    ]);
  }, []);

  return (
    <section>
      <h2 className="text-xl font-bold mb-4">📅 Panchang</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {panchang.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-3 hover:shadow-lg transition"
          >
            <img
              src="/images/panchang.jpg"
              alt={item.title}
              className="rounded-md mb-2"
            />
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-gray-500 text-sm">{item.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

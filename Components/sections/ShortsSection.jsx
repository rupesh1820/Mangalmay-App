export default function ShortsSection() {
  const shorts = [
    { title: "Prachen", img: "/images/short1.jpg" },
    { title: "Asaram Bapu Ki", img: "/images/short2.jpg" },
    { title: "Shri Paduka Pujan", img: "/images/short3.jpg" },
    { title: "Namami", img: "/images/short4.jpg" },
  ];

  return (
    <section>
      <h2 className="text-xl font-bold mb-3">📱 Shorts</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {shorts.map((s, i) => (
          <div key={i} className="shadow rounded overflow-hidden">
            <img src={s.img} alt={s.title} className="w-full h-40 object-cover" />
            <p className="text-center font-medium p-2">{s.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

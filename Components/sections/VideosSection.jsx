export default function VideosSection() {
  const categories = [
    "Health Tips", "Divya Shishu", "Mangalmay Video",
    "Meditation", "Yogvashistha Video", "Durlabh Satsang",
    "Tatvik Satsang", "Divine Kirtan", "Geeta Satsang",
    "Sewa Karya", "New Videos", "Latest Videos"
  ];

  return (
    <section>
      <h2 className="text-xl font-bold mb-3">🎥 Videos</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="p-4 rounded-lg border border-orange-400 text-orange-500 font-medium text-center cursor-pointer hover:bg-orange-500 hover:text-white transition"
          >
            {cat}
          </div>
        ))}
      </div>
    </section>
  );
}

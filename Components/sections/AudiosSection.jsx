export default function AudiosSection() {
  const audios = [
    "Sandhya", "Offline Sandhya", "Gurubhakti Yog",
    "Audio Book", "Bhajan - Kirtan", "Tatvik Satsang",
    "Omkar Kirtan", "Omkar Gunjan", "Daily Yogvashistha Paath",
    "My Downloads"
  ];

  return (
    <section>
      <h2 className="text-xl font-bold mb-3">🎵 Audios</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {audios.map((title, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded-lg shadow hover:bg-teal-500 hover:text-white transition text-center cursor-pointer"
          >
            {title}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function BhaktiVideos() {
  const videos = [
    { title: "Khechua Khaadh Ki", date: "2025-07-26" },
    { title: "Rakshabandhan Kab Hai", date: "2025-07-26" },
    { title: "Desi Ghee Benefits", date: "2025-07-23" },
    { title: "Mere Bapu Ki", date: "2025-07-23" },
  ];

  return (
    <section>
      <h2 className="text-xl font-bold mb-3">🙏 Bhakti Videos</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {videos.map((v, i) => (
          <div key={i} className="bg-white shadow rounded p-3 hover:shadow-lg transition">
            <img src="/images/video.jpg" alt={v.title} className="rounded mb-2" />
            <h3 className="font-semibold">{v.title}</h3>
            <p className="text-sm text-gray-500">{v.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

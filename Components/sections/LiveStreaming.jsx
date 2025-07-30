import { useState } from "react";

export default function LiveStreaming() {
  const [active, setActive] = useState(null);

  return (
    <section>
      <h2 className="text-xl font-bold mb-3">🔴 Live Streaming</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div
          onClick={() => setActive("audio")}
          className={`p-8 rounded-xl shadow-md cursor-pointer text-center transition ${
            active === "audio"
              ? "bg-blue-600 text-white"
              : "bg-teal-400 text-white hover:bg-blue-600"
          }`}
        >
          <h3 className="text-xl font-semibold">🎧 Live Audio</h3>
          <p className="mt-2">Tap to start LIVE Audio Streaming</p>
        </div>

        <div
          onClick={() => setActive("video")}
          className={`p-8 rounded-xl shadow-md cursor-pointer text-center transition ${
            active === "video"
              ? "bg-orange-600 text-white"
              : "bg-orange-400 text-white hover:bg-orange-600"
          }`}
        >
          <h3 className="text-xl font-semibold">📹 Live Video</h3>
          <p className="mt-2">Tap to start LIVE Video Streaming</p>
        </div>
      </div>
    </section>
  );
}

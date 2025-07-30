import React, { useState } from 'react';

const LiveVideo = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleStream = () => {
    setIsPlaying(!isPlaying);
  };

  return (
   <div className="w-full xl:w-220 xl:ml-  min-h-screen sm:ml-12 mt-25 md:ml-30 bg-white">
      {/* Header */}
      <div className="w-full bg-teal-600 py-6 shadow-md text-center">
        <h1 className="text-3xl font-bold text-white">🔴 Live Video Satsang</h1>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center px-8 py-10 gap-6 max-w-screen-2xl mx-auto">
        {/* Play/Pause Button */}
        <button
          onClick={toggleStream}
          className="px-6 py-3 bg-teal-500 text-white text-lg font-semibold rounded-xl shadow hover:bg-teal-600 transition"
        >
          {isPlaying ? 'Pause Live' : 'Resume Live'}
        </button>

        {/* Live Stream Video */}
        {isPlaying && (
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-xl border border-gray-300">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/live_stream?channel=UCMamNBjyzIR-824ZjntAXmg&autoplay=1"
              title="Live Satsang"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        {/* YouTube Channel Info */}
        <div className="w-full bg-gray-100 p-6 rounded-xl shadow-inner text-center mt-4">
          <p className="text-2xl font-semibold text-gray-800 mb-2">
            🌟 Visit our YouTube Channel
          </p>
          <a
            href="https://youtube.com/@asharamjiashram?si=np-yI2WNd4y_ZouY"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 text-lg underline hover:text-blue-900"
          >
            youtube.com/@asharamjiashram
          </a>
        </div>
      </div>
    </div>
  );
};

export default LiveVideo;

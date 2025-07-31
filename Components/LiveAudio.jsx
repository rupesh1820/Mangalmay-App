import React, { useState, useRef } from 'react';
import { FaPlay, FaPause, FaTimes } from 'react-icons/fa';

const LiveAudioSatsang = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
  };

  return (
    <div className="flex-1 flex flex-col items-center mt-30 lg:ml-20 px-4 pb-28 md:pb-10 overflow-y-auto">
      {/* Audio element */}
      <audio
        ref={audioRef}
        src="https://example.com/live-stream-url.mp3" // 🔁 Replace with your stream
        preload="none"
      />
<div className='lg:flex block gap-10 '>
  <div>
      {/* Placeholder for Logo */}
      <div className="lg:w-80  h-50 mt-6 bg-gray-200 rounded-md shadow-inner flex items-center justify-center text-xl font-bold text-gray-500">
        Mangal Logo
      </div>

      {/* Play/Pause button */}
      <div className="w-full bg-teal-600 py-6 mt-5 shadow-md text-center">
        <h1 className="text-3xl font-bold text-white">🔴 Live Audio Satsang</h1>
      </div>
      <button
        className="mt-15 ml-20 lg:ml-25 bg-teal-500 rounded-full flex items-center justify-center shadow-lg
        w-20 h-20 md:w-35 md:h-35"
        onClick={handlePlayPause}
      >
        {isPlaying ? (
          <FaPause className="text-white text-3xl md:text-4xl" />
        ) : (
          <FaPlay className="text-white text-3xl md:text-4xl ml-1" />
        )}
      </button>

      </div>
      <div>
      {/* Placeholder for Banner */}
      <div className="mt-20  md:w-80 xl:w-100 xl:ml-20 lg:ml-10 w-70  max-w-md">
        <div className="w-full md:h-60 h-50 bg-gray-200 rounded-xl shadow-md flex items-center justify-center text-center text-gray-500 font-medium text-lg">
          Banner or Promotion
        </div>
      </div>
      </div>
</div>
      {/* Sticky player bar (visible when playing) */}
      {isPlaying && (
        <div className="fixed bottom-0 left-0 w-full z-50 bg-white border-t p-4 md:p-6 flex items-center justify-between shadow-xl">
          <div className="flex items-center gap-4">
            <button onClick={handlePlayPause} className="text-teal-600">
              {isPlaying ? (
                <FaPause className="text-2xl md:text-3xl" />
              ) : (
                <FaPlay className="text-2xl md:text-3xl" />
              )}
            </button>
            <span className="text-base md:text-lg font-semibold text-gray-800">
              Live Audio is {isPlaying ? 'Playing' : 'Paused'}
            </span>
          </div>
          <button onClick={handleStop}>
            <FaTimes className="text-red-500 text-2xl md:text-3xl" />
          </button>
        </div>
      )}
    </div>
  );
};

export default LiveAudioSatsang;

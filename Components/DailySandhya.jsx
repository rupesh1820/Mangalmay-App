import { useState } from 'react';
import { FaPlay, FaPause, FaDownload } from 'react-icons/fa';

const DailySandhyaPage = () => {
  const [playingIndex, setPlayingIndex] = useState(null);

  const handleToggle = (index) => {
    setPlayingIndex((prev) => (prev === index ? null : index));
  };

  const getInitial = (name) => name.trim().charAt(0).toUpperCase();

  const getBgColor = (letter) => {
    const colors = {
      Y: 'bg-blue-600',
      E: 'bg-red-500',
      N: 'bg-lime-500',
      M: 'bg-orange-400',
      G: 'bg-sky-400',
    };
    return colors[letter] || 'bg-gray-400';
  };

  const Sandhya = [
    {
      Name: 'Shri YogVashistha MahaRamayan Sandhya Nirvan Prakaran Sarg 223',
      date: '29 July 2025',
      size: '23.66',
      url: '/files/audio1.mp3',
    },
    {
      Name: 'Sandhya Satsang - Evening',
      date: '29 July 2025',
      size: '13.33',
      url: '/files/audio2.mp3',
    },
    {
      Name: 'Sandhya Satsang - Noon',
      date: '29 July 2025',
      size: '20.38',
      url: '/files/audio3.mp3',
    },
    {
      Name: 'Sandhya Satsang - Morning',
      date: '29 July 2025',
      size: '13.00',
      url: '/files/audio4.mp3',
    },
    {
      Name: 'Sandhya GurubhaktiYog',
      date: '29 July 2025',
      size: '6.89',
      url: '/files/audio5.mp3',
    },
    {
      Name: 'Sandhya Shri YogVashistha MahaRamayan',
      date: '28 July 2025',
      size: '22.08',
      url: '/files/audio6.mp3',
    },
    {
      Name: 'Sandhya Satsang - Evening',
      date: '28 July 2025',
      size: '13.76',
      url: '/files/audio7.mp3',
    },
    {
      Name: 'Sandhya Satsang - Noon',
      date: '28 July 2025',
      size: '13.06',
      url: '/files/audio8.mp3',
    },
    {
      Name: 'Sandhya Satsang - Morning',
      date: '28 July 2025',
      size: '29.45',
      url: '/files/audio9.mp3',
    },
  ];

  return (
    <div className="w-full xl:w-220 xl:ml-  min-h-screen sm:ml-12 mt-25 md:ml-30 bg-white">
      <h1 className="text-xl sm:text-2xl font-bold text-center text-cyan-600 py-4 border-b">
        Daily Sandhya
      </h1>

      <div className="flex flex-col">
        {Sandhya.map((item, index) => {
          const initial = getInitial(item.Name);
          const bgColor = getBgColor(initial);

          return (
            <div
              key={index}
              className="w-full flex items-center justify-between px-4 py-3 border-b"
            >
              <div className="flex items-center gap-4 w-[75%]">
                <div
                  className={`w-10 h-10 rounded-full text-white flex items-center justify-center text-lg font-bold ${bgColor}`}
                >
                  {initial}
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-black leading-tight">{item.Name}</p>
                  <p className="text-gray-600">{item.date}</p>
                  <p className="text-gray-600">{item.size} MB</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* Download Icon (left side) */}
                <a
                  href={item.url}
                  download
                  className="text-xs md:text-lg p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-800"
                >
                  <FaDownload />
                </a>

                {/* Play / Pause Icon (right side) */}
                <button
                  onClick={() => handleToggle(index)}
                  className="text-xs md:text-lg p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-800"
                >
                  {playingIndex === index ? <FaPause /> : <FaPlay />}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DailySandhyaPage;

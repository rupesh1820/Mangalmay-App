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
      S: 'bg-blue-600',
      Y: 'bg-green-500',
      E: 'bg-red-500',
      N: 'bg-lime-600',
      M: 'bg-orange-500',
      G: 'bg-pink-500',
      D: 'bg-purple-500',
      H: 'bg-emerald-500',
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
    <div className="w-full min-h-screen bg-white py-4 mt-30 sm:ml-2 px-2 sm:px-4 md:px-6 lg:px-8 md:pl-80 lg:pl-[100px]">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-cyan-600 mb-4">
        Daily Sandhya
      </h1>

      <div className="flex flex-col gap-3">
        {Sandhya.map((item, index) => {
          const initial = getInitial(item.Name);
          const bgColor = getBgColor(initial);

          return (
            <div
              key={index}
              className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 py-3 border rounded-lg shadow-md bg-white"
            >
              {/* Left Side */}
              <div className="flex items-start sm:items-center gap-4 w-full sm:w-[75%]">
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full text-white flex items-center justify-center text-base sm:text-lg font-bold ${bgColor}`}
                >
                  {initial}
                </div>
                <div className="text-sm sm:text-base overflow-hidden">
                  <p className="font-semibold text-black leading-tight truncate max-w-[250px] sm:max-w-full">
                    {item.Name}
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm">{item.date}</p>
                  <p className="text-gray-600 text-xs sm:text-sm">{item.size} MB</p>
                </div>
              </div>

              {/* Right Side */}
              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <a
                  href={item.url}
                  download
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 shadow-sm text-sm sm:text-base"
                >
                  <FaDownload />
                </a>

                <button
                  onClick={() => handleToggle(index)}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 shadow-sm text-sm sm:text-base"
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

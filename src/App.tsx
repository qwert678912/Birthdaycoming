import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { CountdownCard } from './components/CountdownCard';
import { calculateTimeLeft } from './utils/countdown';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

function App() {
  const targetDate = new Date('2026-01-24');
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const images = [
    'https://i.pinimg.com/736x/c7/cd/33/c7cd3342ea98b431b7d6a69752b97ccc.jpg',
    'https://i.pinimg.com/736x/6a/8a/07/6a8a0760d5a9fe50b354878692f20f35.jpg',
    'https://i.pinimg.com/736x/16/3c/d3/163cd3adf4e0090bc60f98ebd9d9f475.jpg',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#120016] to-[#1a001f] text-white p-4">
      <div className="max-w-md mx-auto space-y-10 pt-10">

        {/* Header */}
        <div className="text-center space-y-4">
          <h1
            className="text-4xl sm:text-5xl font-extrabold tracking-wide 
            bg-gradient-to-r from-pink-400 via-rose-500 to-pink-600 
            bg-clip-text text-transparent drop-shadow-lg"
          >
            Priyu’s Birthday is Coming 🤍
          </h1>

          <p className="text-base sm:text-lg font-medium text-gray-300 leading-relaxed">
            Happy Birthday in advance,
            <span className="block mt-1 text-pink-400 font-semibold tracking-wide">
              pillu ji • priyu ji • madam ji • pookie ji • bilara ji ❤️🥺
            </span>
          </p>
        </div>

        <div className="flex justify-center gap-2 animate-pulse">
          <Heart className="text-pink-500 fill-pink-500" />
          <Heart className="text-pink-500 fill-pink-500" />
          <Heart className="text-pink-500 fill-pink-500" />
        </div>

        {/* Slideshow */}
        <div className="rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(236,72,153,0.25)]">
          <Swiper
            navigation
            autoplay={{
              delay: 1800,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
          >
            {images.map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  alt={`slide-${i}`}
                  className="w-full h-64 object-cover grayscale hover:grayscale-0 transition duration-700"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <h2 className="text-center mt-4 text-xl font-semibold text-pink-400">
            Coming in 💖..
          </h2>
        </div>

        {/* Countdown */}
        <div className="grid grid-cols-2 gap-4">
          <CountdownCard value={timeLeft.months} label="Months" />
          <CountdownCard value={timeLeft.days} label="Days" />
          <CountdownCard value={timeLeft.hours} label="Hours" />
          <CountdownCard value={timeLeft.minutes} label="Minutes" />
        </div>

        <div className="flex justify-center">
          <CountdownCard value={timeLeft.seconds} label="Seconds" />
        </div>

        {/* Footer */}
        <div className="text-center text-pink-400 text-sm">
          Isbaara mushkil hai mnana but we will try...abhi to aane do birthday👑❤️
        </div>

      </div>
    </div>
  );
}

export default App;

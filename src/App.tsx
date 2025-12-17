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
    'https://i.pinimg.com/736x/03/11/83/031183f5a7517a81aa4c781bc7deb010.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNa5lF9_n_oS1L2Y787JyFF9iWa_qG4PNFvJLdoUkmolXgg3yAKkf5XG2WMgbwthwsdEY&usqp=CAU',
    'https://www.animalhumanesociety.org/sites/default/files/styles/animal_450x330/public/adoption/images/large/2024/10/22/98ec35ad-65db-4097-a9b1-9be50edd102b.jpg',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#120016] to-[#1a001f] text-white p-4">
      <div className="max-w-md mx-auto space-y-10 pt-10">

        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">
            Priyu ka Birthday aarha hai 🤩
          </h1>

          <p className="text-sm text-gray-300">
            Happy Birthday in advance pillu ji(priyu ji. madam ji, pookie ji, bilara ji)❤️🥺😋
          </p>

          <div className="flex justify-center gap-2 animate-pulse">
            <Heart className="text-pink-500 fill-pink-500" />
            <Heart className="text-pink-500 fill-pink-500" />
            <Heart className="text-pink-500 fill-pink-500" />
          </div>
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

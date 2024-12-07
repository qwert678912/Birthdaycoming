import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { CountdownCard } from './components/CountdownCard';
import { calculateTimeLeft } from './utils/countdown';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function App() {
  const targetDate = new Date('2025-01-24');
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
    'https://www.animalhumanesociety.org/sites/default/files/styles/animal_450x330/public/adoption/images/large/2024/10/22/98ec35ad-65db-4097-a9b1-9be50edd102b.jpg?h=a551cb13&itok=XU7r0FBs',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-200 to-pink-300 p-4">
      <div className="max-w-md mx-auto space-y-8 pt-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-pink-600">
            Priyu ka Birthday aarha hai 🤩 Happy Birthday in advance priyu 🥺💖
          </h1>
          <div className="flex justify-center space-x-2">
            <Heart className="text-pink-500 fill-pink-500" size={24} />
            <Heart className="text-pink-500 fill-pink-500" size={24} />
            <Heart className="text-pink-500 fill-pink-500" size={24} />
          </div>
        </div>

        {/* Pookie Slideshow */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <Swiper
           
            navigation={true}
            autoplay={{
              delay: 1500, 
              disableOnInteraction: false, // Continue autoplay after user interaction
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <h1 className="text-3xl font-bold text-pink-600 text-center mt-4">
            Coming in 💖..
          </h1>
        </div>

        {/* Countdown Cards */}
        <div className="grid grid-cols-2 gap-4 justify-items-center">
          <CountdownCard value={timeLeft.months} label="Months" />
          <CountdownCard value={timeLeft.days} label="Days" />
          <CountdownCard value={timeLeft.hours} label="Hours" />
          <CountdownCard value={timeLeft.minutes} label="Minutes" />
        </div>

        {/* Seconds Card */}
        <div className="flex justify-center">
          <CountdownCard value={timeLeft.seconds} label="Seconds" />
        </div>

        {/* Footer */}
        <div className="text-center text-pink-600 font-medium">
          <p>Mujhe to ab intejar nhi horha 🥺🎉</p>
        </div>
      </div>
    </div>
  );
}

export default App;

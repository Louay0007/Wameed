"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";
import ActionButton from "../ActionButton";
import HeroGradient from "../hero/HeroGradient";
import Particles from "../Particles/Particles";


const Hero = () => {
  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  useEffect(() => {
    const calculateDaysLeft = () => {
      const targetDate = new Date("2025-07-15");
      const now = new Date();
      const daysRemaining = Math.ceil(
        (targetDate.getTime() - now.getTime()) /
          (1000 * 60 * 60 * 24)
      );
      setDaysLeft(daysRemaining);
    };

    calculateDaysLeft();

    // Optionally update daily
    const interval = setInterval(calculateDaysLeft, 86400000); // 24 hours

    return () => clearInterval(interval);
  }, []);

  return (
    <HeroGradient
      backgroundType="image"
      backgroundSrc="/images/hero2.jpg"
    >
   
      <Particles particleCount={180} particleSpread={8} speed={0.12} particleColors={["#ffd700","#fffbe6","#fff"]} alphaParticles={true} />
      <div className="flex flex-col items-center justify-center h-full">
        <Image
          src="/images/wameed1.png"
          alt="MenaSYP logo white"
          width={500}
          height={500}
        />
        <h1 className="text-white text-3xl font-bold">
          {daysLeft !== null ? `${daysLeft} days left` : "Loading..."}
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-4">
          <div className="flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-yellow-700" />
            <span className="text-white font-medium">15th July 2025</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-yellow-700" />
            <span className="text-white font-medium">Utica, Tunisia</span>
          </div>

        </div>
        <ActionButton
          text="Registration Closed"
          className="mt-4"
          disabled={false}
        />
      </div>
    </HeroGradient>
  );
};

export default Hero;

"use client";

import { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import AboutMenaSYP from "@/components/home/Aboutwameed";
import Hero from "@/components/home/Hero";
import ParticipatingCountries from "@/components/home/ParticipatingCountries";
import Partners from "@/components/Partners";

import TunisiaImages from "@/components/tunisia-images";

export default function Home() {
  const [muted, setMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleToggle = () => {
    setMuted((prev) => {
      const newMuted = !prev;
      if (audioRef.current) {
        audioRef.current.muted = newMuted;
      }
      return newMuted;
    });
  };

  return (
    <div>
      <button
        onClick={handleToggle}
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 100,
          background: "rgba(0,0,0,0.6)",
          borderRadius: "50%",
          padding: 12,
          border: "2px solid #ffd700",
          color: "#ffd700",
          boxShadow: "0 2px 8px #0008",
          cursor: "pointer",
        }}
        aria-label={muted ? "Unmute music" : "Mute music"}
      >
        {muted ? <VolumeX size={28} /> : <Volume2 size={28} />}
      </button>
      <audio ref={audioRef} src="/audio/d.mp3" autoPlay hidden />
      <Hero />
      <AboutMenaSYP />
      <TunisiaImages isHomePage={true} />
      <ParticipatingCountries />
      <Partners />
      
    </div>
  );
}

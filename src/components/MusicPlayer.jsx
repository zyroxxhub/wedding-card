"use client";

import { useEffect, useState } from "react";

export default function MusicPlayer() {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {

    if (!mounted) return;

    const audio = new Audio(
      "https://www.bensound.com/bensound-music/bensound-love.mp3"
    );

    audio.loop = true;
    audio.volume = 0.3;

    audio.play().catch(() => {});

    return () => {
      audio.pause();
    };

  }, [mounted]);

  return null;
}
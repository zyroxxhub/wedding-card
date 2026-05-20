"use client";

import HeroSection from "../components/HeroSection";
import CountdownSection from "../components/CountdownSection";
import ParticlesBackground from "../components/ParticlesBackground";
import StoryTimeline from "../components/StoryTimeline";
import GallerySection from "../components/GallerySection";
import MusicPlayer from "../components/MusicPlayer";
import RSVPForm from "../components/RSVPForm";
import Fireworks from "../components/Fireworks";
import ThreeScene from "../components/ThreeScene";
import EnvelopeInvitation from "../components/EnvelopeInvitation";
import MapSection from "../components/MapSection";

export default function Home() {

  return (
    <main className="
  bg-black
  text-white
  overflow-x-hidden
  min-h-screen
  relative
  w-full
">

      <MusicPlayer />

      <Fireworks />

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-900 via-black to-rose-900" />

      {/* Particles */}
      <ParticlesBackground />

      <ThreeScene />

      {/* Content */}
      <div className="relative z-10">

        {/* <EnvelopeInvitation /> */}

        <HeroSection />

        <div className="flex justify-center px-6 pb-32">
          <CountdownSection />
        </div>

        <StoryTimeline />

        <GallerySection />

        <RSVPForm />

        <MapSection />


      </div>
      <div className="
  absolute
  top-20
  left-20
  w-72
  h-72
  bg-pink-500
  rounded-full
  blur-3xl
  opacity-20
"></div>

      <div className="
  absolute
  bottom-20
  right-20
  w-72
  h-72
  bg-rose-500
  rounded-full
  blur-3xl
  opacity-20
"></div>

    </main>
  );
}
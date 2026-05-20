"use client";

import { motion } from "framer-motion";

export default function MapSection() {

  return (
    <section className="py-32 px-4 sm:px-6 relative z-10">

      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="
          text-4xl
          sm:text-5xl
          md:text-7xl
          font-bold
          text-center
          mb-16
          bg-gradient-to-r
          from-pink-300
          to-rose-500
          bg-clip-text
          text-transparent
        "
      >
        Wedding Venue
      </motion.h1>

      <div
        className="
          max-w-6xl
          mx-auto
          rounded-3xl
          overflow-hidden
          shadow-2xl
          border
          border-white/20
        "
      >

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31436.664297110693!2d76.267304!3d9.931233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d4f8b3f5bff%3A0xf0f0f0f0f0f0f0!2sGrand%20Hyatt%20Kochi!5e0!3m2!1sen!2sin!4v1710000000000"
          width="100%"
          height="500"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        ></iframe>

      </div>

      <div className="text-center mt-10">

        <h2 className="text-3xl font-bold text-pink-300">
          Grand Hyatt Convention Center
        </h2>

        <p className="mt-4 text-gray-300 text-lg">
          Kochi, Kerala
        </p>

        <a
          href="https://maps.google.com"
          target="_blank"
          className="
            inline-block
            mt-8
            px-8
            py-4
            rounded-full
            bg-gradient-to-r
            from-pink-500
            to-rose-500
            text-white
            font-bold
            hover:scale-105
            transition
            duration-500
          "
        >
          Open in Google Maps
        </a>

      </div>

    </section>
  );
}
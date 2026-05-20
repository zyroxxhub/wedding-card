"use client";

import { motion } from "framer-motion";

export default function HeroSection() {

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center relative z-10 px-4 sm:px-6 md:px-10">

      <motion.p
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="uppercase tracking-[10px] text-pink-300 text-sm"
      >
        Together With Their Families
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mt-10 bg-gradient-to-r from-pink-300 to-rose-500 bg-clip-text text-transparent"
      >
        Arjun
      </motion.h1>

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="text-5xl my-6"
      >
        ❤️
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-rose-300 to-pink-500 bg-clip-text text-transparent"
      >
        Meera
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-10 text-gray-300 max-w-2xl text-lg"
      >
        Invite you to celebrate the beginning of our forever.
      </motion.p>

    </section>
  );
}
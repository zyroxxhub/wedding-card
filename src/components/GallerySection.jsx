"use client";

import { motion } from "framer-motion";

const images = [
  {
    url: "https://images.unsplash.com/photo-1519741497674-611481863552",
    height: "h-[300px]",
  },
  {
    url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486",
    height: "h-[500px]",
  },
  {
    url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
    height: "h-[400px]",
  },
  {
    url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
    height: "h-[600px]",
  },
  {
    url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2",
    height: "h-[350px]",
  },
  {
    url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf",
    height: "h-[500px]",
  },
  {
    url: "https://images.unsplash.com/photo-1507504031003-b417219a0fde",
    height: "h-[400px]",
  },
  {
    url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8",
    height: "h-[550px]",
  },
];

export default function GallerySection() {

  return (
    <section className="relative py-32 px-4 sm:px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[700px]
        h-[700px]
        bg-pink-500
        opacity-20
        blur-[180px]
      " />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center mb-24"
      >

        <p className="
          uppercase
          tracking-[8px]
          text-pink-300
          text-sm
        ">
          Beautiful Moments
        </p>

        <h1 className="
          mt-5
          text-5xl
          md:text-7xl
          font-bold
          bg-gradient-to-r
          from-pink-300
          to-rose-500
          bg-clip-text
          text-transparent
        ">
          Memories
        </h1>

      </motion.div>

      {/* Masonry Layout */}
      <div className="
        columns-1
        sm:columns-2
        lg:columns-3
        gap-6
        space-y-6
        relative
        z-10
        max-w-7xl
        mx-auto
      ">

        {images.map((image, index) => (

          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: index * 0.1,
            }}
            whileHover={{
              scale: 1.03,
            }}
            className="
              relative
              overflow-hidden
              rounded-[30px]
              break-inside-avoid
              group
              shadow-[0_0_40px_rgba(255,105,180,0.15)]
            "
          >

            {/* Image */}
            <img
              src={image.url}
              alt="memory"
              className={`
                w-full
                ${image.height}
                object-cover
                transition
                duration-700
                group-hover:scale-110
              `}
            />

            {/* Overlay */}
            <div className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/70
              via-transparent
              to-transparent
              opacity-0
              group-hover:opacity-100
              transition
              duration-500
            " />

            {/* Floating Heart */}
            <div className="
              absolute
              top-5
              right-5
              w-12
              h-12
              rounded-full
              bg-white/10
              backdrop-blur-xl
              flex
              items-center
              justify-center
              text-white
              text-xl
              opacity-0
              group-hover:opacity-100
              transition
              duration-500
            ">
              ❤️
            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}
"use client";

import { motion } from "framer-motion";

const images = [
  {
    url: "https://images.unsplash.com/photo-1519741497674-611481863552",
    title: "Forever Begins",
    height: "h-[320px]",
  },
  {
    url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486",
    title: "Elegant Moments",
    height: "h-[520px]",
  },
  {
    url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
    title: "Together Always",
    height: "h-[420px]",
  },
  {
    url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
    title: "Wedding Bliss",
    height: "h-[620px]",
  },
  {
    url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2",
    title: "Love Story",
    height: "h-[360px]",
  },
  {
    url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf",
    title: "Celebration",
    height: "h-[520px]",
  },
  {
    url: "https://images.unsplash.com/photo-1507504031003-b417219a0fde",
    title: "Soulmates",
    height: "h-[430px]",
  },
  {
    url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8",
    title: "Golden Memories",
    height: "h-[580px]",
  },
];

export default function GallerySection() {

  return (
    <section className="relative py-40 px-4 sm:px-6 overflow-hidden">

      {/* Background */}
      <div className="
        absolute
        inset-0
        bg-gradient-to-b
        from-[#120005]
        via-[#1b0009]
        to-black
      " />

      {/* Glow Effects */}
      <div className="
        absolute
        top-20
        left-10
        w-[500px]
        h-[500px]
        rounded-full
        bg-pink-500/20
        blur-[140px]
      " />

      <div className="
        absolute
        bottom-10
        right-10
        w-[500px]
        h-[500px]
        rounded-full
        bg-rose-500/20
        blur-[160px]
      " />

      {/* Decorative Blur */}
      <div className="
        absolute
        inset-0
        backdrop-blur-[2px]
      " />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center mb-28"
      >

        <p className="
          uppercase
          tracking-[10px]
          text-pink-300
          text-sm
        ">
          Beautiful Moments
        </p>

        <h1 className="
          mt-6
          text-6xl
          md:text-8xl
          font-black
          bg-gradient-to-r
          from-pink-200
          via-rose-400
          to-pink-500
          bg-clip-text
          text-transparent
        ">
          Memories
        </h1>

        <div className="
          w-40
          h-[2px]
          bg-gradient-to-r
          from-transparent
          via-pink-400
          to-transparent
          mx-auto
          mt-8
        " />

      </motion.div>

      {/* Gallery */}
      <div className="
        columns-1
        sm:columns-2
        lg:columns-3
        gap-8
        space-y-8
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
              y: 120,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: index * 0.08,
            }}
            whileHover={{
              y: -10,
            }}
            className="
              relative
              overflow-hidden
              rounded-[35px]
              break-inside-avoid
              group
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              shadow-[0_0_60px_rgba(255,105,180,0.15)]
            "
          >

            {/* Image */}
            <div className="overflow-hidden">

              <img
                src={image.url}
                alt={image.title}
                className={`
                  w-full
                  ${image.height}
                  object-cover
                  transition
                  duration-[2000ms]
                  ease-out
                  group-hover:scale-110
                `}
              />

            </div>

            {/* Dark Gradient */}
            <div className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/80
              via-black/10
              to-transparent
              opacity-80
            " />

            {/* Shine Effect */}
            <div className="
              absolute
              inset-0
              opacity-0
              group-hover:opacity-100
              transition
              duration-700
              bg-gradient-to-r
              from-transparent
              via-white/10
              to-transparent
              -translate-x-full
              group-hover:translate-x-full
            " />

            {/* Floating Heart */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="
                absolute
                top-5
                right-5
                w-14
                h-14
                rounded-full
                bg-black/30
                backdrop-blur-xl
                border
                border-white/10
                flex
                items-center
                justify-center
                text-2xl
                text-pink-300
                opacity-0
                group-hover:opacity-100
                transition
                duration-500
              "
            >
              ❤️
            </motion.div>

            {/* Bottom Content */}
            <div className="
              absolute
              bottom-0
              left-0
              right-0
              p-8
            ">

              <p className="
                text-white
                text-2xl
                font-bold
                tracking-wide
              ">
                {image.title}
              </p>

              <div className="
                mt-4
                w-20
                h-[2px]
                bg-pink-400
              " />

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}
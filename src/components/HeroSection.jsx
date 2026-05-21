"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function HeroSection() {

  const [activeCard, setActiveCard] = useState(null);

  const cards = [
    {
      icon: "💍",
      title: "One Love",
      text: "Two Hearts",
      action: "story",
    },
    {
      icon: "📅",
      title: "One Date",
      text: "12.12.2026",
      action: "date",
    },
    {
      icon: "📍",
      title: "One Destination",
      text: "Kochi, Kerala",
      action: "map",
    },
    {
      icon: "♾️",
      title: "One Promise",
      text: "Forever & Always",
      action: "promise",
    },
  ];

  return (
    <section className="
      relative
      min-h-screen
      py-20
      flex
      flex-col
      justify-center
      items-center
      overflow-hidden
      text-center
      px-4
      bg-black
    ">

      {/* Background Gradient */}
      <div className="
        absolute
        inset-0
        bg-gradient-to-r
        from-[#8b0035]
        via-[#2b0010]
        to-black
      " />

      {/* Glow */}
      <div className="
        absolute
        top-0
        left-0
        w-[700px]
        h-[700px]
        bg-pink-600/30
        rounded-full
        blur-[180px]
      " />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">

        {[...Array(40)].map((_, i) => (

          <motion.div
            key={i}
            animate={{
              y: [0, -1000],
              x: [0, Math.random() * 200 - 100],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              w-3
              h-3
              rounded-sm
            "
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: [
                "#ff4d6d",
                "#ffd60a",
                "#00d4ff",
                "#c77dff",
                "#80ed99",
              ][Math.floor(Math.random() * 5)],
            }}
          />

        ))}

      </div>

      {/* Top Text */}
      <motion.p
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="
          relative
          z-10
          uppercase
          tracking-[12px]
          text-pink-200
          text-sm
          md:text-base
        "
      >
        Together With Their Families
      </motion.p>

      {/* Decorative Line */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 220 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="
          relative
          z-10
          h-[2px]
          bg-gradient-to-r
          from-transparent
          via-pink-300
          to-transparent
          mt-6
        "
      />

      {/* Main Names */}
      <div className="relative z-10 mt-10">

        {/* Athul */}
        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
          }}
          className="
            text-6xl
            sm:text-7xl
            md:text-[120px]
            lg:text-[150px]
            font-black
            leading-none
            bg-gradient-to-r
            from-pink-200
            via-pink-400
            to-pink-600
            bg-clip-text
            text-transparent
            drop-shadow-[0_0_50px_rgba(255,105,180,0.5)]
          "
        >
          Athul
        </motion.h1>

        {/* Heart */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="
            text-4xl
            my-5
            flex
            justify-center
          "
        >
          ❤️
        </motion.div>

        {/* Aadhia */}
        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="
            text-6xl
            sm:text-7xl
            md:text-[120px]
            lg:text-[150px]
            font-black
            leading-none
            bg-gradient-to-r
            from-pink-200
            via-pink-400
            to-pink-600
            bg-clip-text
            text-transparent
            drop-shadow-[0_0_50px_rgba(255,105,180,0.5)]
          "
        >
          Aadhia
        </motion.h1>

      </div>

      {/* Date Box */}
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1,
        }}
        className="
          relative
          z-10
          mt-10
        "
      >

        <div className="
          px-10
          py-5
          rounded-full
          bg-white/10
          backdrop-blur-xl
          border
          border-white/10
          shadow-[0_0_40px_rgba(255,105,180,0.2)]
          flex
          items-center
          gap-5
        ">

          <span className="text-3xl text-yellow-300">
            ✨
          </span>

          <p className="
            text-lg
            md:text-2xl
            tracking-[5px]
            uppercase
            text-pink-100
          ">
            December 12 • 2026
          </p>

          <span className="text-3xl text-yellow-300">
            ✨
          </span>

        </div>

      </motion.div>

      {/* Venue */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.3,
        }}
        className="
          relative
          z-10
          mt-8
        "
      >

        <h2 className="
          text-3xl
          md:text-5xl
          font-bold
          text-white
        ">
          Grand Hyatt Convention Center
        </h2>

        <p className="
          mt-4
          text-pink-200
          text-xl
          tracking-[4px]
        ">
          Kochi, Kerala
        </p>

      </motion.div>

      {/* Bottom Cards */}
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1.5,
        }}
        className="
          relative
          z-10
          mt-24
          grid
          grid-cols-2
          md:grid-cols-4
          gap-10
        "
      >

        {cards.map((item, index) => (

          <motion.div
            key={index}
            whileHover={{
              y: -10,
              scale: 1.05,
            }}
            onClick={() => {

              if (item.action === "map") {
                window.open(
                  "https://maps.google.com",
                  "_blank"
                );
              } else {
                setActiveCard(item.action);
              }

            }}
            className="
              flex
              flex-col
              items-center
              text-center
              cursor-pointer
            "
          >

            <div className="
              w-20
              h-20
              rounded-full
              bg-white/10
              backdrop-blur-xl
              border
              border-white/10
              flex
              items-center
              justify-center
              text-4xl
              shadow-[0_0_30px_rgba(255,105,180,0.15)]
            ">
              {item.icon}
            </div>

            <h3 className="
              mt-5
              text-xl
              font-bold
              text-pink-200
            ">
              {item.title}
            </h3>

            <p className="
              mt-2
              text-gray-300
            ">
              {item.text}
            </p>

          </motion.div>

        ))}

      </motion.div>

      {/* Modal */}
      {activeCard && (

        <div className="
          fixed
          inset-0
          bg-black/70
          backdrop-blur-md
          flex
          items-center
          justify-center
          z-[999]
          px-4
        ">

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            className="
              max-w-lg
              w-full
              bg-[#1b0010]
              border
              border-pink-500/20
              rounded-[40px]
              p-10
              text-center
              shadow-[0_0_80px_rgba(255,105,180,0.25)]
            "
          >

            {/* STORY */}
            {activeCard === "story" && (
              <>
                <div className="text-6xl mb-6">
                  💍
                </div>

                <h2 className="
                  text-4xl
                  font-bold
                  text-pink-300
                ">
                  Our Love Story
                </h2>

                <p className="
                  mt-6
                  text-gray-300
                  leading-9
                  text-lg
                ">
                  Two souls met unexpectedly and
                  discovered a forever kind of love.
                  Together they begin a beautiful
                  new chapter filled with happiness.
                </p>
              </>
            )}

            {/* DATE */}
            {activeCard === "date" && (
              <>
                <div className="text-6xl mb-6">
                  📅
                </div>

                <h2 className="
                  text-4xl
                  font-bold
                  text-pink-300
                ">
                  Save The Date
                </h2>

                <p className="
                  mt-6
                  text-gray-300
                  leading-9
                  text-lg
                ">
                  December 12, 2026
                  <br />
                  Wedding Ceremony: 10:30 AM
                  <br />
                  Reception: 7:00 PM
                </p>
              </>
            )}

            {/* PROMISE */}
            {activeCard === "promise" && (
              <>
                <div className="text-6xl mb-6">
                  ♾️
                </div>

                <h2 className="
                  text-4xl
                  font-bold
                  text-pink-300
                ">
                  Forever Promise
                </h2>

                <p className="
                  mt-6
                  text-gray-300
                  leading-9
                  text-lg
                ">
                  A promise to walk together
                  through every joy, challenge,
                  dream, and adventure forever.
                </p>
              </>
            )}

            {/* Close Button */}
            <button
              onClick={() => setActiveCard(null)}
              className="
                mt-10
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
              "
            >
              Close
            </button>

          </motion.div>

        </div>

      )}

    </section>
  );
}
"use client";

import { motion } from "framer-motion";

const events = [
    {
        year: "2021",
        title: "First Meet",
        image:
            "https://images.unsplash.com/photo-1519741497674-611481863552",
        x: "10%",
        y: "10%",
    },
    {
        year: "2022",
        title: "First Trip",
        image:
            "https://images.unsplash.com/photo-1522673607200-164d1b6ce486",
        x: "70%",
        y: "25%",
    },
    {
        year: "2023",
        title: "Falling In Love",
        image:
            "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
        x: "20%",
        y: "45%",
    },
    {
        year: "2024",
        title: "The Proposal",
        image:
            "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2",
        x: "75%",
        y: "65%",
    },
    {
        year: "2026",
        title: "Wedding Day",
        image:
            "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
        x: "40%",
        y: "85%",
    },
];

export default function StoryTimeline() {

    return (
        <section className="relative py-40 overflow-hidden">

            {/* Heading */}
            <motion.h1
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="
          text-5xl
          md:text-7xl
          font-bold
          text-center
          mb-32
          bg-gradient-to-r
          from-pink-300
          to-rose-500
          bg-clip-text
          text-transparent
        "
            >
                Our Journey
            </motion.h1>

            {/* Roadmap Container */}
            <div className="relative w-full h-[1200px]">

                {/* SVG Path */}
                <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 1000 1200"
                    preserveAspectRatio="none"
                >

                    <path
                        d="
              M 100 100
              C 300 200, 700 150, 800 300
              S 200 500, 300 650
              S 850 800, 500 1050
            "
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray="15 15"
                    />

                    <defs>
                        <linearGradient id="gradient">
                            <stop offset="0%" stopColor="#ff4da6" />
                            <stop offset="100%" stopColor="#ff66cc" />
                        </linearGradient>
                    </defs>

                </svg>

                {/* Event Nodes */}
                {events.map((event, index) => (

                    <motion.div
                        key={index}
                        initial={{
                            opacity: 0,
                            scale: 0,
                        }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                        }}
                        transition={{
                            duration: 0.8,
                            delay: index * 0.3,
                        }}
                        className="
              absolute
              -translate-x-1/2
              -translate-y-1/2
            "
                        style={{
                            left: event.x,
                            top: event.y,
                        }}
                    >

                        {/* Glowing Dot */}
                        <div className="relative flex items-center justify-center">

                            <div className="
                absolute
                w-24
                h-24
                bg-pink-500
                rounded-full
                blur-3xl
                opacity-40
              " />

                            <motion.div
                                animate={{
                                    scale: [1, 1.15, 1],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 2,
                                }}
                                className="
                  w-8
                  h-8
                  rounded-full
                  bg-pink-400
                  border-4
                  border-white
                  relative
                  z-10
                "
                            />

                        </div>

                        {/* Card */}
                        <motion.div
                            whileHover={{
                                scale: 1.05,
                                y: -10,
                            }}
                            className="
                mt-8
                w-[280px]
                overflow-hidden
                bg-white/10
                backdrop-blur-xl
                border
                border-white/20
                rounded-3xl
                p-6
              shadow-[0_0_40px_rgba(255,105,180,0.25)]
              "
                        >
                            <img
                                src={event.image}
                                alt={event.title}
                               className="
  w-full
  h-44
  object-cover
  rounded-2xl
  mb-5
  transition
  duration-700
  hover:scale-110
"
                            />

                            <h2 className="text-pink-300 text-3xl font-bold">
                                {event.year}
                            </h2>


                            <p className="mt-3 text-white text-xl font-semibold">
                                {event.title}
                            </p>

                        </motion.div>

                    </motion.div>

                ))}

            </div>

        </section>
    );
}
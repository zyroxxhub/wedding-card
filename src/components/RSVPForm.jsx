"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function RSVPForm() {

  const [selected, setSelected] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {

    if (!selected) return;

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

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

      {/* Floating Hearts */}
      <AnimatePresence>

        {submitted && (
          <>
            {[...Array(20)].map((_, i) => (

              <motion.div
                key={i}
                initial={{
                  opacity: 1,
                  y: 0,
                  x: 0,
                  scale: 0.5,
                }}
                animate={{
                  opacity: 0,
                  y: -400,
                  x: (Math.random() - 0.5) * 500,
                  scale: 1.5,
                  rotate: Math.random() * 360,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.05,
                }}
                className="
                  fixed
                  left-1/2
                  top-1/2
                  text-4xl
                  z-[999]
                  pointer-events-none
                "
              >
                ❤️
              </motion.div>

            ))}
          </>
        )}

      </AnimatePresence>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center mb-20"
      >

        <p className="
          uppercase
          tracking-[8px]
          text-pink-300
          text-sm
        ">
          Join Our Celebration
        </p>

      </motion.div>

      {/* RSVP Card */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="
          relative
          z-10
          max-w-2xl
          mx-auto
          bg-white/10
          backdrop-blur-xl
          border
          border-white/20
          rounded-[40px]
          p-8
          sm:p-12
          shadow-[0_0_60px_rgba(255,105,180,0.15)]
        "
      >

        <div className="space-y-8">

          {/* Heading */}
          <div className="text-center">

            <h2 className="
              text-3xl
              md:text-5xl
              font-bold
              text-white
            ">
              Will You Attend?
            </h2>

            <p className="
              mt-4
              text-gray-300
              text-lg
            ">
              We would love to celebrate with you ❤️
            </p>

          </div>

          {/* Options */}
          <div className="
            flex
            flex-col
            sm:flex-row
            gap-5
          ">

            {/* YES */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelected("yes")}
              className={`
                flex-1
                cursor-pointer
                rounded-3xl
                p-8
                text-center
                border
                transition
                duration-500
                ${
                  selected === "yes"
                    ? "bg-gradient-to-r from-pink-500 to-rose-500 border-pink-300 shadow-[0_0_40px_rgba(255,105,180,0.4)]"
                    : "bg-black/30 border-white/10"
                }
              `}
            >

              <motion.div
                animate={{
                  scale: selected === "yes" ? [1, 1.2, 1] : 1,
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                }}
                className="text-6xl mb-5"
              >
                💖
              </motion.div>

              <h3 className="
                text-3xl
                font-bold
                text-white
              ">
                Yes
              </h3>

              <p className="
                mt-3
                text-gray-200
              ">
                I’ll Be There
              </p>

            </motion.div>

            {/* NO */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelected("no")}
              className={`
                flex-1
                cursor-pointer
                rounded-3xl
                p-8
                text-center
                border
                transition
                duration-500
                ${
                  selected === "no"
                    ? "bg-white/10 border-white/30"
                    : "bg-black/30 border-white/10"
                }
              `}
            >

              <motion.div
                animate={{
                  rotate: selected === "no" ? [0, -10, 10, 0] : 0,
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
                className="text-6xl mb-5"
              >
                🌸
              </motion.div>

              <h3 className="
                text-3xl
                font-bold
                text-white
              ">
                Sorry
              </h3>

              <p className="
                mt-3
                text-gray-300
              ">
                Can't Attend
              </p>

            </motion.div>

          </div>

          {/* Button */}
          <motion.button
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={handleSubmit}
            className="
              relative
              overflow-hidden
              w-full
              py-5
              rounded-2xl
              bg-gradient-to-r
              from-pink-500
              to-rose-500
              text-xl
              font-bold
              text-white
              shadow-[0_0_40px_rgba(255,105,180,0.4)]
            "
          >

            {/* Shine */}
            <motion.div
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-transparent
                via-white/20
                to-transparent
                skew-x-12
              "
            />

            <span className="relative z-10">
              Confirm Response ❤️
            </span>

          </motion.button>

          {/* Success Animation */}
          <AnimatePresence>

            {submitted && (

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.5,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.5,
                }}
                className="
                  text-center
                  pt-6
                "
              >

                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                  }}
                  className="text-7xl"
                >
                  🎉
                </motion.div>

                <h3 className="
                  mt-4
                  text-3xl
                  font-bold
                  text-pink-300
                ">
                  Thank You!
                </h3>

              </motion.div>

            )}

          </AnimatePresence>

        </div>

      </motion.div>

    </section>
  );
}
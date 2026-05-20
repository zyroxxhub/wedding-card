"use client";

import { motion } from "framer-motion";

export default function RSVPForm() {

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

      {/* RSVP Container */}
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

          {/* Question */}
          <div className="text-center">

            <h2 className="
              text-3xl
              md:text-4xl
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
            <motion.label
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex-1 cursor-pointer"
            >

              <input
                type="radio"
                name="attendance"
                className="hidden peer"
              />

              <div className="
                py-6
                rounded-3xl
                text-center
                bg-black/30
                border
                border-white/10
                text-white
                transition
                duration-300
                peer-checked:bg-gradient-to-r
                peer-checked:from-pink-500
                peer-checked:to-rose-500
                peer-checked:border-pink-400
                peer-checked:shadow-[0_0_40px_rgba(255,105,180,0.4)]
              ">

                <div className="text-5xl mb-4">
                  💖
                </div>

                <h3 className="
                  text-2xl
                  font-bold
                ">
                  Yes
                </h3>

                <p className="
                  mt-2
                  text-gray-200
                ">
                  I’ll Be There
                </p>

              </div>

            </motion.label>

            {/* NO */}
            <motion.label
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex-1 cursor-pointer"
            >

              <input
                type="radio"
                name="attendance"
                className="hidden peer"
              />

              <div className="
                py-6
                rounded-3xl
                text-center
                bg-black/30
                border
                border-white/10
                text-white
                transition
                duration-300
                peer-checked:bg-white/10
                peer-checked:border-white/30
              ">

                <div className="text-5xl mb-4">
                  🌸
                </div>

                <h3 className="
                  text-2xl
                  font-bold
                ">
                  Sorry
                </h3>

                <p className="
                  mt-2
                  text-gray-300
                ">
                  Can't Attend
                </p>

              </div>

            </motion.label>

          </div>

          {/* Button */}
          <motion.button
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
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

            Confirm Response ❤️

          </motion.button>

        </div>

      </motion.div>

    </section>
  );
}
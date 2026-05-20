"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function EnvelopeInvitation() {

    const [open, setOpen] = useState(false);

    return (
        <section className="min-h-screen flex justify-center items-center relative z-20">

            {!open ? (

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setOpen(true)}
                    className="
            w-[280px]
sm:w-[320px]
h-[200px]
sm:h-[220px]
            bg-gradient-to-br
            from-pink-500
            to-rose-700
            rounded-2xl
            cursor-pointer
            flex
            items-center
            justify-center
            shadow-2xl
          "
                >

                    <h1 className="text-3xl font-bold text-white">
                        Open Invitation
                    </h1>

                </motion.div>

            ) : (

                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="
            bg-white/10
            backdrop-blur-xl
            border
            border-white/20
            p-16
            rounded-3xl
            text-center
          "
                >

                    <h1 className="text-6xl font-bold text-pink-300">
                        Arjun ❤️ Meera
                    </h1>

                    <p className="mt-6 text-gray-300 text-xl">
                        Welcome to our wedding celebration
                    </p>

                </motion.div>

            )}

        </section>
    );
}
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function LuxuryScroll({ children }) {

  const ref = useRef();

  useEffect(() => {

    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
      }
    );

  }, []);

  return (
    <div ref={ref}>
      {children}
    </div>
  );
}
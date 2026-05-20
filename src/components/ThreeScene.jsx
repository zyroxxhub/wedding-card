"use client";

import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";

function FloatingRing() {

  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={2}>
      <mesh>
        <torusGeometry args={[2, 0.5, 16, 100]} />
        <meshStandardMaterial
          color="#ff4da6"
          metalness={1}
          roughness={0.1}
        />
      </mesh>
    </Float>
  );
}

export default function ThreeScene() {

  return (
    <div className="absolute inset-0 z-0 opacity-20 md:opacity-40">

      <Canvas>

        <ambientLight intensity={2} />

        <directionalLight position={[2, 2, 5]} />

        <FloatingRing />

        <OrbitControls enableZoom={false} />

      </Canvas>

    </div>
  );
}
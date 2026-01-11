"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, Environment, OrbitControls } from "@react-three/drei";
import { useMemo, useRef } from "react";
import { MathUtils, Color, Mesh } from "three";

function HologramCore() {
  const mesh = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const t = clock.getElapsedTime();
    mesh.current.rotation.x = MathUtils.lerp(
      mesh.current.rotation.x,
      Math.sin(t * 0.5) * 0.6,
      0.05
    );
    mesh.current.rotation.y += 0.01;
    mesh.current.position.y = Math.sin(t * 1.5) * 0.12;
  });

  const colors = useMemo(
    () => [
      new Color("#6f7dff"),
      new Color("#9b67ff"),
      new Color("#70d7ff"),
    ],
    []
  );

  return (
    <group ref={mesh}>
      <mesh>
        <icosahedronGeometry args={[1.1, 2]} />
        <meshStandardMaterial
          color={colors[0]}
          roughness={0.05}
          metalness={0.9}
          emissive={colors[1]}
          emissiveIntensity={0.6}
          transparent
          opacity={0.9}
        />
      </mesh>
      <mesh scale={[1.6, 1.6, 1.6]}>
        <icosahedronGeometry args={[1.1, 4]} />
        <meshPhysicalMaterial
          color={colors[2]}
          transparent
          opacity={0.18}
          roughness={0.2}
          metalness={1}
          reflectivity={0.8}
          emissive={colors[0]}
          emissiveIntensity={0.3}
        />
      </mesh>
    </group>
  );
}

function NeonRings() {
  return (
    <group>
      {[1.8, 2.2, 2.6].map((radius, index) => (
        <mesh key={radius} rotation={[MathUtils.degToRad(90), 0, index * 0.6]}>
          <torusGeometry args={[radius, 0.015, 32, 256]} />
          <meshBasicMaterial
            color={index % 2 === 0 ? "#6f7dff" : "#9b67ff"}
            transparent
            opacity={0.6 - index * 0.12}
          />
        </mesh>
      ))}
    </group>
  );
}

export function HeroScene() {
  return (
    <div className="relative h-[420px] w-full sm:h-[480px] md:h-[520px] lg:h-[560px]">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent opacity-10" />
      <Canvas dpr={[1, 1.5]}>
        <color attach="background" args={["transparent"]} />
        <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={50} />
        <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.5}>
          <HologramCore />
          <NeonRings />
        </Float>
        <ambientLight intensity={0.4} />
        <spotLight
          position={[4, 6, 6]}
          angle={0.4}
          intensity={2}
          penumbra={1}
          color="#7f8cff"
        />
        <spotLight
          position={[-6, -4, -5]}
          angle={0.5}
          intensity={1.4}
          penumbra={1}
          color="#70d7ff"
        />
        <Environment preset="city" />
        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-[0_0_120px_rgba(120,105,255,0.25)]" />
    </div>
  );
}

"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Line } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

/* =========================
   EARTH MESH
========================= */

function EarthMesh() {
  const sphereRef = useRef<THREE.Mesh>(null);

  // rotation (GPU-friendly minimal update)
  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.0015;
    }
  });

  /* -------------------------
     GRID LINES (LAT/LON)
  -------------------------- */
  const lines = useMemo(() => {
    const result: THREE.Vector3[][] = [];
    const radius = 2;

    for (let lat = 0; lat < 12; lat++) {
      const points: THREE.Vector3[] = [];
      const theta = (lat / 12) * Math.PI;

      for (let lon = 0; lon <= 64; lon++) {
        const phi = (lon / 64) * Math.PI * 2;

        points.push(
          new THREE.Vector3(
            radius * Math.sin(theta) * Math.cos(phi),
            radius * Math.cos(theta),
            radius * Math.sin(theta) * Math.sin(phi),
          ),
        );
      }

      result.push(points);
    }

    return result;
  }, []);

  /* -------------------------
     DATA NODES (STATIC)
  -------------------------- */
  const nodes = useMemo(() => {
    return Array.from({ length: 60 }).map(() => randomSpherePoint(2.05));
  }, []);

  return (
    <group>
      {/* MAIN WIREFRAME EARTH */}
      <mesh ref={sphereRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshBasicMaterial
          color="#8b5cf6"
          wireframe
          transparent
          opacity={0.12}
        />
      </mesh>

      {/* GLOW CORE */}
      <mesh>
        <sphereGeometry args={[1.9, 64, 64]} />
        <meshStandardMaterial
          color="#0ea5e9"
          emissive="#3b82f6"
          emissiveIntensity={0.6}
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* LAT/LON GRID LINES (OPTIMIZED) */}
      {lines.map((line, i) => (
        <Line
          key={i}
          points={line}
          color="#8b5cf6"
          transparent
          opacity={0.25}
          lineWidth={1}
        />
      ))}

      {/* ORBIT RINGS */}
      <mesh rotation={[Math.PI / 2.5, 0, 0]}>
        <torusGeometry args={[3, 0.02, 16, 200]} />
        <meshBasicMaterial color="#8b5cf6" />
      </mesh>

      <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[3.4, 0.01, 16, 200]} />
        <meshBasicMaterial color="#3b82f6" />
      </mesh>

      {/* DATA NODES */}
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshBasicMaterial color="#60a5fa" />
        </mesh>
      ))}
    </group>
  );
}

/* =========================
   RANDOM SPHERE POINT
========================= */

function randomSpherePoint(radius: number) {
  const u = Math.random();
  const v = Math.random();

  const theta = 2 * Math.PI * u;
  const phi = Math.acos(2 * v - 1);

  return new THREE.Vector3(
    radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  );
}

/* =========================
   MAIN COMPONENT
========================= */

export default function FloatingOrb() {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
      <ambientLight intensity={1.2} />
      <pointLight position={[5, 5, 5]} intensity={2} />

      <Float speed={1.2} rotationIntensity={0.5} floatIntensity={1.2}>
        <EarthMesh />
      </Float>

      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.6} />
    </Canvas>
  );
}

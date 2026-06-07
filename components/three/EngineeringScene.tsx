"use client";

import "@/lib/three-clock-shim";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Grid, Line } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const NODES: [number, number, number][] = [
  [0, 0, 0],
  [2.4, 0.8, -1.2],
  [-2.1, 0.4, 1.1],
  [1.6, -1, 2],
  [-2.6, -0.6, -1.4],
  [0.4, 1.6, -2.2],
  [-0.8, -1.4, 0.6],
  [2.8, -0.3, 1.5],
];

const EDGES: [number, number][] = [
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
  [0, 5],
  [0, 6],
  [0, 7],
  [1, 5],
  [1, 7],
  [2, 4],
  [2, 6],
  [3, 7],
  [4, 6],
  [5, 7],
];

const SERVICE_BLOCKS = [
  { position: [3.6, 0.2, -2.4] as const, scale: 0.55, speed: 1.2 },
  { position: [-3.4, 1.1, -1.8] as const, scale: 0.42, speed: 1.6 },
  { position: [2.6, 1.4, 2.6] as const, scale: 0.48, speed: 1.4 },
  { position: [-2.8, -1.2, 2.2] as const, scale: 0.38, speed: 1.8 },
];

function pseudoRandom(seed: number) {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

function NetworkCore() {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  const nodeVectors = useMemo(
    () => NODES.map(([x, y, z]) => new THREE.Vector3(x, y, z)),
    [],
  );

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
    }
    if (coreRef.current) {
      coreRef.current.rotation.x += delta * 0.25;
      coreRef.current.rotation.y += delta * 0.35;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {EDGES.map(([a, b], index) => (
        <Line
          key={`edge-${index}`}
          points={[nodeVectors[a], nodeVectors[b]]}
          color="#818cf8"
          transparent
          opacity={0.35}
          lineWidth={1}
        />
      ))}

      {nodeVectors.map((position, index) => (
        <mesh key={`node-${index}`} position={position}>
          <sphereGeometry args={[index === 0 ? 0.12 : 0.06, 12, 12]} />
          <meshBasicMaterial
            color={index === 0 ? "#c4b5fd" : "#60a5fa"}
            transparent
            opacity={index === 0 ? 1 : 0.85}
          />
        </mesh>
      ))}

      <mesh ref={coreRef}>
        <octahedronGeometry args={[0.55, 0]} />
        <meshBasicMaterial
          color="#a78bfa"
          wireframe
          transparent
          opacity={0.55}
        />
      </mesh>

      <mesh ref={ringRef} rotation={[Math.PI / 2.2, 0.4, 0]}>
        <torusGeometry args={[1.35, 0.015, 8, 120]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.7} />
      </mesh>
    </group>
  );
}

function ServiceModules() {
  return (
    <>
      {SERVICE_BLOCKS.map((block, index) => (
        <Float
          key={`block-${index}`}
          speed={block.speed}
          rotationIntensity={0.35}
          floatIntensity={0.9}
        >
          <ServiceBlock
            position={block.position}
            scale={block.scale}
            index={index}
          />
        </Float>
      ))}
    </>
  );
}

function ServiceBlock({
  position,
  scale,
  index,
}: {
  position: readonly [number, number, number];
  scale: number;
  index: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * (0.15 + index * 0.05);
      meshRef.current.rotation.y += delta * (0.2 + index * 0.04);
    }
  });

  return (
    <group position={position}>
      <mesh ref={meshRef} scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial
          color="#8b5cf6"
          wireframe
          transparent
          opacity={0.45}
        />
      </mesh>
      <mesh scale={scale * 0.72}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.08} />
      </mesh>
    </group>
  );
}

function DataStreams() {
  const particlesRef = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const count = 120;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (pseudoRandom(i * 3 + 1) - 0.5) * 14;
      positions[i * 3 + 1] = pseudoRandom(i * 3 + 2) * 6 - 1;
      positions[i * 3 + 2] = (pseudoRandom(i * 3 + 3) - 0.5) * 14;
    }

    return positions;
  }, []);

  useFrame((_, delta) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.04;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#93c5fd"
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.75} />
      <pointLight position={[5, 4, 5]} intensity={1.4} color="#818cf8" />
      <pointLight position={[-5, -2, 4]} intensity={0.9} color="#38bdf8" />

      <Grid
        position={[0, -2.2, 0]}
        args={[24, 24]}
        cellSize={0.45}
        cellThickness={0.45}
        cellColor="#312e81"
        sectionSize={2.25}
        sectionThickness={0.9}
        sectionColor="#6366f1"
        fadeDistance={16}
        fadeStrength={1.2}
        infiniteGrid
      />

      <DataStreams />
      <NetworkCore />
      <ServiceModules />
    </>
  );
}

export default function EngineeringScene() {
  return (
    <Canvas
      camera={{ position: [0, 1.2, 7.5], fov: 48 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <Scene />
    </Canvas>
  );
}

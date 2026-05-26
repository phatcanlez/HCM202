import { Suspense, useRef, useLayoutEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Environment,
  ContactShadows,
} from "@react-three/drei";

function HCMModel({ autoRotate = true }) {
  const groupRef = useRef();
  const { scene } = useGLTF("/hochiminh/HCM.glb");

  useLayoutEffect(() => {
    if (groupRef.current) {
      // Position to show front face
      groupRef.current.rotation.set(0, 0, 0);
    }
  }, []);

  useFrame((state, delta) => {
    if (autoRotate && groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={2} position={[0, 0, 0]} />
    </group>
  );
}

function LoadingFallback() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#6B4F3A" wireframe />
    </mesh>
  );
}

export default function TrongDong3D({ className = "" }) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [3, 2, 3], fov: 50 }}
        style={{ background: "transparent" }}
        gl={{ preserveDrawingBuffer: true, antialias: true }}
      >
        <ambientLight intensity={0.8} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1}
          castShadow
        />
        <pointLight position={[-10, -10, -10]} intensity={0.4} />

        <Suspense fallback={<LoadingFallback />}>
          <HCMModel />
          <ContactShadows
            position={[0, -1.5, 0]}
            opacity={0.3}
            scale={8}
            blur={2}
            far={3}
          />
          <Environment preset="studio" />
        </Suspense>

        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minDistance={3}
          maxDistance={15}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
          autoRotate={false}
          target={[0, 0.5, 0]}
        />
      </Canvas>

      {/* Instruction overlay */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-ink/80 text-bone px-3 py-1.5 rounded-sm font-mono text-xs uppercase tracking-wider pointer-events-none select-none">
        Kéo để xoay • Cuộn để zoom
      </div>
    </div>
  );
}

// Preload model
useGLTF.preload("/trong_dong/scene.gltf");

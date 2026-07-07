import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

useGLTF.preload("/desktop_pc/scene.gltf");

const matches = (query) =>
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia(query).matches;

const Computers = ({ isMobile, isTablet }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf");

  const scale = isMobile ? 0.5 : isTablet ? 0.65 : 0.75;
  const position = isMobile ? [0, -2.1, -1.2] : isTablet ? [0, -2.5, -1.4] : [0, -3.25, -1.5];

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow={!isMobile}
        shadow-mapSize={isMobile ? 256 : 1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={scale}
        position={position}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersFallback = () => (
  <div className='!absolute inset-x-0 bottom-10 mx-auto flex h-[320px] w-full items-center justify-center sm:h-full'>
    <img
      src='/desktop_fallback.png'
      alt='3D developer workspace'
      className='h-full w-full object-contain'
    />
  </div>
);

const ComputersCanvas = () => {
  // Detect device synchronously so shadows/scale are correct on the very first
  // frame and a heavy shadow pass is never run on mobile.
  const [isMobile, setIsMobile] = useState(() => matches("(max-width: 639px)"));
  const [isTablet, setIsTablet] = useState(() =>
    matches("(min-width: 640px) and (max-width: 1024px)")
  );
  const [contextLost, setContextLost] = useState(false);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 639px)");
    const tabletQuery = window.matchMedia("(min-width: 640px) and (max-width: 1024px)");

    const handleMobileChange = (event) => setIsMobile(event.matches);
    const handleTabletChange = (event) => setIsTablet(event.matches);

    mobileQuery.addEventListener("change", handleMobileChange);
    tabletQuery.addEventListener("change", handleTabletChange);

    return () => {
      mobileQuery.removeEventListener("change", handleMobileChange);
      tabletQuery.removeEventListener("change", handleTabletChange);
    };
  }, []);

  // A lost WebGL context (common on low-end mobile GPUs) fires a DOM event, not
  // a React error, so an ErrorBoundary can't catch it. Handle it here and swap
  // in a visible static fallback instead of leaving an empty canvas.
  if (contextLost) {
    return <ComputersFallback />;
  }

  return (
    <Canvas
      frameloop='always'
      shadows={!isMobile}
      dpr={isMobile ? 1 : [1, 1.5]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true, alpha: true, antialias: !isMobile, powerPreference: "high-performance" }}
      onCreated={({ gl }) => {
        gl.domElement.addEventListener(
          "webglcontextlost",
          (event) => {
            event.preventDefault();
            setContextLost(true);
          },
          { once: true }
        );
      }}
      className='!absolute inset-x-0 bottom-10 mx-auto w-full h-[320px] sm:h-full z-[1]'
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableDamping={!isMobile}
        />
        <Computers isMobile={isMobile} isTablet={isTablet} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;

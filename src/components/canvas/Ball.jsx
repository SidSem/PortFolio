import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const TEXTURE_SIZE = 512;
const isSvgAsset = (url) => {
  if (typeof url !== "string") return false;
  return url.split("?")[0].endsWith(".svg") || url.startsWith("data:image/svg+xml");
};

const useSvgTexture = (imgUrl) => {
  const [texture, setTexture] = useState(null);

  useEffect(() => {
    if (!imgUrl) return undefined;

    let cancelled = false;
    const image = new Image();
    image.crossOrigin = "anonymous";

    let loadedTexture = null;

    image.onload = () => {
      if (cancelled) return;

      const canvas = document.createElement("canvas");
      canvas.width = TEXTURE_SIZE;
      canvas.height = TEXTURE_SIZE;
      const ctx = canvas.getContext("2d");

      ctx.clearRect(0, 0, TEXTURE_SIZE, TEXTURE_SIZE);

      const imgWidth = image.naturalWidth || image.width || 128;
      const imgHeight = image.naturalHeight || image.height || 128;

      const scale =
        Math.min(TEXTURE_SIZE / imgWidth, TEXTURE_SIZE / imgHeight) * 0.85;
      const width = imgWidth * scale;
      const height = imgHeight * scale;
      const x = (TEXTURE_SIZE - width) / 2;
      const y = (TEXTURE_SIZE - height) / 2;

      ctx.drawImage(image, x, y, width, height);

      loadedTexture = new THREE.CanvasTexture(canvas);
      loadedTexture.needsUpdate = true;
      setTexture(loadedTexture);
    };

    image.onerror = (error) => {
      console.error("Failed to load SVG icon texture:", imgUrl, error);
    };

    image.src = imgUrl;

    return () => {
      cancelled = true;
      loadedTexture?.dispose();
    };
  }, [imgUrl]);

  return texture;
};

const SvgBall = ({ imgUrl, isMobile }) => {
  const decal = useSvgTexture(imgUrl);

  if (!decal) return <CanvasLoader />;

  return <BallMesh decal={decal} isMobile={isMobile} />;
};

const RasterBall = ({ imgUrl, isMobile }) => {
  const [decal] = useTexture([imgUrl]);

  return <BallMesh decal={decal} isMobile={isMobile} />;
};

const BallMesh = ({ decal, isMobile }) => (
  <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
    <ambientLight intensity={0.25} />
    <directionalLight position={[0, 0, 0.05]} />
    <mesh castShadow={!isMobile} receiveShadow={!isMobile} scale={2.75}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color='#fff8eb'
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading
      />
      <Decal
        position={[0, 0, 1]}
        rotation={[2 * Math.PI, 0, 6.25]}
        scale={[0.85, 0.85, 0.85]}
        map={decal}
        flatShading
      />
    </mesh>
  </Float>
);

const Ball = ({ imgUrl, isMobile }) =>
  isSvgAsset(imgUrl) ? (
    <SvgBall imgUrl={imgUrl} isMobile={isMobile} />
  ) : (
    <RasterBall imgUrl={imgUrl} isMobile={isMobile} />
  );

const BallCanvas = ({ icon }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 639px)");
    setIsMobile(mediaQuery.matches);
    const handleChange = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <Canvas
      frameloop='always'
      dpr={[1, 1.5]}
      gl={{ preserveDrawingBuffer: true, antialias: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} enableDamping={!isMobile} />
        <Ball imgUrl={icon} isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;

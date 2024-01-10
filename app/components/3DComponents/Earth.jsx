import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Html,
  OrbitControls,
  Preload,
  useGLTF,
  useProgress,
} from "@react-three/drei";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={3} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  const { progress } = useProgress();
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense
        fallback={
          <Html
            as="div"
            center
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <span className="canvas-loader"></span>
            <p
              style={{
                fontSize: 14,
                color: "#F1F1F1",
                fontWeight: 800,
                marginTop: 40,
              }}
            >
              {progress.toFixed(2)}%
            </p>
          </Html>
        }
      >
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;

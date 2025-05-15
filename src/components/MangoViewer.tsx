import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { MangoModel } from './3DMangoModel';

export default function MangoViewer() {
  return (
    <div className="h-[400px] w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <MangoModel />
          <Environment preset="sunset" />
          <OrbitControls enableZoom={false} />
        </Suspense>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
      </Canvas>
    </div>
  );
}
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export function MangoModel(props: any) {
  const { nodes, materials } = useGLTF('/mango.glb');
  const group = useRef<THREE.Group>();

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Mango.geometry}
        material={materials.MangoMaterial}
        scale={[1, 1, 1]}
      >
        <meshStandardMaterial
          color="#ffb700"
          roughness={0.3}
          metalness={0.1}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload('/mango.glb');
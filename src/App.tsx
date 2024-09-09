import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import "./App.css";
import { useRef } from "react";
import { Mesh } from "three";

function Cube() {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
  
  });

  function onScroll() {
    if (!meshRef.current) {
      return;
    }

    // meshRef.current.rotation.x += 0.01;
    // meshRef.current.rotation.y += 0.01;
  }

  window.addEventListener('wheel', onScroll);


  return (
    <mesh ref={meshRef}>
      <PerspectiveCamera />
      <boxGeometry />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
}

function App() {
  return (
    <Canvas>
      <ambientLight />
      <OrbitControls enableZoom={false}/>
      <pointLight position={[10, 10, 10]} />
      <Cube />
    </Canvas>
  );
}

export default App;

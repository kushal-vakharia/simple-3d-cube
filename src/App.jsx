import { Canvas } from "@react-three/fiber";
import "./style.css";
import { OrbitControls } from "@react-three/drei";

const App = () => {
  return (
    <Canvas>
      <OrbitControls />
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </Canvas>
  );
};

export default App;

import { Environment, Lightformer } from "@react-three/drei";

const StudioLight = () => {
  return (
    <group name="light">
      <Environment resolution={512}>
        <group>
          <Lightformer
            form="rect"
            position={[-10, 5, 0]}
            intensity={4}
            scale={[20, 10, 1]}
            rotation-y={Math.PI / 2}
          />

          <Lightformer
            form="rect"
            position={[10, 3, 0]}
            intensity={3}
            scale={[20, 10, 1]}
            rotation-y={-Math.PI / 2}
          />

          <Lightformer
            form="rect"
            position={[0, 10, 0]}
            intensity={2}
            scale={[15, 15, 1]}
            rotation-x={Math.PI / 2}
          />

          <Lightformer
            form="ring"
            position={[0, 0, -10]}
            intensity={1}
            scale={4}
            color="#2e2c2e"
          />
        </group>
      </Environment>

      <spotLight
        position={[5, 20, 5]}
        angle={0.25}
        penumbra={0.8}
        decay={0}
        intensity={Math.PI * 2}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.00001}
      />

      <spotLight
        position={[-8, 12, 8]}
        angle={0.2}
        penumbra={1}
        decay={0}
        intensity={Math.PI * 1}
      />

      <ambientLight intensity={0.3} />
    </group>
  );
};

export default StudioLight;

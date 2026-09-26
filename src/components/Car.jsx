 import { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

function Car({ color, lightsOn }) {
  const { scene } = useGLTF("/car.glb");

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        if (
          child.material.name === "Paint 1 Carmine" ||
          child.material.name === "Paint 2 Carmine"
        ) {
          child.material.color.set(color);
        }
      }
    });
  }, [color, scene]);

  return (
    <group
      scale={1.8}
      position={[-0.5, -1, 0]}
    >

      {/* CAR */}

      <primitive object={scene} />


      {/* HEADLIGHTS */}

      {lightsOn && (
        <>
          {/* LEFT HEADLIGHT GLOW */}

          <mesh position={[-0.8, 0.6, 2.15]}>
            <sphereGeometry args={[0.12, 16, 16]} />
            <meshBasicMaterial color="white" />
          </mesh>


          {/* RIGHT HEADLIGHT GLOW */}

          <mesh position={[0.8, 0.6, 2.15]}>
            <sphereGeometry args={[0.12, 16, 16]} />
            <meshBasicMaterial color="white" />
          </mesh>


          {/* LEFT HEADLIGHT */}

          <spotLight
            position={[-0.8, 0.6, 2.15]}
            rotation={[0, Math.PI, 0]}
            intensity={30}
            distance={12}
            angle={0.3}
            penumbra={0.5}
            color="white"
          />


          {/* RIGHT HEADLIGHT */}

          <spotLight
            position={[0.8, 0.6, 2.15]}
            rotation={[0, Math.PI, 0]}
            intensity={30}
            distance={12}
            angle={0.3}
            penumbra={0.5}
            color="white"
          />


          {/* LEFT VISIBLE BEAM */}

          <mesh
            position={[-0.8, 0.6, 5.15]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <coneGeometry args={[1.3, 6, 32, 1, true]} />

            <meshBasicMaterial
              color="white"
              transparent
              opacity={0.07}
              depthWrite={false}
              side={THREE.DoubleSide}
            />
          </mesh>


          {/* RIGHT VISIBLE BEAM */}

          <mesh
            position={[0.8, 0.6, 5.15]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <coneGeometry args={[1.3, 6, 32, 1, true]} />

            <meshBasicMaterial
              color="white"
              transparent
              opacity={0.07}
              depthWrite={false}
              side={THREE.DoubleSide}
            />
          </mesh>

        </>
      )}

    </group>
  );
}

export default Car;
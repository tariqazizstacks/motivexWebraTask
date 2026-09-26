 import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Car from "./Car";

function CarViewer({ color, setColor }) {

  const [lightsOn, setLightsOn] = useState(false);

  return (
    <div className="car-viewer">

      <Canvas
        camera={{
          position: [4, 3, 5],
        }}
      >

        <ambientLight intensity={2} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={3}
        />

        <Car
          color={color}
          lightsOn={lightsOn}
        />

        <OrbitControls />

      </Canvas>


      {/* COLOR + LIGHT CONTROLS */}

      <div className="color-controls">

        <button
          className="color-btn red-btn"
          onClick={() => setColor("red")}
        >
          Red
        </button>


        <button
          className="color-btn blue-btn"
          onClick={() => setColor("blue")}
        >
          Blue
        </button>


        <button
          className="color-btn black-btn"
          onClick={() => setColor("black")}
        >
          Black
        </button>


        <button
          className="color-btn white-btn"
          onClick={() => setColor("white")}
        >
          White
        </button>


        <button
          className="color-btn green-btn"
          onClick={() => setColor("green")}
        >
          Green
        </button>


        {/* LIGHT BUTTON */}

        <button
          className={`lights-btn ${
            lightsOn ? "lights-on" : "lights-off"
          }`}
          onClick={() => setLightsOn(!lightsOn)}
        >
          {lightsOn ? "Lights OFF" : "Lights ON"}
        </button>

      </div>

    </div>
  );
}

export default CarViewer;
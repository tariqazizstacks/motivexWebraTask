import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CarViewer from "./components/CarViewer";
import Specifications from "./components/Specifications";

function Showcase() {
  const [color, setColor] = useState("red");

  return (
    <div className="showcase-layout">

      <Specifications color={color} />

      <CarViewer
        color={color}
        setColor={setColor}
      />

    </div>
  );
}

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Hero />}
        />

        <Route
          path="/showcase"
          element={<Showcase />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
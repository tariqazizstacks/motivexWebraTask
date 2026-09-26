 function Specifications({ color }) {

  const specifications = {
    red: {
      engine: "3.8L V6",
      power: "565 HP",
      speed: "196 MPH",
      acceleration: "2.9 SEC",
      torque: "467 LB-FT",
      color: "RED"
    },

    blue: {
      engine: "3.8L V6",
      power: "570 HP",
      speed: "198 MPH",
      acceleration: "2.8 SEC",
      torque: "470 LB-FT",
      color: "BLUE"
    },

    black: {
      engine: "4.0L V8",
      power: "600 HP",
      speed: "200 MPH",
      acceleration: "2.7 SEC",
      torque: "480 LB-FT",
      color: "BLACK"
    },

    white: {
      engine: "3.8L V6",
      power: "565 HP",
      speed: "196 MPH",
      acceleration: "2.9 SEC",
      torque: "467 LB-FT",
      color: "WHITE"
    },

    green: {
      engine: "4.0L V8",
      power: "600 HP",
      speed: "200 MPH",
      acceleration: "2.7 SEC",
      torque: "480 LB-FT",
      color: "GREEN"
    }
  };


  const data = specifications[color];


  return (
    <section className="specifications">

      <p className="spec-label">
        VEHICLE CONFIGURATION
      </p>

      <h2>
        {data.color} PERFORMANCE
      </h2>


      <div className="spec-grid">

        {/* ENGINE */}

        <div className="spec-card">
          <h3>{data.engine}</h3>
          <p>ENGINE</p>
        </div>


        {/* POWER */}

        <div className="spec-card">
          <h3>{data.power}</h3>
          <p>MAX POWER</p>
        </div>


        {/* TOP SPEED */}

        <div className="spec-card">
          <h3>{data.speed}</h3>
          <p>TOP SPEED</p>
        </div>


        {/* ACCELERATION */}

        <div className="spec-card">
          <h3>{data.acceleration}</h3>
          <p>0-60 MPH</p>
        </div>


        {/* TORQUE */}

        <div className="spec-card">
          <h3>{data.torque}</h3>
          <p>TORQUE</p>
        </div>


        {/* BODY COLOR */}

        <div className="spec-card">
          <h3>{data.color}</h3>
          <p>BODY COLOR</p>
        </div>

      </div>

    </section>
  );
}

export default Specifications;
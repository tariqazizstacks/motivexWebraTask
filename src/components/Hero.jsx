import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <p>3D AUTOMOTIVE SHOWCASE</p>

      <h1>
        EXPERIENCE THE<br />
        FUTURE OF DRIVING
      </h1>

      <p>
        Explore, customize and discover your car in 3D.
      </p>

      <Link to="/showcase" className="explore-btn">
        EXPLORE THE CAR
      </Link>
    </section>
  );
}

export default Hero;
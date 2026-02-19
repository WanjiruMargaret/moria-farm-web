import { Link } from "react-router-dom";
import Logo from "../assets/icons/logo.jpg";

function Home() {
  return (
    <div className="home-wrapper">
      {/* FULL-WIDTH HERO SECTION */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="central-branding">
            <img src={Logo} alt="Muoria Farms Logo" className="hero-logo" />
            <h1 className="hero-title">MUORIA FARMS LLC.</h1>
          </div>
        </div>
      </section>

      {/* INTRO TEXT SECTION */}
      <section className="home-intro">
        <div className="container">
          <span className="tagline">MAII MAHIU, KENYA</span>
          <h2>Professional Meat Processing & Distribution</h2>
          <p>
            Muoria Farms produces safe, wholesome, and high-quality beef in the 
            most sustainable way for families locally and worldwide. Built on 
            family values, we proudly exceed standards in animal welfare and 
            environmental sustainability.
          </p>
        </div>
      </section>

      {/* UPDATED CARD GRID SECTION */}
      <section className="home-cards-section">
        <div className="home-cards">
          <div className="card">
            <div className="card-image-wrapper">
              <img src="/src/assets/images/products.jpg" alt="meat" />
            </div>
            <div className="card-content">
              <h2>Our Products</h2>
              <p>We provide high-quality beef cuts with care and precision.</p>
              <Link to="/products" className="btn-outline">View Products</Link>
            </div>
          </div>

          <div className="card">
            <div className="card-image-wrapper">
              <img src="/src/assets/images/About.png" alt="about us" />
            </div>
            <div className="card-content">
              <h2>Our Story</h2>
              <p>A meat slaughter company prioritizing quality and community growth.</p>
              <Link to="/about" className="btn-outline">About Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
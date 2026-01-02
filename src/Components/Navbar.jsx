import { Link } from "react-router-dom";
import { useState } from "react";
import barIcon from "/src/assets/icons/bar.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="brand">
          <h2 className="brand-name">Muoria Farm</h2>
        </div>

        {/* Desktop links */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/location">Location</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Mobile icon */}
        <img
          src={barIcon}
          alt="menu"
          className="nav-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </nav>

      {menuOpen && (
        <div className="menu-overlay" onClick={() => setMenuOpen(false)}></div>
      )}

      {/* Mobile sidebar */}
      <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link></li>
        <li><Link to="/location" onClick={() => setMenuOpen(false)}>Location</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
      </ul>
    </>
  );
}

export default Navbar;

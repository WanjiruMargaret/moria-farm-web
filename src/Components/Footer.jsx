import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1: Brand & Summary */}
        <div className="footer-section">
          <h2 className="footer-logo">Muoria Farm</h2>
          <p>
            Premium agricultural produce from the heart of Mai Mahiu.
            Dedicated to providing high-quality meat
            to our local and global communities.
            Leading the way in Mai Mahiu through professional meat distribution,
            job creation, and community infrastructure development.
          </p>
        </div>

        {/* Column 2: Specific Location (Mai Mahiu) */}
        <div className="footer-section">
          <h3>Find Us</h3>
          <div className="footer-map-container">
            {/* Embedded map centered on Mai Mahiu */}
            <iframe
              title="Muoria Farm Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15957.165437816!2d36.583333!3d-0.983333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3a6966f9758d%3A0x6b4c107e3666572e!2sMai%20Mahiu!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
              width="100%"
              height="150"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <p className="location-text">📍 Mai Mahiu, Kenya</p>
          </div>
        </div>

        {/* Column 3: Contact & Links */}
        <div className="footer-section">
          <h3>Get In Touch</h3>
          <ul className="footer-links">
            <li>📞 +254 700 000 000</li>
            <li>📧 info@muoriafarm.com</li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Muoria Farm. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

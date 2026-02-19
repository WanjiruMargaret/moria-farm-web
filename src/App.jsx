import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Sustainability from "./pages/Sustainability";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>   
      <Navbar />

      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} /> 
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;

import { Link } from "react-router-dom";
function Home() {
  return (
    <section className="hero">
      <h1>Welcome to Muoria Farm</h1>
      <p>PRODUCE OF FRESH MEAT </p>
      <section className="home-cards">
        <div className="card">
          <img src="/src/assets/images/products.jpg" alt="meat"  />
          <h2>Products</h2>
          <p>
            We provide high-quality beef cuts with care and precision
          </p>
          <Link to="/products" className="btn">View Products</Link>
        </div>

        <div className="card">
          <img src="/src/assets/images/About.png" alt="about us"  />
          <h2>About us</h2>
          <p>
            A meat slaughter company that prioritizes quality and customer satisfaction
          </p>
          <Link to="/about" className="btn">About us</Link>
        </div>

      </section>

    </section>
  );
}

export default Home;

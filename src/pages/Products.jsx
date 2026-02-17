function Products() {
  const businessServices = [
    { 
      title: "State-of-the-Art Slaughterhouse", 
      desc: "Providing clean, professional, and ethical meat processing for the local community and beyond.", 
      icon: "🏠" 
    },
    { 
      title: "Farm-to-Door Delivery", 
      desc: "Efficient distribution network ensuring fresh meat and produce reach your doorstep or business quickly.", 
      icon: "🚛" 
    }
  ];

  const communityImpact = [
    { 
      title: "Local Job Opportunities", 
      desc: "As a growing farm, we are creating employment for the youth and professionals in Mai Mahiu.", 
      icon: "🤝" 
    },
    { 
      title: "Infrastructure & Growth", 
      desc: "We are committed to improving our local roads and infrastructure, sparking economic growth for the whole area.", 
      icon: "🏗️" 
    }
  ];

  return (
    <>
      {/* ===== PRODUCTS SECTION ===== */}
      <section className="product-hero"></section>  

      <section className="content-section">
        <h1>Our Products</h1>
        <p>
          At Muoria Farm, we offer a diverse range of high-quality beef cuts to meet the needs of our customers. 
          Our products are sourced from ethically raised cattle and processed with the utmost care to ensure freshness and flavor. 
          Whether you're looking for premium steaks, ground beef, or specialty cuts, we have something for every culinary need.
        </p>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <div className="services-wrapper">
        <section className="services-page">
          <div className="services-header">
            <h1>Our Impact & Services</h1>
            <div className="header-line"></div>
            <p>
              Muoria Farm is dedicated to quality produce and the sustainable growth of Mai Mahiu.
            </p>
          </div>

          {/* Business Section */}
          <div className="section-container">
            <h2 className="section-subtitle">What We Provide</h2>
            <div className="services-grid">
              {businessServices.map((s, i) => (
                <div key={i} className="service-card">
                  <div className="icon-box">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Community Section */}
          <div className="section-container alt-bg">
            <h2 className="section-subtitle">Community & Future</h2>
            <div className="services-grid">
              {communityImpact.map((s, i) => (
                <div key={i} className="service-card impact-card">
                  <div className="icon-box impact-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Products;

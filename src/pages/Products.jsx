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
    <div className="products-page">

      {/* ================= HERO SECTION ================= */}
      <section className="products-hero">
        <div className="products-hero-content">
          <h1>Our Products</h1>
          <p>
            Premium quality beef sourced from ethically raised cattle,
            processed with precision, and delivered with care across Kenya.
          </p>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="services-wrapper">
        
        <div className="services-header">
          <h1>Our Impact & Services</h1>
          <div className="header-line"></div>
          <p>
            Muoria Farm is dedicated to quality produce and the sustainable growth of Mai Mahiu.
          </p>
        </div>

        {/* Business Services */}
        <div className="section-container">
          <h2 className="section-subtitle">What We Provide</h2>
          <div className="services-grid">
            {businessServices.map((service, index) => (
              <div key={index} className="service-card">
                <div className="icon-box">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Community Impact */}
        <div className="section-container alt-bg">
          <h2 className="section-subtitle">Community & Future</h2>
          <div className="services-grid">
            {communityImpact.map((impact, index) => (
              <div key={index} className="service-card impact-card">
                <div className="icon-box impact-icon">{impact.icon}</div>
                <h3>{impact.title}</h3>
                <p>{impact.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </section>

    </div>
  );
}

export default Products;

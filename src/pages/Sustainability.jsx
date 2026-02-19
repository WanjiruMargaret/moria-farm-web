function Sustainability() {
  return (
    <div className="sustainability-page">

      {/* ===== HERO ===== */}
      <section className="sustainability-hero">
        <div className="sustainability-hero-content">
          <h1>Sustainability at Muoria Farm</h1>
          <p>
            At Muoria Farm, sustainability is at the heart of everything we do.
            From responsible livestock care to community development, we are committed
            to building a future that benefits both people and the planet.
          </p>
        </div>
      </section>

      {/* ===== ANIMAL WELFARE ===== */}
      <section className="split-section">
        <div className="split-text">
          <h2>Animal Welfare</h2>
          <p>
            We ensure humane handling, proper nutrition, and veterinary supervision
            for all livestock. Our cattle are raised in healthy environments that
            promote natural growth and reduce stress.
          </p>
        </div>

        <div className="split-image">
          <img
            src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=80"
            alt="Cattle Care"
          />
        </div>
      </section>

      {/* ===== ENVIRONMENT ===== */}
      <section className="split-section reverse">
        <div className="split-text">
          <h2>Environmental Responsibility</h2>
          <p>
            We adopt eco-conscious farming methods that protect soil quality,
            reduce waste, and conserve water resources. Sustainability guides
            our operational and long-term growth strategies.
          </p>
        </div>

        <div className="split-image">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1500&q=80"
            alt="Farm Environment"
          />
        </div>
      </section>
      
      {/* ===== CTA ===== */}
      <section className="sustainability-cta">
        <h2>Committed to a Responsible Future</h2>
        <p>
          We believe sustainability is not an option — it is our responsibility.
        </p>
      </section>

    </div>
  );
}

export default Sustainability;

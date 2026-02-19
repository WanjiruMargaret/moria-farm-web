//import React from 'react';
function About() {
  return (
    <div className="about-page">
      {/* Header Image with Text Overlay */}
      <section className="about-banner">
        <div className="banner-content">
          <h1>About Muoria Farm</h1>
        </div>
      </section>

      {/* History Section (Text Left, Image Right) */}
      <section className="story-row">
        <div className="story-text">
          <span className="subtitle">THE BEGINNING</span>
          <h2>Our History</h2>
          <p>
            Muoria Farm was founded with a deep passion for the agricultural heritage of Mai Mahiu. 
            Our humble beginnings continue to drive us today as we produce high-quality beef products 
            for our local community and partners abroad. Our pursuit of excellence has kept us 
            innovating through the years.
          </p>
        </div>
        <div className="story-image history-img"></div>
      </section>

      {/* Resilience Section (Image Left, Text Right) */}
      <section className="story-row reverse">
        <div className="story-image resilience-img"></div>
        <div className="story-text">
          <h2>Resilience & Growth</h2>
          <p>
            Our story is defined by perseverance. Despite challenges in infrastructure and the 
            changing landscape of our area, we decided our story would not end. Against many odds, 
            we have expanded our original location, driven by a passion for the industry and a 
            commitment to the safety and quality of our products.
          </p>
        </div>
      </section>

      {/* Today Section (Text Left, Image Right) */}
      <section className="story-row">
        <div className="story-text">
          <span className="subtitle">TODAY</span>
          <h2>Impacting Mai Mahiu</h2>
          <p>
            Today, we are blessed to provide job opportunities to local residents who share our 
            commitment to excellence. If you drive by our facility, construction is evident—representing 
            our belief that more is possible. We produce beef in the most sustainable way while 
            protecting the natural resources in the area we call home.
          </p>
        </div>
        <div className="story-image today-img"></div>
      </section>
    </div>
  );
}

export default About;
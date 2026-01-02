function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting Moria Farm!");
  };

  return (
    <section className="contact-container">
      <div className="contact-card">
        <h2>Contact Us</h2>
        <p>Have questions about our fresh produce? Send us a message!</p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="input-group">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" required />
          </div>
          
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="email@example.com" required />
          </div>

          <div className="input-group">
            <label>Message</label>
            <textarea placeholder="How can we help you?" rows="5"></textarea>
          </div>

          <button type="submit" className="btn-submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
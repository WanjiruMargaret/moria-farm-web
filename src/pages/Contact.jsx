import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send data to a backend
    setSubmitted(true);
  };

  // If the user submitted the form, show this instead:
  if (submitted) {
    return (
      <section className="contact-container">
        <div className="contact-card success-animation">
          <div className="success-icon">✓</div>
          <h2>Message Sent!</h2>
          <p>Thank you for reaching out to Muoria Farm. We will get back to you within 24 hours.</p>
          <button className="btn-submit" onClick={() => setSubmitted(false)}>
            Send another message
          </button>
        </div>
      </section>
    );
  }

  // Otherwise, show the original form
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
            <textarea placeholder="How can we help you?" rows="5" style={{resize: 'vertical'}}></textarea>
          </div>

          <button type="submit" className="btn-submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
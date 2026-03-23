import { useState } from "react";
import "@/App.css";

// Simple Pet Grooming Website with 5 Pages
function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="app">
      {/* Navigation */}
      <header>
        <nav>
          <div className="logo">🐾 PawFect</div>
          <ul className="nav-links">
            <li><a href="#" className={currentPage === "home" ? "active" : ""} onClick={() => setCurrentPage("home")} data-testid="nav-home">Home</a></li>
            <li><a href="#" className={currentPage === "about" ? "active" : ""} onClick={() => setCurrentPage("about")} data-testid="nav-about">About</a></li>
            <li><a href="#" className={currentPage === "services" ? "active" : ""} onClick={() => setCurrentPage("services")} data-testid="nav-services">Services</a></li>
            <li><a href="#" className={currentPage === "gallery" ? "active" : ""} onClick={() => setCurrentPage("gallery")} data-testid="nav-gallery">Gallery</a></li>
            <li><a href="#" className={currentPage === "contact" ? "active" : ""} onClick={() => setCurrentPage("contact")} data-testid="nav-contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Page Content */}
      <main>
        {currentPage === "home" && <HomePage />}
        {currentPage === "about" && <AboutPage />}
        {currentPage === "services" && <ServicesPage />}
        {currentPage === "gallery" && <GalleryPage />}
        {currentPage === "contact" && <ContactPage />}
      </main>

      {/* Footer */}
      <footer>
        <p>© 2024 PawFect Grooming. All rights reserved.</p>
      </footer>
    </div>
  );
}

// HOME PAGE
function HomePage() {
  return (
    <>
      <section className="hero">
        <h1>Where Every Pet Gets the Royal Treatment</h1>
        <p>Professional grooming services for your furry friends</p>
        <button className="btn" data-testid="hero-cta">Book Now</button>
      </section>

      <section className="features">
        <div className="feature-card">
          <span className="icon">❤️</span>
          <h3>Loving Care</h3>
          <p>We treat every pet like family</p>
        </div>
        <div className="feature-card">
          <span className="icon">🏆</span>
          <h3>Expert Groomers</h3>
          <p>Certified professionals</p>
        </div>
        <div className="feature-card">
          <span className="icon">🌿</span>
          <h3>Natural Products</h3>
          <p>Safe & gentle supplies</p>
        </div>
      </section>
    </>
  );
}

// ABOUT PAGE
function AboutPage() {
  return (
    <>
      <section className="page-header">
        <h1>About Us</h1>
      </section>

      <section className="about-content">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>Founded in 2020, PawFect Grooming started with a simple mission: to provide loving, professional grooming services for pets of all sizes.</p>
          <p>Our team of certified groomers has over 15 years of combined experience. We use only the finest, pet-safe products to ensure your furry friend leaves looking and feeling their best.</p>
        </div>
        <div className="about-image">
          <img src="https://images.pexels.com/photos/6131578/pexels-photo-6131578.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Pet grooming" />
        </div>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-icon">👩</div>
            <h3>Reeti Patel</h3>
            <p>Lead Groomer</p>
          </div>
          <div className="team-card">
            <div className="team-icon">👨</div>
            <h3>Sujal Sevaramani</h3>
            <p>Senior Stylist</p>
          </div>
          <div className="team-card">
            <div className="team-icon">👨</div>
            <h3>Tirth Shah</h3>
            <p>Pet Care Specialist</p>
          </div>
        </div>
      </section>
    </>
  );
}

// SERVICES PAGE
function ServicesPage() {
  const services = [
    { icon: "🛁", name: "Basic Bath", desc: "Shampoo, conditioner, blow dry, and brush out", price: "₹500" },
    { icon: "✂️", name: "Full Grooming", desc: "Bath + haircut, nail trim, ear cleaning", price: "₹900" },
    { icon: "💆", name: "Spa Package", desc: "Full groom + teeth brushing, paw treatment", price: "₹1500" },
    { icon: "🐾", name: "Nail Trim", desc: "Quick nail trimming and filing", price: "₹200" },
    { icon: "🦷", name: "Teeth Cleaning", desc: "Gentle brushing with pet-safe paste", price: "₹300" },
    { icon: "⭐", name: "De-shedding", desc: "Special treatment for heavy shedders", price: "₹700" },
  ];

  return (
    <>
      <section className="page-header">
        <h1>Our Services</h1>
      </section>

      <section className="services-grid">
        {services.map((s, i) => (
          <div className="service-card" key={i}>
            <div className="service-icon">{s.icon}</div>
            <h3>{s.name}</h3>
            <p>{s.desc}</p>
            <span className="price">{s.price}</span>
          </div>
        ))}
      </section>
    </>
  );
}

// GALLERY PAGE
function GalleryPage() {
  const images = [
    "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400",
    "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400",
    "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400",
    "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400",
    "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400",
    "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=400",
  ];

  return (
    <>
      <section className="page-header">
        <h1>Our Gallery</h1>
        <p>Check out our happy customers!</p>
      </section>

      <section className="gallery-grid">
        {images.map((img, i) => (
          <div className="gallery-item" key={i}>
            <img src={img} alt={`Pet ${i + 1}`} />
          </div>
        ))}
      </section>
    </>
  );
}

// CONTACT PAGE
function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
  };

  return (
    <>
      <section className="page-header">
        <h1>Contact Us</h1>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <div className="info-item">
            <span>📍</span>
            <p>B Block, Satya Satsang Complex, Nana Bazaar, Anand 388315</p>
          </div>
          <div className="info-item">
            <span>📞</span>
            <p>+91 98765 43210</p>
          </div>
          <div className="info-item">
            <span>✉️</span>
            <p>hello@pawfect.com</p>
          </div>
          <div className="info-item">
            <span>🕐</span>
            <p>Mon-Sat: 9AM - 6PM</p>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send a Message</h2>
          <form onSubmit={handleSubmit} data-testid="contact-form">
            <input type="text" placeholder="Your Name" required data-testid="input-name" />
            <input type="email" placeholder="Your Email" required data-testid="input-email" />
            <input type="text" placeholder="Subject" data-testid="input-subject" />
            <textarea placeholder="Your Message" rows="5" required data-testid="input-message"></textarea>
            <button type="submit" className="btn" data-testid="submit-btn">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default App;

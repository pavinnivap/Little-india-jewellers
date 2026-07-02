import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a form submission
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1500);
  };

  const branches = [
    {
      city: 'Kuala Lumpur',
      address: 'Wisma Kopatha, Jalan Masjid India, 50100 Kuala Lumpur',
      phone: '+60 12-3882786',
      icon: '🏙️'
    },
    {
      city: 'Penang',
      address: 'Jalan Penang, 10000 Georgetown, Pulau Pinang',
      phone: '+60 12-4995786',
      icon: '🌉'
    },
    {
      city: 'Klang',
      address: '29 Jalan Tengku Kelana, 41000 Klang, Selangor',
      phone: '+60 12-4488786',
      icon: '🏘️'
    }
  ];

  return (
    <section id="contact" className="contact-section section">
      <div className="contact-container container">
        {/* Header */}
        <div className="section-header animate-item fade-up">
          <span className="about-subtitle">GET IN TOUCH</span>
          <h2>Visit Or Contact Us</h2>
          <p>We'd love to hear from you. Visit one of our luxury showrooms or send us a message and we'll get back to you shortly.</p>
        </div>

        {/* Contact Grid */}
        <div className="contact-grid">
          {/* Left: Branches & Contact Details */}
          <div className="contact-info animate-item fade-left">
            <h3>Our Showroom Locations</h3>

            {branches.map((branch, idx) => (
              <div key={idx} className="branch-card">
                <div className="branch-icon">{branch.icon}</div>
                <div className="branch-details">
                  <h4>{branch.city}</h4>
                  <p><FaMapMarkerAlt className="detail-icon" /> {branch.address}</p>
                  <p>
                    <a href={`tel:${branch.phone.replace(/\s/g,'')}`}>
                      <FaPhone className="detail-icon" /> {branch.phone}
                    </a>
                  </p>
                </div>
              </div>
            ))}

            {/* Additional Contacts */}
            <div className="extra-contacts">
              <a href="tel:+60173999786" className="extra-contact-link">
                <FaPhone />
                <span>Mobile: +60 17-3999786</span>
              </a>
              <a href="mailto:kopathagroup@kopathagroup.com" className="extra-contact-link">
                <FaEnvelope />
                <span>kopathagroup@kopathagroup.com</span>
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="contact-form-wrapper animate-item fade-right">
            <h3>Send Us a Message</h3>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="contact-name">Full Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-email">Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-phone">Phone Number</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+60 12-3456789"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Your Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your jewelry inquiry or request..."
                  rows="5"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className={`btn btn-primary submit-btn ${formStatus === 'sending' ? 'sending' : ''}`}
                disabled={formStatus === 'sending'}
              >
                {formStatus === 'sending' ? (
                  'Sending...'
                ) : formStatus === 'success' ? (
                  '✓ Message Sent!'
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {formStatus === 'success' && (
                <p className="success-message">
                  Thank you! We'll get back to you within 24 hours.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Google Map Embed */}
        <div className="map-container animate-item fade-up">
          <h3>Find Our Flagship Store</h3>
          <div className="map-embed">
            <iframe
              title="Kopatha Group Location - Jalan Masjid India, Kuala Lumpur"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.795268936485!2d101.69516831744384!3d3.1469950999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49b14a9a84b5%3A0x4c71b25aaab0d3c!2sJalan%20Masjid%20India%2C%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1704081600000!5m2!1sen!2smy"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

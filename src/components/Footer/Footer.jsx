import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import logo from '../../assets/images/logo.png';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Collections', href: '#collections' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Why Choose Us', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const collections = [
    { name: 'Gold Jewelry', href: '#collections' },
    { name: 'Diamond Jewelry', href: '#collections' },
    { name: 'Wedding Collections', href: '#collections' },
    { name: 'Luxury Watches', href: '#collections' },
    { name: 'Necklaces', href: '#collections' },
    { name: 'Bracelets', href: '#collections' },
    { name: 'Earrings', href: '#collections' },
    { name: 'Rings', href: '#collections' },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, href: 'https://facebook.com', label: 'Facebook' },
    { icon: <FaInstagram />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <FaWhatsapp />, href: 'https://wa.me/601233882786', label: 'WhatsApp' },
    { icon: <FaYoutube />, href: 'https://youtube.com', label: 'YouTube' },
  ];

  return (
    <footer className="footer">
      {/* Top Gold Divider Bar */}
      <div className="footer-gold-bar"></div>

      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-container container">
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-brand">
              <div className="footer-logo">
                <img src={logo} alt="Kopatha Group Logo" />
                <span className="footer-brand-name">KOPATHA GROUP</span>
              </div>
              <p className="footer-tagline">
                Timeless Prosperity, Generation To Generation
              </p>
              <p className="footer-desc">
                Serving Malaysia with premium quality gold jewelry and luxury watches since 1987. Your trust is our greatest achievement.
              </p>
              <div className="footer-social">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="footer-links-col">
              <h4 className="footer-col-title">Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Collections Column */}
            <div className="footer-links-col">
              <h4 className="footer-col-title">Collections</h4>
              <ul className="footer-links">
                {collections.map((item, idx) => (
                  <li key={idx}>
                    <a href={item.href}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="footer-contact-col">
              <h4 className="footer-col-title">Contact Us</h4>
              <div className="footer-contact-info">
                <div className="footer-contact-item">
                  <FaMapMarkerAlt className="footer-contact-icon" />
                  <div>
                    <p><strong>Kuala Lumpur:</strong></p>
                    <p>Wisma Kopatha, Jalan Masjid India, 50100 KL</p>
                    <p><a href="tel:+60123882786">+60 12-3882786</a></p>
                  </div>
                </div>
                <div className="footer-contact-item">
                  <FaMapMarkerAlt className="footer-contact-icon" />
                  <div>
                    <p><strong>Penang:</strong> <a href="tel:+60124995786">+60 12-4995786</a></p>
                    <p><strong>Klang:</strong> <a href="tel:+60124488786">+60 12-4488786</a></p>
                    <p><strong>Mobile:</strong> <a href="tel:+60173999786">+60 17-3999786</a></p>
                  </div>
                </div>
                <div className="footer-contact-item">
                  <FaEnvelope className="footer-contact-icon" />
                  <div>
                    <a href="mailto:kopathagroup@kopathagroup.com">
                      kopathagroup@kopathagroup.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <div className="container">
          <p>© {currentYear} Kopatha Group. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

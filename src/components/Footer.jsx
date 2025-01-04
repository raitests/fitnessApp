import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, Send, Dumbbell } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Why us</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Partnership</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Categories</h3>
          <ul>
            <li><a href="#">Basic Yoga</a></li>
            <li><a href="#">Strength Training</a></li>
            <li><a href="#">Body Building</a></li>
            <li><a href="#">Weight Lost</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Help</h3>
          <ul>
            <li><a href="#">Account</a></li>
            <li><a href="#">Support Center</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact US</h3>
          <ul className="contact-info">
            <li>
              <Phone size={18} />
              <span>+977 9741838338</span>
            </li>
            <li>
              <Mail size={18} />
              <span>rpratik6600@gmail.com</span>
            </li>
            <li>
              <MapPin size={18} />
              <span>Imadol, Lalitpur, Nepal</span>
            </li>
          </ul>
        </div>

        <div className="footer-section newsletter">
          <h3>Subscribe Our Newsletter</h3>
          
          <div className="newsletter-input">
           <div className='newsletter-pack'>
           <input type="email" placeholder="Enter your email" />
            <button type="button">
              <Send size={18} />
            </button>
           </div>
            <p>Never miss an update & news to your email.</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="logo">
        <Dumbbell strokeWidth={1} size={36}/>
          <span>FITNESXIA</span>
        </div>
        <p className="copyright">@2025 RaiTests. All Copyrights reserved.</p>
        <div className="social-links">
          <a href="#"><Facebook size={20} /></a>
          <a href="#"><Instagram size={20} /></a>
          <a href="#"><Twitter size={20} /></a>
          <a href="#"><Linkedin size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
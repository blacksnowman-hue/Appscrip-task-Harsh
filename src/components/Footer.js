import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="newsletter">
          <h4>Be the First to Know</h4>
          <p className="p">
            Sign up for updates from mettà muse
          </p>
          <div className="newsletter-input">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>

        <div className="footer-links">
          <h4>CONTACT US</h4>
          <p className="p">Phone: +44 221 133 5360</p>
          <p className="p">Email: customercare@mettamuse.com</p>

          <h4>CURRENCY</h4>
          <img src="/images/usa.png" alt="PayPal" />
          <p className="p">Transactions will be completed in Euros and a currency reference is available on hover.</p>
          <hr className="currency-line" />
        </div>
<div className='footer1'>
<div className="footer-down">
          <h4>QUICK LINKS</h4>
          <ul className='p'>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer-about">
          <h4>mettà muse</h4>
          <ul className='p'>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliance Docs</li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>FOLLOW US</h4>
          <div className="social-icons">
          <img src="/images/links.png" alt="--" />
          </div>

          <h4>mettà muse ACCEPTS</h4>
          <div className="payment-icons">
   
            <img src="/images/payments.png" alt="PayPal" />
          </div>
        </div>
      </div>
</div>
       

      <div className="footer-bottom">
        <p>&copy; 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

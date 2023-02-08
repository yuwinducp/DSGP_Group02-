import React from 'react';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-heading'>
        <p>
          Your Best Partner
        </p>
      </section>
      <section>
        <Link to='/' className='footer-logo'>
          AGRO<font>MATICS</font>
          <img className="logo_image" src={`${process.env.PUBLIC_URL + '/assets/LOGO.png'}`} alt="Logo" />
        </Link>

        <div class='social-icons'>
          <Link
            class='social-icon-link facebook'
            to='/'
            target='_blank'
            aria-label='Facebook'
          >
            <i class='fab fa-facebook-f' />
          </Link>
          <Link
            class='social-icon-link instagram'
            to='/'
            target='_blank'
            aria-label='Instagram'
          >
            <i class='fab fa-instagram' />
          </Link>
          <Link
            class='social-icon-link youtube'
            to='/'
            target='_blank'
            aria-label='Youtube'
          >
            <i class='fab fa-youtube' />
          </Link>
          <Link
            class='social-icon-link twitter'
            to='/'
            target='_blank'
            aria-label='Twitter'
          >
            <i class='fab fa-twitter' />
          </Link>
          <Link
            class='social-icon-link twitter'
            to='/'
            target='_blank'
            aria-label='LinkedIn'
          >
            <i class='fab fa-linkedin' />
          </Link>
        </div>
      </section>
      <section>
        <div class='footer-links'>
          <div class='footer-link-items'>
            <h2>Contact Info</h2>
            <div>
              <i class="fas fa-envelope"></i>
              <span class="email">&nbsp;&nbsp;info@agromatics.com</span>
            </div>
            <div>
              <i class="fas fa-phone"></i>
              <span class="telNo">&nbsp;&nbsp;+94 123 456 7890</span>
            </div>
            <div>
              <i class="fas fa-map-marker-alt"></i>
              <span class="address">&nbsp;&nbsp;123 Main Street, Anytown SL</span>
            </div>
            <br></br>
            <Link to='/'>Talk To Us</Link>
          </div> 
        </div>
      </section>
      <small class='website-rights'>AGROMATICS © 2023</small>
    </div>
  );
}

export default Footer;

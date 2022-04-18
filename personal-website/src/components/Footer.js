import React from 'react';
import './Footer.css';
//import { Button } from './Button';
//import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div id='contact' className='footer-container'>
      {/* <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section> */}
      <div class='footer-links'>
       { <div className='footer-link-wrapper'>
          {/* <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div> */}
          {/* <div class='footer-link-items'>
            <h2>Contact</h2>
            <Link to='/'>dasha@dashashevchenko.com</Link>
          </div> */}
        </div>}
        <div className='footer-link-wrapper'>
          {/* <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div> */}
          <div class='footer-link-items'>
            <h2>Follow Me</h2>
            <a href="https://wanderlog.com/u/copybookpear863" target="_blank" rel="noreferrer">
      <span>
        <p>Wanderlog</p>
      </span>
      </a>
      <a href="https://github.com/copybookpear863" target="_blank" rel="noreferrer">
      <span>
        <p>GitHub</p>
      </span>
      </a>
      <a href="https://www.discogs.com/user/copybookpear863" target="_blank" rel="noreferrer">
      <span>
        <p>Discogs</p>
      </span>
      </a>
      <a href="https://www.goodreads.com/user/show/145463979-dasha-shevchenko" target="_blank" rel="noreferrer">
      <span>
        <p>Goodreads</p>
      </span>
      </a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <h2>DASHA SHEVCHENKO</h2>
            <h2>CA, USA</h2>
            <p>dasha@dashashevchenko.com</p>
          </div>
          <small class='website-rights'>Dasha Shevchenko © 2022</small>
          <div class='social-icons'>
          <a href="https://open.spotify.com/user/copybookpear863?si=z8NsF8ZISMuSKxVY5Z2aqA" target="_blank" rel="noreferrer">
							<span class="social-icon-link spotify">
              <i class='fab fa-spotify' />
              </span>
						</a>
            <a href="https://www.instagram.com/evil_melon_aka_dasha/" target="_blank" rel="noreferrer">
							<span class="social-icon-link instagram">
              <i class='fab fa-instagram' />
              </span>
						</a>
            <a href="https://youtube.com/channel/UCl-L1IxEhT3i66PM6YfKoug" target="_blank" rel="noreferrer">
							<span class="social-icon-link youtube">
              <i class='fab fa-youtube' />
              </span>
						</a>
            
            <a href="https://www.linkedin.com/in/dashashevchenko" target="_blank" rel="noreferrer">
							<span class="social-icon-link twitter">
              <i class='fab fa-linkedin' />
              </span>
						</a>
            
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
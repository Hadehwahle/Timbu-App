import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <h1>SNEAKS</h1>
        <div className="footer-links">
          <div className="footer1">
            <h3>Quick Links</h3>
            <NavLink to="/">Home</NavLink>
            <NavLink to="products">Products</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="contact-us">Contact US</NavLink>
          </div>
          <div className="footer2">
            <h3>About</h3>
            <NavLink>FAQs</NavLink>
            <NavLink>Blog</NavLink>
            <NavLink>Careers</NavLink>
            <NavLink>Terms of Service</NavLink>
          </div>
          <div className="footer3">
            <h3>Social Media</h3>
            <p>
              Follow us on social media to find out the latest <br /> updates on
              our progress.
            </p>
            <div className="footer-icon">
              <img src="icons/Facebook.svg" alt="facebook-icon" />
              <img src="icons/twitter.svg" alt="twitter-icon" />
              <img src="icons/instagram.svg" alt="instagram-icon" />
              <img src="icons/linkedin.svg" alt="linkedin-icon" />
            </div>
          </div>
          <div className="footer4">
            <h3>Newsletter</h3>
            <p>Subscribe for Latest Updates</p>
            <div className="footer-input">
              <input type="text" placeholder="Your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <p className="copyright">Sneaks/All Right Reserved</p>
    </footer>
  );
}

export default Footer;

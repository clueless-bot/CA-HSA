import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">
                Heneel
                </h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#services" className="footer__link">Services</a>
                    </li>

                    <li>
                        <a href="#contact" className="footer__link">Contact Us</a>
                    </li>
                </ul>

                <div className="footer__social">

                <a href="mailto:email@gmail.com" className="home__social-icon" target="_blank">
        <i className="uil uil-envelope"> </i>
        </a>
        
        <a href="https://wa.me/9773500045?text=" className="home__social-icon" target="_blank">
        <i className="uil uil-whatsapp-alt"></i>
        </a>

        <a href="https://www.linkedin.com/in/ca-heneel-shah-2886481a0/" className="home__social-icon" target="_blank">
        <i className="uil uil-linkedin"> </i>
        </a>

                </div>
        </div>
    </footer>
  )
}

export default Footer

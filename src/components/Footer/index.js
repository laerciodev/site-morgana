import React from 'react';
import IconFacebook from './facebook.inline.svg';
import IconInstagram from './instagram.inline.svg';
import IconPinterest from './pinterest.inline.svg';
import './styles.css';

const Footer = () => (

    <footer id="footer">
        <h2 className="title-footer">redes sociais</h2>
        <div className="social-icons">
            <IconInstagram />
            <IconPinterest />
            <IconFacebook />
        </div>
        <div className="email-contact">contato@morganasouto.com</div>
        <div className="copyright">morganasouto &copy;</div>
    </footer>
)

export default Footer;
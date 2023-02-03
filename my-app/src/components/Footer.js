import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Me</h2>
            <Link to='https://github.com/Kriishu'>GitHub</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>External Links:</h2>
            <Link to='https://www.accenture.com'>Accenture</Link>
            <Link to='https://www.google.com'>Google</Link>
            <Link to='https://www.w3schools.com/'>W3Schools</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>ToDo</h2>
            <Link to='/pages/CreateTodo'>Create ToDo</Link>
          </div>
        </div>
      </div>
        <div class='social-media-wrap'>
          <small class='website-rights'>Kristaps.M © 2023</small>
         </div>
    </div>
  );
}

export default Footer;
import React from 'react';
import './footer.scss'
import Link from './../../../components/Link/Link';

const Column = ({children, className}) => (
  <ul className={'footer__column ' + (className ? className : '')}>{children}</ul>
)

const Footer = () => (
  <footer className='footer centered'>
    <div className='footer__container'>
      <ul className='footer__columns'>
        <Column className='footer__hire'>
          <Link className='footer__link' to='/jobs'>
            We are hiring!<br/>
            If you're interested,<br/>
            drop us a line or two.
          </Link>
        </Column>
        <Column className={'footer__column--sitemap'}>
          <h3>Sitemap</h3>
          <ul>
            <li><Link className='footer__link' to='#home'>Home</Link></li>
            <li><Link className='footer__link' to='#services'>Services</Link></li>
            <li><Link className='footer__link' to='#culture'>Culture</Link></li>
            <li><Link className='footer__link' to='#jobs'>Jobs</Link></li>
            <li><Link className='footer__link' to='/blog'>Blog</Link></li>
          </ul>
        </Column>
        <Column>
          <h3>Social Media</h3>
          <ul>
            <li><Link className='footer__link' to='https://github.com/as-ideas'>GitHub</Link></li>
            <li><Link className='footer__link' to='https://twitter.com/as_ideas'>Twitter</Link></li>
            <li><Link className='footer__link' to='https://www.linkedin.com/company/axel-springer-ideas-engineering'>LinkedIn</Link></li>
            <li><Link className='footer__link' to='https://www.facebook.com/AxelSpringerIdeas/'>Facebook</Link></li>
            <li><Link className='footer__link' to='https://www.instagram.com/ideas_engineering/'>Instagram</Link></li>
          </ul>
        </Column>
        <Column>
          <h3>Contact</h3>
          <ul>
            <li>Axel Springer Ideas Engineering GmbH</li>
            <li>Axel-Springer-Str. 65, 10888 Berlin</li>
            <li>+49-30-259178100</li>
            <li><Link className='footer__link' to='mailto:hello@asideas.de'>hello@asideas.de</Link></li>
            <li><Link className='footer__link' to='/imprint'>Impressum & Privacy Policy</Link></li>
          </ul>
        </Column>
      </ul>
    </div>
  </footer>
)

export default Footer;

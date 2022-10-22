import { FC } from 'react'
// TODO: remove this library
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Logo from '../logo/Logo'

const year = new Date().getFullYear()

const Footer: FC = () => {
  return (
    <footer className='footer-container'>
      <div className="copyright">
        <Logo />
        <span className="copyright-text"> &copy;	 {year} Company Name All rights reserved</span>
      </div>
      <ul>
        <li>
          <AnchorLink offset="100" href="#explore">
            Explore
          </AnchorLink>
        </li>
        <li>
          <AnchorLink offset="100" href="#about">
            About Us
          </AnchorLink>
        </li>
        <li>
          <a href="#null">Cities</a>
        </li>
        <li>
          <a href="tel:+919999999999">
            Call
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer

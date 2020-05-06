import React from 'react'
import './footer.css'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import LocalizedLink from './LocalizedLink'
import italyFlag from '../images/italy-flag.png'
import ukFlag from '../images/uk-flag.png'
import franceFlag from '../images/france-flag.png'

export default () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo-vanilla-marketing-bianco.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mapIcon: file(relativePath: { eq: "map-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 32) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      emailIcon: file(relativePath: { eq: "email-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 32) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      phoneIcon: file(relativePath: { eq: "phone-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 32) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobileIcon: file(relativePath: { eq: "mobile-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 32) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      italyFlag: file(relativePath: { eq: "italy-flag.png" }) {
        childImageSharp {
          fluid(maxWidth: 24) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ukFlag: file(relativePath: { eq: "uk-flag.png" }) {
        childImageSharp {
          fluid(maxWidth: 24) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      franceFlag: file(relativePath: { eq: "france-flag.png" }) {
        childImageSharp {
          fluid(maxWidth: 24) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-section-container'>
          <LocalizedLink to='/'>
            <Img
              className='logo-footer'
              fluid={data.logo.childImageSharp.fluid}
            />
          </LocalizedLink>
          <div className='flags-container-footer'>
            <a href='https://vanillamarketing.it/'>
              <img className='flag-footer' src={italyFlag} alt='italy-flag' />
            </a>
            <a href='https://vanillamarketing.it/en'>
              <img className='flag-footer' src={ukFlag} alt='uk-flag' />
            </a>
            <a href='https://vanillamarketing.it/fr'>
              <img className='flag-footer' src={franceFlag} alt='france-flag' />
            </a>
          </div>
        </div>
        <div className='footer-section-container'>
          <p className='footer-title'>Services</p>
          <LocalizedLink className='footer-link' to='/realizzazione-siti-web'>
            Web Development
          </LocalizedLink>
          <LocalizedLink className='footer-link' to='/social-media-marketing'>
            Social Media
          </LocalizedLink>
          <LocalizedLink className='footer-link' to='/web-marketing'>
            Web Marketing
          </LocalizedLink>
          <LocalizedLink className='footer-link' to='/graphic-design'>
            Graphic Design
          </LocalizedLink>
        </div>
        <div className='footer-section-container'>
          <p className='footer-title'>Contact</p>
          <div className='footer-contact-container'>
            <Img
              className='icon-footer'
              fluid={data.mapIcon.childImageSharp.fluid}
            />
            <a
              className='footer-link'
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.google.com/maps/place/Corso+Giuseppe+Garibaldi,+91,+60121+Ancona+AN,+Italia/@43.6177941,13.5117425,17z/data=!3m1!4b1!4m5!3m4!1s0x132d7fbc3d6aac41:0x2f2b499114e7475b!8m2!3d43.6177902!4d13.5139312'
            >
              Corso Garibaldi 91/b, Ancona
            </a>
          </div>
          <div className='footer-contact-container'>
            <Img
              className='icon-footer'
              fluid={data.emailIcon.childImageSharp.fluid}
            />
            <a
              className='footer-link'
              target='_blank'
              rel='noopener noreferrer'
              href='mailto:info@vanillamarketing.it'
            >
              info@vanillamarketing.it
            </a>
          </div>
          <div className='footer-contact-container'>
            <Img
              className='icon-footer'
              fluid={data.phoneIcon.childImageSharp.fluid}
            />
            <a className='footer-link' href='tel:+393516711311'>
              +39 071 204002
            </a>
          </div>
          <div className='footer-contact-container'>
            <Img
              className='icon-footer'
              fluid={data.mobileIcon.childImageSharp.fluid}
            />
            <a className='footer-link' href='tel:+39071204002'>
              +39 351 671 1311
            </a>
          </div>
        </div>
        <div className='footer-section-container'>
          <p className='footer-title'>Social</p>
          <div className='footer-social-container'>
            {/* <a
              href="https://www.facebook.com/AgenziaVanillaMarketing"
              target="_blank"
            >
              <Img
                className="footer-social-icon"
                fluid={data.facebookIcon.childImageSharp.fluid}
              />
            </a>
            <a
              href="https://www.instagram.com/vanilla.marketing/"
              target="_blank"
            >
              <Img
                className="footer-social-icon"
                fluid={data.instagramIcon.childImageSharp.fluid}
              />
            </a>
            <a
              href="https://www.linkedin.com/company/vanilla-marketing"
              target="_blank"
            >
              <Img
                className="footer-social-icon"
                fluid={data.linkedinIcon.childImageSharp.fluid}
              />
            </a>
            <a
              href="https://open.spotify.com/user/jq8rsmhffl01j9izazr9hx2yk?si=fJCM68DNRxuUxsYcWoay_g"
              target="_blank"
            >
              <Img
                className="footer-social-icon"
                fluid={data.spotifyIcon.childImageSharp.fluid}
              />
            </a> */}
            <a
              className='footer-link'
              href='https://www.facebook.com/AgenziaVanillaMarketing'
              target='_blank'
            >
              Facebook
            </a>
            <a
              className='footer-link'
              href='https://www.instagram.com/vanilla.marketing/'
              target='_blank'
            >
              Instagram
            </a>
            <a
              className='footer-link'
              href='https://www.linkedin.com/company/vanilla-marketing'
              target='_blank'
            >
              Linkedin
            </a>
            <a
              className='footer-link'
              href='https://open.spotify.com/user/jq8rsmhffl01j9izazr9hx2yk?si=fJCM68DNRxuUxsYcWoay_g'
              target='_blank'
            >
              Spotify
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

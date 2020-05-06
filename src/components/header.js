import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import LogoOnScroll from './logoOnScroll'
import './header.css'
import HamburgerMenu from 'react-hamburger-menu'
import LocalizedLink from './LocalizedLink'
import Cta from './cta'

const Header = ({ dataHeader }) => {
  const data = useStaticQuery(graphql`
    query {
      arrowDown: file(relativePath: { eq: "arrow-down.png" }) {
        childImageSharp {
          fluid(maxWidth: 16) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo: file(relativePath: { eq: "logo-vanilla-marketing.png" }) {
        childImageSharp {
          fluid(maxWidth: 190, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const [visible, setVisible] = useState(false)
  let [dropDownMenu, setDropDownMenu] = useState(false)
  const [scroll, setScroll] = useState(false) // stateCheck for Scroll
  const {
    home,
    homeLink,
    about,
    aboutLink,
    services,
    contact,
    contactLink
  } = dataHeader.header.childHeaderJson

  const listenDropDownMenu = () => {
    setDropDownMenu((dropDownMenu = !dropDownMenu))
  }
  const showDropDownMenuDesktop = () => {
    setDropDownMenu((dropDownMenu = true))
  }
  const hideDropDownMenuDesktop = () => {
    setDropDownMenu((dropDownMenu = false))
  }
  const comingSoon = () => {
    alert('Coming Soon :) ')
  }
  const listenScrollEvent = () => {
    if (window.scrollY > 200) {
      // Scroll check / you can define your scroll in pixels eg.200
      setScroll(true) // if windowScroll to predifined position setState 'true'
    } else {
      setScroll(false) // if windowNOTScrolled or set back to its starting postion setState 'false'
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent) // add event listner
  })

  return (
    <section>
      <header id='header-mobile' className='header'>
        <div className='mobile-header-container'>
          <div className='logo-container'>
            <LocalizedLink to={homeLink}>
              {!scroll ? (
                <Img className='logo' fluid={data.logo.childImageSharp.fluid} />
              ) : (
                  <LogoOnScroll />
                )}
            </LocalizedLink>
          </div>
          <div className='burger-icon'>
            <HamburgerMenu
              isOpen={visible}
              menuClicked={() => setVisible(!visible)}
              width={30}
              height={18}
              strokeWidth={3}
              rotate={0}
              color='black'
              borderRadius={0}
              animationDuration={0.1}
            />
          </div>
        </div>
        {visible && (
          <nav className='nav-mobile'>
            <ul>
              <LocalizedLink to={homeLink}>{home}</LocalizedLink>
              <LocalizedLink to={aboutLink}>{about}</LocalizedLink>
              <p className='services-mobile' onClick={listenDropDownMenu}>
                {services}
                <span className='dropdown-icon'>
                  {dropDownMenu ? 'v' : '>'}
                </span>
              </p>
              {dropDownMenu && (
                <div>
                  <LocalizedLink
                    className='dropdown-item'
                    to='/web-development'
                  >
                    Web Development
                  </LocalizedLink>
                  <LocalizedLink
                    className='dropdown-item'
                    to='/social-media-marketing'
                  >
                    Social Media
                  </LocalizedLink>
                  <LocalizedLink className='dropdown-item' to='/web-marketing'>
                    Web Marketing
                  </LocalizedLink>
                  <LocalizedLink className='dropdown-item' to='/graphic-design'>
                    Graphic Design
                  </LocalizedLink>
                  <LocalizedLink className='dropdown-item' to='/blogs'>
                    Blogs
                  </LocalizedLink>
                </div>
              )}

              <LocalizedLink to={contactLink}>{contact}</LocalizedLink>
            </ul>
            <div className='mobile-menu-cta'>
              <Cta
                linkGetStarted={
                  dataHeader.header.childHeaderJson.linkGetStarted
                }
                textGetStarted={
                  dataHeader.header.childHeaderJson.textGetStarted
                }
              />
            </div>
          </nav>
        )}
      </header>

      <header
        onMouseLeave={hideDropDownMenuDesktop}
        id='header-desktop'
        className='header'
      >
        <div className='desktop-header-container'>
          <div className='logo-container'>
            <LocalizedLink to={homeLink}>
              {/* on scroll change logo */}
              {!scroll ? (
                <Img className='logo' fluid={data.logo.childImageSharp.fluid} />
              ) : (
                  <LogoOnScroll />
                )}
            </LocalizedLink>
          </div>
          <div>
            <nav className='nav-desktop'>
              <ul>
                <LocalizedLink to={homeLink}>{home}</LocalizedLink>
                <LocalizedLink to={aboutLink}>{about}</LocalizedLink>
                <LocalizedLink
                  onMouseEnter={showDropDownMenuDesktop}
                  to='#'
                  className='dropdwon-service'
                >
                  {services}{' '}
                  <span className='dropdown-icon'>
                    <Img
                      style={{ width: '10px', display: 'inline-block' }}
                      fluid={data.arrowDown.childImageSharp.fluid}
                    />
                  </span>
                </LocalizedLink>

                <LocalizedLink to={contactLink}>{contact}</LocalizedLink>
              </ul>
            </nav>
            {dropDownMenu && (
              <div
                onMouseLeave={hideDropDownMenuDesktop}
                className='dropdown-menu-services-desktop'
              >
                <LocalizedLink className='dropdown-item' to='/web-development'>
                  Web development
                </LocalizedLink>
                <LocalizedLink
                  className='dropdown-item'
                  to='/social-media-marketing'
                >
                  Social Media
                </LocalizedLink>
                <LocalizedLink className='dropdown-item' to='/web-marketing'>
                  Web Marketing
                </LocalizedLink>
                <LocalizedLink className='dropdown-item' to='/graphic-design'>
                  Graphic Design
                </LocalizedLink>
                <LocalizedLink className='dropdown-item' to='/blogs'>
                  Blogs
                </LocalizedLink>
              </div>
            )}
          </div>
          <div className='cta-header-container'>
            <a
              onClick={comingSoon}
              className='cta-header-btn'
              target='_blank'
            >
              {' '}
              Premium Support
            </a>
          </div>
        </div>
      </header>
    </section>
  )
}

export default Header

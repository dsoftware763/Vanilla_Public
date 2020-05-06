import React from 'react'
import './footerCta.css'
import Cta from './cta'
import LocalizedLink from './LocalizedLink'

export default function footerCta ({
  linkGetStarted,
  textGetStarted,
  title,
  subtitle
}) {
  return (
    <footer className='footerCta'>
      <div className='footerCta-container'>
        <div className='footerCta-cta'>
          <span className='overtitle-yellow'>DIGITAL CREATORS</span>
          <h2 className='title-section'>{title}</h2>
          <p className='footerCta-subtitle'>{subtitle}</p>
          <Cta
            linkGetStarted={linkGetStarted}
            textGetStarted={textGetStarted}
          />
        </div>
      </div>
      <div className='divider-footerCta' />
    </footer>
  )
}

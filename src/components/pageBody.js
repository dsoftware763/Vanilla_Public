import React from 'react'
import Img from 'gatsby-image'

const pageBody = props => {
  return (
    <section className='margin-top'>
      <div className='about-section-container'>
        <Img className='big-icon' fluid={props.bigIcon} />
        <div className='page-bg'>
          <span className='overtitle-dark'>DIGITAL CREATORS</span>
          <h1>{props.title}</h1>
          <p className='subtitle-page'>{props.subtitle}</p>
          <div className='text-service-container'>
            <div>
              {props.multiline1.map((string, i) => {
                if (string.includes('www.premiumsupport')) {
                  var str = 'www.premiumsupport.vanillamarketing.it'
                  var URL = 'http://www.premiumsupport.vanillamarketing.it'
                  return (
                    <a
                      style={{ textDecoration: 'none' }}
                      href={URL}
                      target='_blank'
                    >
                      <p style={{ position: 'relative', bottom: '22px' }}>
                        {string}
                      </p>
                    </a>
                  )
                } else {
                  return <p key={i}>{string}</p>
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default pageBody

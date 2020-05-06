import React, { useState, useEffect } from 'react'
import LocalizedLink from './LocalizedLink'

import './cookieBanner.css'

const CookieBanner = () => {
  const [showCookie, toggleCookie] = useState(false)

  useEffect(() => {
    const showBanner = localStorage.getItem('setCookie')
    if (showBanner) {
      toggleCookie(false)
    } else {
      toggleCookie(true)
    }
  }, [])
  const handleAccept = () => {
    localStorage.setItem('setCookie', 'true')
    toggleCookie(false)
  }
  const handleReject = () => {
    localStorage.setItem('setCookie', 'true')
    toggleCookie(false)
  }
  if (showCookie) {
    return (
      <div className='cookie-banner'>
        <span>
                    Utilizziamo i cookie per fornire all'utente la migliore esperienza possibile nel nostro sito.
          <button id='cookie-action-accept' onClick={handleAccept}>Accetto</button>
          
          <LocalizedLink to='/policy'>policy</LocalizedLink>

        </span>
      </div>
    )
  } else {
    return ''
  }
}

export default CookieBanner

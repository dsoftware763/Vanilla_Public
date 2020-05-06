import React from 'react'
import { LocaleProvider } from '../constants/localeProviders'
import Footer from '../components/footer'
import Logo from '../components/logo'
import LocalizedLink from '../components/LocalizedLink'

const thankYou = ({ pageContext: { locale }, data }) => {
  return (
    <LocaleProvider value={locale}>
      <header className='header-get-started' style={{ marginBottom: '120px' }}>
        <div style={{ margin: '10px auto' }}>
          <LocalizedLink to='/'><Logo /></LocalizedLink>
        </div>
      </header>
      <div style={{ height: '100vh', textAlign: 'center' }}>
        <h1 style={{ marginTop: '180px' }}>Grazie per averci contattato!</h1>
        <p>Avrai presto nostre notizie :) </p>
      </div>
      <Footer />
    </LocaleProvider>
  )
}

export default thankYou

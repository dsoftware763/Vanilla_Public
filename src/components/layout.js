import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Header from './header'
import Footer from './footer'
import { LocaleProvider, LocaleConsumer } from '../constants/localeProviders'
import './layout.css'
import CookieBanner from './cookieBanner'
import { Helmet } from 'react-helmet'

const Layout = ({ children, locale, data }) => { // accesss data"
  console.log('data header', data);
  return (
    <LocaleProvider value={locale}>
      <>
        <Helmet
          meta={[
            { name: 'google-site-verification', content: 'je8XZorft6_E_TOYu8NPKBEFWQvBdvyudBiF8ppInPY' }
          ]}
        />
        <Header dataHeader={data} />        {/* pass 'data' to header so it can use GraphQL query  */}
        <div>
          <main>{children}</main>
          <Footer />
        </div>
        <CookieBanner />
      </>
    </LocaleProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  path: PropTypes.string,
  locale: PropTypes.string.isRequired
}

Layout.defaultProps = {
  path: '/'
}

export default Layout

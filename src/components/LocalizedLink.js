import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { LocaleConsumer } from '../constants/localeProviders'

import locales from '../constants/locales'

const LocalizedLink = ({ to, ...props }) => (
  <LocaleConsumer>
    {locale => {
      console.log('Locale', locale, to , props);
      const path = locales[locale].default ? to : `/${locale}${to}`
      return <Link {...props} to={path} />
    }}
  </LocaleConsumer>
)

LocalizedLink.propTypes = {
  to: PropTypes.string.isRequired
}

export default LocalizedLink

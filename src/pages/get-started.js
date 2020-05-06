import React from "react"
import { graphql } from "gatsby"
import Footer from "../components/footer"
import Img from "gatsby-image"
import "./get-started.css"
import { LocaleProvider } from "../constants/localeProviders"
import LocalizedLink from "../components/LocalizedLink"

const getStarted = ({ pageContext: { locale }, data }) => {
  const {
    title,
    subtitle,
    ctaText,
    namePlaceHolder,
    emailPlaceHolder,
    textAreaPlaceHolder,
    ctaButton,
    rejectText,
  } = data.getStarted.childGetStartedJson
  return (
    <LocaleProvider value={locale}>
      <header className="header-get-started">
        <div style={{ margin: "10px 0" }}>
          <LocalizedLink to="/">
            <Img
              className="logo-get-started"
              fluid={data.logo.childImageSharp.fluid}
            />
          </LocalizedLink>
        </div>
        <LocalizedLink
        className="reject-text"
          to="/"
          style={{
            position: "relative",
            top: "35px",
            color: "#777",
            textDecoration: "none",
            fontSize: "16px",
            fontWeight: "500",
          }}
          to="/"
        >
          {rejectText}
        </LocalizedLink>
      </header>
      <section className="get-started-section">
        <div>
          <h1 style={{ marginTop: "60px" }}>{title}</h1>
          <span> {subtitle}</span>
          <p style={{ color: "#777", fontSize: "20px", marginTop: "40px" }}>
            <strong> {ctaText}</strong>
          </p>
          <div>
            <form
              name="Contact Form"
              method="POST"
              data-netlify="true"
              action="/thank-you"
            >
              <input type="hidden" name="form-name" value="Contact Form" />
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder={namePlaceHolder}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder={emailPlaceHolder}
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder={textAreaPlaceHolder}
                  required
                />
              </div>
              <button id="formButton" type="submit">{ctaButton}</button>
            </form>
          </div>
        </div>
      </section>
      <Footer />

      <script
  dangerouslySetInnerHTML={{
    __html: `
    let button = document.getElementById('formButton')
  button.addEventListener('click', function() { 
       console.log('form submitted')
       fbq('track', 'Contact');         
    }
  );
        `,
  }}
/>
      
    

    </LocaleProvider>
  )
}

export const query = graphql`
  query getStarted($locale: String) {
    getStarted: file(
      name: { eq: $locale }
      relativeDirectory: { eq: "get-started" }
    ) {
      childGetStartedJson {
        title
        subtitle
        ctaText
        namePlaceHolder
        emailPlaceHolder
        textAreaPlaceHolder
        ctaButton
        rejectText
      }
    }
    logo: file(relativePath: { eq: "logo-vanilla-marketing.png" }) {
      childImageSharp {
        fluid(maxWidth: 190) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default getStarted

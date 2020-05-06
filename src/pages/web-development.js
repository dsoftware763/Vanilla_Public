import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import PageBody from "../components/pageBody"
import PortfolioLogo from "../components/portfolioLogo"
import FooterCta from "../components/footerCta"

const webDevelopment = ({ pageContext: { locale }, data }) => {
  return (
    <Layout path="/" locale={locale} data={data}>
      <SEO title={data.webDevelopment.childWebDevelopmentJson.titleSeo} description={data.webDevelopment.childWebDevelopmentJson.descriptionSeo} />
      <PageBody
        bigIcon={data.bigIcon.childImageSharp.fluid}
        overtitle={data.webDevelopment.childWebDevelopmentJson.overtitle}
        title={data.webDevelopment.childWebDevelopmentJson.title}
        subtitle={data.webDevelopment.childWebDevelopmentJson.subtitle}
        multiline1={data.webDevelopment.childWebDevelopmentJson.multiline1}
      />
      <PortfolioLogo
        overtitle={data.portfolio.childPortfolioJson.overtitle}
        title={data.portfolio.childPortfolioJson.title}
        subtitle={data.portfolio.childPortfolioJson.subtitle}
      />
      <FooterCta
        linkGetStarted={data.header.childHeaderJson.linkGetStarted}
        textGetStarted={data.header.childHeaderJson.textGetStarted}
        title={data.footerCta.childFooterCtaJson.title}
        subtitle={data.footerCta.childFooterCtaJson.subtitle}
      />
    </Layout>
  )
}

export const query = graphql`
  query WebDevelopment($locale: String) {
    header: file(name: { eq: $locale }, relativeDirectory: { eq: "header" }) {
      childHeaderJson {
        home
        homeLink
        about
        aboutLink
        services
        contact
        contactLink
        linkGetStarted
        textGetStarted
      }
    }
    webDevelopment: file(
      name: { eq: $locale }
      relativeDirectory: { eq: "web-development" }
    ) {
      childWebDevelopmentJson {
        overtitle
        title
        subtitle
        multiline1
        titleSeo
        descriptionSeo
      }
    }
    portfolio: file(
      name: { eq: $locale }
      relativeDirectory: { eq: "portfolio" }
    ) {
      childPortfolioJson {
        overtitle
        title
        subtitle
      }
    }
    footerCta: file(
      name: { eq: $locale }
      relativeDirectory: { eq: "footer-cta" }
    ) {
      childFooterCtaJson {
        title
        subtitle
      }
    }
    bigIcon: file(relativePath: { eq: "realizzazione-siti-web.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 323, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default webDevelopment

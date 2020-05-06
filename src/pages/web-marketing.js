import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import PageBody from "../components/pageBody"
import PortfolioLogo from "../components/portfolioLogo"
import FooterCta from "../components/footerCta"

const webMarketing = ({ pageContext: { locale }, data }) => {
  return (
    <Layout path="/" locale={locale} data={data}>
      <SEO title={data.webMarketing.childWebMarketingJson.titleSeo} description={data.webMarketing.childWebMarketingJson.descriptionSeo} />
      <PageBody
        bigIcon={data.bigIcon.childImageSharp.fluid}
        overtitle={data.webMarketing.childWebMarketingJson.overtitle}
        title={data.webMarketing.childWebMarketingJson.title}
        subtitle={data.webMarketing.childWebMarketingJson.subtitle}
        multiline1={data.webMarketing.childWebMarketingJson.multiline1}
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
  query WebMarketing($locale: String) {
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
    webMarketing: file(
      name: { eq: $locale }
      relativeDirectory: { eq: "web-marketing" }
    ) {
      childWebMarketingJson {
        overtitle
        title
        subtitle
        multiline1
        titleSeo
        descriptionSeo
      }
    }
    bigIcon: file(relativePath: { eq: "web-marketing.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 323, quality: 100) {
          ...GatsbyImageSharpFluid
        }
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
  }
`

export default webMarketing

import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import PageBody from "../components/pageBody"
import PortfolioLogo from "../components/portfolioLogo"
import FooterCta from "../components/footerCta"

const socialMedia = ({ pageContext: { locale }, data }) => {
  return (
    <Layout path="/" locale={locale} data={data}>
      <SEO title={data.socialMedia.childSocialMediaJson.titleSeo} description={data.socialMedia.childSocialMediaJson.descriptionSeo} />
      <PageBody
        bigIcon={data.bigIcon.childImageSharp.fluid}
        overtitle={data.socialMedia.childSocialMediaJson.overtitle}
        title={data.socialMedia.childSocialMediaJson.title}
        subtitle={data.socialMedia.childSocialMediaJson.subtitle}
        multiline1={data.socialMedia.childSocialMediaJson.multiline1}
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
  query SocialMedia($locale: String) {
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
    socialMedia: file(
      name: { eq: $locale }
      relativeDirectory: { eq: "social-media" }
    ) {
      childSocialMediaJson {
        overtitle
        title
        multiline1
        subtitle
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
    bigIcon: file(relativePath: { eq: "social-media-marketing.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 323, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default socialMedia

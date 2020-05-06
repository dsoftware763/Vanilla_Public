import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import PageBody from "../components/pageBody"
import PortfolioLogo from "../components/portfolioLogo"
import FooterCta from "../components/footerCta"

const graphicDesign = ({ pageContext: { locale }, data }) => {
  return (
    <Layout path="/" locale={locale} data={data}>
      <SEO title={data.graphicDesign.childGraphicDesignJson.title} subtitle={data.graphicDesign.childGraphicDesignJson.subtitle} />
      <PageBody
        bigIcon={data.bigIcon.childImageSharp.fluid}
        overtitle={data.graphicDesign.childGraphicDesignJson.overtitle}
        title={data.graphicDesign.childGraphicDesignJson.title}
        subtitle={data.graphicDesign.childGraphicDesignJson.subtitle}
        multiline1={data.graphicDesign.childGraphicDesignJson.multiline1}
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
  query GraphicDesign($locale: String) {
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
    graphicDesign: file(
      name: { eq: $locale }
      relativeDirectory: { eq: "graphic-design" }
    ) {
      childGraphicDesignJson {
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
    bigIcon: file(relativePath: { eq: "graphic-design.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 323, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default graphicDesign

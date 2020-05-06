import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import FooterCta from '../components/footerCta'
import ServicesSection from '../components/servicesSection'
import Testimonials from '../components/testimonials'

const IndexPage = ({ pageContext: { locale }, data }) => {
  return (
    <Layout path='/' locale={locale} data={data}>
      {/* site title gets from graphql query and pass it to layout component */}
      <SEO title={data.hero.childHeroJson.titleSeo} description={data.hero.childHeroJson.descriptionSeo} />
      <Hero
        linkGetStarted={data.header.childHeaderJson.linkGetStarted}
        heroSubtitle1={data.hero.childHeroJson.heroSubtitle1}
        heroSubtitle2={data.hero.childHeroJson.heroSubtitle2}
        ctaSubtitle={data.hero.childHeroJson.ctaSubtitle}
        textGetStarted={data.header.childHeaderJson.textGetStarted}
      />
      <ServicesSection
        serviceTitle={data.services.childServicesSectionJson.serviceTitle}
        serviceSubtitle={data.services.childServicesSectionJson.serviceSubtitle}
        serviceDesc1={data.services.childServicesSectionJson.serviceDesc1}
        serviceDesc2={data.services.childServicesSectionJson.serviceDesc2}
        webDevDesc={data.services.childServicesSectionJson.webDevDesc}
        socialMediaDesc={data.services.childServicesSectionJson.socialMediaDesc}
        webMarketingDesc={
          data.services.childServicesSectionJson.webMarketingDesc
        }
        graphicDesignDesc={
          data.services.childServicesSectionJson.graphicDesignDesc
        }
      />
      <Testimonials
        testimonials={data.testimonials.childTestimonialsJson}
        overtitle={data.testimonials.childTestimonialsJson.overtitle}
        title1={data.testimonials.childTestimonialsJson.title1}
        title2={data.testimonials.childTestimonialsJson.title2}
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
  query Home($locale: String) {
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
    hero: file(name: { eq: $locale }, relativeDirectory: { eq: "hero" }) {
      childHeroJson {
        heroSubtitle1
        heroSubtitle2
        ctaSubtitle
        titleSeo
        descriptionSeo
      }
    }
    services: file(
      name: { eq: $locale }
      relativeDirectory: { eq: "services-section" }
    ) {
      childServicesSectionJson {
        serviceTitle
        serviceSubtitle
        serviceDesc1
        serviceDesc2
        webDevDesc
        socialMediaDesc
        webMarketingDesc
        graphicDesignDesc
      }
    }
    testimonials: file(
      name: { eq: $locale }
      relativeDirectory: { eq: "testimonials" }
    ) {
      childTestimonialsJson {
        overtitle
        title1
        title2
        client0
        quote0
        client1
        quote1
        client2
        quote2
        client3
        quote3
        client4
        quote4
        client5
        quote5,
        forbesArticle
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
// IndexPage.propTypes = {
//   pageContext: PropTypes.shape({
//     locale: PropTypes.string.isRequired
//   }).isRequired,
//   data: PropTypes.shape({
//     file: PropTypes.shape({
//       childIndexJson: PropTypes.shape({
//         // title: PropTypes.string.isRequired,
//         // about: PropTypes.string.isRequired
//       }).isRequired
//     }).isRequired
//   }).isRequired
// }

export default IndexPage

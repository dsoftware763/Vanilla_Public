import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import FooterCta from '../components/footerCta'
import PageBody from '../components/pageBody'
import './about.css'

const About = ({ pageContext: { locale }, data }) => {
  const { overtitle, title, subtitle, multiline1, photoOvertitle, photoTitle, photoSubtitle, titleSeo, descriptionSeo } = data.about.childAboutJson

  return (
    <Layout path='/' locale={locale} data={data}>
      <SEO title={titleSeo} description={descriptionSeo} />
      <PageBody
        bigIcon={data.bigIcon.childImageSharp.fluid}
        overtitle={overtitle}
        title={title}
        subtitle={subtitle}
        multiline1={multiline1}
      />
      <div className='about-photo-container'>
        <span className='overtitle-dark'>{photoOvertitle}</span>
        <h1>{photoTitle}</h1>
        <p className='subtitle-page'>
          {photoSubtitle}
        </p>
        <div className='photo-row-1'>
          <Img
            className='about-photo'
            fluid={data.carlotta.childImageSharp.fluid}
          />
          <Img
            className='about-photo'
            fluid={data.fotoTeam.childImageSharp.fluid}
          />
          <Img
            className='about-photo'
            fluid={data.martina.childImageSharp.fluid}
          />
        </div>
        <div className='photo-row-2'>
          <Img
            className='about-photo'
            fluid={data.guido.childImageSharp.fluid}
          />
          <Img
            className='about-photo'
            fluid={data.enrico.childImageSharp.fluid}
          />
          <Img
            className='about-photo'
            fluid={data.team2.childImageSharp.fluid}
          />
        </div>
      </div>
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
  query About($locale: String) {
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
    about: file(name: { eq: $locale }, relativeDirectory: { eq: "about" }) {
      childAboutJson {
        overtitle
        title
        subtitle
        multiline1
        photoOvertitle,
        photoTitle,
        photoSubtitle
        titleSeo
        descriptionSeo
      }
    }
    bigIcon: file(relativePath: { eq: "vanilla-chi-siamo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 323, quality: 100) {
          ...GatsbyImageSharpFluid
        }
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
    fotoTeam: file(relativePath: { eq: "vanilla-marketing-team.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    guido: file(relativePath: { eq: "guido-carucci-web-developer.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    martina: file(relativePath: { eq: "martina-veroli-graphic-designer.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    carlotta: file(relativePath: { eq: "carlotta-carucci.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    team2: file(relativePath: { eq: "vanilla-marketing-team-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    enrico: file(relativePath: { eq: "enrico-giaccaglia-designer.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }

  
`

export default About

// bigV: file(relativePath: { eq: "vanilla-chi-siamo.jpg" }) {
//     childImageSharp {
//       fluid(maxWidth: 400) {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
//     fotoV: file(relativePath: { eq: "foto-test.jpg" }) {
//     childImageSharp {
//       fluid(maxWidth: 600) {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }

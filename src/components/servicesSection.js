import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./servicesSection.css"
import Img from "gatsby-image"
import LocalizedLink from "./LocalizedLink"

export default ({serviceTitle, serviceSubtitle, serviceDesc1, serviceDesc2, webDevDesc, socialMediaDesc,webMarketingDesc, graphicDesignDesc}) => {
  const data = useStaticQuery(graphql`
    query {
      webDevIcon: file(relativePath: { eq: "realizzazione-siti-web.png" }) {
        childImageSharp {
          fluid(maxWidth: 128) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      socialMediaIcon: file(
        relativePath: { eq: "social-media-marketing.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 128) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      webMarketingIcon: file(relativePath: { eq: "web-marketing.png" }) {
        childImageSharp {
          fluid(maxWidth: 128) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      graphicDesignIcon: file(relativePath: { eq: "graphic-design.png" }) {
        childImageSharp {
          fluid(maxWidth: 128) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
 
  return (
    <section className="services-section">
      <div className="services-section-container">
        <span className="overtitle-yellow">{serviceTitle}</span>
        <h2 className="title-section">
         {serviceSubtitle}
          <br />
        </h2>
        <p className="section-desc">
          {serviceDesc1}
          <br />
          {serviceDesc2}
        </p>
        <div className="services-container">
          <div className="service-container">
            <div className="services-container-img">
              <Img fluid={data.webDevIcon.childImageSharp.fluid} />
            </div>

            <p className="service-title">
              <strong>WEB DEVELOPMENT</strong>
            </p>
            <p className="service-desc">
          {webDevDesc}
            </p>
            <p>
              <LocalizedLink to="/web-development" className="service-cta-home">
                <strong>> Web Development</strong>
              </LocalizedLink>
            </p>
          </div>
          <div className="service-container">
            <div className="services-container-img">
              <Img fluid={data.socialMediaIcon.childImageSharp.fluid} />
            </div>
            <p className="service-title">
              <strong>SOCIAL MEDIA</strong>
            </p>

            <p className="service-desc">
            {socialMediaDesc}
            </p>
            <p>
              <LocalizedLink to="/social-media-marketing" className="service-cta-home">
                <strong>> Social Media</strong>
              </LocalizedLink>{" "}
            </p>
          </div>
          <div className="service-container">
            <div className="services-container-img">
              <Img fluid={data.webMarketingIcon.childImageSharp.fluid} />
            </div>
            <p className="service-title">
              <strong>WEB MARKETING</strong>
            </p>
            <p className="service-desc">
         {webMarketingDesc}
            
            </p>
            <p>
              <LocalizedLink to="/web-marketing" className="service-cta-home">
                <strong>> Web Marketing</strong>
              </LocalizedLink>
            </p>
          </div>
          <div className="service-container">
            <div className="services-container-img">
              <Img fluid={data.graphicDesignIcon.childImageSharp.fluid} />
            </div>
            <p className="service-title">
              <strong>GRAPHIC DESIGN</strong>
            </p>
            <p className="service-desc">
              {graphicDesignDesc}
              </p>
            <p>
              <LocalizedLink to="/graphic-design" className="service-cta-home">
                <strong>> Graphic Design</strong>
              </LocalizedLink>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

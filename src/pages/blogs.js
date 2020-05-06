import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo';
import './blog.css';

export default ({ pageContext: { locale }, data }) => {
  const blogs = data.allWordpressPost.edges;
  return (
    // <Layout path='/' locale={locale} data={data}>
    // <SEO title="Blogs" />
    <div className="blog-root">
      <ul style={{ listStyle: "none" }}>
        {blogs &&
          blogs.map((blog, ind) => (

            <li style={{ padding: "20px 0", borderBottom: "1px solid #ccc" }}>
              <Link
                to={`/page/${blog.node.slug}`}
                style={{ display: "flex", color: "black", textDecoration: "none" }}
              >

                <div style={{ width: "75%" }}>
                  <h3 style={{ marginBottom: 0 }}>{blog.node.title}</h3>
                  <p style={{ margin: 0, color: "grey" }}>
                    {blog.node.date}
                  </p>
                </div>
              </Link>
            </li>
            // <div key={ind}>
            //   <div className="blog-heading" style={{ textAlign: 'center' }}>
            //     <Link
            //       to={`/blog/${blog.node.slug}`}
            //       state={{ blogId: blog.node.id }}
            //     >
            //       <h2
            //         style={{
            //           fontSize: '3rem',
            //           marginRight: 'auto',
            //           marginLeft: 'auto'
            //         }}
            //       >
            //         {blog.node.title}
            //       </h2>
            //     </Link>
            //   </div>
            //   <hr className="blog-seperator" />
            // </div>
          ))
        }
      </ul>
    </div>
    // </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWordpressPost {
      edges{
        node {
          title
          slug
          excerpt
          content
          date(fromNow: true)
        }
      }
    }   
  }
`

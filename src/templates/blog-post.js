import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogTemplate = ({ data }) => {
  const post = data.wordpressPost
  return (
    // <Layout>
    <div className='blog-post'>
      <h1>{post.title}</h1>
      <div
        style={{ marginTop: 20 }}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
    // </Layout>
  )
}

export default BlogTemplate

export const query = graphql`
  query($id: String!)  {
    wordpressPost(id: { eq: $id }) {
      title
      slug
      content
    }
  }
`

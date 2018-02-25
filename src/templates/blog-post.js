// render md file into its own blog page
// React template for rendering blog posts in layout

import React from "react";
import Helmet from "react-helmet";

export default function Template({
  data, // prop will be injected by the GraphQL query below
}) {
  const post = data.markdownRemark; //.markdownRemark contains all details of the md file
  return (
    <div className="blog-post-container">
      <Helmet title={`Li Chai - ${post.frontmatter.title}`} />
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <h2>{post.frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  );
}

// make the query through filesystem
// query for blog post data
export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
;

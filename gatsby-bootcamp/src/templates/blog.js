import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const query = graphql`
  query($postId: String!) {
    contentfulBlogPost(id: { eq: $postId }) {
      slug
      title
      body {
        json
      }
      publishedDate(fromNow: true)
    }
  }
`;

const Blog = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"];
        const url = node.data.target.fields.file["en-US"].url;
        return <img alt={alt} src={url} />;
      },
    },
  };
  return (
    <Layout title={props.data.contentfulBlogPost.title} >
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {documentToReactComponents(
        props.data.contentfulBlogPost.body.json,
        options
      )}
    </Layout>
  );
};

export default Blog;

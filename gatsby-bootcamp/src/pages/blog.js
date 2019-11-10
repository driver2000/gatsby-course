import React from "react";
import Layout from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `);
  const listItems = data.allMarkdownRemark.edges.map(d => (
    <li key={d.node.id}>
      <h2>{d.node.frontmatter.title}</h2>
      <p>{d.node.frontmatter.date}</p>
    </li>
  ));
  return (
    <Layout>
      <h1> Blog </h1>
      <ol>{listItems}</ol>
    </Layout>
  );
};

export default BlogPage;

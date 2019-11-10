import React from "react";
import Layout from "../components/layout";
import { Link, graphql, useStaticQuery } from "gatsby";
import blogStyles from "../styles/blog.module.scss";

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
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  const listItems = data.allMarkdownRemark.edges.map(edge => (
    <li key={edge.node.id} className={blogStyles.post}>
      <Link to={`/blog/${edge.node.fields.slug}`}>
        <h2>{edge.node.frontmatter.title}</h2>
        <p>{edge.node.frontmatter.date}</p>
      </Link>
    </li>
  ));
  return (
    <Layout>
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>{listItems}</ol>
    </Layout>
  );
};

export default BlogPage;

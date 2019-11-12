import React from "react";
import Layout from "../components/layout";
import { Link, graphql, useStaticQuery } from "gatsby";
import blogStyles from "../styles/blog.module.scss";

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            id
            title
            slug
            publishedDate(fromNow: true)
          }
        }
      }
    }
  `);
  const listItems = data.allContentfulBlogPost.edges.map(edge => (
    <li key={edge.node.id} className={blogStyles.post}>
      <Link to={`/blog/${edge.node.slug}`}>
        <h2>{edge.node.title}</h2>
        <p>{edge.node.publishedDate}</p>
      </Link>
    </li>
  ));
  return (
    <Layout title="Blog">
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>{listItems}</ol>
    </Layout>
  );
};

export default BlogPage;

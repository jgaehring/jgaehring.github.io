import React from 'react';
import { graphql } from 'gatsby';
import ProjectPreviews from '../components/ProjectPreviews';
import Layout from '../components/Layout';
import Header from '../components/Header';

export default ({ data, location }) => (
  <Layout>
    <Header pathname={location.pathname}/>
    <h1>Projects</h1>
    <p>Some older projects of mine. I don't update this anymore.</p>
    <ProjectPreviews data={data.allMarkdownRemark.edges}/>
  </Layout>
)

export const query = graphql`
  query ProjectsQuery {
    allMarkdownRemark(
      filter: { collection: { eq: "projects" } }
      sort: { fields: [frontmatter___rank], order: ASC }
    ) {
      totalCount
      edges {
        node {
          ...PreviewFragment
        }
      }
    }
  }
`;

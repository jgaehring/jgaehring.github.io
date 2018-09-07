import React from 'react'
import Link from 'gatsby-link'
import styles from './index.module.css'
import PostPreview from '../components/PostPreview'
import logo from '../assets/golden-russet-black.svg'
import portrait from '../assets/portrait.jpg'
import { FaGithub, FaTwitter } from 'react-icons/lib/fa'

// TODO: Optimize images via https://www.gatsbyjs.org/packages/gatsby-image/
const IndexPage = ({data}) => (
  <div className={styles.home}>
    <section className={styles.about}>
      <div className={styles.logo} >
        <img src={logo} />
        &mdash; &bull;&bull;&bull; &mdash;
      </div>
      <div className={styles.portrait}>
        <img src={portrait} />
      </div>
      <div className={styles.blurb} >
        <p>For nearly two decades, I've been helping farmers build a more open food system. Today, I'm working to give those farmers better access to the software, data and other tools that they need to feed their communities in the 21<sup>st</sup> century.</p>
      </div>
    </section>
    <section>
      <div className={styles.contact}>
        <h3>
          &#123;{/*Use HTML code for curly braces b/c of jsx*/}
          <a href="mailto:jamie@jgaehring.com" target='_blank'>jamie@jgaehring.com</a>
          &#125;
        </h3>
        <h2>
          <a href="https://github.com/jgaehring" target='_blank'><FaGithub/></a>
          &nbsp;
          <a href="https://twitter.com/JamieGaehring" target='_blank'><FaTwitter/></a>
        </h2>
      </div>
    </section>
    <section className={styles.blog}>
      <header>
        <h2>Writings</h2>
        <p>These are some things I've written. <Link to='/blog'>Go to blog.</Link></p>
      </header>
      {
        data.allMarkdownRemark.edges.map( ({node}, index) => 
          <PostPreview 
            key={`post-${index}`} 
            frontmatter={node.frontmatter} 
            excerpt={node.excerpt} 
            fields={node.fields} 
          />
        )
      }
    </section>
  </div>
)

export default IndexPage

export const query = graphql`
  query BlogList {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC } ) {
      totalCount
      edges {
        node {
          ...PostPreviewFragment
        }
      }
    }
  }
`;

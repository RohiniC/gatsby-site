import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/layout';
import SideBar from '../components/SideBar/SideBar';
import styles from '../pages/Profile/common.module.less';
const InnerPages = ({ data }) => {
  const pageData = data.markdownRemark;
  return (
    <Layout>
      <SEO title={pageData.frontmatter.title} />
      <div className={styles.wrapper + ' main-wrapper notranslate'}>
        {pageData.frontmatter.sidebar && (
          <div className={'side-bar-container ' + styles.sideBar}>
            <SideBar />
          </div>
        )}

        <div
          className={
            styles.container +
            ' main-container data-text ' +
            (pageData.frontmatter.sidebar !== true ? styles.containerFull : '')
          }
        >
          <div className='main-heading'>
            {pageData.frontmatter.title}
          </div>
          <div dangerouslySetInnerHTML={{ __html: pageData.html }} />
          {pageData.frontmatter.date &&
          <div>Last updated: {pageData.frontmatter.date}</div>
          }
        </div>
      </div>
    </Layout>
  );
};

InnerPages.propTypes = {
  data: PropTypes.object,
};

export default InnerPages;

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        sidebar
      }
      excerpt
      html
    }
  }
`;

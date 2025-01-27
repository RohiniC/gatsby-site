import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styles from './Profile/common.module.less';
const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className={styles.container }>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist...</p>
    </div>
  </Layout>
);

export default NotFoundPage;

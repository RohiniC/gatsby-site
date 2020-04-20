import React from 'react';
import { navigate } from 'gatsby';

class IndexPage extends React.Component {
  componentDidMount() {
    navigate('/Profile/details');
  }
  render() {
    return null;
  }
}

export default IndexPage;

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// function to bring the scroll to top of the page on page load/refresh
exports.shouldUpdateScroll = () => {
  window.scrollTo(...[0, 0]);
  return false;
};

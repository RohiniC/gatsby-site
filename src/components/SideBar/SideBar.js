/* global document */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './sideBar.module.less';
class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftMenu: [],
      activeMenu: this.props.activeMenu,
    };
    this.listenScrollEvent = this.listenScrollEvent.bind(this);
    this.redirectToHash = this.redirectToHash.bind(this);
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      activeMenu: nextProps.activeMenu,
    });
  }
  shouldComponentUpdate() {
    return true;
  }
  componentDidMount() {
    window.addEventListener('hashchange', this.redirectToHash);
    window.addEventListener('scroll', this.listenScrollEvent);
    const sectionHeadings = document.querySelectorAll('h2, h3, h4, h5, h6');
    const leftMenu = [];
    let item = '';
    let isMainHeading = false;
    const date = new Date();
    for (let i = 0; i < sectionHeadings.length; ++i) {
      sectionHeadings[i].setAttribute(
        'id',
        sectionHeadings[i].innerHTML
          .replace(/(([^\s]+\s\s*){3})(.*)/, '$1')
          .replace(/\s|\.|[0-9]/g, '') +
          '_' +
          i +
          '_' +
          date.getTime()
      );
      item = sectionHeadings[i];
      if (item.tagName === 'H2') {
        isMainHeading = true;
      } else {
        isMainHeading = false;
      }
      leftMenu.push({
        isMainHeading: isMainHeading,
        content: item.innerHTML,
        href:
          item.innerHTML
            .replace(/(([^\s]+\s\s*){3})(.*)/, '$1')
            .replace(/\s|\.|[0-9]/g, '') +
          '_' +
          i +
          '_' +
          date.getTime(),
      });
      this.setState({
        leftMenu: leftMenu,
      });
    }
    this.redirectToHash();
  }
  redirectToHash() {
    if (location.hash && location.hash !== '') {
      const top = document.querySelector(
        '[id^="' + window.location.href.split('#')[1] + '"]'
      ).offsetTop;
      this.myInterval = setTimeout(() => {
        window.scrollTo(0, top);
      });
    }
  }
  listenScrollEvent(e) {
    e.preventDefault();
    const doc = document.documentElement;
    const top =
      (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0) + 30;
    const sections = document.querySelectorAll('h2, h3, h3, h4, h5, h6');
    sections.forEach((section) => {
      if (top >= section.offsetTop) {
        this.setState({ activeMenu: section.id });
      }
    });
  }
  scrollTo(menu, e) {
    e.preventDefault();
    const top = document.getElementById(menu.href).offsetTop;
    window.scrollTo(0, top);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenScrollEvent, false);
    window.removeEventListener('hashchange', this.redirectToHash, false);
    clearInterval(this.myInterval);
  }
  render() {
    return (
      <React.Fragment>
        {this.state.leftMenu.map((menuItem, index) => {
          return (
            <div
              key={index}
              onClick={this.scrollTo.bind(this, menuItem)}
              className={
                styles.list +
                ' ' +
                (menuItem.isMainHeading ? '' : styles.subHeading) +
                (this.state.activeMenu === menuItem.href
                  ? ' ' + styles.active
                  : '')
              }
              data-custom-id={menuItem.href}
            >
              {menuItem.content}
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}
SideBar.propTypes = {
  activeMenu: PropTypes.string,
};

SideBar.defaultProps = {
  activeMenu: '',
};

export default SideBar;

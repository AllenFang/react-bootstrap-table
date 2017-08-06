import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classSet from 'classnames';

class PageButton extends Component {

  constructor(props) {
    super(props);
  }

  pageBtnClick = e => {
    e.preventDefault();
    this.props.changePage(e.currentTarget.textContent);
  }

  render() {
    const classes = classSet({
      'active': this.props.active,
      'disabled': this.props.disable,
      'hidden': this.props.hidden,
      'page-item': true
    });
    return (
      <li className={ classes } title={ this.props.title }>
        <a href='#' onClick={ this.pageBtnClick } className='page-link'>{ this.props.children }</a>
      </li>
    );
  }
}
PageButton.propTypes = {
  title: PropTypes.string,
  changePage: PropTypes.func,
  active: PropTypes.bool,
  disable: PropTypes.bool,
  hidden: PropTypes.bool,
  children: PropTypes.node
};

export default PageButton;

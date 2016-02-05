import React from 'react';
import classSet from 'classnames';

class PageButton extends React.Component{

  constructor(props) {
		super(props);
	}

  pageBtnClick(e){
    e.preventDefault();
    this.props.changePage(e.currentTarget.text);
  }

  render(){
    var classes = classSet({
        'active': this.props.active,
        'disabled': this.props.disable,
        'hidden': this.props.hidden
    });
    return (
        <li className={classes}><a href="#" onClick={this.pageBtnClick.bind(this)}>{this.props.children}</a></li>
    )
  }
}
PageButton.propTypes = {
  changePage: React.PropTypes.func,
  active: React.PropTypes.bool,
  disable: React.PropTypes.bool
};

export default PageButton;

import React from 'react';

class TextFilter extends React.Component {
	constructor(props) {
		super(props);
		this.filter = this.filter.bind(this);
		this.timeout = null;
	}

	filter(event) {
		event.preventDefault();
		if (this.timeout) {
			clearTimeout(this.timeout);
		}
		const self = this;
		const filterValue = event.target.value;
		debugger;
		this.timeout = setTimeout(function() {
			self.props.filterHandler(filterValue);
		}, self.props.delay);
	}

	render() {
		return (
			<input className="filter text-filter form-control" type="text" onChange={this.filter} placeholder={this.props.placeholder} />
		);
	}
};

TextFilter.propTypes = {
	filterHandler: React.PropTypes.func.isRequired,
	delay: React.PropTypes.number
};

export default TextFilter;

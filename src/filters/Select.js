import React from 'react';
import classSet from 'classnames';

class SelectFilter extends React.Component {
	constructor(props) {
		super(props);
		this.filter = this.filter.bind(this);
		this.state = {
			isPlaceholderSelected: true
		};
	}

	filter(event) {
		event.preventDefault();
		this.setState({isPlaceholderSelected: (event.target.value === "")});
		this.props.filterHandler(event.target.value);
	}

	getOptions(options) {
		let optionTags = [];
		optionTags.push(<option key="-1" value="">{this.props.placeholder}</option>);
		Object.keys(options).map((value) => {
			optionTags.push(<option key={value} value={value}>{options[value]}</option>);
		});
		return optionTags;
	}

	render() {
		const options = this.getOptions(this.props.options);
		var selectClass = classSet("filter", "select-filter", "form-control", {	"placeholder-selected": this.state.isPlaceholderSelected });

		return (
			<select ref="select" className={selectClass} onChange={this.filter} defaultValue="">
				{options}
			</select>
		);
	}
};

SelectFilter.propTypes = {
	filterHandler: React.PropTypes.func.isRequired,
	options: React.PropTypes.object.isRequired
};

export default SelectFilter;

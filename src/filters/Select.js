import React from 'react';
import classSet from 'classnames';
import Const from '../Const';

class SelectFilter extends React.Component {
	constructor(props) {
		super(props);
		this.filter = this.filter.bind(this);
		this.state = {
			isPlaceholderSelected: (this.props.defaultValue == undefined ||
									!this.props.options.hasOwnProperty(this.props.defaultValue))
		};
	}

	filter(event) {
		this.setState({isPlaceholderSelected: (event.target.value === "")});
		this.props.filterHandler(event.target.value, Const.FILTER_TYPE.SELECT);
	}

	getOptions() {
		let optionTags = [];
		const options = this.props.options;
		optionTags.push(<option key="-1" value="">{this.props.placeholder || `Select ${this.props.columnName}...`}</option>);
		Object.keys(options).map((key) => {
			optionTags.push(<option key={key} value={key}>{options[key]}</option>);
		});
		return optionTags;
	}

	componentDidMount() {
		if (this.refs.selectInput.value) {
			this.props.filterHandler(this.refs.selectInput.value, Const.FILTER_TYPE.SELECT);
		}
	}

	render() {
		var selectClass = classSet("filter", "select-filter", "form-control",
							{"placeholder-selected": this.state.isPlaceholderSelected});

		return (
			<select ref="selectInput"
					className={selectClass}
					onChange={this.filter}
					defaultValue={(this.props.defaultValue != undefined) ? this.props.defaultValue : ""}>
				{this.getOptions()}
			</select>
		);
	}
};

SelectFilter.propTypes = {
	filterHandler: React.PropTypes.func.isRequired,
	options: React.PropTypes.object.isRequired,
	placeholder: React.PropTypes.string,
	columnName: React.PropTypes.string
};

export default SelectFilter;

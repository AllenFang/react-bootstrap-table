import React from 'react';
import classSet from 'classnames';
import Const from '../Const';

const legalComparators = ["=", ">", ">=", "<", "<=", "!="];

class NumberFilter extends React.Component {
    constructor(props) {
        super(props);
        this.numberComparators = this.props.numberComparators || legalComparators;
        this.state = {
            isPlaceholderSelected: (this.props.defaultValue == undefined ||
                                    this.props.defaultValue.number == undefined ||
                                    (this.props.options && this.props.options.indexOf(this.props.defaultValue.number) == -1))
        };
        this.onChangeNumber = this.onChangeNumber.bind(this);
        this.onChangeNumberSet = this.onChangeNumberSet.bind(this);
        this.onChangeComparator = this.onChangeComparator.bind(this);
    }

    onChangeNumber(event) {
        if (this.refs.numberFilterComparator.value === "") {
            return;
        }
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        const self = this;
        const filterValue = event.target.value;
        this.timeout = setTimeout(function() {
            self.props.filterHandler({number: filterValue, comparator: self.refs.numberFilterComparator.value},
                Const.FILTER_TYPE.NUMBER);
        }, self.props.delay);
    }

    onChangeNumberSet(event) {
        this.setState({isPlaceholderSelected: (event.target.value === "")});
        if (this.refs.numberFilterComparator.value === "") {
            return;
        }
        this.props.filterHandler({number: event.target.value, comparator: this.refs.numberFilterComparator.value},
            Const.FILTER_TYPE.NUMBER);
    }

    onChangeComparator(event) {
        if (this.refs.numberFilter.value === "") {
            return;
        }
        this.props.filterHandler({number: this.refs.numberFilter.value, comparator: event.target.value},
            Const.FILTER_TYPE.NUMBER);
    }

    getComparatorOptions() {
        let optionTags = [];
        optionTags.push(<option key="-1"></option>);
        for (let i = 0; i < this.numberComparators.length; i++) {
            optionTags.push(<option key={i} value={this.numberComparators[i]}>{this.numberComparators[i]}</option>);
        };
        return optionTags;
    }

    getNumberOptions() {
        let optionTags = [];
        const options = this.props.options;

        optionTags.push(<option key="-1" value="">{this.props.placeholder || `Select ${this.props.columnName}...`}</option>);
        for (let i = 0; i < options.length; i++) {
            optionTags.push(<option key={i} value={options[i]}>{options[i]}</option>);
        };
        return optionTags;
    }

    componentDidMount() {
        if (this.refs.numberFilterComparator.value && this.refs.numberFilter.value) {
            this.props.filterHandler({number: this.refs.numberFilter.value,
                comparator: this.refs.numberFilterComparator.value},
                Const.FILTER_TYPE.NUMBER);
        }
    }

    render() {
        var selectClass = classSet("select-filter", "number-filter-input", "form-control",
                            { "placeholder-selected": this.state.isPlaceholderSelected });

        return (
            <div className="filter number-filter">
                <select ref="numberFilterComparator"
                        className="number-filter-comparator form-control"
                        onChange={this.onChangeComparator}
                        defaultValue={(this.props.defaultValue) ? this.props.defaultValue.comparator : ""}>
                    {this.getComparatorOptions()}
                </select>
                {(this.props.options) ? <select ref="numberFilter"
                                                className={selectClass}
                                                onChange={this.onChangeNumberSet}
                                                defaultValue={(this.props.defaultValue) ?
                                                    this.props.defaultValue.number :
                                                    ""}>
                                            {this.getNumberOptions()}
                                        </select> :

                                        <input ref="numberFilter"
                                               type="number"
                                               className="number-filter-input form-control"
                                               placeholder={this.props.placeholder || `Enter ${this.props.columnName}...`}
                                               onChange={this.onChangeNumber}
                                               defaultValue={(this.props.defaultValue) ?
                                                    this.props.defaultValue.number :
                                                    ""} />}
            </div>
        );
    }
};

NumberFilter.propTypes = {
    filterHandler: React.PropTypes.func.isRequired,
    options: React.PropTypes.arrayOf(React.PropTypes.number),
    defaultValue: React.PropTypes.shape({
        number: React.PropTypes.number,
        comparator: React.PropTypes.oneOf(legalComparators)
    }),
    delay: React.PropTypes.number,
    numberComparators: function(props, propName) {
        if (!props[propName]) {
            return;
        }
        for (let i = 0; i < props[propName].length; i++) {
            let comparatorIsValid = false;
            for (let j = 0; j < legalComparators.length; j++) {
                if (legalComparators[j] === props[propName][i]) {
                    comparatorIsValid = true;
                    break;
                }
            }
            if (!comparatorIsValid) {
                return new Error(`Number comparator provided is not supported. Use only ${legalComparators}`);
            }
        }
    },
    placeholder: React.PropTypes.string,
    columnName: React.PropTypes.string
};

NumberFilter.defaultProps = {
    delay: Const.FILTER_DELAY
};

export default NumberFilter;

import React from 'react';
import classSet from 'classnames';

const legalComparators = ["=", ">", ">=", "<", "<=", "!="];

class NumberFilter extends React.Component {
    constructor(props) {
        super(props);
        this.numberComparators = this.props.numberComparators || legalComparators;
        this.state = {
            isPlaceholderSelected: true
        };
        this.onChangeNumber = this.onChangeNumber.bind(this);
        this.onChangeNumberSet = this.onChangeNumberSet.bind(this);
        this.onChangeComparator = this.onChangeComparator.bind(this);
    }

    onChangeNumber(event) {
        event.preventDefault();
        if (this.refs.numberFilterComparator.value === "") {
            return;
        }
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        const self = this;
        const filterValue = event.target.value;
        this.timeout = setTimeout(function() {
            self.props.filterHandler({comparator: self.refs.numberFilterComparator.value, value: filterValue});
        }, self.props.delay);
    }

    onChangeNumberSet(event) {
        event.preventDefault();
        this.setState({isPlaceholderSelected: (event.target.value === "")});
        if (this.refs.numberFilterComparator.value === "") {
            return;
        }
        this.props.filterHandler({comparator: this.refs.numberFilterComparator.value, value: event.target.value});
    }

    onChangeComparator(event) {
        event.preventDefault();
        if (this.refs.numberFilter.value === "") {
            return;
        }
        this.props.filterHandler({comparator: event.target.value, value: this.refs.numberFilter.value});
    }

    getComparatorOptions() {
        let optionTags = [];
        optionTags.push(<option key="-1"></option>);
        for (let i = 0; i < this.numberComparators.length; i++) {
            optionTags.push(<option key={i} value={this.numberComparators[i]}>{this.numberComparators[i]}</option>);
        };
        return optionTags;
    }

    getNumberOptions(options) {
        let optionTags = [];
        optionTags.push(<option key="-1" value="">{this.props.placeholder}</option>);
        for (let i = 0; i < options.length; i++) {
            optionTags.push(<option key={i} value={options[i]}>{options[i]}</option>);
        };
        return optionTags;
    }

    render() {
        var selectClass = classSet("select-filter", "number-filter-input", "form-control", { "placeholder-selected": this.state.isPlaceholderSelected });
        return (
            <div className="filter number-filter">
                <select ref="numberFilterComparator" className="number-filter-comparator form-control" onChange={this.onChangeComparator} defaultValue="">
                    {this.getComparatorOptions()}
                </select>
                {(this.props.options) ? <select ref="numberFilter" className={selectClass} onChange={this.onChangeNumberSet} defaultValue="">
                                            {this.getNumberOptions(this.props.options)}
                                        </select> :
                                        <input ref="numberFilter" type="number" className="number-filter-input form-control" placeholder={this.props.placeholder} onChange={this.onChangeNumber} />}
            </div>
        );
    }
};

NumberFilter.propTypes = {
    filterHandler: React.PropTypes.func.isRequired,
    options: React.PropTypes.array,
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
};

export default NumberFilter;

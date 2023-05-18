import React, { Component } from "react";
import PropTypes from "prop-types";
import Const from "../Const";

const legalComparators = ["=", ">", ">=", "<", "<=", "!="];

function dateParser(d) {
  return `${d.getFullYear()}-${("0" + (d.getMonth() + 1)).slice(-2)}-${(
    "0" + d.getDate()
  ).slice(-2)}`;
}

class DateFilter extends Component {
  constructor(props) {
    super(props);
    this.dateComparators = this.props.dateComparators || legalComparators;
  }

  setDefaultDate() {
    let defaultDate = "";
    const { defaultValue } = this.props;
    if (defaultValue && defaultValue.date) {
      defaultDate = dateParser(new Date(defaultValue.date));
    }
    return defaultDate;
  }

  onChangeComparator(event) {
    let date = this.inputDate.value;
    const comparator = event.target.value;
    if (date === "") {
      return;
    }
    date = new Date(date);
    this.props.filterHandler({ date, comparator }, Const.FILTER_TYPE.DATE);
  }

  getComparatorOptions() {
    return [
      <option key="-1"></option>,
      ...this.dateComparators.map((comparator, index) => (
        <option key={index} value={comparator}>
          {comparator}
        </option>
      )),
    ];
  }

  filter = (event) => {
    const comparator = this.dateFilterComparator.value;
    const dateValue = event.target.value;
    if (dateValue) {
      this.props.filterHandler(
        { date: new Date(dateValue), comparator },
        Const.FILTER_TYPE.DATE
      );
    } else {
      this.props.filterHandler(null, Const.FILTER_TYPE.DATE);
    }
  };

  cleanFiltered = () => {
    const value = this.setDefaultDate();
    const comparator = this.props.defaultValue
      ? this.props.defaultValue.comparator
      : "";
    this.setState(() => ({ isPlaceholderSelected: value === "" }));
    this.dateFilterComparator.value = comparator;
    this.inputDate.value = value;
    this.props.filterHandler(
      { date: new Date(value), comparator },
      Const.FILTER_TYPE.DATE
    );
  };

  applyFilter(filterDateObj) {
    const { date, comparator } = filterDateObj;
    this.setState(() => ({ isPlaceholderSelected: date === "" }));
    this.dateFilterComparator.value = comparator;
    this.inputDate.value = dateParser(date);
    this.props.filterHandler({ date, comparator }, Const.FILTER_TYPE.DATE);
  }

  componentDidMount() {
    const { dateFilterComparator, inputDate, props } = this;
    const comparator = dateFilterComparator.value;
    const dateValue = inputDate.value;
    if (comparator && dateValue) {
      props.filterHandler(
        { date: new Date(dateValue), comparator },
        Const.FILTER_TYPE.DATE
      );
    }
  }

  render() {
    const { defaultValue, style } = this.props;
    const { date, comparator } = style;
    return (
      <div className="filter date-filter">
        <select
          ref={(n) => (this.dateFilterComparator = n)}
          style={comparator}
          className="date-filter-comparator form-control"
          onChange={this.onChangeComparator}
          defaultValue={defaultValue ? defaultValue.comparator : ""}
        >
          {this.getComparatorOptions()}
        </select>
        <input
          ref={(n) => (this.inputDate = n)}
          className="filter date-filter-input form-control"
          style={date}
          type="date"
          onChange={this.filter}
          defaultValue={this.setDefaultDate()}
        />
      </div>
    );
  }
}

DateFilter.propTypes = {
  filterHandler: PropTypes.func.isRequired,
  defaultValue: PropTypes.shape({
    date: PropTypes.object,
    comparator: PropTypes.oneOf(legalComparators),
  }),
  style: PropTypes.shape({
    date: PropTypes.oneOfType([PropTypes.object]),
    comparator: PropTypes.oneOfType([PropTypes.object]),
  }),
  dateComparators: function (props, propName) {
    if (!props[propName]) {
      return;
    }
    for (let i = 0; i < props[propName].length; i++) {
      if (!legalComparators.includes(props[propName][i])) {
        return new Error(
          `Date comparator provided is not supported. Use only ${legalComparators}`
        );
      }
    }
  },
  columnName: PropTypes.any,
};

DateFilter.defaultProps = {
  style: {
    date: null,
    comparator: null,
  },
};

export default DateFilter;

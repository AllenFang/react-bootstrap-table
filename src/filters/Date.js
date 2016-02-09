import React from 'react';
import Const from '../Const';

class DateFilter extends React.Component {
    constructor(props) {
        super(props);
        this.filter = this.filter.bind(this);
    }

    filter(event) {
        this.props.filterHandler(event.target.value, Const.FILTER_TYPE.DATE);
    }

    render() {
        return (
            <input className="filter date-filter form-control" type="date" onChange={this.filter} placeholder={this.props.placeholder} />
        );
    }
};

DateFilter.propTypes = {
    filterHandler: React.PropTypes.func.isRequired
};

export default DateFilter;

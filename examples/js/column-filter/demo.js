import React from 'react';
import TextFilter from './text-filter';
import TextFilterWithDefaultValue from './text-filter-with-default-value';
import SelectFilter from './select-filter';
import NumberFilter from './number-filter';
import NumberOptionsFilter from './number-options-filter';
import DateFilter from './date-filter';
import CustomFilter from './custom-filter';
import AllFilter from './all-filters';

class Demo extends React.Component {
    render() {
        return (
            <div>
                <div className="col-md-offset-1 col-md-8">
                    <div className="panel panel-default">
                        <div className="panel-heading">Text Filter Example</div>
                        <div className="panel-body">
                            <h5>Source in /examples/js/column-filter/text-filter.js</h5>
                            <TextFilter />
                        </div>
                    </div>
                </div>
                <div className="col-md-offset-1 col-md-8">
                    <div className="panel panel-default">
                        <div className="panel-heading">Text Filter With Default Value Example</div>
                        <div className="panel-body">
                            <h5>Source in /examples/js/column-filter/text-filter-with-default-value.js</h5>
                            <TextFilterWithDefaultValue />
                        </div>
                    </div>
                </div>
                <div className="col-md-offset-1 col-md-8">
                    <div className="panel panel-default">
                        <div className="panel-heading">Select Filter Example</div>
                        <div className="panel-body">
                            <h5>Source in /examples/js/column-filter/select-filter.js</h5>
                            <SelectFilter />
                        </div>
                    </div>
                </div>
                <div className="col-md-offset-1 col-md-8">
                    <div className="panel panel-default">
                        <div className="panel-heading">Number Filter Example</div>
                        <div className="panel-body">
                            <h5>Source in /examples/js/column-filter/number-filter.js</h5>
                            <NumberFilter />
                        </div>
                    </div>
                </div>
                <div className="col-md-offset-1 col-md-8">
                    <div className="panel panel-default">
                        <div className="panel-heading">Number with Options Filter Example</div>
                        <div className="panel-body">
                            <h5>Source in /examples/js/column-filter/number-options-filter.js</h5>
                            <NumberOptionsFilter />
                        </div>
                    </div>
                </div>
                <div className="col-md-offset-1 col-md-8">
                    <div className="panel panel-default">
                        <div className="panel-heading">Date Filter Example</div>
                        <div className="panel-body">
                            <h5>Source in /examples/js/column-filter/date-filter.js</h5>
                            <DateFilter />
                        </div>
                    </div>
                </div>
                <div className="col-md-offset-1 col-md-8">
                    <div className="panel panel-default">
                        <div className="panel-heading">Custom Filter Example</div>
                        <div className="panel-body">
                            <h5>Source in /examples/js/column-filter/custom-filter.js</h5>
                            <CustomFilter />
                        </div>
                    </div>
                </div>
                <div className="col-md-offset-1 col-md-8">
                    <div className="panel panel-default">
                        <div className="panel-heading">All Types of Filters Example</div>
                        <div className="panel-body">
                            <h5>Source in /examples/js/column-filter/all-filters.js</h5>
                            <AllFilter />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Demo;

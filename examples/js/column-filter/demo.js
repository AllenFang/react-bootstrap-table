import React from 'react';
import TextFiltering from './text-filter';
import SelectFiltering from './select-filter';
import NumberFiltering from './number-filter';
import NumberOptionsFiltering from './number-options-filter';
import DateFiltering from './date-filter';
import CustomFiltering from './custom-filter';
import AllFiltering from './all-filters';

class Demo extends React.Component {
    render() {
        return (
            <div>
                <div className="col-md-offset-1 col-md-8">
                    <div className="panel panel-default">
                        <div className="panel-heading">Text Filter Example</div>
                        <div className="panel-body">
                            <h5>Source in /examples/js/column-filter/text-filter.js</h5>
                            <TextFiltering />
                        </div>
                    </div>
                </div>
                <div className="col-md-offset-1 col-md-8">
                    <div className="panel panel-default">
                        <div className="panel-heading">Select Filter Example</div>
                        <div className="panel-body">
                            <h5>Source in /examples/js/column-filter/select-filter.js</h5>
                            <SelectFiltering />
                        </div>
                    </div>
                </div>
                <div className="col-md-offset-1 col-md-8">
                    <div className="panel panel-default">
                        <div className="panel-heading">Number Filter Example</div>
                        <div className="panel-body">
                            <h5>Source in /examples/js/column-filter/number-filter.js</h5>
                            <NumberFiltering />
                        </div>
                    </div>
                </div>
                <div className="col-md-offset-1 col-md-8">
                    <div className="panel panel-default">
                        <div className="panel-heading">Number with Options Filter Example</div>
                        <div className="panel-body">
                            <h5>Source in /examples/js/column-filter/number-options-filter.js</h5>
                            <NumberOptionsFiltering />
                        </div>
                    </div>
                </div>
                <div className="col-md-offset-1 col-md-8">
                    <div className="panel panel-default">
                        <div className="panel-heading">Date Filter Example</div>
                        <div className="panel-body">
                            <h5>Source in /examples/js/column-filter/date-filter.js</h5>
                            <DateFiltering />
                        </div>
                    </div>
                </div>
                <div className="col-md-offset-1 col-md-8">
                    <div className="panel panel-default">
                        <div className="panel-heading">Custom Filter Example</div>
                        <div className="panel-body">
                            <h5>Source in /examples/js/column-filter/custom-filter.js</h5>
                            <CustomFiltering />
                        </div>
                    </div>
                </div>
                <div className="col-md-offset-1 col-md-8">
                    <div className="panel panel-default">
                        <div className="panel-heading">All Types of Filters Example</div>
                        <div className="panel-body">
                            <h5>Source in /examples/js/column-filter/all-filters.js</h5>
                            <AllFiltering />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Demo;

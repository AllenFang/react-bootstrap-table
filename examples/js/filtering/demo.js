import React from 'react';
import TextFiltering from './text-filtering';
import SelectFiltering from './select-filtering';
import AllFiltering from './all-filtering';

class Demo extends React.Component {
    render() {
        return (
            <div>
                <div className="col-md-offset-1 col-md-8">
                    <div className="panel panel-default">
                        <div className="panel-heading">Text Filtering Example</div>
                        <div className="panel-body">
                            <h5>Source in /examples/js/filtering/text-filtering.js</h5>
                            <TextFiltering />
                        </div>
                    </div>
                </div>
                <div className="col-md-offset-1 col-md-8">
                    <div className="panel panel-default">
                        <div className="panel-heading">Select Filtering Example</div>
                        <div className="panel-body">
                            <h5>Source in /examples/js/filtering/select-filtering.js</h5>
                            <SelectFiltering />
                        </div>
                    </div>
                </div>
                <div className="col-md-offset-1 col-md-8">
                    <div className="panel panel-default">
                        <div className="panel-heading">All Types of Filtering Example</div>
                        <div className="panel-body">
                            <h5>Source in /examples/js/filtering/all-filtering.js</h5>
                            <AllFiltering />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Demo;

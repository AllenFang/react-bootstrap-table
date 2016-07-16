/* eslint max-len: 0 */
import React from 'react';
import TextFilter from './text-filter';
import TextFilterWithDefaultValue from './text-filter-with-default-value';
import TextFilterCustomHandler from './text-filter-custom-handler';
import RegexFilter from './regex-filter';
import SelectFilter from './select-filter';
import SelectFilterWithDefaultValue from './select-filter-with-default-value';
import SelectFilterWithSort from './select-filter-with-sort';
import NumberFilter from './number-filter';
import NumberFilterWithDefaultValue from './number-filter-with-default-value';
import NumberOptionsFilter from './number-options-filter';
import NumberOptionsFilterWithDefaultValue from './number-options-filter-with-default-value';
import DateFilter from './date-filter';
import DateFilterWithDefaultValue from './date-filter-with-default-value';
import CustomFilter from './custom-filter';
import AllFilter from './all-filters';
import FloatFilter from './float-filter';

class Demo extends React.Component {
  render() {
    return (
        <div>
            <div className='col-md-offset-1 col-md-8'>
                <div className='panel panel-default'>
                    <div className='panel-heading'>Text Filter Example</div>
                    <div className='panel-body'>
                        <h5>Source in /examples/js/column-filter/text-filter.js</h5>
                        <TextFilter />
                    </div>
                </div>
            </div>
            <div className='col-md-offset-1 col-md-8'>
                <div className='panel panel-default'>
                    <div className='panel-heading'>Text Filter With Default Value Example</div>
                    <div className='panel-body'>
                        <h5>Source in /examples/js/column-filter/text-filter-with-default-value.js</h5>
                        <TextFilterWithDefaultValue />
                    </div>
                </div>
            </div>
            <div className='col-md-offset-1 col-md-8'>
                <div className='panel panel-default'>
                    <div className='panel-heading'>Text Filter With Custom Handler Example ( clear filter input text, exposed api for dynamic params )</div>
                    <div className='panel-body'>
                        <h5>Source in /examples/js/column-filter/text-filter-custom-handler.js</h5>
                        <TextFilterCustomHandler />
                    </div>
                </div>
            </div>
            <div className='col-md-offset-1 col-md-8'>
                <div className='panel panel-default'>
                    <div className='panel-heading'>Regex Filter</div>
                    <div className='panel-body'>
                        <h5>Source in /examples/js/column-filter/regex-filter.js</h5>
                        <RegexFilter />
                    </div>
                </div>
            </div>
            <div className='col-md-offset-1 col-md-8'>
                <div className='panel panel-default'>
                    <div className='panel-heading'>Select Filter Example</div>
                    <div className='panel-body'>
                        <h5>Source in /examples/js/column-filter/select-filter.js</h5>
                        <SelectFilter />
                    </div>
                </div>
            </div>
            <div className='col-md-offset-1 col-md-8'>
                <div className='panel panel-default'>
                    <div className='panel-heading'>Select Filter With Default Value Example</div>
                    <div className='panel-body'>
                        <h5>Source in /examples/js/column-filter/select-filter-with-default-value.js</h5>
                        <SelectFilterWithDefaultValue />
                    </div>
                </div>
            </div>
            <div className='col-md-offset-1 col-md-8'>
                <div className='panel panel-default'>
                    <div className='panel-heading'>Select Filter With Column Sorting Example</div>
                    <div className='panel-body'>
                        <h5>Source in /examples/js/column-filter/select-filter-with-sort.js</h5>
                        <SelectFilterWithSort />
                    </div>
                </div>
            </div>
            <div className='col-md-offset-1 col-md-8'>
                <div className='panel panel-default'>
                    <div className='panel-heading'>Number Filter Example</div>
                    <div className='panel-body'>
                        <h5>Source in /examples/js/column-filter/number-filter.js</h5>
                        <NumberFilter />
                    </div>
                </div>
            </div>
            <div className='col-md-offset-1 col-md-8'>
                <div className='panel panel-default'>
                    <div className='panel-heading'>Floating point number Filter Example</div>
                    <div className='panel-body'>
                        <h5>Source in /examples/js/column-filter/float-filter.js</h5>
                        <FloatFilter />
                    </div>
                </div>
            </div>
            <div className='col-md-offset-1 col-md-8'>
                <div className='panel panel-default'>
                    <div className='panel-heading'>Number Filter With Default Value Example</div>
                    <div className='panel-body'>
                        <h5>Source in /examples/js/column-filter/number-filter-with-default-value.js</h5>
                        <NumberFilterWithDefaultValue />
                    </div>
                </div>
            </div>
            <div className='col-md-offset-1 col-md-8'>
                <div className='panel panel-default'>
                    <div className='panel-heading'>Number with Options Filter Example</div>
                    <div className='panel-body'>
                        <h5>Source in /examples/js/column-filter/number-options-filter.js</h5>
                        <NumberOptionsFilter />
                    </div>
                </div>
            </div>
            <div className='col-md-offset-1 col-md-8'>
                <div className='panel panel-default'>
                    <div className='panel-heading'>Number with Options Filter With Default Value Example</div>
                    <div className='panel-body'>
                        <h5>Source in /examples/js/column-filter/number-options-filter-with-default-value.js</h5>
                        <NumberOptionsFilterWithDefaultValue />
                    </div>
                </div>
            </div>
            <div className='col-md-offset-1 col-md-8'>
                <div className='panel panel-default'>
                    <div className='panel-heading'>Date Filter Example</div>
                    <div className='panel-body'>
                        <h5>Source in /examples/js/column-filter/date-filter.js</h5>
                        <DateFilter />
                    </div>
                </div>
            </div>
            <div className='col-md-offset-1 col-md-8'>
                <div className='panel panel-default'>
                    <div className='panel-heading'>Date Filter With Default Value Example</div>
                    <div className='panel-body'>
                        <h5>Source in /examples/js/column-filter/date-filter-with-default-value.js</h5>
                        <DateFilterWithDefaultValue />
                    </div>
                </div>
            </div>
            <div className='col-md-offset-1 col-md-8'>
                <div className='panel panel-default'>
                    <div className='panel-heading'>Custom Filter Example</div>
                    <div className='panel-body'>
                        <h5>Source in /examples/js/column-filter/custom-filter.js</h5>
                        <CustomFilter />
                    </div>
                </div>
            </div>
            <div className='col-md-offset-1 col-md-8'>
                <div className='panel panel-default'>
                    <div className='panel-heading'>All Types of Filters Example</div>
                    <div className='panel-body'>
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

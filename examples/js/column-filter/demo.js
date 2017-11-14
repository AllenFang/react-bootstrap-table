/* eslint max-len: 0 */
import React from 'react';
import TextFilter from './text-filter';
import TextFilterWithDefaultValue from './text-filter-with-default-value';
import TextFilterWithCondition from './text-filter-with-eq-condition';
import ProgrammaticallyTextFilter from './text-filter-programmatically';
import FilterStyle from './filter-style';
import RegexFilter from './regex-filter';
import ProgrammaticallyRegexFilter from './regex-filter-programmatically';
import SelectFilter from './select-filter';
import SelectFilterWithCondition from './select-filter-with-eq-condition';
import SelectFilterWithCustomText from './select-filter-with-select-text';
import SelectFilterWithDefaultValue from './select-filter-with-default-value';
import ProgrammaticallySelectFilter from './select-filter-programmatically';
import SelectFilterWithSort from './select-filter-with-sort';
import SelectFilterWithoutEmptyOption from './select-filter-without-empty-option';
import NumberFilter from './number-filter';
import NumberFilterWithDefaultValue from './number-filter-with-default-value';
import ProgrammaticallyNumberFilter from './number-filter-programmatically';
import NumberOptionsFilter from './number-options-filter';
import NumberOptionsFilterWithDefaultValue from './number-options-filter-with-default-value';
import NumberFilterWithoutEmptyOption from './number-filter-without-empty-option';
import DateFilter from './date-filter';
import DateFilterWithDefaultValue from './date-filter-with-default-value';
import ProgrammaticallyDateFilter from './date-filter-programmatically';
import CustomFilter from './custom-filter';
import AllFilter from './all-filters';
import FloatFilter from './float-filter';
import ArrayFilter from './array-filter-programmatically';

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
                    <div className='panel-heading'>Text Filter with EQ Condition Example</div>
                    <div className='panel-body'>
                        <h5>Source in /examples/js/column-filter/text-filter-with-eq-condition.js</h5>
                        <span>
                            The Text, Select and Custom filter will take the <code>condition</code>, this tell filter how to filter data.<br/>
                            Default is <code>like</code>, and you can use <code>eq</code> to filter data with fully matching.
                        </span>
                        <TextFilterWithCondition />
                    </div>
                </div>
            </div>
            <div className='col-md-offset-1 col-md-8'>
                <div className='panel panel-default'>
                    <div className='panel-heading'>Set Text Filter Programmatically</div>
                    <div className='panel-body'>
                        <h5>Source in /examples/js/column-filter/text-filter-programmatically.js</h5>
                        <ProgrammaticallyTextFilter />
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
                    <div className='panel-heading'>Set Regex Filter Programmatically</div>
                    <div className='panel-body'>
                        <h5>Source in /examples/js/column-filter/regex-filter-programmatically.js</h5>
                        <ProgrammaticallyRegexFilter />
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
                    <div className='panel-heading'>Select Filter with EQ Condition Example</div>
                    <div className='panel-body'>
                        <h5>Source in /examples/js/column-filter/select-filter-with-eq-condition.js</h5>
                        <span>
                            The Text, Select and Custom filter will take the <code>condition</code>, this tell filter how to filter data.<br/>
                            Default is <code>like</code>, and you can use <code>eq</code> to filter data with fully matching.
                        </span>
                        <SelectFilterWithCondition />
                    </div>
                </div>
            </div>
            <div className='col-md-offset-1 col-md-8'>
                <div className='panel panel-default'>
                    <div className='panel-heading'>Select Filter with Custom Text Example</div>
                    <div className='panel-body'>
                        <h5>Source in /examples/js/column-filter/select-filter-with-select-text.js</h5>
                        <SelectFilterWithCustomText />
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
                    <div className='panel-heading'>Set Select Filter Programmatically</div>
                    <div className='panel-body'>
                        <h5>Source in /examples/js/column-filter/select-filter-programmatically.js</h5>
                        <ProgrammaticallySelectFilter />
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
                    <div className='panel-heading'>Select Filter Without Empty Option Example</div>
                    <div className='panel-body'>
                        <h5>Source in /examples/js/column-filter/select-filter-without-empty-option.js</h5>
                        <SelectFilterWithoutEmptyOption />
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
                    <div className='panel-heading'>Set Number Filter Programmatically</div>
                    <div className='panel-body'>
                        <h5>Source in /examples/js/column-filter/number-filter-programmatically.js</h5>
                        <ProgrammaticallyNumberFilter />
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
                    <div className='panel-heading'>Number Filter Without Empty Option Example</div>
                    <div className='panel-body'>
                        <h5>Source in /examples/js/column-filter/number-filter-without-empty-option.js</h5>
                        <NumberFilterWithoutEmptyOption />
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
                    <div className='panel-heading'>Set Date Filter Programmatically</div>
                    <div className='panel-body'>
                        <h5>Source in /examples/js/column-filter/date-filter-programmatically.js</h5>
                        <ProgrammaticallyDateFilter />
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
                        <h5>This example also show you how to clean filter programmatic :</h5>
                        <h5>You can call <code>cleanFiltered</code> which exposed by <code>TableHeaderColumn</code></h5>
                        <AllFilter />
                    </div>
                </div>
            </div>
            <div className='col-md-offset-1 col-md-8'>
                <div className='panel panel-default'>
                    <div className='panel-heading'>Filter Style</div>
                    <div className='panel-body'>
                        <h5>Source in /examples/js/column-filter/filter-style.js</h5>
                        <FilterStyle />
                    </div>
                </div>
            </div>
            <div className='col-md-offset-1 col-md-8'>
                <div className='panel panel-default'>
                    <div className='panel-heading'>Set Array Filter Programmatically</div>
                    <div className='panel-body'>
                        <h5>Source in /examples/js/column-filter/array-filter-programmatically.js</h5>
                        <ArrayFilter />
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Demo;

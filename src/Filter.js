import Const from './Const';
import { EventEmitter } from 'events';

export class Filter extends EventEmitter {
  constructor(data) {
    super(data);
    this.currentFilter = {};
  }

  handleFilter(dataField, value, type, filterObj) {
    const filterType = type || Const.FILTER_TYPE.CUSTOM;

    const props = {
      cond: filterObj.condition // Only for select and text filter
    };

    if (value !== null && typeof value === 'object') {
      // value of the filter is an object
      let hasValue = true;
      for (const prop in value) {
        if (!value[prop] || value[prop] === '') {
          hasValue = false;
          break;
        }
      }
      // if one of the object properties is undefined or empty, we remove the filter
      if (hasValue) {
        this.currentFilter[dataField] = { value: value, type: filterType, props };
      } else {
        delete this.currentFilter[dataField];
      }
    } else if (!value || value.trim() === '') {
      delete this.currentFilter[dataField];
    } else {
      this.currentFilter[dataField] = { value: value.trim(), type: filterType, props };
    }
    this.emit('onFilterChange', this.currentFilter);
  }
}

import Const from './Const';
var EventEmitter = require('events').EventEmitter;

export class Filter extends EventEmitter {
    constructor(data) {
        super(data);
        this.currentFilter = {};
    }

    handleFilter(dataField, value, type) {
        if (typeof value === 'object') {
            let hasValue = true;
            for (let prop in value) {
                if (!value[prop] || value[prop] === "") {
                    hasValue = false;
                    break;
                }
            }
            (hasValue) ? this.currentFilter[dataField] = {value: value, type: type} : delete this.currentFilter[dataField];
        } else if (value.trim() === "") {
            delete this.currentFilter[dataField];
        } else {
            this.currentFilter[dataField] = {value: value.trim(), type: type || Const.FILTER_TYPE.TEXT};
        }
        this.emit('filter', this.currentFilter);
    }
}

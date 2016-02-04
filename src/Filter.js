var EventEmitter = require('events').EventEmitter;

export class Filter extends EventEmitter {
    constructor(data) {
        super(data);
        this.currentFilter = {};
    }

    handleFilter(dataField, value) {
        if (value.trim() === "") {
            delete this.currentFilter[dataField];
        } else {
            this.currentFilter[dataField] = value;
        }
        this.emit('filter', this.currentFilter);
    }
}

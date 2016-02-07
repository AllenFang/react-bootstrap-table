var EventEmitter = require('events').EventEmitter;

export class Filter extends EventEmitter {
    constructor(data) {
        super(data);
        this.currentFilter = {};
    }

    handleFilter(dataField, value) {
        if (typeof value === 'object') {
            // this is a number filter
            if (value.comparator === "" || value.value === "") {
                delete this.currentFilter[dataField];
            } else {
                this.currentFilter[dataField] = value;
            }
        }
        else if (value.trim() === "") {
            delete this.currentFilter[dataField];
        } else {
            this.currentFilter[dataField] = value.trim();
        }
        this.emit('filter', this.currentFilter);
    }
}

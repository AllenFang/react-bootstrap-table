var TableDataStore = require('../../src/store/TableDataStore.js').TableDataStore;

describe('TableDataStore', function() {

  var store;

  describe('search() modes (strictSearch and multiColumnSearch flags)', function() {

    var colInfos = {
      col1: { searchable: true },
      col2: { searchable: true },
      col3: { searchable: true },
      desc: { searchable: false }
    };
    var searchText = ' B C ';
    var data = [
        { col1: 'A B C D', col2: 'E', col3: 'F', desc: 'part of the content in col1' },
        { col1: 'A', col2: ' B C ', col3: 'D E F', desc: 'whole content in col2' },
        { col1: 'F E D', col2: ' C B ', col3: 'A', desc: 'whole content in wrong order in col2' },
        { col1: 'A', col2: 'B C ', col3: 'D E F', desc: 'without leading whitespace in col2' },
        { col1: 'A', col2: ' B C', col3: 'D E F', desc: 'without trailing whitespace in col2' },
        { col1: 'A B', col2: 'C D', col3: 'E F', desc: 'one part in col1, other part in col2' },
        { col1: 'A B', col2: 'X D', col3: 'E F', desc: 'one part in col1, other part absent' },
        { col1: 'A X', col2: 'X D', col3: 'E F', desc: 'completely absent' }
    ];

    beforeEach(function(){
      store = new TableDataStore(data);
    });

    [
      { colInfos: colInfos },
      { colInfos: colInfos, multiColumnSearch: false },
      { colInfos: colInfos, strictSearch: true },
      { colInfos: colInfos, multiColumnSearch: false, strictSearch: true }
    ].forEach(function(props) {
      it('default strict single column mode - multiColumnSearch: ' + props.multiColumnSearch
          + ', strictSearch: ' + props.strictSearch, function() {
        store.setProps(props);

        store.search(searchText);
        expect(store.filteredData).toEqual(data.slice(0, 2));
      });
    });

    [
      { colInfos: colInfos, strictSearch: false },
      { colInfos: colInfos, multiColumnSearch: false, strictSearch: false }
    ].forEach(function(props) {
      it('non-strict single column mode - multiColumnSearch: ' + props.multiColumnSearch
          + ', strictSearch: ' + props.strictSearch, function() {
        store.setProps(props);

        store.search(searchText);
        expect(store.filteredData).toEqual(data.slice(0, 5));
      });
    });

    [
      { colInfos: colInfos, multiColumnSearch: true, strictSearch: true }
    ].forEach(function(props) {
      it('strict multi column mode - multiColumnSearch: ' + props.multiColumnSearch
          + ', strictSearch: ' + props.strictSearch, function() {
        store.setProps(props);

        store.search(searchText);
        expect(store.filteredData).toEqual(data.slice(0, 6));
      });
    });

    [
      { colInfos: colInfos, multiColumnSearch: true },
      { colInfos: colInfos, multiColumnSearch: true, strictSearch: false }
    ].forEach(function(props) {
      it('non-strict multi column mode - multiColumnSearch: ' + props.multiColumnSearch
          + ', strictSearch: ' + props.strictSearch, function() {
        store.setProps(props);

        store.search(searchText);
        expect(store.filteredData).toEqual(data.slice(0, 7));
      });
    });
  });

  describe('search() respecting formated or filter values', function() {

    var undefinedVar;
    var data = [
      { col: undefinedVar},
      { col: null },
      { col: 0 },
      { col: 'A' }
    ];

    beforeEach(function(){
      store = new TableDataStore(data);
    });

    [
      {
        searchable: true,
        filterValue: function() { return 'X'; }
      },
      {
        searchable: true,
        filterFormatted: true,
        format: function() { return 'X'; }
      },
      {
        searchable: true,
        filterValue: function() { return '-'; },
        filterFormatted: true,
        format: function() { return 'X'; }
      },
      {
        searchable: true,
        filterValue: function() { return 'X'; },
        filterFormatted: false,
        format: function() { return '-'; }
      },
      {
        searchable: true,
        filterValue: function() { return 'X'; },
        format: function() { return '-'; }
      }
    ].forEach(function(def) {
      it('include non-values with filterValue: ' + def.filterValue + ', format: ' + def.format
          + ', filterFormatted: ' + def.filterFormatted, function() {
        store.setProps({ colInfos: { col: def } });

        store.search('X');
        expect(store.filteredData.length).toBe(4);
        expect(store.filteredData).toEqual(data);
      });
    });
  });
});

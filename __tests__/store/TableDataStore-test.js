var TableDataStore = require('../../src/store/TableDataStore.js').TableDataStore;

describe('TableDataStore', function() {

  var store;

  beforeEach(function(){
    store = new TableDataStore();
  });

  describe('_search()', function() {

    var colInfosForModeTest = {
      col1: { searchable: true },
      col2: { searchable: true },
      col3: { searchable: true },
      desc: { searchable: false }
    };
    var searchTextForModeTest = ' B C ';
    var sourceForModeTest = [
        { col1: 'A B C D', col2: 'E', col3: 'F', desc: 'part of the content in col1' },
        { col1: 'A', col2: ' B C ', col3: 'D E F', desc: 'whole content in col2' },
        { col1: 'F E D', col2: ' C B ', col3: 'A', desc: 'whole content in wrong order in col2' },
        { col1: 'A', col2: 'B C ', col3: 'D E F', desc: 'without leading whitespace in col2' },
        { col1: 'A', col2: ' B C', col3: 'D E F', desc: 'without trailing whitespace in col2' },
        { col1: 'A B', col2: 'C D', col3: 'E F', desc: 'one part in col1, other part in col2' },
        { col1: 'A B', col2: 'X D', col3: 'E F', desc: 'one part in col1, other part absent' },
        { col1: 'A X', col2: 'X D', col3: 'E F', desc: 'completely absent' }
    ];

    [
      { colInfos: colInfosForModeTest },
      { colInfos: colInfosForModeTest, multiColumnSearch: false },
      { colInfos: colInfosForModeTest, strictSearch: true },
      { colInfos: colInfosForModeTest, multiColumnSearch: false, strictSearch: true }
    ].forEach(function(props) {
      it('default strict single column mode - multiColumnSearch: ' + props.multiColumnSearch
          + ', strictSearch: ' + props.strictSearch, function() {
        store.setProps(props);
        store.searchText = searchTextForModeTest;

        store._search(sourceForModeTest);
        expect(store.filteredData).toEqual(sourceForModeTest.slice(0, 2));
      });
    });

    [
      { colInfos: colInfosForModeTest, strictSearch: false },
      { colInfos: colInfosForModeTest, multiColumnSearch: false, strictSearch: false }
    ].forEach(function(props) {
      it('non-strict single column mode - multiColumnSearch: ' + props.multiColumnSearch
          + ', strictSearch: ' + props.strictSearch, function() {
        store.setProps(props);
        store.searchText = searchTextForModeTest;

        store._search(sourceForModeTest);
        expect(store.filteredData).toEqual(sourceForModeTest.slice(0, 5));
      });
    });

    [
      { colInfos: colInfosForModeTest, multiColumnSearch: true, strictSearch: true }
    ].forEach(function(props) {
      it('strict multi column mode - multiColumnSearch: ' + props.multiColumnSearch
          + ', strictSearch: ' + props.strictSearch, function() {
        store.setProps(props);
        store.searchText = searchTextForModeTest;

        store._search(sourceForModeTest);
        expect(store.filteredData).toEqual(sourceForModeTest.slice(0, 6));
      });
    });

    [
      { colInfos: colInfosForModeTest, multiColumnSearch: true },
      { colInfos: colInfosForModeTest, multiColumnSearch: true, strictSearch: false }
    ].forEach(function(props) {
      it('non-strict multi column mode - multiColumnSearch: ' + props.multiColumnSearch
          + ', strictSearch: ' + props.strictSearch, function() {
        store.setProps(props);
        store.searchText = searchTextForModeTest;

        store._search(sourceForModeTest);
        expect(store.filteredData).toEqual(sourceForModeTest.slice(0, 7));
      });
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
      it('include non-values with filterValue: ' + (def.filterValue ? 'func' : def.filterValue)
          + ', format: ' + (def.format ? 'func' : def.format)
          + ', filterFormatted: ' + def.filterFormatted, function() {
        store.setProps({ colInfos: { col: def } });
        store.searchText = 'X';
        var undefinedVar;

        store._search([
            { col: undefinedVar},
            { col: null },
            { col: 0 },
            { col: 'A' }
        ]);
        expect(store.filteredData.length).toBe(4);
      });
    });
  });
});

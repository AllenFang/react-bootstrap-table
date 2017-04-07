var TableDataStore = require('../../src/store/TableDataStore.js').TableDataStore;

describe('TableDataStore', function() {

  var store;

  beforeEach(function(){
    store = new TableDataStore();
  });

  describe('_search()', function() {

    var colInfos = {
      col1: { searchable: true },
      col2: { searchable: true },
      col3: { searchable: true },
      desc: { searchable: false }
    };
    var searchText = ' B C ';
    var source = [
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
      {},
      { multiColumnSearch: false },
      { strictSearch: true },
      { multiColumnSearch: false, strictSearch: true }
    ].forEach(function(props) {
      it('default strict single column mode - multiColumnSearch: ' + props.multiColumnSearch
          + ', strictSearch: ' + props.strictSearch, function() {
        store.setProps({
          colInfos: colInfos,
          multiColumnSearch: props.multiColumnSearch,
          strictSearch: props.strictSearch
        });
        store.searchText = searchText;

        store._search(source);
        expect(store.filteredData).toEqual(source.slice(0, 2));
      });
    });

    [
      { strictSearch: false },
      { multiColumnSearch: false, strictSearch: false }
    ].forEach(function(props) {
      it('non-strict single column mode - multiColumnSearch: ' + props.multiColumnSearch
          + ', strictSearch: ' + props.strictSearch, function() {
        store.setProps({
          colInfos: colInfos,
          multiColumnSearch: props.multiColumnSearch,
          strictSearch: props.strictSearch
        });
        store.searchText = searchText;

        store._search(source);
        expect(store.filteredData).toEqual(source.slice(0, 5));
      });
    });

    [
      { multiColumnSearch: true, strictSearch: true }
    ].forEach(function(props) {
      it('strict multi column mode - multiColumnSearch: ' + props.multiColumnSearch
          + ', strictSearch: ' + props.strictSearch, function() {
        store.setProps({
          colInfos: colInfos,
          multiColumnSearch: props.multiColumnSearch,
          strictSearch: props.strictSearch
        });
        store.searchText = searchText;

        store._search(source);
        expect(store.filteredData).toEqual(source.slice(0, 6));
      });
    });

    [
      { multiColumnSearch: true },
      { multiColumnSearch: true, strictSearch: false }
    ].forEach(function(props) {
      it('non-strict multi column mode - multiColumnSearch: ' + props.multiColumnSearch
          + ', strictSearch: ' + props.strictSearch, function() {
        store.setProps({
          colInfos: colInfos,
          multiColumnSearch: props.multiColumnSearch,
          strictSearch: props.strictSearch
        });
        store.searchText = searchText;

        store._search(source);
        expect(store.filteredData).toEqual(source.slice(0, 7));
      });
    });
  });
});

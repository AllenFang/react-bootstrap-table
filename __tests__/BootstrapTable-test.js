jest.dontMock('../src/BootstrapTable.js');
jest.dontMock('../src/TableHeaderColumn.js');
jest.dontMock('../src/TableBody.js');
jest.dontMock('../src/TableColumn.js');
jest.dontMock('../src/TableHeader.js');
jest.dontMock('../src/TableRow.js');
jest.dontMock('../src/pagination/PaginationList.js');
jest.dontMock('../src/pagination/PageButton.js');

xdescribe('BootstrapTable', function() {
  var testData = [
    {id: 1, name: "name1", price: 100},
    {id: 2, name: "name2", price: 120},
    {id: 3, name: "name3", price: 130},
    {id: 4, name: "name4", price: 140},
    {id: 5, name: "name5", price: 110}
  ];

  it('init', function() {
    
  });
});

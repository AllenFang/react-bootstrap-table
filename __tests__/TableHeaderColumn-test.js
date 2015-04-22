jest.dontMock('../src/BootstrapTable.js');
jest.dontMock('../src/TableHeaderColumn.js');
jest.dontMock('../src/TableBody.js');
jest.dontMock('../src/TableColumn.js');
jest.dontMock('../src/TableHeader.js');
jest.dontMock('../src/TableRow.js');
jest.dontMock('../src/pagination/PaginationList.js');
jest.dontMock('../src/pagination/PageButton.js');

describe('TableHeaderColumn Test', function() {

  var React;
  var TestUtils;
  var ReactTestUtils;
  var TableHeaderColumn;

  beforeEach(function(){
    React = require('react/addons');
    TableHeaderColumn = require('../src/TableHeaderColumn.js');
    TestUtils = React.addons.TestUtils;
    ReactTestUtils = React.addons.ReactTestUtils;
  });

  it('A basic table header column test', function() {

    var idHeaderColumn = TestUtils.renderIntoDocument(
      <TableHeaderColumn dataField="id">Product ID</TableHeaderColumn>
    );

    expect(idHeaderColumn.props.dataField).toEqual("id");
    expect(idHeaderColumn.props.children).toEqual("Product ID");
    expect(idHeaderColumn.props.dataAlign).toEqual("left");
    expect(idHeaderColumn.props.dataSort).toEqual(false);
    expect(idHeaderColumn.props.dataFormat).toBe(undefined);


    var reactThElm = TestUtils.findRenderedDOMComponentWithTag(idHeaderColumn, 'th');
    expect(reactThElm).not.toBe(null);
    var th = reactThElm.getDOMNode();
    expect(th.className).toEqual("");
    expect(th.childNodes.length).toEqual(1);

    var reactDivElm = TestUtils.findRenderedDOMComponentWithTag(idHeaderColumn, 'div');
    expect(reactDivElm).not.toBe(null);
    var div = reactDivElm.getDOMNode();
    expect(div.className).toEqual("th-inner table-header-column");
    expect(div.textContent).toEqual("Product ID");

    // ReactTestUtils.Simulate.click(reactDivElm);
    // expect(th.getDOMNode()).toEqual(0);
  });
});

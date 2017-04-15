jest.dontMock('../src/BootstrapTable.js');
jest.dontMock('../src/TableHeaderColumn.js');
jest.dontMock('../src/TableBody.js');
jest.dontMock('../src/TableColumn.js');
jest.dontMock('../src/TableHeader.js');
jest.dontMock('../src/TableRow.js');
jest.dontMock('../src/pagination/PaginationList.js');
jest.dontMock('../src/pagination/PageButton.js');

xdescribe('TableHeaderColumn Test', function() {

  var React;
  var TestUtils;
  var ReactTestUtils;
  var TableHeaderColumn;

  beforeEach(function(){
    React = require('react/addons');
    TableHeaderColumn = require('../src/TableHeaderColumn.js');
    TestUtils = React.addons.TestUtils;
  });

  it('A basic table header column test', function() {

    var idHeaderColumn = TestUtils.renderIntoDocument(
      <TableHeaderColumn dataField="id" isKey={true}>Product ID</TableHeaderColumn>
    );

    expect(idHeaderColumn.props.dataField).toEqual("id");
    expect(idHeaderColumn.props.children).toEqual("Product ID");
    expect(idHeaderColumn.props.dataAlign).toEqual("left");
    expect(idHeaderColumn.props.dataSort).toEqual(false);
    expect(idHeaderColumn.props.columnTitle).toEqual(false);
    expect(idHeaderColumn.props.dataFormat).toBe(undefined);
    expect(idHeaderColumn.props.isKey).toBe(true);


    var reactThElm = TestUtils.findRenderedDOMComponentWithTag(idHeaderColumn, 'th');
    expect(reactThElm).not.toBe(null);
    var th = reactThElm.getDOMNode();
    expect(th.className).toEqual("");
    expect(th.childNodes.length).toEqual(1);
    expect(th.style.textAlign).toEqual("left");

    var reactDivElm = TestUtils.findRenderedDOMComponentWithTag(idHeaderColumn, 'div');
    expect(reactDivElm).not.toBe(null);
    var div = reactDivElm.getDOMNode();
    expect(div.className).toEqual("th-inner table-header-column");
    expect(div.textContent).toEqual("Product ID");

    // ReactTestUtils.Simulate.click(reactDivElm);
    // expect(th.getDOMNode()).toEqual(0);
  });

  it('A align header column test', function(){
    var idHeaderColumn = TestUtils.renderIntoDocument(
      <TableHeaderColumn dataField="id" dataAlign="center">Product ID</TableHeaderColumn>
    );

    expect(idHeaderColumn.props.dataField).toEqual("id");
    expect(idHeaderColumn.props.children).toEqual("Product ID");
    expect(idHeaderColumn.props.dataAlign).toEqual("center");
    expect(idHeaderColumn.props.dataSort).toEqual(false);
    expect(idHeaderColumn.props.columnTitle).toEqual(false);
    expect(idHeaderColumn.props.dataFormat).toBe(undefined);
    expect(idHeaderColumn.props.isKey).toBe(false);

    var reactThElm = TestUtils.findRenderedDOMComponentWithTag(idHeaderColumn, 'th');
    expect(reactThElm).not.toBe(null);
    expect(reactThElm.getDOMNode().style.textAlign).toEqual("center");
  });

  it('A unique header column test', function(){
    var idHeaderColumn = TestUtils.renderIntoDocument(
      <TableHeaderColumn dataField="id" isKey={true}>Product ID</TableHeaderColumn>
    );

    expect(idHeaderColumn.props.dataField).toEqual("id");
    expect(idHeaderColumn.props.children).toEqual("Product ID");
    expect(idHeaderColumn.props.dataAlign).toEqual("left");
    expect(idHeaderColumn.props.dataSort).toEqual(false);
    expect(idHeaderColumn.props.columnTitle).toEqual(false);
    expect(idHeaderColumn.props.dataFormat).toBe(undefined);
    expect(idHeaderColumn.props.isKey).toBe(true);
  });

  it('A dataformat header column test', function(){
    function priceFormatter(cell, row){
      return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
    }

    var idHeaderColumn = TestUtils.renderIntoDocument(
      <TableHeaderColumn dataField="id" dataFormat={priceFormatter}>Product ID</TableHeaderColumn>
    );

    expect(idHeaderColumn.props.dataField).toEqual("id");
    expect(idHeaderColumn.props.children).toEqual("Product ID");
    expect(idHeaderColumn.props.dataAlign).toEqual("left");
    expect(idHeaderColumn.props.dataSort).toEqual(false);
    expect(idHeaderColumn.props.columnTitle).toEqual(false);
    expect(idHeaderColumn.props.dataFormat).toEqual(priceFormatter);
    expect(idHeaderColumn.props.isKey).toBe(false);
  });

  it('A columnTitle header column test', function(){
    var idHeaderColumn = TestUtils.renderIntoDocument(
      <TableHeaderColumn dataField="id" columnTitle={ true }>Product ID</TableHeaderColumn>
    );

    expect(idHeaderColumn.props.dataField).toEqual("id");
    expect(idHeaderColumn.props.children).toEqual("Product ID");
    expect(idHeaderColumn.props.dataAlign).toEqual("left");
    expect(idHeaderColumn.props.dataSort).toEqual(false);
    expect(idHeaderColumn.props.columnTitle).toEqual(true);
    expect(idHeaderColumn.props.dataFormat).toEqual(undefined);
    expect(idHeaderColumn.props.isKey).toBe(false);
  });
  
  it('A sort header column test', function(){
    var idHeaderColumn = TestUtils.renderIntoDocument(
      <TableHeaderColumn dataField="id" dataSort={true}>Product ID</TableHeaderColumn>
    );

    expect(idHeaderColumn.props.dataField).toEqual("id");
    expect(idHeaderColumn.props.children).toEqual("Product ID");
    expect(idHeaderColumn.props.dataAlign).toEqual("left");
    expect(idHeaderColumn.props.dataSort).toEqual(true);
    expect(idHeaderColumn.props.dataFormat).toBe(undefined);
    expect(idHeaderColumn.props.isKey).toBe(false);

    var reactThElm = TestUtils.findRenderedDOMComponentWithTag(idHeaderColumn, 'th');
    expect(reactThElm).not.toBe(null);
    var th = reactThElm.getDOMNode();
    console.log(th.className);
    expect(th.className).toEqual("sort-column");
    expect(th.childNodes.length).toEqual(1);
    expect(th.style.textAlign).toEqual("left");

    var reactDivElm = TestUtils.findRenderedDOMComponentWithTag(idHeaderColumn, 'div');
    expect(reactDivElm).not.toBe(null);
    var div = reactDivElm.getDOMNode();
    expect(div.className).toEqual("th-inner table-header-column");
    expect(div.textContent).toEqual("Product ID");

    TestUtils.Simulate.click(reactDivElm);
    expect(div.childNodes.length).toEqual(2);
    console.log(div.childNodes[1]);
  });
});

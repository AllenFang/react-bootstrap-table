import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';

// import 'bootstrap/dist/css/bootstrap.css';
import 'toastr/build/toastr.min.css';
import '../../../css/react-bootstrap-table.css';
// import 'jquery';
// import 'bootstrap';
import {
  Navbar,
  NavBrand,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Grid,
  Row,
  Col,
} from 'react-bootstrap';

class App extends React.Component {

  static propTypes = {
    children: React.PropTypes.node,
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    let examples = [{
      text: 'Basic Table',
      href: 'basic',
    }, {
      text: 'Work on Column',
      href: 'column',
    }, {
      text: 'Table Sort',
      href: 'sort',
    }, {
      text: 'Column Format',
      href: 'column-format',
    }, {
      text: 'Column Filter',
      href: 'column-filter',
    }, {
      text: 'Row Selection',
      href: 'selection',
    }, {
      text: 'Pagination',
      href: 'pagination',
    }, {
      text: 'Table Manipulation',
      href: 'manipulation',
    }, {
      text: 'Cell Edit',
      href: 'cell-edit',
    }, {
      text: 'Table Styling',
      href: 'style',
    }, {
      text: 'Advance data edit&insert',
      href: 'advance',
    }, {
      text: 'A complex demo',
      href: 'complex',
    }, {
      text: 'TableDataSet demo',
      href: 'tableDataSet',
    }];

    const exampleMenuItems = examples.map((item, idx)=> {
      return (
        <LinkContainer key={idx} to={'/examples/' + item.href}>
          <MenuItem key={idx}>{item.text}</MenuItem>
        </LinkContainer>
      );
    });
    return (
      <div>
        <Navbar inverse toggleNavKey={0}>
          <NavBrand><a href="#">react-bootstrap-table</a></NavBrand>
          <Nav>
            <LinkContainer to="/getting-started">
              <NavItem>Getting started</NavItem>
            </LinkContainer>
            <NavDropdown title="Examples" id="collapsible-navbar-dropdown">
              {exampleMenuItems}
            </NavDropdown>
            <NavItem href="https://github.com/AllenFang/react-bootstrap-table" target="_blank">GitHub</NavItem>
          </Nav>
        </Navbar>
        <Grid fluid>
          <Row>
            <Col md={12}>
              {this.props.children}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;

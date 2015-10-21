import React from 'react';

// import 'bootstrap/dist/css/bootstrap.css';
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
    const exampleMenuItems = examples.map((e, i)=>{
      return <MenuItem eventKey={i} href={'#examples/' + e.href}>{e.text}</MenuItem>;
    });
    return (
      <div>
        <Navbar inverse toggleNavKey={0}>
          <NavBrand><a href="#">react-bootstrap-table</a></NavBrand>
          <Nav eventKey={1}>
            <NavItem eventKey={1} href="#getting-started">Getting started</NavItem>
            <NavDropdown title="Examples" id="collapsible-navbar-dropdown">
              {exampleMenuItems}
            </NavDropdown>
            <NavItem eventKey={2} href="https://github.com/luqin/react-bootstrap-table" target="_blank">GitHub</NavItem>
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

/* eslint max-len: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/scale.css';
import '../../../css/react-bootstrap-table.css';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';

class App extends React.Component {

  static propTypes = {
    children: PropTypes.node
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const examples = [ {
      text: 'Basic Table',
      href: 'basic'
    }, {
      text: 'Work on Column',
      href: 'column'
    }, {
      text: 'Table Sort',
      href: 'sort'
    }, {
      text: 'Column Format',
      href: 'column-format'
    }, {
      text: 'Column Filter',
      href: 'column-filter'
    }, {
      text: 'Column Header Span',
      href: 'column-header-span'
    }, {
      text: 'Row Selection',
      href: 'selection'
    }, {
      text: 'Pagination',
      href: 'pagination'
    }, {
      text: 'Table Manipulation',
      href: 'manipulation'
    }, {
      text: 'Cell Edit',
      href: 'cell-edit'
    }, {
      text: 'Table Styling',
      href: 'style'
    }, {
      text: 'Remote Data',
      href: 'remote'
    }, {
      text: 'Advance data edit&insert',
      href: 'advance'
    }, {
      text: 'Expandable Row',
      href: 'expandRow'
    }, {
      text: 'KeyBoard Navigation',
      href: 'keyboard-nav'
    }, {
      text: 'Footer',
      href: 'footer'
    }, {
      text: 'Other',
      href: 'others'
    }, {
      text: 'A complex demo',
      href: 'complex'
    }, {
      text: 'Custom',
      href: 'custom'
    } ];

    const exampleMenuItems = examples.map((item) => {
      return (
        <li key={ item.href }>
          <a href={ `#/examples/${item.href}` }>{ item.text }</a>
        </li>
      );
    });
    return (
      <div>
        <nav className='navbar navbar-inverse'>
          <div className='container-fluid'>
            <div className='navbar-header'>
              <a className='navbar-brand' href='#'>react-bootstrap-table</a>
            </div>
            <div className='collapse navbar-collapse'>
              <ul className='nav navbar-nav'>
                <li>
                  <a href='#/getting-started'>Getting Started</a>
                </li>
                <li>
                  <a href='https://github.com/AllenFang/react-bootstrap-table'>Github</a>
                </li>
                <li className='dropdown'>
                  <a href='#' className='dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>Examples <span className='caret'></span></a>
                  <ul className='dropdown-menu'>
                    { exampleMenuItems }
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Grid fluid>
          <Row>
            <Col md={ 12 }>
              { this.props.children }
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;

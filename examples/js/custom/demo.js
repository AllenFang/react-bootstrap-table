import React from 'react';
import renderLinks from '../utils';
import { Col, Panel } from 'react-bootstrap';
import CustomButtons from './custom-buttons';

class Demo extends React.Component {
  render() {
    return (
        <Col md={ 8 } mdOffset={ 1 }>
            <Panel header={ 'A react-bootstrap-table with custom buttons' }>
               { renderLinks('custom/custom-buttons.js') }
               <CustomButtons />
            </Panel>
        </Col>
    );
  }
}

export default Demo;

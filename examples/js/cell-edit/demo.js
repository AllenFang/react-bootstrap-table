require('../../../css/react-bootstrap-table.min.css');
import React from 'react';
import ClickToEditTable from './click-to-edit-table';
import DbClickToEditTable from './dbclick-to-edit-table';
import BlurToSaveTable from './blur-to-save-table';
import CellEditHookTable from './cell-edit-hook-table';
import NonEditableTable from './non-editable-table';

React.render(
  <ClickToEditTable />,
	document.getElementById("click")
);

React.render(
  <DbClickToEditTable />,
  document.getElementById('dbclick')
);

React.render(
  <BlurToSaveTable />,
  document.getElementById('blur')
);

React.render(
  <NonEditableTable />,
  document.getElementById('non-editable')
);

React.render(
  <CellEditHookTable />,
  document.getElementById('hook')
);


class Demo extends React.Component {
	render() {
		return (
				<Col md={8} mdOffset={1}>
					<Panel header={"A basic react-bootstrap-table"}>
						<h5>Source in /examples/js/basic/basic-table.js</h5>
						<BasicTable/>
					</Panel>
					<Panel header={"A basic react-bootstrap-table"}>
						<h5>Source in /examples/js/basic/basic-table.js</h5>
						<HoverStripedTable/>
					</Panel>
					<Panel header={"A basic react-bootstrap-table"}>
						<h5>Source in /examples/js/basic/basic-table.js</h5>
						<ScrollTable/>
					</Panel>
				</Col>
		);
	}
}

export default Demo;

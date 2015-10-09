require('../../../css/react-bootstrap-table.min.css');
import React from 'react';
import ColumnAlignTable from './column-align-table';
import ColumnWidthTable from './column-width-table';
import ColumnHideTable from './column-hide-table';

React.render(
  <ColumnAlignTable />,
	document.getElementById("align")
);


React.render(
  <ColumnWidthTable />,
	document.getElementById("width")
);


React.render(
  <ColumnHideTable />,
	document.getElementById("hide")
);

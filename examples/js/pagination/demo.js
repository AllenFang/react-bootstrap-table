require('../../../css/react-bootstrap-table.css');
import React from 'react';
import DefaultPaginationTable from './default-pagination-table';
import CustomPaginationTable from './custom-pagination-table';

React.render(
  <DefaultPaginationTable />,
	document.getElementById("default")
);

React.render(
  <CustomPaginationTable />,
	document.getElementById("custom")
);

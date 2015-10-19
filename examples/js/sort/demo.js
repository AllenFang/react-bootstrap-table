require('../../../css/react-bootstrap-table.min.css');
import React from 'react';
import SortTable from './sort-table';
import DefaultSortTable from './default-sort-table';
import CustomSortTable from './custom-sort-table';

React.render(
  <SortTable />,
	document.getElementById("sort")
);

React.render(
  <DefaultSortTable />,
  document.getElementById('default-sort')
);

React.render(
  <CustomSortTable />,
  document.getElementById('custom-sort')
);
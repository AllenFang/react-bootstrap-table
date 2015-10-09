require('../../../css/react-bootstrap-table.min.css');
import React from 'react';
import BasicTable from './basic-table';
import HoverStripedTable from './hover-striped-table';
import ScrollTable from './scroll-table';

React.render(
  <BasicTable />,
	document.getElementById("basic")
);

React.render(
  <HoverStripedTable />,
  document.getElementById('hover-striped')
);


React.render(
  <ScrollTable />,
  document.getElementById('scroll')
);

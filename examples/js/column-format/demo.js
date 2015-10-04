require('../../../css/react-bootstrap-table.css');
import React from 'react';
import HtmlColumnFormatTable from './html-column-format-table';
import ReactColumnFormatTable from './react-column-format-table';

React.render(
  <HtmlColumnFormatTable />,
	document.getElementById("html-format")
);

React.render(
  <ReactColumnFormatTable />,
  document.getElementById('react-format')
);

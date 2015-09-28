require('../../../css/react-bootstrap-table.css');
import React from 'react';
import InsertRowTable from './insert-row-table';
import DeleteRowTable from './delete-row-table';
import SearchTable from './search-table';
import ColumnFilterTable from './filter-table';

React.render(
  <InsertRowTable />,
	document.getElementById("insert")
);

React.render(
  <DeleteRowTable />,
	document.getElementById("delete")
);

React.render(
  <SearchTable />,
	document.getElementById("search")
);

React.render(
  <ColumnFilterTable />,
  document.getElementById("filter")
);

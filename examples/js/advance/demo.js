require('../../../css/react-bootstrap-table.css');
import React from 'react';
import EditTypeTable from './edit-type-table';
import DataInsertTypeTable from './insert-type-table';
import AutoRowKeyTable from './auto-rowkey-table';
import ValidatorTable from './validator-table';

React.render(
  <EditTypeTable />,
	document.getElementById("edit-type")
);

React.render(
  <DataInsertTypeTable />,
	document.getElementById("insert-type")
);

React.render(
  <AutoRowKeyTable />,
	document.getElementById("auto-rowkey")
);

React.render(
  <ValidatorTable />,
	document.getElementById("validator")
);

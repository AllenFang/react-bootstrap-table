require('../../../css/react-bootstrap-table.min.css');
import React from 'react';
import TrClassStringTable from './tr-class-string-table';
import TrClassFunctionTable from './tr-class-function-table';
import TdClassStringTable from './td-class-string-table';
import TdClassFunctionTable from './td-class-function-table';

React.render(
  <TrClassStringTable />,
	document.getElementById("tr-string-simple")
);

React.render(
  <TrClassFunctionTable />,
	document.getElementById("tr-function-simple")
);

React.render(
  <TdClassStringTable />,
	document.getElementById("td-string-simple")
);

React.render(
  <TdClassFunctionTable />,
	document.getElementById("td-function-simple")
);

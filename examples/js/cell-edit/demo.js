require('../../../css/react-bootstrap-table.css');
import React from 'react';
import ClickToEditTable from './click-to-edit-table';
import DbClickToEditTable from './dbclick-to-edit-table';
import BlurToSaveTable from './blur-to-save-table';
import CellEditHookTable from './cell-edit-hook-table';

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
  <CellEditHookTable />,
  document.getElementById('hook')
);

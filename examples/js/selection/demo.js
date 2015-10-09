require('../../../css/react-bootstrap-table.min.css');
import React from 'react';
import SingleSelectTable from './single-select-table';
import MultiSelectTable from './multi-select-table';
import ClickToSelectTable from './click-to-select-table';
import DefaultSelectTable from './default-select-table';
import SelectBgColorTable from './select-bgcolor-table';
import SelectHookTable from './select-hook-table';
import HideSelectionColumnTable from './hide-selection-col-table';

React.render(
  <SingleSelectTable />,
	document.getElementById("single")
);

React.render(
  <MultiSelectTable />,
  document.getElementById('multi')
);

React.render(
  <ClickToSelectTable />,
  document.getElementById('click')
);

React.render(
  <DefaultSelectTable />,
  document.getElementById('default-select')
);

React.render(
  <SelectBgColorTable />,
  document.getElementById('bgcolor')
);

React.render(
  <SelectHookTable />,
  document.getElementById('hook')
);

React.render(
  <HideSelectionColumnTable />,
  document.getElementById('hide')
);

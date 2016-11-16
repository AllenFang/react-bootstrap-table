/* eslint max-len: 0 */
import React, { Component, PropTypes } from 'react';
import TableRow from './TableRow';
import TableColumn from './TableColumn';

class ExpandComponent extends Component {

	render() {
		return (
			<tr {...this.props}>
				<td colSpan={this.props.colSpan}>
					{this.props.expandConponent}
				</td>
			</tr>
		)
	}
}
ExpandComponent.propTypes = {
	data: PropTypes.array,
	columns: PropTypes.array
};
export default ExpandComponent;
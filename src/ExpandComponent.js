/* eslint max-len: 0 */
import React, { Component, PropTypes } from 'react';
import TableRow from './TableRow';
import TableColumn from './TableColumn';

class ExpandComponent extends Component {

	render() {
		const tr = this.props.data.map(function(data, r) {
			const td = this.props.columns.map(function(column, i) {
				const fieldValue = data[column.name];
				let columnChild = fieldValue && fieldValue.toString();
				let columnTitle = null;
				let tdClassName = column.className;
				return (
					<TableColumn key={i}
						columnTitle={columnTitle}
						className={tdClassName}
						hidden={column.hidden}
						width={column.width}>
						{columnChild}
					</TableColumn>
				);
			}, this)
			const key = data[this.props.keyField];
			let trClassName = this.props.trClassName;
			return (
				<TableRow {...this.props}>
					{td}
				</TableRow>
			);
		}, this)
		const th = this.props.columns.map(function(column, i) {
			return (
				<th>{column.text}</th>
			)
		}, this)
		return (
			<tr hidden={this.props.hidden}>
				<td colSpan={this.props.colSpan}>
					<table width={this.props.width}>
						{th}
						{tr}
					</table>
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
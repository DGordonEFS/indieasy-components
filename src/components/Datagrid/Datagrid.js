import React, { useState } from 'react';

import { withSelectIndex } from '../../hoc/withSelectIndex';
import { withTheming } from '../../hoc/withTheming';

import List from '../List';

export const classNames = {
	DATAGRID: 'datagrid',
	HEADER: 'header',
	LIST: 'column',
	ITEM: 'item',
	ODD: 'odd',
	ENTERED: 'entered',
	SELECTED: 'selected',
};

const Header = (props) => {
	return (
		<div
			className={props.css[classNames.HEADER]}
			onMouseUp={(ev) => props.sortByColumn(ev, props.column)}
		>
			{props.column.name}
		</div>
	);
};

const Datagrid = (props) => {
	const [selectedColumn, setSelectedColumn] = useState(-1);
	const [enteredColumn, setEnteredColumn] = useState(-1);

	const style = {
		display: 'flex',
		alignItems: 'stretch',
	};

	const getRowData = (index) => {
		const data = {};
		props.columns.forEach((column) => {
			data[column.name] = props.data[column.name][index];
		});
		return data;
	};

	const selectIndexHandler = (columnIndex, index) => {
		setSelectedColumn(columnIndex);
		if (props.onSelectColumn) props.onSelectColumn(props.columns[columnIndex]);
		if (props.onSelectIndex) props.onSelectIndex(index);
		if (props.onSelectItem)
			props.onSelectItem(props.data[props.columns[columnIndex].name][index]);
		if (props.onSelectItem) props.onSelectRow(getRowData(index));
	};

	const enterIndexHandler = (columnIndex, index) => {
		setEnteredColumn(columnIndex);
		if (props.onEnterColumn) props.onEnterColumn(props.columns[columnIndex]);
		if (props.onEnterIndex) props.onEnterIndex(index);
		if (props.onEnterItem)
			props.onEnterItem(props.data[props.columns[columnIndex].name][index]);
		if (props.onEnterRow) props.onEnterRow(getRowData(index));
	};

	const leaveIndexHandler = (columnIndex, index) => {
		if (props.onLeaveColumn) props.onLeaveColumn(props.columns[columnIndex]);
		if (props.onLeaveIndex) props.onLeaveIndex(index);
		if (props.onLeaveItem)
			props.onLeaveItem(props.data[props.columns[columnIndex].name][index]);
		if (props.onLeaveRow) props.onLeaveRow(getRowData(index));
	};

	const sortByColumn = (ev, column) => {
		ev.preventDefault();
		ev.stopPropagation();

		if (!props.sortable) return;

		const numberSort = (a, b) => {
			if (a > b) return 1;
			if (a < b) return -1;
			return 0;
		};

		const sortFunction =
			column.sort ||
			((x, y) => {
				return x.value !== undefined
					? numberSort(x.value, y.value)
					: x.text.localeCompare(y.text);
			});

		const originalColumnData = props.data[column.name];
		let columnData = [...props.data[column.name]];
		const oldIndices = columnData.map((item) =>
			originalColumnData.indexOf(item)
		);

		const sortedColumnData = columnData.sort(sortFunction);
		const newIndices = sortedColumnData.map((item) =>
			originalColumnData.indexOf(item)
		);

		let alreadySorted = true;
		for (let i = 0; i < oldIndices.length; i++) {
			const oldIndex = oldIndices[i];
			const newIndex = newIndices[i];

			if (oldIndex !== newIndex) {
				alreadySorted = false;
				break;
			}
		}

		if (alreadySorted) newIndices.reverse();

		const newData = {};
		props.columns.forEach((column) => {
			columnData = props.data[column.name];

			const newColumn = (newData[column.name] = []);
			newIndices.forEach((index) => {
				newColumn.push(columnData[index]);
			});
		});

		if (props.onModifyData) props.onModifyData(newData);
		if (props.selectedIndex != null && props.onSelectIndex)
			props.onSelectIndex(newIndices.indexOf(props.selectedIndex));
	};

	const columns = props.columns.map((column, index) => {
		const itemRenderer =
			props.data[column.name][index].itemRenderer ||
			column.itemRenderer ||
			props.itemRenderer;

		const columnCssId = column.cssId || props.cssId;
		const columnCss = column.css || props.css;

		let selectedIndex = props.selectedIndex;
		if (props.cells)
			selectedIndex = index === selectedColumn ? props.selectedIndex : -1;

		let enteredIndex = props.enteredIndex;
		if (props.cells) {
			enteredIndex = index === enteredColumn ? props.enteredIndex : -1;
		}
		const list = (
			<List
				key={index + '_' + column.name}
				ownerProps={props.ownerProps || props}
				css={columnCss}
				cssId={columnCssId}
				data={props.data[column.name]}
				style={!props.headers ? column.style : null}
				onSelectIndex={(idx) => selectIndexHandler(index, idx)}
				selectedIndex={selectedIndex}
				onEnterIndex={(idx) => enterIndexHandler(index, idx)}
				enteredIndex={enteredIndex}
				onLeaveIndex={(idx) => leaveIndexHandler(index, idx)}
				itemRenderer={itemRenderer}
				classNames={classNames}
			/>
		);

		if (!props.headers) return list;

		const header = column.headerRenderer || props.headerRenderer || (
			<Header css={props.css} column={column} sortByColumn={sortByColumn} />
		);

		return (
			<div key={index + '_' + column.name} style={column.style}>
				{header}
				{list}
			</div>
		);
	});

	return (
		<div className={props.css[classNames.DATAGRID]} style={style}>
			{columns}
		</div>
	);
};

export default withSelectIndex(withTheming(Datagrid), {
	allowDuplicateEnter: true,
});

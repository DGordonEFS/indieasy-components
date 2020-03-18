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
			className={props.css[props.classNames.HEADER]}
			onMouseUp={(ev) => props.sortByColumn(ev, props.column)}
		>
			{props.column.name}
		</div>
	);
};

const Datagrid = (props) => {
	const [selectedColumn, setSelectedColumn] = useState(-1);
	const [enteredColumn, setEnteredColumn] = useState(-1);
	const [sortedColumn, setSortedColumn] = useState(-1);
	const [reverseSortColumn, setReverseSortColumn] = useState(false);
	const [originalData, setOriginalData] = useState(props.data);
	const [data, setData] = useState(originalData);

	if (props.data != originalData) {
		setOriginalData(props.data);
		setData(props.data);
	}

	const style = {
		display: 'inline-flex',
		alignItems: 'stretch',
		...props.style,
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

		setSortedColumn(props.columns.indexOf(column));

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

		setReverseSortColumn(alreadySorted);

		const newData = {};
		props.columns.forEach((column) => {
			columnData = props.data[column.name];

			const newColumn = (newData[column.name] = []);
			newIndices.forEach((index) => {
				newColumn.push(columnData[index]);
			});
		});

		console.log('set data: ' + newData);
		setData(newData);

		//if (props.onModifyData) props.onModifyData(newData);
		//if (props.onSelectIndex)
		//	props.onSelectIndex(newIndices.indexOf(props.selectedIndex));
	};

	const columns = props.columns.map((column, index) => {
		const itemRenderer = column.itemRenderer || props.itemRenderer;

		const columnCssId = column.cssId || props.cssId;
		const columnCss = column.css || props.css;

		let selectedIndex = props.selectedIndex;
		if (props.cells)
			selectedIndex = index === selectedColumn ? props.selectedIndex : -1;

		let enteredIndex = props.enteredIndex;
		if (props.cells) {
			enteredIndex = index === enteredColumn ? props.enteredIndex : -1;
		}

		const columnData = data[column.id || column.name];
		const originalColumnData = originalData[column.id || column.name];

		const toSortedIndex = (index) => {
			return selectedIndex > -1
				? columnData.findIndex(
						(x) => x === originalData[column.id || column.name][index]
				  )
				: -1;
		};

		const fromSortedIndex = (index) => {
			return selectedIndex > -1
				? originalColumnData.findIndex(
						(x) => x === data[column.id || column.name][index]
				  )
				: -1;
		};

		const sortedSelectedIndex = toSortedIndex(selectedIndex);
		const sortedEnteredIndex = toSortedIndex(enteredIndex);

		console.log(
			`original selected index: ${selectedIndex}, sorted selected index: ${sortedSelectedIndex}`
		);
		console.log(
			`original entered index: ${enteredIndex}, sorted entered index: ${sortedEnteredIndex}`
		);

		const list = (
			<List
				key={index + '_' + column.name}
				ownerProps={props.ownerProps || props}
				css={columnCss}
				cssId={columnCssId}
				data={columnData}
				style={!props.headers ? column.style : null}
				onSelectIndex={(idx) => selectIndexHandler(index, fromSortedIndex(idx))}
				selectedIndex={sortedSelectedIndex}
				onEnterIndex={(idx) => enterIndexHandler(index, fromSortedIndex(idx))}
				enteredIndex={sortedEnteredIndex}
				onLeaveIndex={(idx) => leaveIndexHandler(index, fromSortedIndex(idx))}
				itemRenderer={itemRenderer}
				classNames={classNames}
			/>
		);

		if (!props.headers) return list;

		const HeaderRenderer =
			column.headerRenderer || props.headerRenderer || Header;
		const header = (
			<HeaderRenderer
				css={props.css}
				classNames={classNames}
				column={column}
				sortByColumn={sortByColumn}
				selected={index === sortedColumn}
				reverse={reverseSortColumn}
			/>
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

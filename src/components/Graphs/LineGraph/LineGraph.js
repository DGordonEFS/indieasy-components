import React from 'react';

import Lines from '../parts/Lines';
import GraphLayout, { GraphLayoutAreas } from '../parts/GraphLayout';
import Grid from '../parts/Grid';
import TitleList from '../parts/TitleList';

const createCrossValueTitleList = (props) => {
	return (!props.hideCrossValues ? 
		<TitleList
			xAxis={props.xAxis}
			yAxis={props.yAxis}
			rotate={props.crossValueRotate}
			maxValue={props.maxCrossValue}
			margin={props.crossValueMargin}
			horizontal={props.horizontal}
			reverse={props.crossValueReverse}
			data={props.crossValues}
			textAlign={props.crossValueTextAlign}
		/> : null
	);
};

const createDataTitleList = (props) => {
	return (!props.hideValues ? 
		<TitleList
			xAxis={props.xAxis}
			yAxis={props.yAxis}
			rotate={props.valueRotate}
			maxValue={props.maxValue}
			margin={props.valueMargin}
			horizontal={!props.horizontal}
			reverse={props.valueReverse}
			data={props.values}
			textAlign={props.valueTextAlign}
		/> : null
	);
};

const createGrid = (props) => {
	let lastCrossValue = 0;
	const gridCrossValues = props.crossValues.map((item, index) => {
		const color =
			index % 2 === 0
				? props.crossValueColor
				: props.crossValueColorOdd || props.crossValueColor;
		const value = ((item.value - lastCrossValue) / props.maxCrossValue) * 100;
		lastCrossValue = item.value;
		return {
			...item,
			value: value,
			backgroundColor: color,
		};
	});

	let lastValue = 0;
	const gridValues = props.values.map((item, index) => {
		const color =
			index % 2 === 0
				? props.valueColor
				: props.valueColorOdd || props.valueColor;
		const value = ((item.value - lastValue) / props.maxValue) * 100;
		lastValue = item.value;
		return {
			...item,
			value: value,
			backgroundColor: color,
		};
	});

	return (
		<Grid
			style={{
				border: props.border,
			}}
			gridArea={GraphLayoutAreas.GRAPH}
			backgroundColor={props.backgroundColor}
			border={props.gridLine}
			columnLines={
				(!props.horizontal && props.valueLines) ||
				(props.horizontal && props.crossValueLines)
			}
			rowLines={
				(props.horizontal && props.valueLines) ||
				(!props.horizontal && props.crossValueLines)
			}
			rows={props.horizontal ? gridValues : gridCrossValues}
			columns={props.horizontal ? gridCrossValues : gridValues}
			reverseRows={
				(props.horizontal && props.valueReverse) ||
				(!props.horizontal && !props.crossValueReverse)
			}
			reverseColumns={
				(!props.horizontal && props.valueReverse) ||
				(props.horizontal && props.crossValueReverse)
			}
		/>
	);
};

const createLines = (props) => {
	const highlightItemHandler = (item, position, highlighted, ev) => {
		if (props.onHighlightItem)
			props.onHighlightItem({ item, position, highlighted, ev });
	};

	const selectItemHandler = (item, position, ev) => {
		if (props.onSelectItem) props.onSelectItem(item, position, ev);
	};

	return (
		<Lines
			style={{
				border: props.border,
			}}
			gridArea={GraphLayoutAreas.GRAPH}
			maxValue={props.maxValue}
			maxCrossValue={props.maxCrossValue}
			data={props.data}
			iconRenderer={props.iconRenderer}
			valueReverse={props.valueReverse}
			crossValueReverse={props.crossValueReverse}
			horizontal={props.horizontal}
			pointer={props.pointer}
			onHighlightItem={highlightItemHandler}
			onSelectItem={selectItemHandler}
		/>
	);
};

const LineGraph = (props) => {
	const crossValueTitleList = createCrossValueTitleList(props);
	const dataTitleList = createDataTitleList(props);
	const grid = createGrid(props);
	const lines = createLines(props);

	return (
		<GraphLayout width={props.width} height={props.height}>
			{crossValueTitleList}
			{dataTitleList}
			{grid}
			{lines}
		</GraphLayout>
	);
};

export default LineGraph;

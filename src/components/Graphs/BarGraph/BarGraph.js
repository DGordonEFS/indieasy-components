import React from 'react';

import GraphLayout, { GraphLayoutAreas } from '../parts/GraphLayout';
import Grid from '../parts/Grid';
import TitleList from '../parts/TitleList';

import Bars from '../parts/Bars/Bars';

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
		/>
	 : null);
};

const createDataTitleList = (props) => {
	return (!props.hideValues ? 
		<TitleList
			xAxis={props.xAxis}
			yAxis={props.yAxis}
			rotate={props.valueRotate}
			maxValue={100}
			margin={props.valueMargin}
			horizontal={!props.horizontal}
			reverse={props.valueReverse}
			cellAligned
			wordWrap={props.valueWordWrap}
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
		return { ...item, value: value, backgroundColor: color };
	});

	const gridDataColumnSize = 100 / props.values.length;
	const gridData = props.values.map((item, index) => {
		const color =
			index % 2 === 0
				? props.valueColor
				: props.valueColorOdd || props.valueColor;
		return {
			...item,
			value: gridDataColumnSize,
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
			rows={props.horizontal ? gridData : gridCrossValues}
			columns={props.horizontal ? gridCrossValues : gridData}
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

const createBars = (props) => {
	const data = [...props.data];

	if (props.valueReverse !== props.horizontal) data.reverse();

	const highlightItemHandler = (item, position, highlighted, ev) => {
		if (props.onHighlightItem)
			props.onHighlightItem({ item, position, highlighted, ev });
	};

	const selectItemHandler = (item, position, ev) => {
		if (props.onSelectItem) props.onSelectItem({ item, position, ev });
	};

	return (
		<Bars
			style={{
				border: props.border,
			}}
			gridArea={GraphLayoutAreas.GRAPH}
			horizontal={props.horizontal}
			maxValue={props.maxCrossValue}
			barColor={props.barColor}
			barHighlightColor={props.barHighlightColor}
			barThickness={props.barThickness}
			reverse={props.crossValueReverse}
			ownerProps={props}
			data={data}
			pointer={props.pointer}
			onHighlightItem={highlightItemHandler}
			onSelectItem={selectItemHandler}
		/>
	);
};

const BarGraph = (props) => {
	const crossValueTitleList = createCrossValueTitleList(props);
	const dataTitleList = createDataTitleList(props);
	const grid = createGrid(props);
	const bars = createBars(props);

	return (
		<GraphLayout width={props.width} height={props.height}>
			{crossValueTitleList}
			{dataTitleList}
			{grid}
			{bars}
		</GraphLayout>
	);
};

export default BarGraph;

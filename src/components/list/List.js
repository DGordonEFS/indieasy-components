import React from 'react';
import { addComponentTheme, createFinalStyle } from '../../theming/theme';

import { ListItem } from './ListItem';

const defaultComponentTheme = '_list';

addComponentTheme(defaultComponentTheme, {
	backgroundColor: 'transparent',
	border: '1px solid black',
	color: 'white',
	padding: '2px',
});

const List = (props) => {
	const itemBaseStyle = props.itemStyle || {};

	if (props.stretch) itemBaseStyle.flex = 1;

	const selectHandler = (item) => {
		if (props.onSelectItem) props.onSelectItem(item);
	};

	const items = props.data.map((item) => {
		if (item.renderer)
			return (
				<item.renderer
					key={item.text}
					data={item}
					baseStyle={itemBaseStyle}
					onSelect={selectHandler}
					{...props.itemProps}
					{...item.itemProps}
				/>
			);
		else if (props.renderer)
			return (
				<props.renderer
					key={item.text}
					data={item}
					baseStyle={itemBaseStyle}
					onSelect={selectHandler}
					{...props.itemProps}
					{...item.itemProps}
				/>
			);
		else
			return (
				<ListItem
					key={item.text}
					data={item}
					baseStyle={itemBaseStyle}
					onSelect={selectHandler}
					{...props.itemProps}
					{...item.itemProps}
				/>
			);
	});

	const style = {
		display: 'flex',
		flexDirection: props.horizontal ? 'row' : 'column',
	};

	const finalStyle = createFinalStyle(defaultComponentTheme, props, style);

	return <div style={finalStyle}>{items}</div>;
};

export default List;

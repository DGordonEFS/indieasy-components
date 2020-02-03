import React from 'react';
import { createFinalStyle } from '../../theming/theme';

import * as themeIds from 'components/themes';

import { ListItem } from '../ListItem';

const List = (props) => {
	const itemProps = props.itemProps || {};
	if (props.pointer) {
		itemProps.pointer = true;
	}

	const itemBaseStyle = props.itemStyle || {};

	if (props.stretch) itemBaseStyle.flex = 1;

	const selectHandler = (item) => {
		if (props.onSelectItem) props.onSelectItem(item);
	};

	const items = props.data.map((item, index) => {
		let theme = props.itemTheme || themeIds.LIST_ITEM;
		const selected = props.selectedIndex == index;
		if (props.selectable) {
			if (selected)
				theme = props.selectedItemTheme || themeIds.LIST_ITEM_SELECTED;
		}

		if (item.renderer)
			return (
				<item.renderer
					key={item.text}
					theme={theme}
					data={item}
					baseStyle={itemBaseStyle}
					onSelect={selectHandler}
					selected={selected}
					{...itemProps}
					{...item.itemProps}
				/>
			);
		else if (props.renderer)
			return (
				<props.renderer
					key={item.text}
					theme={theme}
					data={item}
					baseStyle={itemBaseStyle}
					onSelect={selectHandler}
					selected={selected}
					{...itemProps}
					{...item.itemProps}
				/>
			);
		else
			return (
				<ListItem
					key={item.text}
					theme={theme}
					data={item}
					baseStyle={itemBaseStyle}
					onSelect={selectHandler}
					selected={selected}
					{...itemProps}
					{...item.itemProps}
				/>
			);
	});

	const style = {
		display: 'flex',
		flexDirection: props.horizontal ? 'row' : 'column',
	};

	const finalStyle = createFinalStyle(themeIds.LIST, props, style);

	return <div style={finalStyle}>{items}</div>;
};

export default List;

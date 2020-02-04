import React from 'react';

import IndieasyComponent from 'components';
import { createFinalStyle } from '../../theming/theme';

import * as themeIds from 'components/themes';

import { ListItem } from '../ListItem';

class List extends IndieasyComponent {
	render() {
		const itemProps = this.props.itemProps || {};
		if (this.props.pointer) {
			itemProps.pointer = true;
		}

		const itemBaseStyle = this.props.itemStyle || {};

		if (this.props.stretch) itemBaseStyle.flex = 1;

		const selectHandler = (item) => {
			if (this.props.onSelectItem) this.props.onSelectItem(item);
		};

		const items = this.props.data.map((item, index) => {
			let theme = this.props.itemTheme || themeIds.LIST_ITEM;
			const selected = this.props.selectedIndex == index;
			if (this.props.selectable) {
				if (selected)
					theme = this.props.selectedItemTheme || themeIds.LIST_ITEM_SELECTED;
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
			else if (this.props.renderer)
				return (
					<this.props.renderer
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
			flexDirection: this.props.horizontal ? 'row' : 'column',
		};

		const finalStyle = createFinalStyle(themeIds.LIST, this.props, style);

		return <div style={finalStyle}>{items}</div>;
	}
}

export default List;

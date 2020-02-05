import React from 'react';

import IndieasyComponent from 'components';
import { createFinalStyle } from '../../theming/theme';

import * as themeIds from 'components/themes';

import ListItem from '../ListItem';

class List extends IndieasyComponent {
	render() {
		const itemProps = this.props.itemProps || {};
		if (this.props.pointer) {
			itemProps.pointer = true;
		}

		const itemBaseStyle = this.props.itemStyle || {};

		if (this.props.stretch) itemBaseStyle.flex = 1;

		const selectHandler = (item) => {
			if (this.props.onItemSelect) this.props.onItemSelect(item);
		};

		const itemEnterHandler = (item) => {
			if (this.props.onItemEnter) this.props.onItemEnter(item);
		};

		const itemLeaveHandler = (item) => {
			if (this.props.onItemLeave) this.props.onItemLeave(item);
		};

		const items = this.props.data.map((item, index) => {
			if (!item.key) {
				item.key = item.text + '_' + item.divider + '_' + item.disabled;
			}

			let theme = this.props.itemTheme || themeIds.LIST_ITEM;
			const selected = this.props.selectedIndex == index;
			if (item.disabled) {
				theme = this.props.disabledItemTheme || themeIds.LIST_ITEM_DISABLED;
			} else if (this.props.selectable) {
				if (selected)
					theme = this.props.selectedItemTheme || themeIds.LIST_ITEM_SELECTED;
			}

			let Renderer = this.props.renderer || item.renderer || ListItem;

			return (
				<Renderer
					key={item.key}
					theme={theme}
					data={item}
					baseStyle={itemBaseStyle}
					onSelect={selectHandler}
					onItemEnter={itemEnterHandler}
					onItemLeave={itemLeaveHandler}
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

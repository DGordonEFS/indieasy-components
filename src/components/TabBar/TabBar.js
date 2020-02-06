import React, { Component } from 'react';

import { IndieasyComponent } from 'components';
import List from 'components/List';
import { ListItemRightButton } from 'components/ListItem';

import * as themeIds from 'components/themes';

class TabBar extends IndieasyComponent {
	render() {
		const itemTheme = this.props.itemTheme || themeIds.TAB_BAR_ITEM;
		const selectedItemTheme =
			this.props.selectedItemTheme || themeIds.TAB_BAR_ITEM_SELECTED;

		let itemProps = this.props.itemProps || {};
		itemProps = { alwaysShowButton: true, ...itemProps };
		const list = (
			<List
				selectable
				itemTheme={itemTheme}
				selectedItemTheme={selectedItemTheme}
				renderer={ListItemRightButton}
				horizontal
				theme={themeIds.TAB_BAR}
				{...this.props}
				itemProps={itemProps}
			/>
		);

		return list;
	}
}

export default TabBar;

export class ControlledTabBar extends IndieasyComponent {
	state = { selectedIndex: 0 };

	selectItemHandler = (item) => {
		const index = this.props.data.findIndex((dataItem) => dataItem == item);
		if (this.state.selectedIndex != index)
			this.setState({ selectedIndex: index });
	};

	render() {
		return (
			<TabBar
				{...this.props}
				selectedIndex={this.state.selectedIndex}
				onItemSelect={this.selectItemHandler}
			/>
		);
	}
}

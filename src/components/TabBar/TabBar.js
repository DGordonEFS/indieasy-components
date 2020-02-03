import React, { Component } from 'react';

import List from 'components/List';
import { ListItemRightButton } from 'components/ListItem';

import * as themeIds from 'components/themes';

const TabBar = (props) => {
	const itemTheme = props.itemTheme || themeIds.TAB_BAR_ITEM;
	const selectedItemTheme =
		props.selectedItemTheme || themeIds.TAB_BAR_ITEM_SELECTED;

	const list = (
		<List
			selectable
			itemTheme={itemTheme}
			selectedItemTheme={selectedItemTheme}
			renderer={ListItemRightButton}
			horizontal
			theme={themeIds.TAB_BAR}
			{...props}
		/>
	);

	return list;
};

export default TabBar;

export class ControlledTabBar extends Component {
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
				onSelectItem={this.selectItemHandler}
			/>
		);
	}
}

import React from 'react';

import { IndieasyComponent } from 'components';

import List from 'components/List';
import ListItem from 'components/ListItem';
import Menu from 'components/Menu';

import * as themeIds from 'components/themes';

class Toolbar extends IndieasyComponent {
	state = { active: false, item: null };

	wasMenuClicked = false;

	itemSelectedHandler = (item) => {
		if (this.wasMenuClicked) {
			this.wasMenuClicked = false;
			return;
		}
		this.setState((prevState) => ({ active: !prevState.active }));
	};

	itemEnterHandler = (item) => {
		this.setState({ item: item });
	};

	mouseLeaveHandler = (e) => {
		this.setState({ active: false, item: null });
	};

	menuItemSelectedHandler = (item) => {
		this.wasMenuClicked = true;
		this.setState({ active: false, item: null });
		if (this.props.onMenuItemSelect) this.props.onMenuItemSelect(item);
	};

	render() {
		const selectedIndex = this.props.data.findIndex(
			(x) => x == this.state.item
		);

		let data = this.props.data;
		if (this.state.active && this.state.item) {
			data = this.props.data.map((item) => {
				if (item == this.state.item) {
					if (item.data) {
						const renderer = (props) => (
							<ListItem {...props}>
								<Menu
									baseStyle={{ marginLeft: '-10px' }}
									data={item.data}
									onItemSelect={this.menuItemSelectedHandler}
								/>
							</ListItem>
						);
						return {
							...item,
							renderer,
							selectedTheme: themeIds.TOOL_BAR_ITEM_ACTIVE,
						};
					}
				}
				return item;
			});
		}

		const itemTheme = this.props.itemTheme || themeIds.TOOL_BAR_ITEM;
		const selectedItemTheme =
			this.props.selectedItemTheme || themeIds.TOOL_BAR_ITEM_SELECTED;
		const disabledItemTheme =
			this.props.disabledItemTheme || themeIds.TOOL_BAR_ITEM_DISABLED;

		return (
			<List
				selectable
				selectedIndex={selectedIndex}
				onMouseLeave={this.mouseLeaveHandler}
				onItemEnter={this.itemEnterHandler}
				onItemSelect={this.itemSelectedHandler}
				horizontal
				theme={themeIds.TOOL_BAR}
				itemTheme={itemTheme}
				selectedItemTheme={selectedItemTheme}
				disabledItemtemTheme={disabledItemTheme}
				{...this.props}
				data={data}
			/>
		);
	}
}

export default Toolbar;

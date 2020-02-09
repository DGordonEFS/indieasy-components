import React, { Component } from 'react';
import { themeComponent } from 'theming';

import * as themeIds from 'components/themes';

import Divider from 'components/Divider';
import List from 'components/List';
import ListItem, { ListItemRightButton } from 'components/ListItem';

class Menu extends Component {
	state = { overItem: null };

	selectedItemHandler = (item) => {
		//console.log(item);
		if (this.props.onItemSelect) this.props.onItemSelect(item);
	};

	mouseEnterItemHandler = (item) => {
		if (this.state.overItem != item) this.setState({ overItem: item });
	};

	mouseLeaveItemHandler = (item) => {
		//if (this.state.overItem) this.setState({ overItem: null });
	};

	mouseLeaveHandler = (e) => {
		this.setState({ overItem: null });
	};

	render() {
		const itemTheme = this.props.itemTheme || themeIds.MENU_ITEM;
		const selectedItemTheme =
			this.props.selectedItemTheme || themeIds.MENU_ITEM_SELECTED;
		const disabledItemTheme =
			this.props.disabledItemTheme || themeIds.MENU_ITEM_DISABLED;

		let selectedIndex = -1;

		const data = this.props.data.map((item, index) => {
			const ItemRenderer = item.data != null ? ListItemRightButton : ListItem;

			let renderer = (props) => <ItemRenderer {...props} />;

			if (item.divider) {
				renderer = (props) => (
					<div
						style={{
							paddingTop: '5px',
							paddingBottom: '5px',
						}}
						onMouseEnter={() => props.onItemEnter(item)}
						onMouseLeave={() => props.onItemLeave(item)}
					>
						<Divider />
					</div>
				);
			} else if (
				this.state.overItem &&
				this.state.overItem.text == item.text &&
				!item.disabled
			) {
				selectedIndex = index;

				if (this.state.overItem.data) {
					renderer = (props) => (
						<div style={{ display: 'flex' }}>
							<ItemRenderer {...props} />
							<Menu
								theme={themeIds.MENU_SUB}
								baseStyle={{ marginLeft: '-1px', marginTop: '-1px' }}
								data={item.data}
								onItemSelect={this.selectedItemHandler}
							/>
						</div>
					);
				}
			}

			return { ...item, renderer: renderer };
		});

		return (
			<div onMouseLeave={this.mouseLeaveHandler}>
				<List
					theme={themeIds.MENU}
					itemTheme={itemTheme}
					selectedItemTheme={selectedItemTheme}
					disabledItemTheme={disabledItemTheme}
					selectedIndex={selectedIndex}
					selectable
					itemProps={{
						rightText: '>',
						rightOverText: '>',
						rightSelectedText: '>',
						buttonTheme: themeIds.MENU_ITEM_BUTTON,
					}}
					selectedItemTheme={selectedItemTheme}
					{...this.props}
					data={data}
					onItemSelect={this.selectedItemHandler}
					onItemEnter={this.mouseEnterItemHandler}
					onItemLeave={this.mouseLeaveItemHandler}
				/>
			</div>
		);
	}
}

export default themeComponent(Menu);

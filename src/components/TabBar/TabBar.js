import React, { Component } from 'react';
import { addComponentTheme, createFinalStyle } from 'theming/theme';

import List from 'components/list';
import { ListItemX } from 'components/list/ListItem';

addComponentTheme('tabbar', {
	backgroundColor: '#363636',
	paddingLeft: '5px',
	width: '100%',
	height: '2rem',
	border: '1px solid black',
	display: 'flex',
	alignItems: 'flex-end',
});

addComponentTheme('tabbar-item', {
	backgroundColor: '#666666',
	color: 'white',
	display: 'flex',
	border: '1px solid black',
	borderTopLeftRadius: '5px',
	borderTopRightRadius: '5px',
	height: '65%',
	paddingTop: '3px',
	paddingLeft: '5px',
	paddingRight: '5px',
	userSelect: 'none',
});

addComponentTheme('tabbar-item-selected', {
	backgroundColor: '#363636',
	color: 'white',
	display: 'flex',
	border: '1px solid black',
	borderBottom: 'none',
	borderTopLeftRadius: '5px',
	borderTopRightRadius: '5px',
	height: '65%',
	paddingTop: '3px',
	paddingLeft: '5px',
	paddingRight: '5px',
	userSelect: 'none',
});

const TabBar = (props) => {
	const itemTheme = props.itemTheme || 'tabbar-item';
	const selectedItemTheme = props.selectedItemTheme || 'tabbar-item-selected';

	props.data.forEach((item, index) => {
		const theme = props.selectedIndex == index ? selectedItemTheme : itemTheme;
		item.itemProps = { ...item.itemProps, theme: theme };
	});

	const list = (
		<List renderer={ListItemX} horizontal theme="tabbar" {...props} />
	);

	return list;
};

export default TabBar;

export class ControlledTabBar extends Component {
	state = { selectedIndex: 0 };

	selectItemHandler = (item) => {
		const index = this.props.data.findIndex((dataItem) => dataItem == item);
		console.log(item);
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

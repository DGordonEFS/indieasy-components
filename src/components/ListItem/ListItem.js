import React, { Component } from 'react';
import { themeComponent } from 'theming';

import Button from 'components/Button';
import Text from 'components/Text';

import * as themeIds from 'components/themes';

class ListItem extends Component {
	clickHandler = () => {
		if (this.props.onSelect) this.props.onSelect(this.props.data);
	};

	mouseEnterHandler = () => {
		if (this.props.onItemEnter) this.props.onItemEnter(this.props.data);
	};

	mouseLeaveHandler = () => {
		if (this.props.onItemLeave) this.props.onItemLeave(this.props.data);
	};

	render() {
		const theme = this.props.theme || themeIds.LIST_ITEM;
		const textTheme = this.props.textTheme || themeIds.LIST_ITEM_TEXT;
		const button = (
			<Button
				onClick={this.clickHandler}
				onMouseEnter={this.mouseEnterHandler}
				onMouseLeave={this.mouseLeaveHandler}
				{...this.props}
				theme={theme}
				baseStyle={{ ...this.props.baseStyle, ...this.props.data.style }}
			>
				<Text theme={textTheme}>{this.props.data.text}</Text>
				{this.props.children}
			</Button>
		);

		return button;
	}
}

export default themeComponent(ListItem);

export const ListItemRightContent = (props) => {
	return (
		<ListItem
			textTheme={themeIds.LIST_ITEM_RIGHT_CONTENT_TEXT}
			baseStyle={{
				display: 'flex',
				justifyContent: 'space-between',
				...props.baseStyle,
			}}
			{...props}
		>
			{props.children}
		</ListItem>
	);
};

class listItemRightButton extends Component {
	state = { over: false };

	mouseEnterHandler = (e) => {
		this.setState({ over: true });
		if (this.props.onItemEnter) this.props.onItemEnter(this.props.data);
	};

	mouseLeaveHandler = (e) => {
		this.setState({ over: false });
		if (this.props.onItemLeave) this.props.onItemLeave(this.props.data);
	};

	render() {
		const xStyle =
			!this.state.over &&
			!this.props.rightText &&
			(!this.props.selected || !this.props.rightSelectedText) &&
			!this.props.alwaysShowButton
				? { visibility: 'hidden' }
				: null;

		const rightButtonText = this.state.over
			? this.props.rightOverText || 'X'
			: this.props.selected
			? this.props.rightSelectedText || 'X'
			: this.props.rightText || 'X';

		const buttonTheme =
			this.props.selected &&
			this.props.rightOverText != this.props.rightSelectedText &&
			!this.state.over
				? this.props.buttonSelectedTheme || themeIds.LIST_ITEM_BUTTON_SELECTED
				: this.props.buttonTheme || themeIds.LIST_ITEM_BUTTON;

		return (
			<ListItemRightContent
				{...this.props}
				onItemEnter={this.mouseEnterHandler}
				onItemLeave={this.mouseLeaveHandler}
			>
				<Button baseStyle={xStyle} theme={buttonTheme}>
					<Text>{rightButtonText}</Text>
				</Button>
			</ListItemRightContent>
		);
	}
}

export const ListItemRightButton = themeComponent(listItemRightButton);

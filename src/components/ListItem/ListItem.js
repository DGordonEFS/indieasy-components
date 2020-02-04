import React, { Component } from 'react';

import IndieasyComponent from 'components';
import Button from 'components/Button';
import Text from 'components/Text';

import * as themeIds from 'components/themes';

class ListItem extends IndieasyComponent {
	render() {
		const theme = this.props.theme || themeIds.LIST_ITEM;
		const textTheme = this.props.textTheme || themeIds.LIST_ITEM_TEXT;
		const button = (
			<Button
				onClick={() => this.props.onSelect(this.props.data)}
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

export default ListItem;

export const ListItemRightContent = (props) => {
	return (
		<ListItem
			{...props}
			textTheme={themeIds.LIST_ITEM_RIGHT_CONTENT_TEXT}
			baseStyle={{
				display: 'flex',
				justifyContent: 'space-between',
				...props.baseStyle,
			}}
		>
			{props.children}
		</ListItem>
	);
};

export class ListItemRightButton extends IndieasyComponent {
	state = { over: false };

	mouseEnterHandler = (e) => {
		this.setState({ over: true });
	};

	mouseLeaveHandler = (e) => {
		this.setState({ over: false });
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
				? themeIds.LIST_ITEM_BUTTON_SELECTED
				: themeIds.LIST_ITEM_BUTTON;

		return (
			<ListItemRightContent
				{...this.props}
				onMouseEnter={this.mouseEnterHandler}
				onMouseLeave={this.mouseLeaveHandler}
			>
				<Button baseStyle={xStyle} theme={buttonTheme}>
					<Text>{rightButtonText}</Text>
				</Button>
			</ListItemRightContent>
		);
	}
}

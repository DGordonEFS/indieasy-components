import React from 'react';

import Button from 'components/Button';
import Text from 'components/Text';

import { addComponentTheme } from 'theming/theme';

const defaultComponentTheme = '_list-item';

addComponentTheme(defaultComponentTheme, {
	backgroundColor: 'gray',
	border: '1px solid black',
	color: 'white',
	padding: '5px',
});

addComponentTheme('_list-item-text', {
	userSelect: 'none',
});

addComponentTheme('_list-item-text-right-content', {
	marginRight: '15px',
	userSelect: 'none',
});

const ListItem = (props) => {
	const textTheme = props.textTheme || '_list-item-text';
	const button = (
		<Button
			theme={defaultComponentTheme}
			onClick={() => props.onSelect(props.data)}
			{...props}
			baseStyle={{ ...props.baseStyle, ...props.data.style }}
		>
			<Text theme={textTheme}>{props.data.text}</Text>
			{props.children}
		</Button>
	);

	return button;
};

export default ListItem;

addComponentTheme('_list-item-button', {
	backgroundColor: 'transparent',
	color: 'black',
	marginLeft: '5px',
});

export const ListItemRightContent = (props) => {
	return (
		<ListItem
			{...props}
			textTheme="_list-item-text-right-content"
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

export const ListItemX = (props) => {
	return (
		<ListItemRightContent {...props}>
			<Button theme="_list-item-button">X</Button>
		</ListItemRightContent>
	);
};

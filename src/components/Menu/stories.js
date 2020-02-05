import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// Import our component from this folder
import Menu from './Menu';

const basicData = [{ text: 'Save' }, { text: 'Save As' }, { text: 'Load' }];
const nestedData = [
	{ text: 'Save' },
	{ text: 'Save As' },
	{ text: 'Load' },
	{ divider: true },
	{
		text: 'Fruits',
		data: [
			{ text: 'Apples' },
			{ text: 'Bananas', disabled: true },
			{
				text: 'Grapes',
				data: [{ text: 'red' }, { text: 'white' }, { text: 'wine' }],
			},
		],
	},
];

storiesOf('Menu')
	.add('with basic data', () => <Menu data={basicData} />)
	.add('with nested data', () => <Menu data={nestedData} />);

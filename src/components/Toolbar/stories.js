import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// Import our component from this folder
import Toolbar from './Toolbar';

const basicData = [
	{
		text: 'File',
		data: [
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
		],
	},
	{ text: 'Edit' },
	{ text: 'Options' },
];

const menuItemSelectedHandler = (item) => {
	console.log(item);
};

storiesOf('Toolbar').add('with basic', () => (
	<Toolbar data={basicData} onMenuItemSelect={menuItemSelectedHandler} />
));

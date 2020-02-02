import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// Import our component from this folder
import List from './List';
import { ListItemRightButton } from './ListItem';

import { addComponentTheme } from 'theming';

const basicData = [{ text: 'n01' }, { text: 'n02' }, { text: 'n03' }];

storiesOf('List')
	.add('with basic ListItem', () => <List data={basicData} />)
	.add('with ListItemRightButton', () => (
		<List
			itemProps={{ rightText: '>>' }}
			renderer={ListItemRightButton}
			data={basicData}
		/>
	))
	.add('with Selectable', () => (
		<List
			selectable
			selectedIndex={1}
			itemProps={{ rightText: '>>' }}
			renderer={ListItemRightButton}
			data={basicData}
		/>
	))
	.add('with Horizontal', () => <List pointer horizontal data={basicData} />)
	.add('with ListItemRightButton and Horizontal', () => (
		<List renderer={ListItemRightButton} pointer horizontal data={basicData} />
	))
	.add('with Horizontal Stretch', () => (
		<List itemProps={{ pointer: true }} horizontal stretch data={basicData} />
	))
	.add('with ListItemRightButton and Horizontal Stretch', () => (
		<List
			renderer={ListItemRightButton}
			pointer
			horizontal
			stretch
			data={basicData}
		/>
	));

import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// Import our component from this folder
import List from './List';
import { ListItemX } from './ListItem';

import { addComponentTheme } from 'theming';

const basicData = [{ text: 'n01' }, { text: 'n02' }, { text: 'n03' }];

storiesOf('List')
	.add('with basic ListItem', () => <List data={basicData} />)
	.add('with ListItemX', () => <List renderer={ListItemX} data={basicData} />)
	.add('with Horizontal', () => <List horizontal data={basicData} />)
	.add('with ListItemX and Horizontal', () => (
		<List renderer={ListItemX} horizontal data={basicData} />
	))
	.add('with Horizontal Stretch', () => (
		<List horizontal stretch data={basicData} />
	))
	.add('with ListItemX and Horizontal Stretch', () => (
		<List renderer={ListItemX} horizontal stretch data={basicData} />
	));

import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// Import our component from this folder
import ListItem, { ListItemRightButton } from './ListItem';

import { addComponentTheme } from 'theming';

storiesOf('ListItem')
	.add('with basic', () => <ListItem data={{ text: 'Hello World' }} />)
	.add('with X Button', () => (
		<ListItemRightButton data={{ text: 'Hello World' }} />
	))
	.add('with right text and X Button', () => (
		<ListItemRightButton rightText=">>" data={{ text: 'Hello World' }} />
	));

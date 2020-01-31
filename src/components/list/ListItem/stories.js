import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// Import our component from this folder
import ListItem, { ListItemX } from './ListItem';

import { addComponentTheme } from 'theming';

storiesOf('ListItem')
	.add('with basic', () => <ListItem data={{ text: 'Hello World' }} />)
	.add('with X Button', () => <ListItemX data={{ text: 'Hello World' }} />);

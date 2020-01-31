import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// Import our component from this folder
import TabBar, { ControlledTabBar } from './TabBar';

import { addComponentTheme } from 'theming';

const basicData = [{ text: 'File' }, { text: 'Edit' }, { text: 'Options' }];

const selectedIndex = 0;

storiesOf('TabBar')
	.add('with selectedIndex', () => (
		<TabBar
			selectedIndex={selectedIndex}
			data={basicData}
			onSelectItem={(item) => console.log(item)}
		/>
	))
	.add('with ControlledTabBar', () => (
		<ControlledTabBar selectedIndex={selectedIndex} data={basicData} />
	));

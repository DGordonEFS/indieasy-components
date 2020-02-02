import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// Import our component from this folder
import Button from './Button';
import Text from 'components/Text';

import { addComponentTheme } from 'theming';

addComponentTheme('blue-button', {
	backgroundColor: 'blue',
	color: 'white',
});

addComponentTheme('button-large', {
	fontSize: '2rem',
});

storiesOf('Button')
	.add('with text', () => (
		<Button pointer onClick={action('clicked')}>
			<Text>Hello Button</Text>
		</Button>
	))
	.add('with emoji', () => (
		<Button onClick={action('clicked')}>
			<Text>🚿 🚿 🐈 🐈</Text>
		</Button>
	))
	.add('with themes + text', () => (
		<Button themes={['blue-button', 'button-large']}>
			<Text>Hello Button</Text>
		</Button>
	))
	.add('with additionalThemes + text', () => (
		<Button additionalThemes={['blue-button', 'button-large']}>
			<Text>Hello Button</Text>
		</Button>
	));

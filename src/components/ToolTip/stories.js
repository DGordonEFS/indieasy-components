import React from 'react';

import { Provider } from 'react-redux';

// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// Import our component from this folder
import ToolTip from './ToolTip';

import { store } from '@indieasy.software/indieasy-engine';

store.createStore();

// Here we describe the stories we want to see of the Button. The component is
// pretty simple so we will just make two, one with text and one with emojis
// Simple call storiesOf and then chain .add() as many times as you wish
//
// .add() takes a name and then a function that should return what you want
// rendered in the rendering area
storiesOf('ToolTip').add('default', () => (
	<Provider store={store.getStore()}>
		<ToolTip />
	</Provider>
));

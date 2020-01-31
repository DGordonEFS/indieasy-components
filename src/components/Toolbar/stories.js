import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// Import our component from this folder
import Toolbar from './Toolbar';

import { addComponentTheme } from 'theming';

const basicData = [{ text: 'File' }, { text: 'Edit' }, { text: 'Options' }];

storiesOf('Toolbar').add('with basic', () => <Toolbar data={basicData} />);

import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// Import our component from this folder
import ScrollPane from './ScrollPane';
import List from 'components/List';
import { ListItemRightButton } from 'components/ListItem';
import Button from 'components/Button';
import Text from 'components/Text';

const basicData = [{ text: 'n01' }, { text: 'n02' }, { text: 'n03' }];

const bigData = [];
for (var i = 0; i < 100; i++) {
  bigData.push({ text: `n${i}` });
}

storiesOf('ScrollPane').add('with scrollY', () => (
  <div style={{ height: 768 }}>
    <div style={{ display: 'flex', height: '100%' }}>
      <div style={{ width: '200px', backgroundColor: 'red' }} />
      <div style={{ width: '250px', display: 'flex', flexFlow: 'column' }}>
        <Button baseStyle={{ textAlign: 'center' }}>
          <Text>Add Node</Text>
        </Button>
        <ScrollPane scrollY>
          <List renderer={ListItemRightButton} pointer stretch data={bigData} />
        </ScrollPane>
      </div>
    </div>
  </div>
));

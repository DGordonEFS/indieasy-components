import React from 'react';

import { Provider } from 'react-redux';

// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// Import our component from this folder
import TutorialTip from './TutorialTip';

import { store, tutorialTips } from '@indieasy.software/indieasy-engine';

const blockedManager = tutorialTips.system.createManager('blocked');

tutorialTips.system.registerReducer();
store.createStore();

// Here we describe the stories we want to see of the Button. The component is
// pretty simple so we will just make two, one with text and one with emojis
// Simple call storiesOf and then chain .add() as many times as you wish
//
// .add() takes a name and then a function that should return what you want
// rendered in the rendering area
storiesOf('Tutorial Tips')
	.add('no tutorial tips', () => {
		tutorialTips.manager.unwatchAll();
		tutorialTips.manager.clear();
		tutorialTips.manager.closeTip();

		return (
			<Provider store={store.getStore()}>
				<TutorialTip />
			</Provider>
		);
	})
	.add('tutorial tips bottom left', () => {
		const renderer = (props) => {
			return (
				<div
					style={{
						position: 'fixed',
						width: '400px',
						height: '150px',
						backgroundColor: 'gray',
						left: '10px',
						bottom: '10px',
					}}
				>
					<div>{props.tutorialTip.title}</div>
					<div>{props.tutorialTip.text}</div>
				</div>
			);
		};

		tutorialTips.manager.unwatchAll();
		tutorialTips.manager.clear();
		tutorialTips.manager.closeTip();

		tutorialTips.manager.addTip(
			new tutorialTips.TutorialTip('t01', 'Finding Nemo', 'Just keep swimming.')
		);
		tutorialTips.manager.setCurrentTip('t01');

		return (
			<Provider store={store.getStore()}>
				<TutorialTip renderer={renderer} />
			</Provider>
		);
	})
	.add('tutorial tips center modal', () => {
		const renderer = (props) => {
			return (
				<div
					style={{
						position: 'fixed',
						width: '400px',
						height: '150px',
						backgroundColor: 'gray',
						left: '50%',
						top: '50%',
						transform: 'translateX(-50%) translateY(-50%)',
					}}
				>
					<div>{props.tutorialTip.title}</div>
					<div>{props.tutorialTip.text}</div>
				</div>
			);
		};

		tutorialTips.manager.unwatchAll();
		tutorialTips.manager.clear();
		tutorialTips.manager.closeTip();

		tutorialTips.manager.addTip(
			new tutorialTips.TutorialTip(
				't01',
				'Finding Nemo',
				'Just keep swimming.',
				{ modal: true }
			)
		);
		tutorialTips.manager.setCurrentTip('t01');

		return (
			<Provider store={store.getStore()}>
				<TutorialTip renderer={renderer} />
			</Provider>
		);
	})
	.add('tutorial tips default and blocked', () => {
		const renderer = (props) => {
			return (
				<div
					style={{
						position: 'fixed',
						width: '400px',
						height: '150px',
						backgroundColor: 'gray',
						left: '10px',
						bottom: '10px',
					}}
				>
					<div>{props.tutorialTip.title}</div>
					<div>{props.tutorialTip.text}</div>
				</div>
			);
		};

		const blockedRenderer = (props) => {
			return (
				<div
					style={{
						position: 'fixed',
						width: '400px',
						height: '75px',
						backgroundColor: 'white',
						left: '10px',
						bottom: '170px',
						border: '1px solid black',
					}}
				>
					<div>{props.tutorialTip.title}</div>
					<div>{props.tutorialTip.text}</div>
				</div>
			);
		};

		tutorialTips.manager.unwatchAll();
		tutorialTips.manager.clear();
		tutorialTips.manager.closeTip();

		tutorialTips.manager.addTip(
			new tutorialTips.TutorialTip('t01', 'Finding Nemo', 'Just keep swimming.')
		);
		tutorialTips.manager.setCurrentTip('t01');

		tutorialTips.system
			.getManager('blocked')
			.addTip(
				new tutorialTips.TutorialTip(
					't03',
					'Printing',
					'Printing is disabled in the simulator.'
				)
			);
		tutorialTips.system.getManager('blocked').setCurrentTip('t03');

		return (
			<Provider store={store.getStore()}>
				<TutorialTip renderer={renderer} />
				<TutorialTip managerId="blocked" renderer={blockedRenderer} />
			</Provider>
		);
	});

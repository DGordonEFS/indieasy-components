import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// Import our component from this folder
import SplitPane from './SplitPane';
import { ControlledTabBar } from 'components/TabBar';

import { addComponentTheme } from 'theming';

const basicData = [{ text: 'File' }, { text: 'Edit' }, { text: 'Options' }];

const selectedIndex = 0;

storiesOf('SplitPane')
	.add('with Horizontal', () => (
		<div
			style={{
				border: '1px solid black',
				backgroundColor: 'gray',
				height: '768px',
			}}
		>
			<SplitPane>
				<div
					style={{ width: '100%', height: '100%', backgroundColor: 'red' }}
				/>
				<div
					style={{ width: '100%', height: '100%', backgroundColor: 'blue' }}
				/>
			</SplitPane>
		</div>
	))
	.add('with Vertical', () => (
		<div
			style={{
				border: '1px solid black',
				backgroundColor: 'gray',
				height: '768px',
			}}
		>
			<SplitPane vertical>
				<div
					style={{ width: '100%', height: '100%', backgroundColor: 'red' }}
				/>
				<div
					style={{ width: '100%', height: '100%', backgroundColor: 'blue' }}
				/>
			</SplitPane>
		</div>
	))
	.add('with Nested', () => (
		<div
			style={{
				border: '1px solid black',
				backgroundColor: 'gray',
				height: '100vh',
				display: 'flex',
				flexDirection: 'column',
				boxSizing: 'border-box',
			}}
		>
			<div
				style={{
					backgroundColor: 'white',
					width: '100%',
					height: '100px',
					flexShrink: 0,
				}}
			/>
			<div
				style={{
					width: '100%',
					height: 'calc(100% - 100px)',
				}}
			>
				<SplitPane id="a">
					<div
						style={{
							width: '100%',
							height: '100%',
							backgroundColor: 'red',
						}}
					/>
					<SplitPane id="b">
						<SplitPane id="c" vertical>
							<div
								style={{
									width: '100%',
									height: '100%',
									backgroundColor: 'red',
								}}
							/>
							<div
								style={{
									width: '100%',
									height: '100%',
									backgroundColor: 'blue',
								}}
							/>
						</SplitPane>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								width: '100%',
								height: '100%',
							}}
						>
							<ControlledTabBar
								selectedIndex={selectedIndex}
								data={basicData}
							/>
							<div
								style={{
									backgroundColor: '#252525',
									width: '100%',
									height: '100%',
								}}
							/>
						</div>
					</SplitPane>
				</SplitPane>
			</div>
		</div>
	))
	.add('with min size', () => (
		<div
			style={{
				border: '1px solid black',
				backgroundColor: 'gray',
				height: '768px',
			}}
		>
			<SplitPane id="a">
				<div
					style={{ width: '100%', height: '100%', backgroundColor: 'red' }}
				/>
				<SplitPane id="b" minSize={200}>
					<SplitPane id="c" vertical>
						<div
							style={{ width: '100%', height: '100%', backgroundColor: 'red' }}
						/>
						<div
							style={{ width: '100%', height: '100%', backgroundColor: 'blue' }}
						/>
					</SplitPane>
					<div
						style={{ width: '100%', height: '100%', backgroundColor: 'blue' }}
					/>
				</SplitPane>
			</SplitPane>
		</div>
	))
	.add('with size and max size', () => (
		<div
			style={{
				border: '1px solid black',
				backgroundColor: 'gray',
				height: '768px',
			}}
		>
			<SplitPane id="a">
				<div
					style={{ width: '100%', height: '100%', backgroundColor: 'red' }}
				/>
				<SplitPane id="b" size={300} maxSize={600}>
					<SplitPane id="c" vertical>
						<div
							style={{ width: '100%', height: '100%', backgroundColor: 'red' }}
						/>
						<div
							style={{ width: '100%', height: '100%', backgroundColor: 'blue' }}
						/>
					</SplitPane>
					<div
						style={{ width: '100%', height: '100%', backgroundColor: 'blue' }}
					/>
				</SplitPane>
			</SplitPane>
		</div>
	));

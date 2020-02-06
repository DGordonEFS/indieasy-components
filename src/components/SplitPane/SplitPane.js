import React, { Component } from 'react';

import IndieasyComponent from 'components';

import * as themeIds from 'components/themes';

class SplitPane extends IndieasyComponent {
	constructor(props) {
		super(props);
		let size = Math.max(props.minSize || 0, props.size || 0);
		if (props.maxSize) size = Math.min(props.maxSize, size);
		this.state = { windowSize: size, mouseDown: false };
	}
	topRef = React.createRef();
	spRef = React.createRef();

	static getDerivedStateFromProps(props, state) {
		if (
			props.overridenMaxSize > 0 &&
			props.overridenMaxSize < state.windowSize
		) {
			return { windowSize: props.overridenMaxSize };
		}
		return null;
	}

	onMouseMove = (e) => {
		let pos = e.movementX;

		if (this.props.vertical) pos = e.movementY;

		this.setState((prevState) => {
			let size = prevState.windowSize + pos;

			if (this.props.minSize) size = Math.max(this.props.minSize, size);

			if (this.props.maxSize) size = Math.min(this.props.maxSize, size);

			return { windowSize: size };
		});
	};

	onMouseUp = (e) => {
		this.setState({ mouseDown: false });
		document.body.style.cursor = 'default';
		document.removeEventListener('mouseup', this.onMouseUp);
		document.removeEventListener('mousemove', this.onMouseMove);
	};

	onMouseDown = (e) => {
		this.setState({ mouseDown: true });
		document.body.style.cursor = this.props.vertical
			? 'ns-resize'
			: 'ew-resize';
		document.removeEventListener('mouseup', this.onMouseUp);
		document.addEventListener('mouseup', this.onMouseUp);
		document.removeEventListener('mousemove', this.onMouseMove);
		document.addEventListener('mousemove', this.onMouseMove);
	};

	render() {
		const baseStyle = {
			display: 'flex',
			width: '100%',
			height: '100%',
			flex: 1,
			flexGrow: 1,
		};

		if (this.props.vertical) baseStyle.flexDirection = 'column';

		const style = this.createStyle(themeIds.SPLIT_PANE, this.props, baseStyle);

		const separatorThickness = this.props.separatorThickness || '5px';

		const separatorSizingStyle = {};
		if (this.props.vertical) {
			separatorSizingStyle.cursor = 'ns-resize';
			separatorSizingStyle.width = '100%';
			separatorSizingStyle.height = separatorThickness;
		} else {
			separatorSizingStyle.cursor = 'ew-resize';
			separatorSizingStyle.height = '100%';
			separatorSizingStyle.width = separatorThickness;
		}
		let separatorStyle = this.createStyle(
			themeIds.SPLIT_PANE_SEPARATOR,
			this.props.separatorProps || {}
		);

		separatorStyle = { ...separatorStyle, ...separatorSizingStyle };

		let maxSize = 0;
		if (this.spRef && this.spRef.current) {
			maxSize = this.props.vertical
				? this.spRef.current.clientHeight - 2
				: this.spRef.current.clientWidth - 2;
		}
		const size = this.state.windowSize; //Math.max(0, Math.min(this.state.windowSize, maxSize));

		const topStyle = {};

		if (this.props.vertical) {
			topStyle.width = '100%';
			topStyle.height = size + 'px';

			//	bottomStyle.width = '100%';
			////	bottomStyle.height = maxSize - size + 'px';
		} else {
			topStyle.width = size + 'px';
			topStyle.height = '100%';

			//		bottomStyle.width = maxSize - size - 2 + 'px';
			//		bottomStyle.height = '100%';
		}

		let childB = this.props.children[1];
		if (childB.type.name == 'SplitPane') {
			childB = React.cloneElement(this.props.children[1], {
				overridenMaxSize: maxSize - size,
			});
		}

		return (
			<div style={style} ref={this.spRef} draggable={false}>
				<div
					style={{
						flexShrink: 1,
						overflow: 'hidden',
						...topStyle,
					}}
					ref={this.topRef}
					draggable={false}
				>
					{this.props.children[0]}
				</div>
				<div
					style={separatorStyle}
					onMouseDown={this.onMouseDown}
					draggable={false}
				/>
				<div
					style={{
						flex: 1,
						overflow: 'hidden',
					}}
					draggable={false}
				>
					{childB}
				</div>
			</div>
		);
	}
}

export default SplitPane;

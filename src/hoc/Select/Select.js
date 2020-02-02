import React, { Component, Fragment } from 'react';

export class MouseState extends Component {
	state = { mouseState: 'up' };

	mouseEnterHandler = () => {
		this.setState({ mouseState: 'over' });
	};

	mouseLeaveHandler = () => {
		this.setState({ mouseState: 'up' });
	};

	mouseDownHandler = () => {
		this.setState({ mouseState: 'down' });
	};

	mouseUpHandler = () => {
		this.setState({ mouseState: 'up' });
	};

	render() {
		const targetProp = this.props.target || 'value';
		React.Children.toArray(this.props.children).forEach((element) => {
			element.props[targetProp] = this.state.mouseState;
		});

		return (
			<div
				style={{ width: '100%', height: '100%' }}
				onMouseEnter={this.mouseEnterHandler}
				onMouseLeave={this.mouseLeaveHandler}
				onMouseDown={this.mouseDownHandler}
				onMouseUp={this.mouseUpHandler}
			>
				{this.props.children}
			</div>
		);
	}
}

const Select = (props) => {
	const child = this.props.children.find((item) => {
		if (item.props.isValid) return item.props.isValid();
		else {
			switch (item.props.mode) {
				case 'mouseOver':
					return this.props.value == 'over';
				case 'mouseUp':
					return this.props.value == 'up';
				case 'mouseDown':
					return this.props.value == 'down';
				default:
					return true;
			}
		}
	});

	return <Fragment>{child}</Fragment>;
};

export default Select;

export const SelectItem = (props) => {
	return <Fragment>{props.children}</Fragment>;
};

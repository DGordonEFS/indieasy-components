import React, { Component } from 'react';

const mouseStateContext = React.createContext();

export default class MouseState extends Component {
	state = { mouseState: 'mouseUp' };

	mouseEnterHandler = () => {
		this.setState({ mouseState: 'mouseOver' });
	};

	mouseLeaveHandler = () => {
		this.setState({ mouseState: 'mouseUp' });
	};

	mouseDownHandler = () => {
		this.setState({ mouseState: 'mouseDown' });
	};

	mouseUpHandler = () => {
		this.setState({ mouseState: 'mouseUp' });
	};

	render() {
		return (
			<div
				style={{ width: '100%', height: '100%' }}
				onMouseEnter={this.mouseEnterHandler}
				onMouseLeave={this.mouseLeaveHandler}
				onMouseDown={this.mouseDownHandler}
				onMouseUp={this.mouseUpHandler}
			>
				<mouseStateContext.Provider value={{ value: this.state.mouseState }}>
					{this.props.children}
				</mouseStateContext.Provider>
			</div>
		);
	}
}

export const MouseStateConsumer = (props) => {
	const mouseState = React.useContext(mouseStateContext).value;

	const targetProp = this.props.target || 'value';
	React.Children.toArray(this.props.children).forEach((element) => {
		element.props[targetProp] = mouseState;
	});
};

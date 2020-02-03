import React from 'react';

const mouseStateContext = React.createContext();

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

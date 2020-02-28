import React, { Fragment } from 'react';

const Switch = (props) => {
	const child = React.Children.toArray(props.children).find((item) => {
		if (item.props.isValid) return item.props.isValid();
		else {
			return (
				item.props.target === undefined || props.value === item.props.target
			);
		}
	});

	return <Fragment>{child}</Fragment>;
};

export default Switch;

export const SwitchItem = (props) => {
	return <Fragment>{props.children}</Fragment>;
};

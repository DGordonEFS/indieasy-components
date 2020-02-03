import React, { Fragment } from 'react';

const Select = (props) => {
	const child = props.children.find((item) => {
		if (item.props.isValid) return item.props.isValid();
		else {
			switch (item.props.mode) {
				case 'mouseOver':
					return props.value == 'over';
				case 'mouseUp':
					return props.value == 'up';
				case 'mouseDown':
					return props.value == 'down';
				case 'value':
					return props.value == item.props.value;
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

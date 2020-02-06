import React, { Fragment } from 'react';

const Select = (props) => {
	const child = props.children.find((item) => {
		if (item.props.isValid) return item.props.isValid();
		else {
			return item.props.target == undefined || props.value == item.props.target;
		}
	});

	return <Fragment>{child}</Fragment>;
};

export default Select;

export const SelectItem = (props) => {
	return <Fragment>{props.children}</Fragment>;
};

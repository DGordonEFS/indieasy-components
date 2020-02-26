import React from 'react';

const Modal = (props) => {
	const clickHandler = (ev) => {
		ev.preventDefault();
		ev.stopPropagation();
	};

	const style = {
		backgroundColor: 'rgba(0, 0, 0, 0.75)',
		left: '0',
		right: '0',
		top: '0',
		bottom: '0',
		position: 'fixed',
		...props.style,
	};

	return <div onMouseUp={clickHandler} style={style} />;
};

export default Modal;

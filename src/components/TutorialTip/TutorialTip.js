import React from 'react';

import { withTutorialTip } from '../../hoc/withTutorialTip';
import { withTheming } from '../../hoc/withTheming';

import Modal from './Modal';

const TutorialTip = (props) => {
	if (!props.tutorialTip) return null;

	const style = {
		...props.style,
		position: 'fixed',
		left: '0',
		right: '0',
		top: '0',
		bottom: '0',
		zIndex: 999999,
	};

	const modal = props.tutorialTip.modal ? (
		<Modal style={props.modalStyle} />
	) : null;
	let Renderer = props.renderer;

	return (
		<div style={style}>
			{modal}
			<Renderer {...props} />
		</div>
	);
};

export default withTheming(withTutorialTip(TutorialTip));

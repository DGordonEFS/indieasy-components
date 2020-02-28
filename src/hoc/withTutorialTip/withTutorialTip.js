import { connect } from 'react-redux';
import { tutorialTips } from '@indieasy.software/indieasy-engine';

const mapStateToProps = (state, ownerProps) => {
	console.log(
		tutorialTips.system.getManager(ownerProps.managerId || '_default')
	);
	return {
		tutorialTip: tutorialTips.system
			.getManager(ownerProps.managerId || '_default')
			.getCurrentTip(),
	};
};

const mapDispatchToProps = (dispatch, ownerProps) => ({
	nextTip: tutorialTips.system.getManager(ownerProps.managerId || '_default')
		.nextTip,
	prevTip: tutorialTips.system.getManager(ownerProps.managerId || '_default')
		.prevTip,
	closeTip: tutorialTips.system.getManager(ownerProps.managerId || '_default')
		.closeTip,
});

export default (TutorialTip) =>
	connect(mapStateToProps, mapDispatchToProps)(TutorialTip);

import { connect } from 'react-redux';
import { tutorialTips } from '@indieasy.software/indieasy-engine';

const mapStateToProps = (state) => ({
	tutorialTip: tutorialTips.manager.getCurrentTip(),
});

const mapDispatchToProps = (dispatch) => ({
	nextTip: tutorialTips.manager.nextTip,
	prevTip: tutorialTips.manager.prevTip,
	closeTip: tutorialTips.manager.closeTip,
});

export default (TutorialTip) =>
	connect(mapStateToProps, mapDispatchToProps)(TutorialTip);

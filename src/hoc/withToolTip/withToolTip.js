import { connect } from 'react-redux';
import { toolTips } from '@indieasy.software/indieasy-engine';

const mapStateToProps = (state, ownerProps) => {
	return {
		toolTip: toolTips.system.getManager(ownerProps.managerId || '_default')
			.currentToolTip,
	};
};

export default (ToolTip) => connect(mapStateToProps)(ToolTip);

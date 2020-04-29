import React, { Fragment } from 'react';

import { withToolTip } from '../../hoc/withToolTip';
import { withTheming } from '../../hoc/withTheming';

export const defaultClassNames = {
  TOOLTIP: 'tooltip',
  ARROW: 'arrow'
};

const ToolTipRenderer = props => {
  const classNames = props.classNames || defaultClassNames;

  const style = {
    position: 'absolute'
  };

  const contents = props.toolTip.data.contents || (
    <Fragment>
      <div>{props.toolTip.data.header}</div>
      <div>{props.toolTip.data.text}</div>
    </Fragment>
  );

  return (
    <div style={style} className={props.css[classNames.TOOLTIP]}>
      {contents}
      <div className={props.css[classNames.ARROW]} />
    </div>
  );
};

const ToolTip = props => {
  console.log(props.toolTip);
  if (!props.toolTip) return null;

  const style = {
    ...props.style,
    position: 'fixed',
    left: props.toolTip.x,
    right: props.toolTip.x,
    zIndex: 999999
  };

  if (props.toolTip.data.anchor == "BOTTOM")
    style.bottom = props.toolTip.y;
  else
    style.top = props.toolTip.y;

  let Renderer = props.renderer || ToolTipRenderer;

  return (
    <div style={style}>
      <Renderer {...props} />
    </div>
  );
};

export default withTheming(withToolTip(ToolTip));

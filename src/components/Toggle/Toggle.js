import React from 'react';

import { withToggle } from '../../hoc/withToggle';
import { withTheming } from '../../hoc/withTheming';

export const defaultClassNames = {
  TOGGLE: 'toggle',
  BUTTON: 'button',
  SELECTED: 'selected'
};

const Toggle = props => {
  const classNames = props.classNames || defaultClassNames;

  const toggleClasses = [props.css[classNames.TOGGLE]];
  if (props.selected) toggleClasses.push(props.css[classNames.SELECTED]);

  const buttonClasses = [props.css[classNames.BUTTON]];
  if (props.selected) buttonClasses.push(props.css[classNames.SELECTED]);

  const mouseDownHandler = ev => {
    if (props.onMouseDown) props.onMouseDown(ev);
  };

  const mouseUpHandler = ev => {
    if (props.onMouseUp) props.onMouseUp(ev);
  };

  const mouseEnterHandler = ev => {
    if (props.onMouseEnter) props.onMouseEnter(ev);
  };

  const mouseLeaveHandler = ev => {
    if (props.onMouseLeave) props.onMouseLeave(ev);
  };

  return (
    <div
      className={toggleClasses.join(' ')}
      style={props.selected ? props.selectedStyle : props.style}
      onMouseDown={mouseDownHandler}
      onMouseUp={mouseUpHandler}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <div
        className={buttonClasses.join(' ')}
        style={props.selected ? props.selectedButtonStyle : props.buttonStyle}
      />
    </div>
  );
};

export default withToggle(withTheming(Toggle));

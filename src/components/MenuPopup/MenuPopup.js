import React from 'react';

import { withSelectIndex } from '../../hoc/withSelectIndex';
import { withTheming } from '../../hoc/withTheming';

import List from '../List';

export const classNames = {
  LIST: 'menupopup',
  ITEM: 'item',
  ENTERED: 'entered',
  SELECTED: 'selected',
  DISABLED: 'disabled',
  TEXT: 'text',
  ARROW: 'arrow'
};

export const subClassNames = {
  LIST: 'submenupopup',
  ITEM: 'item',
  ENTERED: 'entered',
  SELECTED: 'selected',
  DISABLED: 'disabled',
  TEXT: 'text',
  ARROW: 'arrow'
};

const MenuPopupItem = props => {
  const classes = [props.css[props.classNames.ITEM]];
  if (props.entered) classes.push(props.css[props.classNames.ENTERED]);
  if (props.selected) classes.push(props.css[props.classNames.SELECTED]);
  if (props.data.disabled) {
    classes.push(props.css[props.classNames.DISABLED]);
  }

  const menuItemHandler = item => {
    if (props.ownerProps.onMenuItem) props.ownerProps.onMenuItem(item);
  };

  const mouseOverHandler = ev => {
    if (props.itemProps.onMouseEnter) props.itemProps.onMouseEnter(ev);
  };

  if (props.data.data) {
    let subMenu;

    if (props.selected && !props.data.disabled) {
      subMenu = (
        <div>
          <FinalMenuPopup
            cssId={props.ownerProps.cssId}
            data={props.data.data}
            classNames={subClassNames}
            onMenuItem={menuItemHandler}
            submenu
          />
        </div>
      );
    }

    return (
      <div
        {...props.itemProps}
        onMouseOver={mouseOverHandler}
        className={classes.join(' ')}
      >
        <div className={props.css[props.classNames.TEXT]}>
          {props.data.text}
        </div>
        <div className={props.css[props.classNames.ARROW]}>{'>'}</div>
        {subMenu}
      </div>
    );
  } else {
    return (
      <div
        {...props.itemProps}
        onMouseOver={mouseOverHandler}
        className={classes.join(' ')}
      >
        <div className={props.css[props.classNames.TEXT]}>
          {props.data.text}
        </div>
      </div>
    );
  }
};

const MenuPopup = props => {
  const enterIndexHandler = index => {
    if (props.selectedIndex === index) return;

    if (props.onSelectIndex) props.onSelectIndex(index);
    if (props.onEnterIndex) props.onEnterIndex(index);
  };

  const leaveIndexHandler = index => {
    if (!props.data[index].data) {
      if (props.onSelectIndex) props.onSelectIndex(-1);
      if (props.onEnterIndex) props.onEnterIndex(-1);
    }
  };

  const selectItemHandler = item => {
    if (item.data) return;

    if (props.onMenuItem) props.onMenuItem(item);
  };

  return (
    <List
      {...props}
      onEnterIndex={enterIndexHandler}
      onLeaveIndex={leaveIndexHandler}
      withSelectIndex={false}
      classNames={props.classNames || classNames}
      itemRenderer={MenuPopupItem}
      onSelectItem={selectItemHandler}
    />
  );
};

const FinalMenuPopup = withSelectIndex(withTheming(MenuPopup), {
  ignore: { leaveIndex: true }
});
export default FinalMenuPopup;

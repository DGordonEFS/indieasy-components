import React, { useEffect } from 'react';

import { withSelectIndex } from '../../hoc/withSelectIndex';
import { withTheming } from '../../hoc/withTheming';

import List from '../List';
import MenuPopup from '../MenuPopup';

export const classNames = {
  ROOT: 'root',
  MODAL: 'modal',
  LIST: 'menubar',
  ITEM: 'item',
  ENTERED: 'entered',
  SELECTED: 'selected',
  POPUP_CONTAINER: 'popup-container'
};

const MenuBarItem = props => {
  const classes = [props.css[props.classNames.ITEM]];
  if (props.entered) classes.push(props.css[props.classNames.ENTERED]);
  if (props.selected) classes.push(props.css[props.classNames.SELECTED]);

  const menuItemHandler = item => {
    if (props.ownerProps.onMenuItem) props.ownerProps.onMenuItem(item);
  };

  const mouseOverHandler = ev => {
    if (props.itemProps.onMouseEnter) props.itemProps.onMouseEnter(ev);
  };

  const mouseUpHandler = ev => {
    ev.stopPropagation();
    if (props.itemProps.onMouseUp) props.itemProps.onMouseUp(ev);
    if (props.ownerProps.onEnterIndex) props.ownerProps.onEnterIndex(-1);
  };

  if (props.data.data) {
    let subMenu;

    if (props.selected && !props.data.disabled) {
      const popupCssId = props.ownerProps.popupCssId || props.ownerProps.cssId;
      subMenu = (
        <div>
          <div className={props.css[classNames.POPUP_CONTAINER]}>
            <MenuPopup
              cssId={popupCssId}
              data={props.data.data}
              onMenuItem={menuItemHandler}
            />
          </div>
        </div>
      );
    }

    return (
      <div
        {...props.itemProps}
        onMouseOver={mouseOverHandler}
        onMouseUp={mouseUpHandler}
        className={classes.join(' ')}
      >
        <div className={props.css[props.classNames.TEXT]}>
          {props.data.text}
        </div>
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

const MenuBar = props => {
  const selectIndexHandler = index => {
    if (props.selectedIndex === index) {
      if (props.onSelectIndex) props.onSelectIndex(-1);
      document.removeEventListener('click', mouseUpHandler);
    } else {
      if (props.onSelectIndex) {
        props.onSelectIndex(index);
      }
      document.removeEventListener('click', mouseUpHandler);
      document.addEventListener('click', mouseUpHandler);
    }
  };

  const enterIndexHandler = index => {
    if (props.selectedIndex === index) return;

    if (props.selectedIndex !== -1) {
      if (props.onSelectIndex) props.onSelectIndex(index);
    }

    if (props.onEnterIndex) props.onEnterIndex(index);
  };

  const leaveIndexHandler = index => {
    if (props.selectedIndex !== -1) return;

    if (props.onEnterIndex) props.onEnterIndex(-1);

    if (props.onLeaveIndex) props.onLeaveIndex(index);
  };

  const mouseUpHandler = ev => {
    if (props.onSelectIndex) props.onSelectIndex(-1);
    if (props.onEnterIndex) props.onEnterIndex(-1);
    document.removeEventListener('click', mouseUpHandler);
  };

  useEffect(() => {
    return () => {
      document.removeEventListener('click', mouseUpHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let modal;

  if (props.selectedIndex > -1 && props.data[props.selectedIndex].data)
    modal = <div className={props.css[classNames.MODAL]} />;

  return (
    <div className={props.css[classNames.ROOT]}>
      <List
        horizontal
        itemRenderer={MenuBarItem}
        {...props}
        onSelectIndex={selectIndexHandler}
        onEnterIndex={enterIndexHandler}
        onLeaveIndex={leaveIndexHandler}
        withSelectIndex={false}
        classNames={classNames}
      />
      {modal}
    </div>
  );
};

export default withSelectIndex(withTheming(MenuBar));

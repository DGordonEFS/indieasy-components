import React, { useState } from 'react';

const Bar = props => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const maxValue = props.maxValue;
  const value = props.data.value;
  const percent = value / maxValue;
  const size = percent * 100 + '%';

  const barStyle = {};
  barStyle.backgroundColor = !isHighlighted
    ? props.data.barColor || props.barColor
    : props.data.barHighlightColor ||
      props.barHighlightColor ||
      props.data.barColor ||
      props.barColor;
  if (props.horizontal) {
    barStyle.width = size;
    barStyle.height = props.barThickness;
  } else {
    barStyle.width = props.barThickness;
    barStyle.height = size;
  }

  barStyle.cursor = props.pointer ? 'pointer' : null;

  const mouseEnterHandler = ev => {
    setIsHighlighted(true);
    if (props.onHighlightItem) props.onHighlightItem(props.data, true, ev);
  };

  const mouseLeaveHandler = ev => {
    setIsHighlighted(false);
    if (props.onHighlightItem) props.onHighlightItem(props.data, false, ev);
  };

  const mouseUpHandler = ev => {
    if (props.onSelectItem) props.onSelectItem(props.data, ev);
  };

  return (
    <div
      style={barStyle}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseUp={mouseUpHandler}
    />
  );
};

const BarContainer = props => {
  const style = { display: 'flex' };
  if (!props.horizontal) {
    style.justifyContent = !props.reverse ? 'flex-end' : 'flex-start';
    style.alignItems = 'center';
    style.width = props.thickness;
    style.height = '100%';
    style.flexDirection = 'column';
  } else {
    style.justifyContent = props.reverse ? 'flex-end' : 'flex-start';
    style.alignItems = 'center';
    style.height = props.thickness;
    style.width = '100%';
    style.flexDirection = 'row';
  }

  const BarRenderer = props.barRenderer || props.data.barRenderer || Bar;

  const highlightItemHandler = (item, highlighted, ev) => {
    if (props.onHighlightItem) props.onHighlightItem(item, highlighted, ev);
  };

  const selectItemHandler = (item, ev) => {
    if (props.onSelectItem) props.onSelectItem(item, ev);
  };

  // bar parts!
  let barParts = <BarRenderer {...props} onSelectItem={selectItemHandler} />;

  if (props.data.parts) {
    barParts = props.data.parts.map((item, index) => {
      return (
        <BarRenderer
          key={index}
          {...props}
          data={item}
          onHighlightItem={highlightItemHandler}
          onSelectItem={selectItemHandler}
        />
      );
    });
  }

  return <div style={style}>{barParts}</div>;
};

const Bars = props => {
  const highlightItemHandler = (item, position, highlighted, ev) => {
    if (props.onHighlightItem)
      props.onHighlightItem(item, position, highlighted, ev);
  };

  const selectItemHandler = (item, position, ev) => {
    if (props.onSelectItem) props.onSelectItem(item, position, ev);
  };

  const itemThickness = 100 / props.data.length + '%';
  const bars = props.data.map(item => {
    return (
      <BarContainer
        key={item.name}
        data={item}
        maxValue={props.maxValue}
        barColor={props.barColor}
        barHighlightColor={props.barHighlightColor}
        barRenderer={props.barRenderer}
        reverse={props.reverse}
        horizontal={props.horizontal}
        thickness={itemThickness}
        barThickness={props.barThickness}
        pointer={props.pointer}
        onHighlightItem={(position, highlighted, ev) =>
          highlightItemHandler(item, position, highlighted, ev)
        }
        onSelectItem={(position, ev) => selectItemHandler(item, position, ev)}
      />
    );
  });

  return (
    <div
      style={{
        ...props.style,
        width: '100%',
        height: '100%',
        gridArea: props.gridArea,
        display: 'flex',
        flexDirection: props.horizontal ? 'column' : 'row'
      }}
    >
      {bars}
    </div>
  );
};

export default Bars;

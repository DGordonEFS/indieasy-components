import React, { Fragment, useEffect, useState } from 'react';

const Line = props => {
  let { x1, y1, x2, y2 } = props;

  const a = x1 - x2,
    b = y1 - y2,
    length = Math.sqrt(a * a + b * b);

  const sx = (x1 + x2) / 2,
    sy = (y1 + y2) / 2;

  const x = sx - length / 2,
    y = sy;

  var angle = Math.PI - Math.atan2(-b, a);

  const style = {
    border: props.border,
    backgroundColor: props.color,
    width: `${length}px`,
    height: '0px',
    transform: `rotate(${-angle}rad)`,
    position: 'absolute',
    bottom: `${y - 1}px`,
    left: `${x - 1}px`,
    WebkitBackfaceVisibility: 'hidden'
  };

  return <div style={style} />;
};

const LineIcon = props => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const color = !isHighlighted
    ? props.color
    : props.highlightColor || props.color;

    let innerColor = !isHighlighted
    ? props.innerColor
    : props.innerHighlightColor || props.innerColor;

    if (!innerColor)
      innerColor = "white";

  const outterStyle = {
    backgroundColor: color,
    borderRadius: '50%',
    width: '12px',
    height: '12px',
    position: 'relative',
    left: '-6px',
    top: '6px',
    zIndex: 100,
    cursor: props.pointer ? 'pointer' : null
  };
  const innerStyle = {
    position: 'relative',
    left: '3px',
    top: '3px',
    backgroundColor: innerColor,
    borderRadius: '50%',
    width: '6px',
    height: '6px'
  };

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
      style={outterStyle}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseUp={mouseUpHandler}
    >
      <div style={innerStyle} />
    </div>
  );
};

const Lines = props => {
  //const width = 720;
  //const height = 300;

  const ref = React.createRef();

  let [size, setSize] = useState({ width: 0, height: 0 });

  const { width, height } = size;

  useEffect(() => {
    setSize({
      width: ref.current.clientWidth,
      height: ref.current.clientHeight
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const style = {
    ...props.style,
    boxSizing: 'content-box',
    gridArea: props.gridArea,
    position: 'relative',
    width: '100%',
    height: '100%'
  };

  const highlightItemHandler = (item, position, highlighted, ev) => {
    if (props.onHighlightItem)
      props.onHighlightItem(item, position, highlighted, ev);
  };

  const selectItemHandler = (item, position, ev) => {
    if (props.onSelectItem) props.onSelectItem(item, position, ev);
  };

  const icons = props.data.map((item, itemIndex) => {
    const itemStyle = {
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      position: 'absolute',
      top: "0"
    };

    let lastX;
    let lastY;

    return (
      <div key={item.name} style={itemStyle}>
        {item.positions.map((position, index) => {
          let valuePercent = position.value / props.maxValue;
          let crossValuePercent = position.crossValue / props.maxCrossValue;

          if (props.valueReverse) valuePercent = 1 - valuePercent;
          if (props.crossValueReverse)
            crossValuePercent = 1 - crossValuePercent;

          let x, y;

          if (!props.horizontal) {
            x = valuePercent * width;
            y = crossValuePercent * height;
          } else {
            y = valuePercent * height;
            x = crossValuePercent * width;
          }

          const positionStyle = { position: 'absolute', pointerEvents: 'all' };

          positionStyle.left = x + 'px';
          positionStyle.bottom = y + 'px';

          const line =
            lastX !== undefined ? (
              <Line
                color={item.color}
                border={item.line}
                x1={lastX}
                y1={lastY}
                x2={x}
                y2={y}
              />
            ) : null;

          lastX = x;
          lastY = y;

          const lineIcon = item.iconRenderer || props.iconRenderer || (
            <LineIcon
              color={item.color}
              highlightColor={item.highlightColor}
              innerColor={item.innerColor}
              innerHighlightColor={item.innerHighlightColor}
              pointer={props.pointer}
              data={position}
              onHighlightItem={(pos, highlighted, ev) =>
                highlightItemHandler(item, pos, highlighted, ev)
              }
              onSelectItem={(pos, ev) => selectItemHandler(item, pos, ev)}
            />
          );

          return (
            <div key={`${item.name}_${index}`} style={{ zIndex: itemIndex }}>
              <div style={positionStyle}>{lineIcon}</div>
              {line}
            </div>
          );
        })}
      </div>
    );
  });

  return (
    <div ref={ref} style={style}>
      {icons}
    </div>
  );
};

export default Lines;

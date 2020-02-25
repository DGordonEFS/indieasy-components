import React from 'react';

const TitleList = props => {
  let data = props.data;

  if (props.cellAligned) {
    const cellSize = 100 / props.data.length;
    data = props.data.map((item, index) => {
      return {
        ...item,
        value: cellSize * (index + 0.5),
        style: {
          width: props.horizontal ? `${cellSize}%` : null
        }
      };
    });
  }

  const style = { ...props.style, position: 'relative' };

  if (!props.horizontal) {
    style.gridArea = props.yAxis;
  } else {
    style.gridArea = props.xAxis;
  }

  const rows = data.map(item => {
    const percent = (item.value / props.maxValue) * 100;

    const rowStyle = {};
    rowStyle.position = 'absolute';
    rowStyle.textAlign = props.textAlign;
    rowStyle.whiteSpace = props.wordWrap ? 'normal' : 'nowrap';

    if (!props.horizontal) {
      rowStyle.width = '100%';
      rowStyle.right = '0px';

      if (!props.reverse) {
        rowStyle.bottom = percent + '%';
        rowStyle.transform = 'translateY(50%)';
      } else {
        rowStyle.top = percent + '%';
        rowStyle.transform = 'translateY(-50%)';
      }
      if (item.offset) rowStyle.transform += ` translateX(${item.offset})`;

      if (props.yAxis === 'LEFT') rowStyle.right = props.margin;
      else rowStyle.left = props.margin;
    } else {
      if (!props.reverse) {
        rowStyle.left = percent + '%';
        rowStyle.transform = 'translateX(-50%)';
      } else {
        rowStyle.right = percent + '%';
        rowStyle.transform = 'translateX(50%)';
      }

      if (item.offset) rowStyle.transform += ` translateY(${item.offset})`;

      if (props.xAxis === 'TOP') rowStyle.bottom = props.margin;
      else rowStyle.top = props.margin;
    }

    if (props.rotate) rowStyle.transform += ` rotate(${props.rotate}deg)`;

    return (
      <div key={item.value} style={{ ...item.style, ...rowStyle }}>
        {item.name || item.value}
      </div>
    );
  });

  const hiddenRows = data.map(item => {
    return (
      <div
        key={item.value}
        style={{
          ...item.style,
          visibility: 'hidden',
          whiteSpace: props.wordWrap ? 'normal' : 'nowrap'
        }}
      >
        {item.name || item.value}
      </div>
    );
  });

  return (
    <div style={style}>
      {rows}
      <div
        style={{
          display: 'flex',
          flexDirection: props.horizontal ? 'row' : 'column'
        }}
      >
        {hiddenRows}
      </div>
    </div>
  );
};

export default TitleList;

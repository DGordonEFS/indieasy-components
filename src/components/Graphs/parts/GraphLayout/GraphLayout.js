import React from 'react';

export const GraphLayoutAreas = {
  TOP: 'TOP',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
  BOTTOM: 'BOTTOM',
  GRAPH: 'GRID'
};

const GraphLayout = props => {
  const style = {
    ...props.style,
    display: 'grid',
    gridTemplateColumns: `min-content ${props.width} min-content`,
    gridTemplateRows: `min-content ${props.height} min-content`,
    gridTemplateAreas: `
      '. ${GraphLayoutAreas.TOP} .' 
      '${GraphLayoutAreas.LEFT} ${GraphLayoutAreas.GRAPH} ${GraphLayoutAreas.RIGHT}'
      '. ${GraphLayoutAreas.BOTTOM} .'
    `
  };

  return <div style={style}>{props.children}</div>;
};

export default GraphLayout;

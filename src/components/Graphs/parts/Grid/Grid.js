import React, { Fragment } from 'react';
import GraphLayout from '../GraphLayout';

const GridLines = props => {
  const style = {
    ...props.style,
    width: '100%',
    height: '100%',
    display: 'grid',
    backgroundColor: props.backgroundColor,
    gridArea: props.gridArea
  };

  style.gridTemplateColumns = props.columns
    .map(item => item.value + '%')
    .reduce((x, y) => x + ' ' + y);
  style.gridTemplateRows = props.rows
    .map(item => item.value + '%')
    .reduce((x, y) => x + ' ' + y);

  const cells = props.columns.map((column, columnIndex) => {
    return (
      <Fragment key={`${columnIndex}`}>
        {props.rows.map((row, rowIndex) => {
          const itemStyle = {
            gridArea: `${rowIndex + 1} / ${columnIndex + 1} / span 1 / span 1`,
            boxSizing: 'border-box'
          };

          if (props.columnLines) {
            if (!props.reverseColumns) {
              itemStyle.borderRight = column.border || props.border;
              itemStyle.borderLeft = column.prevBorder
                ? column.border || props.border
                : null;
            } else {
              itemStyle.borderLeft = column.border || props.border;
              itemStyle.borderRight = column.prevBorder
                ? column.border || props.border
                : null;
            }
          }
          if (props.rowLines) {
            if (!props.reverseRows) {
              itemStyle.borderBottom = row.border || props.border;
              itemStyle.borderTop = row.prevBorder
                ? row.border || props.border
                : null;
            } else {
              itemStyle.borderTop = row.border || props.border;
              itemStyle.borderBottom = row.prevBorder
                ? row.border || props.border
                : null;
            }
          }

          itemStyle.backgroundColor =
            column.backgroundColor || row.backgroundColor || props.cellColor;

          return <div key={`${columnIndex}_${rowIndex}`} style={itemStyle} />;
        })}
      </Fragment>
    );
  });

  return <div style={style}>{cells}</div>;
};

const Grid = props => {
  const columns = [...props.columns];
  const rows = [...props.rows];
  if (props.reverseColumns) columns.reverse();
  if (props.reverseRows) rows.reverse();

  const lines = (
    <GridLines
      style={{ boxSizing: 'content-box', ...props.style }}
      gridArea={props.gridArea}
      columns={columns}
      rows={rows}
      reverseColumns={props.reverseColumns}
      reverseRows={props.reverseRows}
      backgroundColor={props.backgroundColor}
      cellColor={props.cellColor}
      border={props.border}
      columnLines={props.columnLines}
      rowLines={props.rowLines}
    />
  );

  return lines;
};

export default Grid;

import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Fade,
  useMediaQuery,
} from '@material-ui/core';
import {useStyles} from 'Common/table/Table.styles';

export function TableComponent({columns, rows}) {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width: 425px)');

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small">
        <TableHead className={classes.tableHead}>
          <TableRow>
            {columns
              .filter((filterItem) => {
                if (matches) {
                  return filterItem.mobile === true;
                }

                return filterItem;
              })
              .map((columnItem) => {
                return (
                  <TableCell key={columnItem.id} variant="head" align={columnItem.align}>
                    {columnItem.label}
                  </TableCell>
                );
              })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((rowItem) => {
            const {id, name, weather, sys} = rowItem;
            const [weatherLike] = weather;

            return (
              <Fade in={id !== null} key={id}>
                <TableRow className={classes.rowItem}>
                  <TableCell component="th" scope="row">
                    {name ?? 'City'}
                  </TableCell>
                  {!matches ? (
                    <>
                      <TableCell component="th" scope="row">
                        {weatherLike.main ?? 'Weather'}
                      </TableCell>
                      <TableCell align="right">{sys.country ?? 'Country'}</TableCell>
                    </>
                  ) : null}
                </TableRow>
              </Fade>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

TableComponent.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.any).isRequired,
  rows: PropTypes.arrayOf(PropTypes.any),
};

TableComponent.defaultProps = {
  rows: [],
};

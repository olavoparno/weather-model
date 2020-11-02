import React, {useCallback, useMemo} from 'react';
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
import {useStyles} from 'Modules/weather/Weather.styles';
import {useWeather} from 'Modules/weather/Weather.useWeather';

function TableComponent({columns, rows}) {
  const {setModalOpen, setCurrentCity} = useWeather();
  const classes = useStyles();
  const matches = useMediaQuery('(max-width: 425px)');

  const handleOpenDescription = useCallback(
    (currentCity) => {
      setCurrentCity(currentCity);
      setModalOpen(true);
    },
    [setCurrentCity, setModalOpen]
  );

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size={matches ? 'small' : 'medium'}>
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
                <TableRow
                  className={classes.rowItem}
                  onClick={() => handleOpenDescription(rowItem)}>
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

export function CitiesList() {
  const {citiesColumns, closestCities} = useWeather();

  return useMemo(() => <TableComponent columns={citiesColumns} rows={closestCities} />, [
    citiesColumns,
    closestCities,
  ]);
}

TableComponent.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.any).isRequired,
  rows: PropTypes.arrayOf(PropTypes.any),
};

TableComponent.defaultProps = {
  rows: [],
};

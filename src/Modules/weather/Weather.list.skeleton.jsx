import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {useWeather} from 'Modules/weather/Weather.useWeather';
import {Skeleton} from '@material-ui/lab';
import {Fade} from '@material-ui/core';

function TableSkeleton({columns}) {
  return (
    <Fade in timeout={600} unmountOnExit>
      <table width="100%">
        <thead>
          <tr>
            {columns?.map((columnItem) => {
              return (
                <th key={columnItem.id}>
                  <Skeleton style={{marginBottom: '0.5rem'}} variant="rect" height={20} />
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {columns?.map((columnItem) => {
              return (
                <td key={columnItem.id}>
                  <Skeleton style={{marginBottom: '0.5rem'}} variant="rect" height={15} />
                  <Skeleton style={{marginBottom: '0.5rem'}} variant="rect" height={15} />
                  <Skeleton style={{marginBottom: '0.5rem'}} variant="rect" height={15} />
                  <Skeleton style={{marginBottom: '0.5rem'}} variant="rect" height={15} />
                  <Skeleton style={{marginBottom: '0.5rem'}} variant="rect" height={15} />
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </Fade>
  );
}

export function CitiesListSkeleton() {
  const {citiesColumns} = useWeather();

  return useMemo(() => <TableSkeleton columns={citiesColumns} />, [citiesColumns]);
}

TableSkeleton.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.any).isRequired,
};

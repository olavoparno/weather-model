import React from 'react';
import shallow from 'zustand/shallow';
import {Fade, Paper} from '@material-ui/core';
import {useStyles} from 'Modules/weather/Weather.styles';
import {SearchDisplay} from 'Modules/weather/Weather.search.component';
import {WeatherMap} from 'Modules/weather/Weather.map.component';
import {useWeather} from 'Modules/weather/Weather.useWeather';
import {CitiesList} from 'Modules/weather/Weather.list.component';
import {WeatherDetails} from 'Modules/weather/Weather.details.component';
import {usePlatformStore} from 'Common/platform/Platform.usePlatformStore';
import {CitiesListSkeleton} from './Weather.list.skeleton';

export function WeatherPage() {
  const classes = useStyles();
  const {closestCities, isModalOpen} = useWeather();
  const {isLoading} = usePlatformStore(
    (state) => ({
      isLoading: state.isLoading,
    }),
    shallow
  );

  return (
    <div>
      {isModalOpen && <WeatherDetails />}
      <SearchDisplay />
      <Paper elevation={3} className={classes.paper}>
        <WeatherMap />
      </Paper>
      {isLoading && (
        <Paper elevation={3} className={classes.paper}>
          <CitiesListSkeleton />
        </Paper>
      )}
      <Fade in={closestCities.length > 0}>
        <Paper elevation={3} className={classes.paper}>
          <CitiesList />
        </Paper>
      </Fade>
    </div>
  );
}

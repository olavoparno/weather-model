import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import {useStyles} from 'Modules/weather/Weather.styles';
import {useWeather} from 'Modules/weather/Weather.useWeather';

export function SearchDisplay() {
  const classes = useStyles();
  const {currentLocation, getClosestCities} = useWeather();

  return (
    <Paper component="form" className={classes.searchRoot}>
      <InputBase disabled className={classes.input} placeholder={currentLocation?.toString()} />
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton
        aria-label="search-button"
        type="button"
        className={classes.iconButton}
        onClick={getClosestCities}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

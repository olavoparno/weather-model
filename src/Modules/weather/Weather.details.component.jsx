import React, {useCallback, useMemo} from 'react';
import {Typography, Modal, Backdrop, Fade} from '@material-ui/core';
import {useStyles} from 'Modules/weather/Weather.styles';
import {useWeather} from 'Modules/weather/Weather.useWeather';

export function WeatherDetails() {
  const classes = useStyles();
  const {isModalOpen, setModalOpen, currentCity} = useWeather();

  const handleClose = useCallback(() => setModalOpen(false), [setModalOpen]);

  return useMemo(() => {
    const {name, main} = currentCity;
    const {temp_max: max, temp_min: min} = main;

    const convertToCelsius = (tempInKelvin) => {
      return Math.round(tempInKelvin - 273.15);
    };

    return (
      <Modal
        className={classes.modal}
        open={isModalOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={isModalOpen}>
          <div className={classes.modalPaper}>
            <Typography paragraph component="h1" variant="h4">
              Weather details for: {name ?? 'Unknown City'}
            </Typography>
            <Typography component="h2" variant="subtitle2">
              - Current Maximum Temperature: {convertToCelsius(max)} °C
            </Typography>
            <Typography component="h2" variant="subtitle2">
              - Current Minimum Temperature: {convertToCelsius(min)} °C
            </Typography>
          </div>
        </Fade>
      </Modal>
    );
  }, [classes, currentCity, handleClose, isModalOpen]);
}

import {useCallback, useEffect, useMemo} from 'react';
import shallow from 'zustand/shallow';
import {useWeatherStore} from 'Modules/weather/Weather.useWeatherStore';
import {useRequest} from 'Common/request/Request.useRequest';
import {weatherApi} from 'Common/platform/Platform.envManager';

export function useWeather() {
  const weatherRequest = useRequest(weatherApi);
  const citiesColumns = useMemo(
    () => [
      {id: 'city', label: 'City', align: 'left', mobile: true},
      {id: 'type', label: 'Weather', align: 'left', mobile: false},
      {id: 'country', label: 'Country', align: 'right', mobile: false},
    ],
    []
  );
  const {
    currentLocation,
    closestCities,
    currentCity,
    isModalOpen,
    setCurrentLocation,
    setClosestCities,
    setModalOpen,
    setCurrentCity,
  } = useWeatherStore(
    (state) => ({
      currentLocation: state.currentLocation,
      closestCities: state.closestCities,
      isModalOpen: state.isModalOpen,
      currentCity: state.currentCity,
      setCurrentLocation: state.setCurrentLocation,
      setClosestCities: state.setClosestCities,
      setModalOpen: state.setModalOpen,
      setCurrentCity: state.setCurrentCity,
    }),
    shallow
  );

  const setCurrentLocationCallback = useCallback(
    (position) => {
      setCurrentLocation(position);
    },
    [setCurrentLocation]
  );

  const setClosestCitiesCallback = useCallback(
    (cities) => {
      setClosestCities(cities);
    },
    [setClosestCities]
  );

  useEffect(() => {
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setCurrentLocationCallback);
      }
    }

    if (!currentLocation) getLocation();
  }, [currentLocation, setCurrentLocationCallback]);

  const getClosestCities = useCallback(() => {
    const [lat, lon] = currentLocation;
    const params = {
      cnt: 15,
      lat,
      lon,
    };

    return weatherRequest
      .get('/find', {
        params,
      })
      .then(({data}) => {
        const {list} = data;
        setClosestCitiesCallback(list);
      });
  }, [currentLocation, setClosestCitiesCallback, weatherRequest]);

  return {
    currentLocation,
    citiesColumns,
    closestCities,
    getClosestCities,
    isModalOpen,
    setModalOpen,
    currentCity,
    setCurrentCity,
    setCurrentLocation,
  };
}

import React, {useCallback, useEffect} from 'react';
import {MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents} from 'react-leaflet';
import {Button} from '@material-ui/core';
import {useWeather} from 'Modules/weather/Weather.useWeather';
import {SearchOutlined} from 'Common/icons/Icons.Exporter';

const mapStyles = {
  height: 500,
};

const MapMarker = () => {
  const {currentLocation, setCurrentLocation, getClosestCities} = useWeather();

  const handleNewPosition = useCallback((newPosition) => setCurrentLocation(newPosition), [
    setCurrentLocation,
  ]);

  useMapEvents({
    click: ({latlng}) => {
      const newPosition = {
        coords: {
          latitude: latlng.lat,
          longitude: latlng.lng,
        },
      };
      handleNewPosition(newPosition);
    },
  });

  return (
    <Marker position={currentLocation}>
      <Popup>
        <Button
          variant="contained"
          color="primary"
          startIcon={<SearchOutlined />}
          onClick={getClosestCities}>
          Search Closest Cities
        </Button>
      </Popup>
    </Marker>
  );
};

const MapLayer = () => {
  const {currentLocation} = useWeather();
  const map = useMap();

  useEffect(() => {
    if (currentLocation) {
      map.panTo(currentLocation);
    }
  }, [map, currentLocation]);

  return (
    <>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapMarker />
    </>
  );
};

export function WeatherMap() {
  const {currentLocation} = useWeather();

  return (
    <MapContainer style={mapStyles} center={currentLocation} zoom={13} scrollWheelZoom>
      <MapLayer />
    </MapContainer>
  );
}

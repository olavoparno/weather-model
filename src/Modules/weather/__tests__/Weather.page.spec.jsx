/* eslint-disable no-console */
import React from 'react';
import {render, waitFor} from '@testing-library/react';
import {WeatherPage} from 'Modules/weather/Weather.page';

describe('Tests Weather Page', () => {
  it('should render weather page with map container', async () => {
    const {container} = render(<WeatherPage />);

    const mapContainer = container.querySelector('.leaflet-container');

    await waitFor(() => {
      expect(mapContainer).toBeInTheDocument();
    });
  });
});

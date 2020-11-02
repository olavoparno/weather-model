/* eslint-disable no-console */
import React from 'react';
import {render, waitFor} from '@testing-library/react';
import {AppWithTheme} from 'index';

describe('Tests App Entry Point', () => {
  it('should render index.jsx', async () => {
    console.info = jest.fn();

    render(<AppWithTheme />);

    await waitFor(() => {
      expect(console.info).toHaveBeenCalledTimes(2);
    });
  });
});

import React from 'react';
import shallow from 'zustand/shallow';
import {Layout} from 'Common/layout/Layout.component';
import {WeatherPage} from 'Modules/weather/Weather.page';
import {AlertDialog} from 'Common/alert/Alert.dialog';
import {usePlatformStore} from 'Common/platform/Platform.usePlatformStore';

function App() {
  const {alertOptions} = usePlatformStore(
    (state) => ({
      alertOptions: state.alertOptions,
    }),
    shallow
  );

  return (
    <Layout>
      {alertOptions && <AlertDialog />}
      <WeatherPage />
    </Layout>
  );
}

export default App;

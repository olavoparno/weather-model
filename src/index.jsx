/* eslint-disable no-console */
import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import {MuiThemeProvider} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import {useConsole} from 'Common/hooks/Hooks.useConsole';
import {useGlobalTheme} from 'Common/layout/Layout.globalStyles';
import App from 'App';
import reportWebVitals from 'reportWebVitals';

export function AppWithTheme() {
  const logMsg = useConsole();
  const {globalMuiTheme} = useGlobalTheme();

  useEffect(() => {
    logMsg.info('Hello, my name is Olavo! Reach me trough  GitHub:\nhttps://github.com/olavoparno');
  }, [logMsg]);

  return (
    <MuiThemeProvider theme={globalMuiTheme}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>
  );
}

ReactDOM.render(
  <AppWithTheme />,
  global.document.getElementById('root') || global.document.createElement('div')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

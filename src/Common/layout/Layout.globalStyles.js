import {useMemo} from 'react';
import shallow from 'zustand/shallow';
import {createMuiTheme} from '@material-ui/core';
import {useLayoutStore} from 'Common/layout/Layout.useLayoutStore';
import {teal} from '@material-ui/core/colors';

export function useGlobalTheme() {
  const {isDarkMode} = useLayoutStore((state) => ({isDarkMode: state.isDarkMode}), shallow);

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          primary: teal,
          contrastThreshold: 3,
          type: isDarkMode ? 'dark' : 'light',
        },
        mixins: {
          footer: {
            minHeight: 36,
          },
          map: {
            minHeight: 500,
          },
        },
      }),
    [isDarkMode]
  );

  return {globalMuiTheme: theme};
}

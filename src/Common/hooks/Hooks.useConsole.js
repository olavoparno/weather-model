import {useMemo} from 'react';

/* eslint-disable no-console */
export function useConsole() {
  const customLog = (level, color) => (message) =>
    console[level](`%c${message}`, `color:${color};font-size:10px;`);

  return useMemo(
    () => ({
      info: customLog('info', 'darkcyan'),
      warn: customLog('warn', 'yellow'),
      error: customLog('warn', 'darkorange'),
    }),
    []
  );
}

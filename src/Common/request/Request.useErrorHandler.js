import {useCallback, useMemo} from 'react';
import {usePlatformStore} from 'Common/platform/Platform.usePlatformStore';
import shallow from 'zustand/shallow';

export function useErrorHandler() {
  const {setAlertOptions, setErrorInfo} = usePlatformStore(
    (state) => ({
      setAlertOptions: state.setAlertOptions,
      setErrorInfo: state.setErrorInfo,
    }),
    shallow
  );

  const getErrorMessage = (error) => {
    const responseError = error?.response?.data?.message;

    return responseError ?? 'An error has occurred';
  };

  const handleGeneralErrors = useCallback(
    (error) => {
      if (error) {
        setErrorInfo(error);
      }

      if (error) {
        const errorMessage = getErrorMessage(error);

        setAlertOptions(errorMessage, 'warning');
      }
    },
    [setAlertOptions, setErrorInfo]
  );

  return useMemo(() => ({handleGeneralErrors}), [handleGeneralErrors]);
}

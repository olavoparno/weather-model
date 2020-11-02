import create from 'zustand';

const platformStore = (set) => ({
  isLoading: false,
  errorInfo: null,
  alertOptions: null,
  setIsLoading: (isLoading) => set(() => ({isLoading})),
  setErrorInfo: (error) => {
    return set(() => ({
      errorInfo: error,
    }));
  },
  setAlertOptions: (message, type, timeout) =>
    set(() => ({
      alertOptions: {
        message,
        type,
        timeout,
      },
    })),
  clearAlert: () => set(() => ({alertOptions: null})),
});

export const usePlatformStore = create(platformStore);

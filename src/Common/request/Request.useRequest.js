import {useState, useEffect, useCallback} from 'react';
import shallow from 'zustand/shallow';
import axios from 'axios';
import {apiKey} from 'Common/platform/Platform.envManager';
import {useAdapter} from 'Common/request/Request.useAdapter';
import {useErrorHandler} from 'Common/request/Request.useErrorHandler';
import {usePlatformStore} from 'Common/platform/Platform.usePlatformStore';

export function useRequest(baseURL) {
  const {handleGeneralErrors} = useErrorHandler();
  const {retryAdapterEnhancer, cacheAdapterEnhancer, Cache} = useAdapter();
  const {setIsLoading} = usePlatformStore(
    (state) => ({
      setIsLoading: state.setIsLoading,
    }),
    shallow
  );

  const handleLoading = useCallback(
    (isLoading) => {
      setIsLoading(isLoading);
    },
    [setIsLoading]
  );

  const [axiosInstance, setAxiosInstance] = useState({});
  useEffect(() => {
    const instance = axios.create({
      baseURL,
      params: {
        appid: apiKey,
        units: 'metric',
      },
      timeout: 0,
    });

    const customCache = new Cache({maxAge: 1 * 60 * 1000, max: 100});

    instance.defaults.timeUp = false;
    instance.defaults.adapter = cacheAdapterEnhancer(retryAdapterEnhancer(instance), {
      defaultCache: customCache,
    });

    const isValidStatus = (status) => {
      return status >= 200 && status < 300;
    };

    instance.defaults.validateStatus = (status) => {
      return isValidStatus(status);
    };

    instance.interceptors.request.use((config) => {
      handleLoading(true);

      return config;
    });

    instance.interceptors.response.use(
      (response) => {
        handleLoading(false);

        return response;
      },
      (error) => {
        handleLoading(false);
        handleGeneralErrors(error);

        return Promise.reject(error);
      }
    );

    setAxiosInstance({instance});

    return () => {
      setAxiosInstance({});
    };
  }, [
    baseURL,
    retryAdapterEnhancer,
    Cache,
    cacheAdapterEnhancer,
    handleGeneralErrors,
    handleLoading,
  ]);

  return axiosInstance.instance;
}

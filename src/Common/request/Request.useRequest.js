import {useState, useEffect} from 'react';
import axios from 'axios';
import {apiKey} from 'Common/platform/Platform.envManager';
import {useAdapter} from 'Common/request/Request.useAdapter';
import {useErrorHandler} from 'Common/request/Request.useErrorHandler';

export function useRequest(baseURL) {
  const {handleGeneralErrors} = useErrorHandler();
  const {retryAdapterEnhancer, cacheAdapterEnhancer, Cache} = useAdapter();

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

    instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        handleGeneralErrors(error);

        return Promise.reject(error);
      }
    );

    setAxiosInstance({instance});

    return () => {
      setAxiosInstance({});
    };
  }, [baseURL, retryAdapterEnhancer, Cache, cacheAdapterEnhancer, handleGeneralErrors]);

  return axiosInstance.instance;
}

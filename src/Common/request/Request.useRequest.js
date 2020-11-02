import {useState, useEffect} from 'react';
import axios from 'axios';
import {apiKey} from 'Common/platform/Platform.envManager';
import {useAdapter} from 'Common/request/Request.useAdapter';

export function useRequest(baseURL) {
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

    setAxiosInstance({instance});

    return () => {
      setAxiosInstance({});
    };
  }, [baseURL, retryAdapterEnhancer, Cache, cacheAdapterEnhancer]);

  return axiosInstance.instance;
}

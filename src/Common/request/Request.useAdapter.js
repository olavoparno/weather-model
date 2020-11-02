import {cacheAdapterEnhancer, Cache} from 'axios-extensions';

function retryAdapterEnhancer(instance, options = {}) {
  const {adapter = instance.defaults.adapter, defaults} = instance;
  const {times = 2} = options;

  return async (config) => {
    const {retryTimes = times} = config;
    let timeUp = false;
    let count = 0;

    const request = async () => {
      defaults.timeUp = retryTimes === count;
      try {
        return await adapter(config);
      } catch (e) {
        timeUp = retryTimes === count;
        if (timeUp) {
          throw e;
        }

        count += 1;

        return request();
      }
    };

    return request();
  };
}

export function useAdapter() {
  return {retryAdapterEnhancer, cacheAdapterEnhancer, Cache};
}

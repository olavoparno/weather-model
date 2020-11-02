import create from 'zustand';

const weatherStore = (set) => ({
  isModalOpen: false,
  closestCities: [],
  currentLocation: null,
  currentCity: {},
  setCurrentLocation: (position) =>
    set(() => ({
      currentLocation: [position.coords.latitude, position.coords.longitude],
    })),
  setClosestCities: (cities) =>
    set(() => ({
      closestCities: cities,
    })),
  setModalOpen: (isOpen) =>
    set(() => ({
      isModalOpen: isOpen,
    })),
  setCurrentCity: (city) =>
    set(() => ({
      currentCity: city,
    })),
});

export const useWeatherStore = create(weatherStore);

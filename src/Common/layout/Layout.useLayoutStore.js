import create from 'zustand';

const layoutStore = (set) => ({
  isDarkMode: false,
  setDarkMode: () => set((state) => ({isDarkMode: !state.isDarkMode})),
});

export const useLayoutStore = create(layoutStore);

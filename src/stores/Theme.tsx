import { create } from 'zustand';

export type TState = {
  theme: 'light' | 'dark';
};

type TActions = {
  changeToLight: () => void;
  changeToDark: () => void;
  setTheme: (newTheme: TState['theme']) => void;
};

export const LS_THEME_KEY = 'anilist-ui-theme';
export const useThemeStore = create<TState & TActions>((set) => {
  const themeConfiguredInOperativeSystem = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches
    ? 'dark'
    : '';
  const currentValue =
    (localStorage.getItem(LS_THEME_KEY) as TState['theme']) ||
    themeConfiguredInOperativeSystem;

  return {
    theme: currentValue,
    changeToDark: () => {
      localStorage.setItem(LS_THEME_KEY, 'dark');
      document.documentElement.classList.add('dark');
      set(() => ({ theme: 'dark' }));
    },
    changeToLight: () => {
      localStorage.setItem(LS_THEME_KEY, 'light');
      document.documentElement.classList.remove('dark');
      set(() => ({ theme: 'light' }));
    },
    setTheme: (newTheme: 'light' | 'dark') => {
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem(LS_THEME_KEY, newTheme);
      set(() => ({ theme: newTheme }));
    },
  };
});

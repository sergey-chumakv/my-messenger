import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { THEMES } from '../constants';

const getTheme = () => {
  const theme = localStorage.getItem('theme') || '';
  if (Object.values(THEMES).includes(theme)) return theme;

  const userMedia = window.matchMedia('(prefers-color-scheme: light)');
  if (userMedia.matches) return THEMES.light;

  return THEMES.dark;
};

export const ThemeProvider = ({ children }: {children: React.ReactNode}) => {
  const [theme, setTheme] = React.useState(getTheme);
  const value = React.useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

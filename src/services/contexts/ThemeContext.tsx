import React from 'react';

interface IContext {
  theme?: string;
  setTheme?: (value: string) => void;
}

export const ThemeContext = React.createContext<IContext>({});

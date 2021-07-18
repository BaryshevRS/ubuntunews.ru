import React, { createContext, ReactNode, useEffect } from 'react'
import useLocalStorage from '../hooks/use-local-storage';

export enum ThemeEnum {
  Light = 'light',
  Dark = 'dark'
}

type ThemeContextType = {
  themeState: ThemeEnum;
  setThemeState?: (value: ThemeEnum) => void;
};

export const ThemeContext = createContext<ThemeContextType>({themeState: ThemeEnum.Light});
const ThemeKey = 'theme';

type IProps = {
  children: ReactNode;
};

export function ThemeProvider({children}: IProps) {
  const [themeState, setThemeState] = useLocalStorage<ThemeEnum>(ThemeKey, ThemeEnum.Light);
  const value = React.useMemo(() => ({themeState, setThemeState}), [themeState]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', themeState);
  }, [themeState]);

  return (
    <>
      <ThemeContext.Provider value={value}>
        {children}
      </ThemeContext.Provider>
    </>
  );
}

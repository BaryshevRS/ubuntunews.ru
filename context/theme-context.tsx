import React, { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react'

export type ThemeType = 'light' | 'dark';

type ThemeContextType = {
  state: ThemeType | null;
  setState?: Dispatch<SetStateAction<ThemeType>>;
};

export const ThemeContext = createContext<ThemeContextType>({state: 'light'});
const ThemeKey = 'theme';

type IProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: IProps) {
  let defaultState;

  if (typeof window !== "undefined") {
    defaultState = window.localStorage.getItem(ThemeKey) || 'light';
  }

  const [state, setState] = useState<ThemeType>(defaultState as ThemeType);
  const value = React.useMemo(() => ({state, setState}), [state]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(ThemeKey, JSON.stringify(state));
    }
  }, [state]);

  return (
    <>
      <ThemeContext.Provider value={value}>
      {children}
      </ThemeContext.Provider>
      </>
  );
}

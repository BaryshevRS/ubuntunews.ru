import React from "react";
import { ThemeContext } from "../../context/theme-context";
import BedtimeIcon from "../../public/assets/icons/bedtime.svg";
import SunnyIcon from "../../public/assets/icons/sunny.svg";
import classes from "./theme-toggle.module.scss"

interface IProp {
  onToggle?: (toggle: boolean) => void;
}

export const ThemeToggle: React.FC<IProp> = () => {
  const {state, setState} = React.useContext(ThemeContext);
  return (
    <div className={'grid end'}>
      <div onClick={() => setState?.((p) => p === 'dark' ? 'light' : 'dark')}
           className={classes['theme-toggle']}>
        {state === 'dark' && <BedtimeIcon/>}
        {state === 'light' && <SunnyIcon/>}
      </div>
    </div>
  )
};

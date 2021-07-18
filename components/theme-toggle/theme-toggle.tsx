import React from "react";
import { ThemeContext, ThemeEnum } from "../../context/theme-context";
import BedtimeIcon from "../../public/assets/icons/bedtime.svg";
import SunnyIcon from "../../public/assets/icons/sunny.svg";
import classes from "./theme-toggle.module.scss"
import useHasMounted from "../../hooks/use-has-mounted";

interface IProp {
  onToggle?: (toggle: boolean) => void;
}

export const ThemeToggle: React.FC<IProp> = () => {
  const {themeState, setThemeState} = React.useContext(ThemeContext);
  const hasMounted = useHasMounted();
  return (
    <div className={'grid end'}>
      <div onClick={() => setThemeState?.(themeState === ThemeEnum.Dark ? ThemeEnum.Light : ThemeEnum.Dark)}
           className={classes['theme-toggle']}>
        {hasMounted && themeState === ThemeEnum.Dark && <BedtimeIcon/>}
        {hasMounted && themeState === ThemeEnum.Light && <SunnyIcon/>}
      </div>
    </div>
  )
};

import React from 'react';
import { ThemeContext } from '../../../../services/contexts/ThemeContext';
import styles from './apperance.module.scss';
import { THEMES } from '../../../../services/constants';

const Toggle = () => (
  <ThemeContext.Consumer>
    {({ theme, setTheme }) => (
      <label className={styles.root} htmlFor="toggler">
        <input
          id="toggler"
          type="checkbox"
          onClick={() => {
            if (theme === THEMES.light) setTheme?.(THEMES.dark);
            if (theme === THEMES.dark) setTheme?.(THEMES.light);
          }}
          checked={theme === THEMES.dark}
          readOnly
        />
        <span className={styles.slider} />
        <span className={styles.wave} />
      </label>
    )}
  </ThemeContext.Consumer>
);
export default Toggle;

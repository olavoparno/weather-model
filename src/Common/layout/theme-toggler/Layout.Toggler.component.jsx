import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import shallow from 'zustand/shallow';
import {IconButton} from '@material-ui/core';
import {Brightness4Icon, Brightness7Icon} from 'Common/icons/Icons.Exporter';
import {useStyles} from 'Common/layout/Layout.styles';
import {useLayoutStore} from 'Common/layout/Layout.useLayoutStore';

function BulbIcon({darkMode, ...props}) {
  return darkMode ? <Brightness4Icon {...props} /> : <Brightness7Icon {...props} />;
}

BulbIcon.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export function ThemeToggler() {
  const classes = useStyles();
  const {isDarkMode, setDarkMode} = useLayoutStore(
    (state) => ({isDarkMode: state.isDarkMode, setDarkMode: state.setDarkMode}),
    shallow
  );

  const setDarkModeCallback = useCallback(() => {
    setDarkMode();
  }, [setDarkMode]);

  return (
    <IconButton className={classes.lightTamper} onClick={setDarkModeCallback}>
      <BulbIcon darkMode={isDarkMode} />
    </IconButton>
  );
}

import React, {useMemo} from 'react';
import {Link} from '@material-ui/core';
import {useStyles} from 'Common/layout/Layout.styles';

export function Footer() {
  const classes = useStyles();

  return useMemo(
    () => (
      <footer className={classes.footer}>
        <Link color="inherit" href="https://www.weather-model.vercel.app/">
          Weather Model
        </Link>{' '}
      </footer>
    ),
    [classes]
  );
}

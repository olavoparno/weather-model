import React from 'react';
import PropTypes from 'prop-types';
import {Grid} from '@material-ui/core';
import {useStyles} from 'Common/layout/Layout.styles';
import {Footer} from 'Common/layout/footer/Layout.Footer.component';
import {ThemeToggler} from 'Common/layout/theme-toggler/Layout.Toggler.component';

export function Layout({children}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeToggler />
      <Grid className={classes.gridContainer} container justify="center">
        <Grid item xs={12} md={10}>
          {children}
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

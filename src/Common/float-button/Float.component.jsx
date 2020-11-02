import React, {useCallback, useEffect, useState} from 'react';
import {Fab, useMediaQuery, useTheme} from '@material-ui/core';
import {useStyles} from 'Common/float-button/Float.styles';
import {ArrowUpward} from 'Common/icons/Icons.Exporter';

export function FloatingButton() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const [buttonStyle, setButtonStyle] = useState({
    display: 'none',
  });

  useEffect(() => {
    function scrollFunction() {
      if (document.body.scrollTop > 135 || document.documentElement.scrollTop > 135) {
        if (matches) {
          setButtonStyle({display: 'block'});
        }
      } else {
        setButtonStyle({display: 'none'});
      }
    }

    document.addEventListener('scroll', scrollFunction);

    return () => {
      document.removeEventListener('scroll', scrollFunction);
    };
  }, [matches]);

  const scrollTop = useCallback(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <div style={buttonStyle} className={classes.root}>
      <Fab color="primary" aria-label="go-top" onClick={scrollTop}>
        <ArrowUpward />
      </Fab>
    </div>
  );
}

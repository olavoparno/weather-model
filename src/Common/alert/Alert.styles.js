import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    top: theme.spacing(2),
    left: 0,
    display: 'flex',
    position: 'fixed',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: theme.zIndex.drawer - 1,
  },
  alert: {
    margin: '0 10%',
    boxShadow:
      '0px 1px 1px -1px rgba(0,0,0,0.2), 0px 2px 1px 0px rgba(0,0,0,0.14), 0px 1px 1px 0px rgba(0,0,0,0.12)',
    '& .MuiAlert-icon': {
      alignItems: 'center',
    },
    textTransform: 'capitalize',
  },
}));

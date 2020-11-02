import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  gridContainer: {
    padding: theme.spacing(10, 1, 0),
  },
  lightTamper: {
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2),
    cursor: 'pointer',
  },
  footer: {
    marginTop: 'auto',
    padding: theme.spacing(1, 8),
    height: theme.mixins.footer.minHeight,
    textAlign: 'center',
    boxShadow:
      '0px -1px 2px 0px rgba(0, 0, 0, 0.3), 0px 2px 3px 0px rgba(0, 0, 0, 0.25), 0px 2px 3px 0px rgba(0, 0, 0, 0.13)',
    '& > p': {
      marginLeft: theme.spacing(1),
    },
    zIndex: theme.zIndex.drawer + 1,
  },
}));

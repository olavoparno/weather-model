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
    '&.MuiIconButton-root': {
      position: 'absolute',
      top: theme.spacing(2),
      right: theme.spacing(2),
      cursor: 'pointer',
      color: theme.palette.primary.main,
    },
  },
}));

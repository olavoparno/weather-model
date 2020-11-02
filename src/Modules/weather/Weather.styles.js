import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(2, 0, 1),
    padding: theme.spacing(2),
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(2, 0, 2),
    },
  },
  searchRoot: {
    padding: theme.spacing(0.2, 1),
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    pointerEvents: 'none',
  },
  iconButton: {
    padding: 10,
    color: theme.palette.primary.main,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalPaper: {
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: '3px',
    boxShadow: theme.shadows[5],
    margin: theme.spacing(2),
    padding: theme.spacing(2, 4, 3),
    '&:focus': {
      outline: 'none',
    },
  },
  table: {
    minWidth: 272,
  },
  tableHead: {
    '& th': {
      fontWeight: 700,
    },
  },
  rowItem: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      '& th': {
        color: theme.palette.common.white,
      },
    },
    '&:active, &:focus': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(2, 0),
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  searchRoot: {
    padding: theme.spacing(0.2, 1),
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
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
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    margin: theme.spacing(2),
    padding: theme.spacing(2, 4, 3),
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
  },
}));

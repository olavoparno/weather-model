import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles({
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
});

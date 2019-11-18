import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
});

function createData(name, month1, month2, month3, month4, month5, month6, month7, month8, month9, month10, month11, month12) {
  return { name, month1, month2, month3, month4, month5, month6, month7, month8, month9, month10, month11, month12 };
}

const rows = [
  createData('New Users', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">Jan</TableCell>
            <TableCell align="right">Feb</TableCell>
            <TableCell align="right">March</TableCell>
            <TableCell align="right">April</TableCell>
            <TableCell align="right">May</TableCell>
            <TableCell align="right">June</TableCell>
            <TableCell align="right">July</TableCell>
            <TableCell align="right">Aug</TableCell>
            <TableCell align="right">Sept</TableCell>
            <TableCell align="right">Oct</TableCell>
            <TableCell align="right">Nov</TableCell>
            <TableCell align="right">Dec</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.month1}</TableCell>
              <TableCell align="right">{row.month2}</TableCell>
              <TableCell align="right">{row.month3}</TableCell>
              <TableCell align="right">{row.month4}</TableCell>
              <TableCell align="right">{row.month5}</TableCell>
              <TableCell align="right">{row.month6}</TableCell>
              <TableCell align="right">{row.month7}</TableCell>
              <TableCell align="right">{row.month8}</TableCell>
              <TableCell align="right">{row.month9}</TableCell>
              <TableCell align="right">{row.month10}</TableCell>
              <TableCell align="right">{row.month11}</TableCell>
              <TableCell align="right">{row.month12}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

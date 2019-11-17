import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Checkbox,
  Paper,
  TableRow,
  TablePagination,
  TableCell,
  TableBody,
  Table
} from '@material-ui/core';

import TableHeader from './TableHeader';
import TableToolBar from './TableToolBar';
import { TableStyles } from './tableStyles';
import { stableSort, getSorting } from './utils';

export const DataTable = ({
  classes, columns, data, title, onRowClick, isAdmin
}) => {
  const [, setEditPopperAnchor] = useState(null);
  const [editable, setEditable] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [prevSearchValue, setPrevSearchValue] = useState('');
  const [order, setOrder] = useState('asc');
  const [rows, setRows] = useState(data);
  const [orderBy, setOrderBy] = useState('name');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleRequestSort = (_, property) => {
    const isDesc = orderBy === property && order === 'desc';

    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
  };

  useEffect(() => {
    setRows(data);
  }, [data]);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelections = rows.map(row => row.id);
      setSelected(newSelections);
      return;
    }
    setSelected([]);
  };

  const handleClick = (_, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
  };

  const handleTextChange = (event) => {
    let searchResults = [];
    const searchText = event.target.value;
    const searchMatch = new RegExp(searchText, 'i');

    if (searchText !== prevSearchValue && searchText.length > 0) {
      setPrevSearchValue(searchText);
      searchResults = data.filter(
        row => searchMatch.test(row.name)
        || searchMatch.test(row.phone)
        || searchMatch.test(row.email)
        || searchMatch.test(row.type)
        || searchMatch.test(row.date_created)
        );
      setRows(searchResults);
    } else {
      setRows(data);
      setPrevSearchValue('');
    }
  };

  const handleClickInverseSelection = () => {
    const newSelected = [];

    rows.forEach((row) => {
      if (!selected.find(selectedId => selectedId === row.id)) {
        newSelected.push(row.id);
      }
    });
    setSelected(newSelected);
  };

  const onEditQuantity = () => {
    const anchorElement = document.querySelectorAll('.tool-bar-elevation');
    setEditPopperAnchor(anchorElement[0]);
    setEditable(!editable);
  };

  const isSelected = name => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableToolBar
          name="toolbar"
          isAdmin={isAdmin}
          title={`${rows.length} ${title}`}
          numSelected={selected.length}
          handleTextChange={handleTextChange}
          handleClickDeselectAll={() => {
            setSelected([]);
          }}
          isSearchActive={isSearchActive}
          handleEdit={() => onEditQuantity()}
          handleHideSearch={() => {
            setIsSearchActive(false);
            setRows(data);
            setPrevSearchValue('');
          }}
          handleClickSearch={() => setIsSearchActive(!isSearchActive)}
          handleClickInverseSelection={() => handleClickInverseSelection()}
        />
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <TableHeader
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              headRows={columns}
            />
            <TableBody>
              {stableSort(rows, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  const isItemSelected = isSelected(row.id);
                  const {
                    id, name, date_created, phone, email, type,
                  } = row;

                  let customerType;

                  if (type === 1) {
                    customerType = 'CX Member';
                  } else if (type === 2) {
                    customerType = 'Customer';
                  }

                  return (
                    <TableRow
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={id}
                      selected={isItemSelected}
                      onClick={() => {
                        onRowClick(id);
                      }}
                    >
                      <TableCell align="left">{name}</TableCell>
                      <TableCell align="left">{date_created}</TableCell>
                      <TableCell align="left">{phone}</TableCell>
                      <TableCell align="left">{email}</TableCell>
                      <TableCell align="left">{customerType}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page'
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page'
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

DataTable.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  columns: PropTypes.arrayOf(String).isRequired,
  data: PropTypes.arrayOf(Object).isRequired,
  title: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  onRowClick: PropTypes.func.isRequired
};

export default withStyles(TableStyles)(DataTable);

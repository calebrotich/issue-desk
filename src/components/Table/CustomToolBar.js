import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import {
  Tooltip, IconButton
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { ToolbarStyles } from './tableStyles';
import { CustomIconButton } from './utils';
import TableSearch from './TableSearch';

export class CustomToolBar extends Component {
  state = {
    open: false,
    stockOpen: false
  };

  handleToggle = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

  handleToggleStock = () => {
    const { stockOpen } = this.state;
    this.setState({ stockOpen: !stockOpen });
  };

  handleCloseStock = (event) => {
    !this.StockElement.contains(event.target) && this.setState({ stockOpen: false });
  };

  render() {
    const {
      classes,
      handleClickSearch,
      isSearchActive,
      handleHideSearch,
      handleTextChange
    } = this.props;

    return (
      <Fragment>
        {isSearchActive ? (
          <TableSearch onHide={handleHideSearch} handleTextChange={handleTextChange} />
        ) : (
          ''
        )}
        <Fragment>
          <CustomIconButton
            toolTip="Search"
            buttonRef={(node) => {
              this.search = node;
            }}
            onClickHandler={handleClickSearch}
          >
            <SearchIcon />
          </CustomIconButton>
          <Tooltip title="Add Issue">
            <IconButton>
              <AddIcon className={classes.svgIcon} />
            </IconButton>
          </Tooltip>
        </Fragment>
      </Fragment>
    );
  }
}

CustomToolBar.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  handleClickSearch: PropTypes.func.isRequired,
  handleHideSearch: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  isSearchActive: PropTypes.bool,
  handleTextChange: PropTypes.func.isRequired
};

CustomToolBar.defaultProps = {
  isSearchActive: false
};

export default withStyles(ToolbarStyles)(CustomToolBar);

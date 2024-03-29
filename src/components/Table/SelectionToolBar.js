import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import EditICon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import { SelectToolBarStyles } from './tableStyles';

export const SelectionToolBar = (props) => {
  const {
    classes,
    handleClickDeselectAll,
    handleEdit,
    handleClickInverseSelection,
    selected
  } = props;
  const {
    iconButton, icon, inverseIcon, wrapper
  } = classes;

  return (
    <div className={wrapper}>
      {selected <= 1 ? (
        <Tooltip title="Edit quantity">
          <IconButton className={iconButton} onClick={handleEdit}>
            <EditICon className={icon} />
          </IconButton>
        </Tooltip>
      ) : (
        ''
      )}
      <Tooltip title="Deactivate">
        <IconButton className={iconButton}>
          <DeleteIcon className={icon} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Deselect All">
        <IconButton className={iconButton} onClick={handleClickDeselectAll}>
          <IndeterminateCheckBoxIcon className={icon} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Inverse selection">
        <IconButton className={iconButton} onClick={handleClickInverseSelection}>
          <CompareArrowsIcon className={[icon, inverseIcon].join(' ')} />
        </IconButton>
      </Tooltip>
    </div>
  );
};

SelectionToolBar.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  handleClickDeselectAll: PropTypes.func.isRequired,
  handleClickInverseSelection: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  selected: PropTypes.number.isRequired
};

export default withStyles(SelectToolBarStyles)(SelectionToolBar);

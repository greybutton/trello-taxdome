import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';
import { DropTarget } from 'react-dnd';
import { ItemTypes } from '../../constants/dnd';

import * as observer from '../../observer';

import * as ColumnActions from '../../actions/ColumnActions';
import * as AppActions from '../../actions/AppActions';

import Button from '../../components/common/Button';
import ColumnFormEdit from '../../components/ColumnFormEdit';

import Cards from '../Cards';

import './index.css';

const columnTarget = {
  drop(props, monitor) {
    const { column } = props;
    const { card } = monitor.getItem();
    if (column.id !== card.columnId) {
      observer.moveCard(column, card);
    }
  },
};

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
  };
};

class Column extends Component {
  handleEditColumn = () => {
    const { column } = this.props;
    this.props.updateColumnStart(column);
  };

  handleSubmit = column =>
    new Promise((resolve, reject) => {
      this.props.updateColumn({ column, resolve, reject });
    }).catch(() => {
      throw new SubmissionError(this.props.errors);
    });

  render() {
    const { column, deleteColumn, isColumnEdit, connectDropTarget } = this.props;

    return connectDropTarget(
      <div className="column">
        {(!isColumnEdit.isEdit ||
          (isColumnEdit.isEdit && isColumnEdit.column.id !== column.id)) && (
          <div className="column__title" onClick={this.handleEditColumn}>{column.title}</div>
        )}
        {isColumnEdit.isEdit &&
          isColumnEdit.column.id === column.id && (
            <ColumnFormEdit column={column} onSubmit={this.handleSubmit} />
          )}
        <Button text="delete" onClick={() => deleteColumn(column)} />
        <Cards columnId={column.id} />
      </div>,
    );
  }
}

const mapStateToProps = state => ({
  isColumnEdit: state.appStore.isColumnEdit,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...ColumnActions,
      ...AppActions,
    },
    dispatch,
  );

export default DropTarget(ItemTypes.CARD, columnTarget, collect)(
  withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps,
    )(Column),
  ),
);

Column.propTypes = {
  isColumnEdit: PropTypes.object.isRequired,
  column: PropTypes.object,
};

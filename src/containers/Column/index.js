import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';

import * as ColumnActions from '../../actions/ColumnActions';
import * as AppActions from '../../actions/AppActions';

import ColumnFormEdit from '../../components/ColumnFormEdit';

class Column extends Component {
  handleEditColumn = () => {
    const { column } = this.props;
    this.props.updateColumnStart(column);
  };

  handleSubmit = column => {
    return new Promise((resolve, reject) => {
      this.props.updateColumn({ column, resolve, reject });
    }).catch(() => {
      throw new SubmissionError(this.props.errors);
    });
  };

  render() {
    const { column, deleteColumn, isColumnEdit } = this.props;

    return (
      <div className="column">
        {(!isColumnEdit.isEdit ||
          (isColumnEdit.isEdit && isColumnEdit.column.id !== column.id)) && (
          <div onClick={this.handleEditColumn}>{column.title}</div>
        )}
        {isColumnEdit.isEdit &&
          isColumnEdit.column.id === column.id && (
            <ColumnFormEdit column={column} onSubmit={this.handleSubmit} />
          )}
        <button type="button" onClick={() => deleteColumn(column)}>
          delete
        </button>
      </div>
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

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Column),
);

Column.propTypes = {
  isColumnEdit: PropTypes.object.isRequired,
  column: PropTypes.object,
};

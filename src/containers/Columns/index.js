import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';

import * as ColumnActions from '../../actions/ColumnActions';

import ColumnForm from '../../components/ColumnForm';

import Column from '../Column';

class ColumnsContainer extends Component {
  handleSubmit = values => {
    const {
      match: {
        params: { id: boardId },
      },
    } = this.props;

    const column = {
      boardId,
      ...values,
    };

    return new Promise((resolve, reject) => {
      this.props.createColumn({ column, resolve, reject });
    }).catch(() => {
      throw new SubmissionError(this.props.errors);
    });
  };

  render() {
    const { columns } = this.props;

    return (
      <div className="columns">
        {columns.map(column => <Column key={column.id} column={column} />)}
        <ColumnForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  columns: state.columnStore.columns,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...ColumnActions,
    },
    dispatch,
  );

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ColumnsContainer),
);

ColumnsContainer.defaultProps = {
  columns: [],
};

ColumnsContainer.propTypes = {
  columns: PropTypes.array,
  getColumns: PropTypes.func.isRequired,
};

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';

import * as BoardActions from '../../actions/BoardActions';
import * as AppActions from '../../actions/AppActions';

import Columns from '../Columns';

import BoardFormEdit from '../../components/BoardFormEdit';

class Board extends Component {
  componentDidMount() {
    const {
      match: {
        params: { id },
      },
      getBoard,
    } = this.props;
    getBoard(id);
  }

  handleEditBoard = () => {
    this.props.updateBoardStart();
  };

  handleSubmit = board => {
    return new Promise((resolve, reject) => {
      this.props.updateBoard({ board, resolve, reject });
    }).catch(() => {
      throw new SubmissionError(this.props.errors);
    });
  };

  render() {
    const { loading, board, history, isBoardEdit } = this.props;

    return (
      <div className="board">
        <button type="button" onClick={() => history.goBack()}>
          Boards
        </button>
        {!isBoardEdit && <div onClick={this.handleEditBoard}>{board.title}</div>}
        {isBoardEdit && (
          <BoardFormEdit board={board} loading={loading} onSubmit={this.handleSubmit} />
        )}
        <Columns />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  board: state.boardStore.board,
  isBoardEdit: state.appStore.isBoardEdit,
  loading: state.boardStore.loading,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...BoardActions,
      ...AppActions,
    },
    dispatch,
  );

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Board),
);

Board.propTypes = {
  board: PropTypes.object,
  isBoardEdit: PropTypes.bool.isRequired,
};

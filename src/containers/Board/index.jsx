import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';
import { DragDropContext } from 'react-dnd';
import { default as TouchBackend } from 'react-dnd-touch-backend';

import * as BoardActions from '../../actions/BoardActions';
import * as ColumnActions from '../../actions/ColumnActions';
import * as CardActions from '../../actions/CardActions';
import * as AppActions from '../../actions/AppActions';

import Columns from '../Columns';

import Button from '../../components/common/Button';
import BoardFormEdit from '../../components/BoardFormEdit';

import CardPreview from '../Card/CardPreview';

import './index.css';

class Board extends Component {
  componentDidMount() {
    const {
      match: {
        params: { id },
      },
      getBoard,
      getColumns,
      getCards,
    } = this.props;
    getBoard(id);
    getColumns(id);
    getCards(id);
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
        <div className="board--container">
          <Button text="Boards" onClick={() => history.goBack()} />
          {!isBoardEdit && <div className="board__title" onClick={this.handleEditBoard}>{board.title}</div>}
          {isBoardEdit && (
            <BoardFormEdit board={board} loading={loading} onSubmit={this.handleSubmit} />
          )}
          <CardPreview />
        </div>
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
      ...AppActions,
      ...BoardActions,
      ...ColumnActions,
      ...CardActions,
    },
    dispatch,
  );

const options = {
  enableTouchEvents: true,
  enableMouseEvents: true,
  enableKeyboardEvents: true,
  delayTouchStart: true,
  delayMouseStart: true,
  touchSlop: true,
  ignoreContextMenu: true,
  scrollAngleRanges: true,
};

export default DragDropContext(TouchBackend(options))(
  withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps,
    )(Board),
  ),
);

Board.propTypes = {
  board: PropTypes.object,
  isBoardEdit: PropTypes.bool.isRequired,
};

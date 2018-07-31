import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';

import * as BoardActions from '../../actions/BoardActions';
import * as AppActions from '../../actions/AppActions';

import Button from '../../components/common/Button';
import Boards from '../../components/Boards';
import BoardForm from '../../components/BoardForm';

import './index.css';

class Main extends Component {
  componentDidMount() {
    const { getBoards } = this.props;
    getBoards();
  }

  handleBoardCreate = () => {
    const { createBoardStart } = this.props;
    createBoardStart();
  };

  handleSubmit = board => new Promise((resolve, reject) => {
    const { createBoard } = this.props;
    createBoard({ board, resolve, reject });
  }).catch(() => {
    const { errors } = this.props;
    throw new SubmissionError(errors);
  });

  render() {
    const {
      loading, boards, isBoardCreate, deleteBoard,
    } = this.props;

    return (
      <div className="main">
        <h3>
          Boards
        </h3>
        <Boards boards={boards} deleteBoard={deleteBoard} />
        {!isBoardCreate && <Button text="Add a board" onClick={this.handleBoardCreate} />}
        {isBoardCreate && <BoardForm loading={loading} onSubmit={this.handleSubmit} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  boards: state.boardStore.boards,
  isBoardCreate: state.appStore.isBoardCreate,
  loading: state.boardStore.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...BoardActions,
    ...AppActions,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);

Main.defaultProps = {
  loading: false,
  isBoardCreate: false,
};

Main.propTypes = {
  boards: PropTypes.array.isRequired,
  errors: PropTypes.object,
  loading: PropTypes.bool,
  isBoardCreate: PropTypes.bool,
  getBoards: PropTypes.func.isRequired,
  createBoard: PropTypes.func.isRequired,
  createBoardStart: PropTypes.func.isRequired,
  deleteBoard: PropTypes.func.isRequired,
};

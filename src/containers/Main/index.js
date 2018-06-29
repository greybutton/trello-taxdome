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
    this.props.createBoardStart();
  };

  handleSubmit = board =>
    new Promise((resolve, reject) => {
      this.props.createBoard({ board, resolve, reject });
    }).catch(() => {
      throw new SubmissionError(this.props.errors);
    });

  render() {
    const { boards, isBoardCreate } = this.props;

    return (
      <div className="main">
        <h3>Boards</h3>
        <Boards boards={boards} deleteBoard={this.props.deleteBoard} />
        {!isBoardCreate && <Button text="Add a board" onClick={this.handleBoardCreate} />}
        {isBoardCreate && <BoardForm loading={this.props.loading} onSubmit={this.handleSubmit} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  boards: state.boardStore.boards,
  isBoardCreate: state.appStore.isBoardCreate,
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);

Main.defaultProps = {
  boards: [],
};

Main.propTypes = {
  boards: PropTypes.array.isRequired,
  loading: PropTypes.bool,
};

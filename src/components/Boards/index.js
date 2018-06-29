import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './index.css';

const Boards = (props) => {
  const { boards, deleteBoard } = props;
  return (
    <div className="boards">
      {boards.map(board => (
        <div key={board.id} className="boards__item">
          <Link to={`/boards/${board.id}`} className="board__link">
            {board.title}
          </Link>
          <button type="button" onClick={() => deleteBoard(board.id)}>
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Boards;

Boards.propTypes = {
  boards: PropTypes.array.isRequired,
  deleteBoard: PropTypes.func.isRequired,
};

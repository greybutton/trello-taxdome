import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const button = (props) => {
  const { text, onClick } = props;
  return (
    <button className="button" type="button" onClick={() => onClick()}>
      {text}
    </button>
  );
};

export default button;

button.defaultProps = {
  onClick: false,
};

button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

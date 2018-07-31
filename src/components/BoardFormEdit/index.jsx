import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import * as AppActions from '../../actions/AppActions';

import Input from '../common/Input';

class BoardFormEdit extends Component {
  componentDidMount() {
    const { initialize, board } = this.props;
    initialize(board);
  }

  handleOnBlur = (e, newValue) => {
    const {
      board: { title },
      updateBoardCancel,
      handleSubmit,
    } = this.props;
    if (newValue === title) {
      updateBoardCancel();
    } else {
      handleSubmit();
    }
  };

  renderField = ({ input, type, placeholder }) => (
    <Input {...input} id={input.name} placeholder={placeholder} type={type} autoFocus />
  );

  render() {
    const { handleSubmit, loading } = this.props;

    return (
      <div>
        {loading ? (
          'Loading...'
        ) : (
          <form onSubmit={handleSubmit}>
            <Field
              name="title"
              type="text"
              component={this.renderField}
              placeholder="Add board title"
              onBlur={this.handleOnBlur}
            />
          </form>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...AppActions,
  },
  dispatch,
);

export default reduxForm({ form: 'boardEdit' })(
  connect(
    null,
    mapDispatchToProps,
  )(BoardFormEdit),
);

BoardFormEdit.propTypes = {
  board: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  updateBoardCancel: PropTypes.func.isRequired,
  initialize: PropTypes.func.isRequired,
};

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import * as AppActions from '../../actions/AppActions';

import Input from '../common/Input';

class BoardForm extends Component {
  renderField = ({ input, type, placeholder }) => (
    <Input {...input} id={input.name} placeholder={placeholder} type={type} autoFocus />
  );

  render() {
    const {
      handleSubmit, loading, pristine, submitting, createBoardCancel,
    } = this.props;

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
              onBlur={() => createBoardCancel()}
            />
            <div>
              <button type="submit" disabled={pristine || submitting}>
                Create board
              </button>
            </div>
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

export default reduxForm({ form: 'board' })(
  connect(
    null,
    mapDispatchToProps,
  )(BoardForm),
);

BoardForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  createBoardCancel: PropTypes.func.isRequired,
};

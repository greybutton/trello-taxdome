import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as AppActions from '../../actions/AppActions';

import Input from '../common/Input';

class CardForm extends Component {
  handleOnBlur = () => {
    const { createCardCancel } = this.props;
    createCardCancel();
  };

  renderField = ({ input, type, placeholder }) => (
    <Input {...input} id={input.name} placeholder={placeholder} type={type} autoFocus />
  );

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="title"
          type="text"
          component={this.renderField}
          placeholder="Add card title"
          onBlur={this.handleOnBlur}
        />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...AppActions,
  },
  dispatch,
);

export default reduxForm({ form: 'card' })(
  connect(
    null,
    mapDispatchToProps,
  )(CardForm),
);

CardForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  createCardCancel: PropTypes.func.isRequired,
};

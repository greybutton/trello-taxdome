import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

class ColumnForm extends Component {
  renderField = ({ input, type, placeholder }) => (
    <input {...input} id={input.name} placeholder={placeholder} type={type} />
  );

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="title"
          type="text"
          component={this.renderField}
          placeholder="Add column title"
        />
      </form>
    );
  }
}

export default reduxForm({ form: 'column' })(ColumnForm);

ColumnForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

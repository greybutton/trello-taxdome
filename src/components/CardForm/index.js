import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as AppActions from '../../actions/AppActions';

class CardForm extends Component {
  renderField = ({ input, type, placeholder }) => (
    <input {...input} id={input.name} placeholder={placeholder} type={type} autoFocus />
  );

  handleOnBlur = () => {
    this.props.createCardCancel();
  };

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

CardForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
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

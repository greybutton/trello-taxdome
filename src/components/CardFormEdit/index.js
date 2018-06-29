import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import * as AppActions from '../../actions/AppActions';

import Input from '../common/Input';

class CardFormEdit extends Component {
  componentDidMount() {
    this.props.initialize(this.props.card);
  }

  renderField = ({ input, type, placeholder }) => (
    <Input {...input} id={input.name} placeholder={placeholder} type={type} autoFocus />
  );

  handleOnBlur = () => {
    this.props.updateCardCancel();
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...AppActions,
    },
    dispatch,
  );

export default reduxForm({ form: 'cardEdit' })(
  connect(
    null,
    mapDispatchToProps,
  )(CardFormEdit),
);

CardFormEdit.propTypes = {
  card: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
};

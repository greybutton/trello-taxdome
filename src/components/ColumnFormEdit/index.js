import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import * as AppActions from '../../actions/AppActions';

import Input from '../common/Input';

class ColumnFormEdit extends Component {
  componentDidMount() {
    this.props.initialize(this.props.column);
  }

  renderField = ({ input, type, placeholder }) => (
    <Input {...input} id={input.name} placeholder={placeholder} type={type} autoFocus />
  );

  handleOnBlur = (e, newValue) => {
    const {
      column: { title },
    } = this.props;
    if (newValue === title) {
      this.props.updateColumnCancel();
    } else {
      this.props.handleSubmit();
    }
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="title"
          type="text"
          component={this.renderField}
          placeholder="Add column title"
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

export default reduxForm({ form: 'columnEdit' })(
  connect(
    null,
    mapDispatchToProps,
  )(ColumnFormEdit),
);

ColumnFormEdit.propTypes = {
  column: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
};

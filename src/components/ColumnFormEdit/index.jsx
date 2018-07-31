import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import * as AppActions from '../../actions/AppActions';

import Input from '../common/Input';

class ColumnFormEdit extends Component {
  componentDidMount() {
    const { initialize, column } = this.props;
    initialize(column);
  }

  handleOnBlur = (e, newValue) => {
    const {
      column: { title },
      updateColumnCancel,
      handleSubmit,
    } = this.props;
    if (newValue === title) {
      updateColumnCancel();
    } else {
      handleSubmit();
    }
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
          placeholder="Add column title"
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

export default reduxForm({ form: 'columnEdit' })(
  connect(
    null,
    mapDispatchToProps,
  )(ColumnFormEdit),
);

ColumnFormEdit.propTypes = {
  column: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  updateColumnCancel: PropTypes.func.isRequired,
  initialize: PropTypes.func.isRequired,
};

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import * as AppActions from '../../actions/AppActions';

class BoardFormEdit extends Component {
  componentDidMount() {
    this.props.initialize(this.props.board);
  }

  renderField = ({ input, type, placeholder }) => (
    <input {...input} id={input.name} placeholder={placeholder} type={type} autoFocus />
  );

  handleOnBlur = (e, newValue) => {
    const {
      board: { title },
    } = this.props;
    if (newValue === title) {
      this.props.updateBoardCancel();
    } else {
      this.props.handleSubmit();
    }
  };

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

const mapDispatchToProps = dispatch =>
  bindActionCreators(
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
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';

import * as CardActions from '../../actions/CardActions';
import * as AppActions from '../../actions/AppActions';

import CardFormEdit from '../../components/CardFormEdit';

class Card extends Component {
  handleEditCard = () => {
    const { card } = this.props;
    this.props.updateCardStart(card);
  };

  handleDeleteCard = () => {
    const { card } = this.props;
    this.props.deleteCard(card);
  };

  handleSubmit = card =>
    new Promise((resolve, reject) => {
      this.props.updateCard({ card, resolve, reject });
    }).catch(() => {
      throw new SubmissionError(this.props.errors);
    });

  render() {
    const { card, isCardEdit } = this.props;

    return (
      <div className="card">
        {(!isCardEdit.isEdit || (isCardEdit.isEdit && isCardEdit.card.id !== card.id)) && (
          <div>{card.title}</div>
        )}
        {isCardEdit.isEdit &&
          isCardEdit.card.id === card.id && (
            <CardFormEdit card={card} onSubmit={this.handleSubmit} />
          )}
        <button type="button" onClick={this.handleEditCard}>
          edit
        </button>
        <button type="button" onClick={this.handleDeleteCard}>
          delete
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isCardEdit: state.appStore.isCardEdit,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...CardActions,
      ...AppActions,
    },
    dispatch,
  );

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Card),
);

Card.propTypes = {
  isCardEdit: PropTypes.object.isRequired,
  card: PropTypes.object,
};

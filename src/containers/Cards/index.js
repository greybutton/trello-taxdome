import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';

import * as CardActions from '../../actions/CardActions';
import * as AppActions from '../../actions/AppActions';

import CardForm from '../../components/CardForm';

import Card from '../Card';

class CardsContainer extends Component {
  handleCreateCard = columnId => {
    this.props.createCardStart(columnId);
  };

  handleSubmit = values => {
    const {
      match: {
        params: { id: boardId },
      },
      columnId,
    } = this.props;

    const card = {
      boardId,
      columnId,
      ...values,
    };

    return new Promise((resolve, reject) => {
      this.props.createCard({ card, resolve, reject });
    }).catch(() => {
      throw new SubmissionError(this.props.errors);
    });
  };

  render() {
    const { cards, columnId, isCardCreate } = this.props;

    return (
      <div className="cards">
        {cards &&
          cards[columnId] &&
          cards[columnId].map((card, i) => <Card key={card.id} index={i} card={card} />)}
        {isCardCreate.isCreate &&
          isCardCreate.columnId === columnId && <CardForm onSubmit={this.handleSubmit} />}
        <button type="button" onClick={() => this.handleCreateCard(columnId)}>
          Add a card
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cards: state.cardStore.cards,
  isCardCreate: state.appStore.isCardCreate,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...CardActions,
      ...AppActions,
    },
    dispatch,
  );

CardsContainer.propTypes = {
  cards: PropTypes.object,
  getCards: PropTypes.func.isRequired,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(CardsContainer),
);

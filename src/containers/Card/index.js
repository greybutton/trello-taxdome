import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';
import { DragSource, DropTarget } from 'react-dnd';
import classNames from 'classnames';
import { ItemTypes } from '../../constants/dnd';

import * as observer from '../../observer';

import * as CardActions from '../../actions/CardActions';
import * as AppActions from '../../actions/AppActions';

import CardFormEdit from '../../components/CardFormEdit';

import './index.css';

const cardSource = {
  beginDrag(props) {
    return props;
  },
};

const collectSource = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
};

const cardTarget = {
  drop(props, monitor) {
    const { index: dragIndex, card: dragCard } = monitor.getItem();
    const { index: hoverIndex, card: hoverCard } = props;
    if (dragCard.columnId === hoverCard.columnId && dragIndex !== hoverIndex) {
      observer.sortCard(dragIndex, hoverIndex, dragCard, hoverCard);
    }
    if (dragCard.columnId !== hoverCard.columnId) {
      observer.sortCardColumn(dragIndex, hoverIndex, dragCard, hoverCard);
    }
  },
};

const collectTarget = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
  };
};

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
    const {
      card,
      isCardEdit,
      connectDragSource,
      connectDropTarget,
      isOver,
      isDragging,
    } = this.props;

    const cardClass = classNames({
      card: true,
      'card--hide': isDragging,
      'card--over': isOver,
    });

    return connectDragSource(
      connectDropTarget(
        <div className={cardClass}>
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
        </div>,
      ),
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

export default DropTarget(ItemTypes.CARD, cardTarget, collectTarget)(
  DragSource(ItemTypes.CARD, cardSource, collectSource)(
    withRouter(
      connect(
        mapStateToProps,
        mapDispatchToProps,
      )(Card),
    ),
  ),
);

Card.propTypes = {
  isCardEdit: PropTypes.object.isRequired,
  card: PropTypes.object,
};

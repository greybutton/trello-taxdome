import React from 'react';
import PropTypes from 'prop-types';
import { DragLayer } from 'react-dnd';
import Card from '.';

const collect = (monitor) => {
  const item = monitor.getItem();
  return {
    card: item && item.card,
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  };
};

const getCardStyles = (currentOffset) => {
  if (!currentOffset) {
    return {
      display: 'none',
    };
  }

  // http://www.paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/
  const { x } = currentOffset;
  const { y } = currentOffset;
  const transform = `translate(${x}px, ${y}px)`;

  return {
    pointerEvents: 'none',
    transform,
    WebkitTransform: transform,
  };
};

const CardPreview = ({ card, isDragging, currentOffset }) => {
  if (!isDragging) {
    return <div />;
  }

  return (
    <div className="card--preview" style={getCardStyles(currentOffset)}>
      <Card card={card} />
    </div>
  );
};

export default DragLayer(collect)(CardPreview);

CardPreview.propTypes = {
  card: PropTypes.object,
  currentOffset: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
  isDragging: PropTypes.bool,
};

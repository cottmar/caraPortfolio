import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ portfolio }) => {
  const { index, picture, title, info } = portfolio;
  return (
    <div id={`card-${index}`} className="card">
      {/* <img src={picture} alt={title} /> */}
      <div className="details">
        <span className="index">{index+1}</span>
        <p
          className="title">
          {title}<br />
          {info}
        </p>
      </div>
      </div>
  )
}

Card.propTypes = {
  portfolio: PropTypes.object.isRequired
}

export default Card;
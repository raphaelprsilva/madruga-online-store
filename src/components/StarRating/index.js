import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

const STARS_QTY = 5;

export default class StarRating extends Component {
  render() {
    const { rating, setRating } = this.props;
    return (
      <div className="star-rating">
        {[...Array(STARS_QTY)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={ index }
              className={ index <= rating ? 'on' : 'off' }
              onClick={ () => setRating(index) }
            >
              <span className="star" key={ index } data-testid={ `${index}-rating` }>
                &#9733;
              </span>
            </button>
          );
        })}
      </div>
    );
  }
}

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
  setRating: PropTypes.func.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getSlugFromTitle } from 'src/selectors';

import './styles.scss';

const Card = ({ thumbnail, title, difficulty }) => (
  <div className="card">
    <img
      className="card__image"
      src={thumbnail}
      alt={title}
    />
    <div className="card__content">
      <div className="card__title">
        {title}
      </div>
      <div className="card__difficulty">
        Difficulté : {difficulty}
      </div>
      <Link
        to={`/recipe/${getSlugFromTitle(title)}`}
        className="card__link"
      >
        Voir la recette
      </Link>
    </div>
  </div>
);

Card.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
};

export default Card;

import React from 'react';
import PropTypes from 'prop-types';
import Card from 'src/components/Card';
import './styles.scss';

const Home = ({ recipes, title }) => (
  <div className="home">
    <h2 className="home__title">{title}</h2>
    <div className="home__content">
      {recipes.map((recipe) => (
        <Card key={recipe.id} {...recipe} />
      ))}
    </div>
  </div>
);

Home.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;

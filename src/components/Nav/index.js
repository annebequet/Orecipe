import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { getSlugFromTitle } from 'src/selectors';
import './styles.scss';

const Nav = ({ recipes }) => (
  <nav className="menu">
    <NavLink
      to="/"
      className="menu__link"
      activeClassName="menu__link--active"
      exact
    >
      Accueil
    </NavLink>
    {recipes.map(({ id, title }) => (
      <NavLink
        key={id}
        className="menu__link"
        to={`/recipe/${getSlugFromTitle(title)}`}
        activeClassName="menu__link--active"
        exact
      >
        {title}
      </NavLink>
    ))}
  </nav>
);

Nav.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Nav;

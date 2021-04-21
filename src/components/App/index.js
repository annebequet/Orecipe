// == Import npm
import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
// == Import
import Nav from 'src/containers/Nav';
import Page from 'src/components/Page';
import Home from 'src/containers/Home';
import Recipe from 'src/containers/Recipe';
import './styles.scss';

// == Composant
const App = ({
  getRecipes,
  loading,
  error,
  checkIsLogged,
}) => {
  useEffect(() => {
    getRecipes();
  }, []);

  // vérifie si l'utilisateur est déjà connecté
  useEffect(checkIsLogged, []);

  return (
    <div className="app">
      <Nav />
      {!loading && !error && (
        <>
          <Route exact path="/">
            <Page>
              <Home />
            </Page>
          </Route>
          <Route
            exact
            path="/recipe/:slug"
            component={({ match }) => (
              // avec la props match du composant Route, je peux récupérer les paramètres de la route courante
              <Page>
                <Recipe slug={match.params.slug} />
              </Page>
            )}
          />
        </>
      )}
      {loading && !error && (
        <Page>
          <div>Chargement des recettes</div>
        </Page>
      )}
      {error && (
        <Page>
          <div>Une erreur est survenue, veuillez réessayer plus tard :(</div>
        </Page>
      )}
    </div>
  );
};

App.propTypes = {
  getRecipes: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  checkIsLogged: PropTypes.func.isRequired,
};

// == Export
export default App;

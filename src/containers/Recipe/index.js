import { connect } from 'react-redux';

import Recipe from 'src/components/Recipe';
import { getRecipeBySlug } from 'src/selectors';

const mapStateToProps = (state, ownProps) => {
  // ici on peut récupérer les props de configuration du container (composant enrichi de props), qu'on appelle ownProps. Celles-ci sont passées en 2e paramètre des fonctions mapStateToProps et mapDispatchToProps.
  // dans le container on peut récupérer le slug et on va comparer ce slug avec la version "slugifiée" du titre de la recette. Une fois qu'on a la bonne recette on la retourne.
  const recipe = getRecipeBySlug(state.recipes.list, ownProps.slug);

  return {
    recipe,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);

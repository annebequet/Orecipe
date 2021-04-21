/* eslint-disable import/prefer-default-export */
import slugify from 'slugify';

export const getSlugFromTitle = (title = '') => {
  // pour pouvoir remplacer tous les caractères "&" de la phrase, il faut passer par une regex, sinon ce sera uniquement le 1e caractère rencontrer qui sera remplacer
  const modifiedTitle = title.replace(/[&]/g, '').replace(/[_]/g, '-');

  const slug = slugify(modifiedTitle, {
    lower: true,
    remove: /[*+~.()'"!:@&]/g,
  });

  return slug;
};

export const getRecipeBySlug = (recipeList, slug) => recipeList.find(
  (recipe) => getSlugFromTitle(recipe.title) === slug,
);

// nouveau selector qui va renvoyer un titre en fonction du nombre de recette
export const getTitleByRecipeNumber = (number) => {
  let title = '';

  if (number === 0) {
    title = 'Pas de recette pour le moment, revenez plus tard';
  }
  else if (number === 1) {
    title = 'Découvrez notre recette';
  }
  else {
    title = 'Découvrez nos recettes';
  }

  return title;
};

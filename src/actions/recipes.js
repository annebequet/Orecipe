// Action types
export const GET_RECIPES = 'GET_RECIPES';
export const SAVE_RECIPES = 'SAVES_RECIPES';
export const SET_ERROR = 'SET_ERROR';

// Action creators
export const getRecipes = () => ({
  type: GET_RECIPES,
});

export const saveRecipes = (recipes) => ({
  type: SAVE_RECIPES,
  recipes,
});

export const setError = () => ({
  type: SET_ERROR,
});

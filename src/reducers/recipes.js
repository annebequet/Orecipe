import { SAVE_RECIPES, SET_ERROR } from 'src/actions/recipes';

export const initialState = {
  list: [],
  loading: true,
  error: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_RECIPES:
      return {
        ...state,
        loading: false,
        list: action.recipes,
      };
    case SET_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

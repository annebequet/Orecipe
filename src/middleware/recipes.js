import axios from 'axios';
import { GET_RECIPES, saveRecipes, setError } from 'src/actions/recipes';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case GET_RECIPES:

      axios.get('http://localhost:3001/recipes')
        .then((response) => {
          console.log(response);

          store.dispatch(saveRecipes(response.data));
        })
        .catch((error) => {
          // en cas d'erreur de la requête je veux changer la valeur de error dans mon state
          const actionToDispatch = setError();
          store.dispatch(actionToDispatch);
          console.log('Une erreur est survenue', error);
        });

      break;
    default:
      next(action);
      break;
  }
};

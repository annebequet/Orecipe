import { combineReducers } from 'redux';
// reducer pour l'exemple
// import counter from './counter';
import recipes from './recipes';
import user from './user';

// on a des propriétés raccourci dans notre objet, mais si on le l'écrit en version ES5, ça donnerait ça

// export default combineReducers({
//   counter: counter,
//   recipes: recipe,
// });
// avec combinereducer on vient agréger les différents reducer de notre application.
export default combineReducers({
  // counter,
  recipes,
  user,
});

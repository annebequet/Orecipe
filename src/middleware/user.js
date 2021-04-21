import axios from 'axios';
import {
  LOGIN,
  saveUser,
  CHECK_IS_LOGGED,
  LOGOUT,
} from 'src/actions/user';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();
      const { email, password } = state.user;

      axios.post('http://localhost:3001/login', {
        email,
        password,
      },
      { withCredentials: true })
        .then((response) => {
          store.dispatch(saveUser(response.data.info.username));
        })
        .catch((error) => console.log(error));
      break;
    }
    case CHECK_IS_LOGGED:
      axios.post('http://localhost:3001/isLogged', {}, { withCredentials: true })
        .then((response) => {
          console.log('CHECK_IS_LOGGED', response);
          if (response.data.logged) {
            store.dispatch(saveUser(response.data.info.username));
          }
        })
        .catch((error) => console.log(error));
      break;
    case LOGOUT:
      axios.post('http://localhost:3001/logout', {}, { withCredentials: true })
        .then(() => {
          // le reducer de user, utilise l'action LOGOUT pour un de ses cases, donc il faut passer l'action avec next(action)
          next(action);
        });
      break;
    default:
      next(action);
      break;
  }
};

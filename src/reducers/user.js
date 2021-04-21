import { CHANGE_FIELD, SAVE_USER, LOGOUT } from 'src/actions/user';

export const initialState = {
  email: 'bouclierman@herocorp.io',
  password: 'jennifer',
  isLogged: false,
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SAVE_USER:
      return {
        ...state,
        email: '',
        password: '',
        isLogged: true,
        infos: {
          pseudo: action.username,
        },
      };
    case LOGOUT:
      return {
        ...state,
        isLogged: false,
        infos: {},
      };
    default:
      return state;
  }
};

export default user;

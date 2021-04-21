import { should } from 'chai';

import userReducer, { initialState } from 'src/reducers/user';
import {
  CHANGE_FIELD,
  changeField,
  SAVE_USER,
  saveUser,
  LOGOUT,
  logout,
} from 'src/actions/user';

should();

describe.only('Reducer user', () => {
  describe('Structure', () => {
    it('should be a function', () => {
      userReducer.should.be.a('function');
    });
    it('should return an object when call without argument', () => {
      userReducer().should.be.an('object');
    });

    it('should return the initialState when called without argument', () => {
      // avec equal, on compare les références des objets ou tableaux (types complexes)
      // dans le 1e exemple on récupère, l'initialState qu'on a importé depuis notre reducer, donc la référence est exactement la même => OK pour le test
      // dans le 2e exemple, on crée un nouvel objet et on vient comparer sa référence avec celle de initialState => NOK pour le test
      userReducer().should.be.equal(initialState);
      // Ne pas utiliser equal avec une nouvelle référence d'objet
      // userReducer().should.be.equal({
      //   email: 'test@test.com',
      //   password: '123',
      //   isLogged: true,
      //   loggedMessage: 'Bienvenue',
      // });
      userReducer().should.be.eql(initialState);
    });
  });

  describe('with action', () => {
    it(CHANGE_FIELD, () => {
      let action = changeField('test', 'email');
      // {
      //   type: CHANGE_FIELD,
      //   value: 'test',
      //   name: 'email',
      // }
      userReducer({}, action).should.be.eql({ email: 'test' });

      action = changeField('123', 'password');
      userReducer({}, action).should.be.eql({ password: '123' });
      userReducer(initialState, action).should.be.eql({
        ...initialState,
        password: '123',
      });
    });
    it(SAVE_USER, () => {
      let action = saveUser('toto');
      // {
      //   type: 'SAVE_USER',
      //   username: 'toto',
      // }
      userReducer({}, action).should.be.eql({
        email: '',
        password: '',
        isLogged: true,
        infos: {
          pseudo: 'toto',
        },
      });

      let state = {
        email: 'test@test.com',
        password: '123',
        isLogged: false,
        infos: {
          pseudo: '',
        },
      };
      userReducer(state, action).should.be.eql({
        email: '',
        password: '',
        isLogged: true,
        infos: {
          pseudo: 'toto',
        },
      });
    });
    it(LOGOUT, () => {
      const action = logout();
      // {
      //   type: 'LOGOUT',
      // }
      const state = {
        email: '',
        password: '',
        isLogged: true,
        infos: {
          pseudo: 'toto',
        },
      };
      userReducer(state, action).should.be.eql({
        email: '',
        password: '',
        isLogged: false,
        infos: {},
      });
    });
  });
});

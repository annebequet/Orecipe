import { connect } from 'react-redux';

import LoginForm from 'src/components/LoginForm';
import { changeField, login, logout } from 'src/actions/user';
import { getLoggedMessage } from 'src/selectors/user';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  isLogged: state.user.isLogged,
  loggedMessage: getLoggedMessage(state.user),
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    // const action = changeField();
    // dispatch(action);

    dispatch(changeField(value, name));
  },
  handleLogin: () => {
    dispatch(login());
  },
  handleLogout: () => {
    console.log('je veux me déconnecter');

    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

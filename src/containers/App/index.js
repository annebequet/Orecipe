import { connect } from 'react-redux';
import { getRecipes } from 'src/actions/recipes';
import { checkIsLogged } from 'src/actions/user';
import App from 'src/components/App';

const mapStateToProps = (state) => ({
  loading: state.recipes.loading,
  error: state.recipes.error,
});

const mapDispatchToProps = (dispatch) => ({
  getRecipes: () => dispatch(getRecipes()),
  checkIsLogged: () => dispatch(checkIsLogged()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

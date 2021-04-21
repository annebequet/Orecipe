import { connect } from 'react-redux';

import Home from 'src/components/Home';
import { getTitleByRecipeNumber } from 'src/selectors';

const mapStateToProps = (state) => ({
  recipes: state.recipes.list,
  title: getTitleByRecipeNumber(state.recipes.length),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

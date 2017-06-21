import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

import { peopleRequested, getPersonCount } from './store';
import App from './App';

const mapStateToProps = state => ({
  peopleLoading: getPersonCount(state) === 0
});

const mapDispatchToProps = dispatch => ({
  loadPeople: () => dispatch(peopleRequested())
});

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
);

export default enhance(App);

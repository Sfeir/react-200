import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { peopleRequested, getPersonCount } from './store';
import App from './App';

const mapStateToProps = state => ({
  peopleLoading: getPersonCount(state) === 0
});

const mapDispatchToProps = dispatch => ({
  loadPeople: () => dispatch(peopleRequested())
});

const connectApp = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default withRouter(connectApp(App));

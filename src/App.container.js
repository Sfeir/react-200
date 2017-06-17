import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

import { fetchPeople } from './service/people';
import { peopleReceived } from './store';
import App from './App';

const mapStateToProps = state => ({
  peopleLoading: state.people.length === 0
});

const mapDispatchToProps = dispatch => ({
  loadPeople: () => (
    fetchPeople()
      .then(people => {
        dispatch(peopleReceived(people));
        return true;
      })
      .catch(e => {
        console.error(e);
        return false;
      })
  )
});

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
);

export default enhance(App);

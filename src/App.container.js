import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

import { fetchPeople, updatePerson } from './service/people';
import App from './App';

const mapStateToProps = state => ({
  people: state.people
});

const mapDispatchToProps = dispatch => ({
  loadPeople: () =>
    fetchPeople()
      .then(people => {
        dispatch({ type: 'PEOPLE_RECEIVED', people });
        return true;
      })
      .catch(e => {
        console.error(e);
        return false;
      }),
  savePerson: (id, partialPerson) =>
    updatePerson(id, partialPerson)
      .then(person => {
        dispatch({ type: 'PERSON_RECEIVED', person });
        return true;
      })
      .catch(e => {
        console.error(e);
        return false;
      })
});

const enhance = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhance(App);

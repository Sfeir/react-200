import { connect } from 'react-redux';
import { updatePerson } from '../../service/people';
import { personReceived } from '../../store';
import PersonForm from './PersonForm';

const mapStateToProps = (state, { id }) => ({
  person: state.people.map[id]
});

const mapDispatchToProps = (dispatch, { id }) => ({
  submit: (partialPerson) => (
    updatePerson(id, partialPerson)
      .then(person => {
        dispatch(personReceived(person));
        return true;
      })
      .catch(e => {
        console.error(e);
        return false;
      })
  )
});

const enhance = connect(mapStateToProps, mapDispatchToProps);

export default enhance(PersonForm);
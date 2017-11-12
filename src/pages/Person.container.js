import { connect } from 'react-redux';
import { updatePerson } from '../service/people';
import { personReceived } from '../store';
import Person from './Person';

const mapStateToProps = (state, props) => ({
  person: state.people.find(person => person.id === props.match.params.id)
});

const mapDispatchToProps = dispatch => ({
  savePerson: (id, partialPerson) => (
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

export default enhance(Person);
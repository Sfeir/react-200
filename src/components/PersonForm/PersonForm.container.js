import { connect } from 'react-redux';
import { personUpdated, getPersonById } from '../../store';
import PersonForm from './PersonForm';

const mapStateToProps = (state, { id }) => ({
  person: getPersonById(state, id)
});

const mapDispatchToProps = (dispatch, { id }) => ({
  submit: partialPerson => dispatch(personUpdated(id, partialPerson))
});

const enhance = connect(mapStateToProps, mapDispatchToProps);

export default enhance(PersonForm);

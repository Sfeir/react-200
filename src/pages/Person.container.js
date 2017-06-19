import { connect } from 'react-redux';
import Person from './Person';

const mapStateToProps = (state, props) => ({
  personExists: state.people.some(person => person.id === props.match.params.id),
  id: props.match.params.id
});

const enhance = connect(mapStateToProps);

export default enhance(Person);

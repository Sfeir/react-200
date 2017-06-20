import { connect } from 'react-redux';
import Person from './Person';
import { getPersonById } from '../store';

const mapStateToProps = (state, props) => ({
  personExists: getPersonById(state, props.match.params.id) !== undefined,
  id: props.match.params.id
});

const enhance = connect(mapStateToProps);

export default enhance(Person);

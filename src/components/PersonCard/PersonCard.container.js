import { connect } from 'react-redux';
import PersonCard from './PersonCard';
import { getPersonById } from '../../store';

const mapStateToProps = (state, { id }) => ({
  person: getPersonById(state, id)
});

const enhance = connect(mapStateToProps);

export default enhance(PersonCard);

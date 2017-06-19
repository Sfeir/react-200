import { connect } from 'react-redux';
import PersonCard from './PersonCard';

const mapStateToProps = (state, { id }) => ({
  person: state.people.find(p => p.id === id)
});

const enhance = connect(mapStateToProps);

export default enhance(PersonCard);

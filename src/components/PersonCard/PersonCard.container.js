import { connect } from 'react-redux';
import PersonCard from './PersonCard';

const mapStateToProps = (state, { id }) => ({
  person: state.people.map[id]
});

const enhance = connect(mapStateToProps);

export default enhance(PersonCard);

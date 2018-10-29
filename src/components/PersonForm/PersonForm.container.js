import { connect } from 'react-redux';
import { personUpdated, getPersonById } from '../../store';

const mapStateToProps = (state, { id }) => ({
  person: getPersonById(state, id)
});

const mapDispatchToProps = (dispatch, { id }) => ({
  submit: partialPerson => dispatch(personUpdated(id, partialPerson))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
);

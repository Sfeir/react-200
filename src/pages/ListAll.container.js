import { connect } from 'react-redux';
import { searchChanged, getFilteredPersonIds, getSearch } from '../store';
import ListAll from './ListAll';

const mapStateToProps = state => ({
  personIds: getFilteredPersonIds(state),
  search: getSearch(state)
});

const mapDispatchToProps = dispatch => ({
  searchChanged: event => dispatch(searchChanged(event.target.value))
});

const enhance = connect(mapStateToProps, mapDispatchToProps);

export default enhance(ListAll);

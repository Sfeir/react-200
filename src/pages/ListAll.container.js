import { connect } from 'react-redux';
import { compose, withHandlers, withProps } from 'recompose';
import { searchChanged, getAllPersonIds, getPersonById, getSearch } from '../store';
import ListAll from './ListAll';

const filterPerson = search => {
  const re = new RegExp(search, 'i');
  return person => re.test(person.firstname) || re.test(person.lastname);
};

const withFilteredIds = withProps(props => ({
  personIds: props.people.filter(filterPerson(props.search)).map(p => p.id)
}));

const withSearchChanged = withHandlers({
  searchChanged: props => event => props.setSearch(event.target.value)
})


const mapStateToProps = state => ({
  people: getAllPersonIds(state).map(id => getPersonById(state, id)),
  search: getSearch(state)
});

const mapDispatchToProps = dispatch => ({
  setSearch: (search) => dispatch(searchChanged(search))
});

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withFilteredIds,
  withSearchChanged
);

export default enhance(ListAll);

import { connect } from 'react-redux';
import { compose, withHandlers, withProps } from 'recompose';
import ListAll from './ListAll';

const filterPerson = search => {
  const re = new RegExp(search, 'i');
  return person => re.test(person.firstname) || re.test(person.lastname);
};

const withFilteredPeople = withProps(props => ({
  filteredPeople: props.people.filter(filterPerson(props.search))
}));

const withSearchChanged = withHandlers({
  searchChanged: props => event => props.setSearch(event.target.value)
})


const mapStateToProps = state => ({
  people: state.people,
  search: state.search
});

const mapDispatchToProps = dispatch => ({
  setSearch: (search) => dispatch({ type: 'SEARCH_CHANGED', search })
});

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withFilteredPeople,
  withSearchChanged
);

export default enhance(ListAll);

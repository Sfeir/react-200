import { connect } from 'react-redux';
import { compose, withHandlers, withProps } from 'recompose';
import { searchChanged } from '../store';
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
  people: state.people.all.map(id => state.people.map[id]),
  search: state.search
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

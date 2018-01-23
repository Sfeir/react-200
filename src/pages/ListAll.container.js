import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';
import { searchChanged } from '../store';
import ListAll from './ListAll';

const filterPerson = search => {
  const re = new RegExp(search, 'i');
  return person => re.test(person.firstname) || re.test(person.lastname);
};

const withFilteredPeople = withProps(props => ({
  filteredPeople: props.people.filter(filterPerson(props.search))
}));

const mapStateToProps = state => ({
  people: state.people,
  search: state.search
});

const mapDispatchToProps = dispatch => ({
  searchChanged: event => dispatch(searchChanged(event.target.value))
});

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withFilteredPeople
);

export default enhance(ListAll);

import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';
import { searchChanged } from '../store';
import ListAll from './ListAll';

const filterPerson = search => {
  const re = new RegExp(search, 'i');
  return person => re.test(person.firstname) || re.test(person.lastname);
};

const withFilteredIds = withProps(props => ({
  personIds: props.people.filter(filterPerson(props.search)).map(p => p.id)
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
  withFilteredIds
);

export default enhance(ListAll);

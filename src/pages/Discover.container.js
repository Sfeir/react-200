import { connect } from 'react-redux';
import Discover from './Discover';

const mapStateToProps = state => ({
  people: state.people
});

const enhance = connect(mapStateToProps);

export default enhance(Discover);

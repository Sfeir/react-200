import { connect } from 'react-redux';
import { discoverNext, discoverPrev } from '../store';
import Discover from './Discover';

const mapStateToProps = state => ({
  person: state.people[state.discover - 1]
});

const mapDispatchToProps = ({
  showNext: () => discoverNext(),
  showPrev: () => discoverPrev()
});

const enhance = connect(mapStateToProps, mapDispatchToProps);

export default enhance(Discover);

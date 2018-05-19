import { connect } from 'react-redux';
import { discoverNext, discoverPrev, getCurrentDiscoverId } from '../store';
import Discover from './Discover';

const mapStateToProps = state => ({
  current: getCurrentDiscoverId(state)
});

const mapDispatchToProps = {
  showNext: () => discoverNext(),
  showPrev: () => discoverPrev()
};

const enhance = connect(mapStateToProps, mapDispatchToProps);

export default enhance(Discover);

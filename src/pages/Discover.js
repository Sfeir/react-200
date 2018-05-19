import React, { Component, Fragment } from 'react';
import { pure } from 'recompose';
import PersonCard from '../components/PersonCard';
import Fab from '../components/Fab';

// state management

const play = () => ({
  playing: true
});

const pause = () => ({
  playing: false
});

// subcomponents

const Fabs = pure(({ playing, next, prev, play, pause }) => (
  <div className="control-container">
    <Fab kind="skip_previous" onClick={prev} />
    {playing ? (
      <Fab kind="pause" large onClick={pause} />
    ) : (
      <Fab kind="play_arrow" large onClick={play} />
    )}
    <Fab kind="skip_next" onClick={next} />
  </div>
));

// container

class Discover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false
    };
  }

  showNextPerson = () => {
    this.props.showNext();
  };

  showPreviousPerson = () => {
    this.props.showPrev();
  };

  play = () => {
    this.intervalId = setInterval(this.showNextPerson, 2000);
    this.showNextPerson();
    this.setState(play);
  };

  pause = () => {
    clearInterval(this.intervalId);
    this.setState(pause);
  };

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { current } = this.props;
    const { playing } = this.state;
    return (
      <Fragment>
        <div className="card-container">
          <PersonCard id={current} />
        </div>
        <Fabs
          playing={playing}
          next={this.showNextPerson}
          prev={this.showPreviousPerson}
          play={this.play}
          pause={this.pause}
        />
      </Fragment>
    );
  }
}

export default Discover;

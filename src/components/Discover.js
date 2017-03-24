import React, { Component } from 'react';
import './Discover.css';
import PEOPLE from '../data/people.json';

import Person from './Person';

// state management

const succ = (current, min, max) => (current === max) ? min : current + 1;
const pred = (current, min, max) => (current === min) ? max : current - 1;

const showNext = ({ current, people }) => ({
  current: succ(current, 0, people.length - 1)
});

const showPrev = ({ current, people }) => ({
  current: pred(current, 0, people.length - 1)
});

const play = () => ({
  playing: true
});

const pause = () => ({
  playing: false
});

// subcomponents

const Fab = ({ kind, large, onClick }) => (
  <a className={`btn-default btn-floating waves-effect waves-light ${large && 'btn-large'}`}
     onClick={onClick}>
    <i className="material-icons">{kind}</i>
  </a>
);

const Cards = ({ person }) => (
  <div className="card-container">
    <Person {...person} />
  </div>  
);

const Fabs = ({ playing, next, prev, play, pause }) => (
  <div className="fab-container">
    <Fab kind="skip_previous" onClick={prev} />
    { playing
    ? <Fab kind="pause" large onClick={pause} />
    : <Fab kind="play_arrow" large onClick={play} />
    }
    <Fab kind="skip_next" onClick={next} />
  </div>
);

// container

class Discover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: PEOPLE,
      current: 0,
      playing: false
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  showNextPerson = () => {
    this.setState(showNext);
  };
  
  showPreviousPerson = () => {
    this.setState(showPrev);
  };

  play = () => {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(this.showNextPerson, 2000);
    this.setState(showNext);
    this.setState(play);
  };

  pause = () => {
    clearInterval(this.intervalId);
    this.setState(pause);
  };
  
  render() {
    const { people, current, playing } = this.state;
    return (
      <div className="Discover">
        <Cards person={people[current]} />
        <Fabs
          playing={playing}
          next={this.showNextPerson}
          prev={this.showPreviousPerson}
          play={this.play}
          pause={this.pause}
        />
      </div>
    );
  }
}

export default Discover;
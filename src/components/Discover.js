import React, { Component } from 'react';
import './Discover.css';
import PEOPLE from '../data/people.json';

import Person from './Person';

const succ = (current, min, max) => (current === max) ? min : current + 1;
const pred = (current, min, max) => (current === min) ? max : current - 1;

const Fab = ({ kind, large, onClick }) => (
  <a className={`btn-default btn-floating waves-effect waves-light ${large && 'btn-large'}`}
     onClick={onClick}>
    <i className="material-icons">{kind}</i>
  </a>
);

class Discover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: PEOPLE,
      current: 0,
      interval: null
    }
  }

  showNextPerson = () => {
    this.setState(({current, people}) => {
      return {
        current: succ(current, 0, people.length - 1)
      }
    });
  }

  showPreviousPerson = () => {
    this.setState(({current, people}) => {
      return {
        current: pred(current, 0, people.length - 1)
      }
    });
  }

  play = () => {
    this.setState(({current, people}) => {
      return {
        current: succ(current, 0, people.length - 1),
        interval: setInterval(this.showNextPerson, 2000)
      };
    });
  }

  pause = () => {
    this.setState(({interval}) => {
      clearInterval(interval);
      return {
        interval: null
      };
    });
  }
  
  render() {
    const { people, current, interval } = this.state;
    return (
      <div className="Discover">
        <div className="card-container">
          <Person {...people[current]} />
        </div>
        <div className="fab-container">
          <Fab kind="skip_previous" onClick={this.showPreviousPerson} />
          <Fab kind={interval ? 'pause' : 'play_arrow'} large onClick={interval ? this.pause : this.play} />
          <Fab kind="skip_next" onClick={this.showNextPerson} />
        </div>
      </div>
    );
  }
}

export default Discover;
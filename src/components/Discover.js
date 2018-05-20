import React, { Component } from 'react';
import './Discover.css';

import Person from './Person';

const setNext = ({ current }, { people }) => ({
  current: (current + 1) % people.length
});

const Fab = ({ kind, large }) => (
  <a
    className={`btn-default btn-floating waves-effect waves-light ${large &&
      'btn-large'}`}
  >
    <i className="material-icons">{kind}</i>
  </a>
);

class Discover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState(setNext), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { people } = this.props;
    const { current } = this.state;
    return (
      <div className="Discover">
        <div className="card-container">
          <Person person={people[current]} />
        </div>
        <div className="fab-container">
          <Fab kind="skip_next" large />
          {/*
          bonus: add these Fabs too
          and figure out how to switch between pause and play
          hint: you can interpolate any JS expression
          <Fab kind="skip_previous" />
          <Fab kind="play_arrow" />
          <Fab kind="pause" />
        */}
        </div>
      </div>
    );
  }
}

export default Discover;

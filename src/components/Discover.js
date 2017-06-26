import React from 'react';

import Person from './Person';

const setNext = ({ current }, { people }) => ({
  current: (current + 1) % people.length
});

class Discover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(() => this.setState(setNext), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  
  render() {
    const { people } = this.props;
    const { current } = this.state;
    return (
      <Person person={people[current]} />
    );
  }
}

export default Discover;
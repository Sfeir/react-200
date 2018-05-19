import React, { Component } from 'react';
import PersonCard from '../components/PersonCard';
import PersonForm from '../components/PersonForm';

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = { editing: false };
  }

  beginEdit = () => this.setState({ editing: true });
  endEdit = () => this.setState({ editing: false });

  renderCardOrForm() {
    const { id } = this.props;
    const { editing } = this.state;
    if (editing) {
      return <PersonForm id={id} onDone={this.endEdit} />;
    } else {
      return <PersonCard id={id} onEdit={this.beginEdit} />;
    }
  }

  render() {
    const { personExists } = this.props;
    return (
      <div className="card-container">
        {personExists ? this.renderCardOrForm() : 'not found :('}
      </div>
    );
  }
}

export default Person;

import React, { Component } from 'react';
import PersonCard from '../components/PersonCard';
import PersonForm from '../components/PersonForm';

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = { editing: false };
  }

  onEdit = () => this.setState({ editing: true });
  onCancel = () => this.setState({ editing: false });

  onSave = (patch) => {
    return this.props.onSave(this.props.person.id, patch)
      .then(success => {
        if (success) { this.setState({ editing: false }) }
        return success;
      });
  }
  
  renderCardOrForm() {
    const { person } = this.props;
    const { editing } = this.state;
    if (editing) {
      return <PersonForm person={person} onSave={this.onSave} onCancel={this.onCancel} />;
    } else {
      return <PersonCard person={person} onEdit={this.onEdit} />;
    }
  }
  
  render() {
    const { person } = this.props;
    return (
      <div className="card-container">
        { person
        ? this.renderCardOrForm()
        : "not found :("
        }
      </div>
    );
  }
}

export default Person;
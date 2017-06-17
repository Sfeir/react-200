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
    // call props.onSave with appropriate parameters
    // switch back to view mode if update successful
    // handle error otherwise
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
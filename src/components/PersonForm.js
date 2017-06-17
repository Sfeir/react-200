import React, { Component } from 'react';
import Card from './Card';
import Input from './Input';

class PersonForm extends Component {
  // set state to initial info from props.person
  
  onSubmit = () => {
    // props.onSave with the edited info
  }
  
  render() {
    const { person, onCancel } = this.props;
    // you won't need person anymore here, but rather use state
    return (
      <Card actions={[
        <button type="button" className="btn btn-default" onClick={this.onSubmit} key="save">save</button>,
        <a onClick={onCancel} key="cancel">cancel</a>
      ]}>
        <Card.Title
          mainTitle={`${person.firstname} ${person.lastname}`}
        />
        <Input name="firstname" type="text" value={person.firstname} label="first name" />
        <Input name="lastname" type="text" value={person.lastname} label="last name" />
        <Input name="entity" type="text" value={person.entity} label="entity" />
        <Input name="email" type="text" value={person.email} label="email" />
        <Input name="phone" type="text" value={person.phone} label="phone" />
      </Card>
    );
  }
}

export default PersonForm;
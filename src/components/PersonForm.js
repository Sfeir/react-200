import React, { Component } from 'react';
import Card from './Card';
import Input from './Input';

class PersonForm extends Component {
  render() {
    const { person, onCancel } = this.props;
    return (
      <Card actions={[
        <button type="button" className="btn btn-default" onClick={onCancel} key="save">save</button>,
        <a onClick={onCancel} key="cancel">cancel</a>
      ]}>
        <Card.Title
          mainTitle={`${person.firstname} ${person.lastname}`}
        />
        <Input id="firstname" type="text" value={person.firstname} placeholder="first name" />
        <Input id="lastname" type="text" value={person.lastname} placeholder="last name" />
        <Input id="entity" type="text" value={person.entity} placeholder="entity" />
        <Input id="email" type="text" value={person.email} placeholder="email" />
        <Input id="phone" type="text" value={person.phone} placeholder="phone" />
      </Card>
    );
  }
}

export default PersonForm;
import React, { useState } from 'react';
import Formsy from 'formsy-react';
import { Prompt } from 'react-router-dom';
import Card from '../Card';
import { Input } from './Input';

const PersonForm = ({ person, submit, onDone }) => {
  const [saving, setSaving] = useState(false);
  const [valid, setValid] = useState(true);
  const [dirty, setDirty] = useState(false);
  const [title, setTitle] = useState(`${person.firstname} ${person.lastname}`);

  const onSubmit = model => {
    setSaving(true);
    submit(model).then(success => {
      if (success) {
        onDone();
      } else {
        setSaving(false);
        alert('could not update person :(');
      }
    });
  };

  return (
    <Formsy
      disabled={saving}
      onValidSubmit={onSubmit}
      onValid={() => setValid(true)}
      onInvalid={() => setValid(false)}
      onChange={(model, isDirty) => {
        setTitle(`${model.firstname} ${model.lastname}`);
        setDirty(isDirty);
      }}
    >
      <Card
        actions={[
          <button
            type="submit"
            className="btn btn-default"
            key="save"
            disabled={saving || !valid || !dirty}
          >
            save
          </button>,
          <button className="btn btn-link" onClick={onDone} key="cancel">
            cancel
          </button>
        ]}
      >
        <Card.Title mainTitle={title} />
        <Input
          name="firstname"
          type="text"
          label="first name"
          value={person.firstname}
          required
        />
        <Input
          name="lastname"
          type="text"
          label="last name"
          value={person.lastname}
          required
        />
        <Input
          name="entity"
          type="text"
          label="entity"
          value={person.entity}
          required
        />
        <Input
          name="email"
          type="text"
          label="email"
          value={person.email}
          required
          validations="isEmail"
          validationError="please enter a valid email address"
        />
        <Input
          name="phone"
          type="text"
          label="phone"
          value={person.phone}
          required
          validations="isFrenchPhoneNumber"
          validationError="please enter a valid 10 digit french phone number"
        />
      </Card>
      <Prompt
        when={dirty}
        message={location =>
          `Are you sure you want to go to ${location.pathname}`
        }
      />
    </Formsy>
  );
};

export default PersonForm;

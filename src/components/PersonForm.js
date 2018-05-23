import React, { Component } from 'react';
import Formsy from 'formsy-react';
import Card from './Card';
import RawInput from './Input';

// adapt Input so it can be used with formsy-react

const withFormsyProps = FormControl => {
  return ({
    getValue,
    setValue,
    isFormDisabled,
    isValid,
    getErrorMessage,
    ...props
  }) => (
    <FormControl
      {...props}
      value={getValue()}
      onChange={e => setValue(e.target.value)}
      disabled={isFormDisabled()}
      isInvalid={!isValid()}
      errorMessage={getErrorMessage()}
    />
  );
};

const suppressRefWarning = Component => {
  return props => <Component {...props} innerRef={null} />;
};

// chain higher order components (withFormsyProps -> withFormsy -> suppressRefWarning)
const Input = RawInput;

//------------------------------------------------

const personPropertyChanged = (key, val) => ({ form }) => ({
  form: { ...form, [key]: val },
  valid: !!val
});

class PersonForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        firstname: props.person.firstname,
        lastname: props.person.lastname,
        entity: props.person.entity,
        email: props.person.email,
        phone: props.person.phone
      },
      saving: false,
      valid: true
    };
  }

  onSubmit_old = () => {
    this.setState({ saving: true });
    this.props.onSave(this.state.form).then(success => {
      if (!success) {
        this.setState({ saving: false });
        alert('could not update person :(');
      }
    });
  };

  onInputChange = e =>
    this.setState(personPropertyChanged(e.target.name, e.target.value));

  // handlers to use with Form
  // use these instead of the methods above
  // --------------------------------------

  onSubmit = (model, reset) => {
    // take logic from onSave
    // you can use reset() on failure
  };

  onFormValid = () => {
    // update state to enable the save button
  };

  onFormInvalid = () => {
    // update state to disable the save button
  };

  onChange = model => {
    // update a state property so the title of the card
    // reflects the current edit - remember that the
    // person from props MUST NOT be mutated
  };

  render() {
    const { onCancel } = this.props;
    const { form, saving, valid } = this.state;

    return (
      <Formsy
        disabled={saving}
        onValidSubmit={this.onSubmit}
        onValid={this.onFormValid}
        onInvalid={this.onFormInvalid}
        onChange={this.onChange}
      >
        <Card
          actions={[
            <button
              type="button"
              className="btn btn-default"
              onClick={this.onSubmit_old}
              key="save"
              disabled={saving || !valid}
            >
              save
            </button>,
            <a onClick={onCancel} key="cancel">
              cancel
            </a>
          ]}
        >
          <Card.Title mainTitle={`${form.firstname} ${form.lastname}`} />
          <Input
            name="firstname"
            type="text"
            label="first name"
            value={form.firstname}
            onChange={this.onInputChange}
            isInvalid={!form.firstname}
            disabled={saving}
          />
          <Input
            name="lastname"
            type="text"
            label="last name"
            value={form.lastname}
            onChange={this.onInputChange}
            isInvalid={!form.lastname}
            disabled={saving}
          />
          <Input
            name="entity"
            type="text"
            label="entity"
            value={form.entity}
            onChange={this.onInputChange}
            isInvalid={!form.entity}
            disabled={saving}
          />
          <Input
            name="email"
            type="text"
            label="email"
            value={form.email}
            onChange={this.onInputChange}
            isInvalid={!form.email}
            disabled={saving}
          />
          <Input
            name="phone"
            type="text"
            label="phone"
            value={form.phone}
            onChange={this.onInputChange}
            isInvalid={!form.phone}
            disabled={saving}
          />
        </Card>
      </Formsy>
    );
  }
}

export default PersonForm;
